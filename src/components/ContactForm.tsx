"use client";

import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type FormStatus = "idle" | "loading" | "success" | "error";

const isEnabled = process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === "true";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  if (!isEnabled) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, captchaToken }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setStatus("success");
      setFeedback("Gracias por escribirme. Te responderé lo antes posible.");
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaToken("");
    } catch {
      setStatus("error");
      setFeedback("No ha sido posible enviar el mensaje. Inténtalo de nuevo.");
    }
  }

  const isSubmitting = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Input
        label="Tu nombre"
        name="name"
        autoComplete="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        disabled={isSubmitting}
        required
      />
      <Input
        label="Tu correo electrónico"
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={isSubmitting}
        required
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className="text-[11px] font-[600] tracking-[2px] uppercase text-brand-text">
          Tu mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={isSubmitting}
          required
          rows={6}
          className="w-full resize-y rounded-2xl border border-brand-primary bg-white px-4 py-3 text-[13px] text-brand-text outline-none transition-colors placeholder:text-[#bbb] focus:border-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary disabled:pointer-events-none disabled:opacity-50"
        />
      </div>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
        onVerify={setCaptchaToken}
        onExpire={() => setCaptchaToken("")}
      />
      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting || !captchaToken}>
        {isSubmitting ? "Enviando" : "Enviar mensaje"}
      </Button>
      <p aria-live="polite" className={status === "idle" ? "sr-only" : status === "success" ? "text-sm text-brand-primary" : "text-sm text-red-600"}>
        {feedback}
      </p>
    </form>
  );
}