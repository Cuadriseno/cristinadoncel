import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
  captchaToken: z.string().trim().min(1),
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
    const body = contactSchema.parse(await request.json());
    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !destination) {
      console.error("Resend environment variables are not configured.");
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

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Cristina Doncel <hola@cristinadoncel.com>",
      to: destination,
      replyTo: body.email,
      subject: `Nuevo mensaje de ${body.name}`,
      text: `Nombre: ${body.name}\nCorreo: ${body.email}\n\n${body.message}`,
    });

    if (error) {
      console.error("Resend contact email failed:", error);
      return Response.json(
        { message: "No ha sido posible enviar el mensaje." },
        { status: 502 }
      );
    }

    return Response.json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: "Revisa los datos introducidos." },
        { status: 400 }
      );
    }

    console.error("Contact form request failed:", error);
    return Response.json(
      { message: "No ha sido posible enviar el mensaje." },
      { status: 502 }
    );
  }
}