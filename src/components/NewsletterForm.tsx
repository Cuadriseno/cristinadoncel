"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Introduce un correo electrónico válido.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setStatus("success");
      setMessage("Gracias por estar aquí.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("No ha sido posible suscribirte. Inténtalo de nuevo.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <Input label="Tu correo electrónico" type="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === "loading" || status === "success"} placeholder="hola@ejemplo.com" error={status === "error" ? message : undefined} />
      <Button type="submit" variant="primary" size="lg" disabled={status === "loading" || status === "success"} className="shrink-0">
        {status === "loading" ? "Enviando" : status === "success" ? "Enviado" : "Suscribirme"}
      </Button>
      {status === "success" && <p className="text-xs text-brand-primary sm:absolute sm:mt-20">{message}</p>}
    </form>
  );
}