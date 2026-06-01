"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const AUTH_API_URL =
  process.env.NEXT_PUBLIC_AUTH_API_URL ?? "http://localhost:8000/api/login";

export default function Home() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch(AUTH_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("No se pudo iniciar sesión");
      }

      setStatusMessage("Inicio de sesión enviado correctamente.");
    } catch {
      setStatusMessage(
        "Frontend listo: conecta este login con tu servicio de Python.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div className={styles.icons}>
          <Image src="/icon-ball.svg" alt="Balón de fútbol" width={36} height={36} />
          <Image src="/icon-trophy.svg" alt="Copa mundial" width={36} height={36} />
        </div>

        <h1 className={styles.title}>Quiniela Mundial 2026</h1>
        <p className={styles.subtitle}>
          Inicia sesión para cargar tus pronósticos del torneo.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            Correo
          </label>
          <input id="email" name="email" type="email" required className={styles.input} />

          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={6}
            className={styles.input}
          />

          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Conectando..." : "Entrar"}
          </button>
        </form>

        <p className={styles.hint}>Endpoint configurable en NEXT_PUBLIC_AUTH_API_URL</p>
        {statusMessage ? <p className={styles.status}>{statusMessage}</p> : null}
      </main>
    </div>
  );
}
