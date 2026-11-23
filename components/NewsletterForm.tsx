"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }

    // TODO: send `email` to your mailing list (Mailchimp, Brevo, Resend, etc.)
    // via a route handler such as app/api/subscribe/route.ts.
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Enter your work email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
          className="h-14 w-full rounded-full bg-white/10 px-6 text-base text-white outline-none ring-1 ring-white/25 transition placeholder:text-white/60 focus:bg-white/15 focus:ring-2 focus:ring-[#F0A58F]"
        />
        <button
          type="submit"
          className="h-14 shrink-0 rounded-full bg-[#bc8521] px-8 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D9573B] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Subscribe
        </button>
      </div>

      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-6 text-sm ${
          status === "error" ? "text-[#FFB4A2]" : "text-white/80"
        }`}
      >
        {status === "success" &&
          "Thank you. You’re on the list for market updates and price alerts."}
        {status === "error" && "Enter a valid email address, for example name@company.com."}
      </p>
      <p className="mt-1 text-sm text-white/60">
        One email a month. Unsubscribe at any time.
      </p>
    </form>
  );
}