"use client";

import { useState, type FormEvent } from "react";

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-navy font-medium">
        Tapadh leibh! Cuiridh sinn fios thugaibh le naidheachdan Alba FA.
        <br />
        Thank you! We will contact you with exciting Alba FA news.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="signup-email" className="sr-only">
        Email Address
      </label>
      <input
        id="signup-email"
        type="email"
        required
        placeholder="Post-d | Email Address"
        className="w-full flex-1 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/50 focus:border-navy focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
      >
        Clàraich | Sign Up
      </button>
    </form>
  );
}
