"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxmyEenutyxGRVOPyVu-mNxQzY3LhFqOEGx-pVsUB3M-LiO8-p56e8qOJ4tLBBpS-mTYA/exec";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!valid) {
      setStatus("error");
      setErrorMsg("Enter a valid email address, for example name@company.com.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ formType: "newsletter", email: trimmedEmail }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not subscribe right now. Please try again.");
    }
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
          disabled={status === "loading"}
          className="h-14 shrink-0 rounded-full bg-[#bc8521] px-8 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D9573B] hover:shadow-lg disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
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
        {status === "error" && errorMsg}
      </p>
      <p className="mt-1 text-sm text-white/60">
        One email a month. Unsubscribe at any time.
      </p>
    </form>
  );
}