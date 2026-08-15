import MailerLite from "@mailerlite/mailerlite-nodejs";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().trim().email().max(254),
  captchaToken: z.string().trim().min(1),
});

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY ?? "",
});

async function verifyCaptcha(token: string) {
  const secret = process.env.HCAPTCHA_SECRET;
  if (!secret) return false;

  const response = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  if (!response.ok) return false;

  const result: { success?: boolean } = await response.json();
  return result.success === true;
}

export async function POST(request: Request) {
  try {
    const body = subscribeSchema.parse(await request.json());
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!process.env.MAILERLITE_API_KEY || !groupId) {
      console.error("MailerLite environment variables are not configured.");
      return Response.json(
        { message: "El servicio no está disponible en este momento." },
        { status: 503 }
      );
    }

    if (!(await verifyCaptcha(body.captchaToken))) {
      return Response.json(
        { message: "No se ha podido verificar la solicitud." },
        { status: 400 }
      );
    }

    await mailerlite.subscribers.createOrUpdate({
      email: body.email,
      groups: [groupId],
    });

    return Response.json({ message: "Suscripción completada." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: "Introduce un correo electrónico válido." },
        { status: 400 }
      );
    }

    console.error("MailerLite subscription failed:", error);
    return Response.json(
      { message: "No ha sido posible completar la suscripción." },
      { status: 502 }
    );
  }
}