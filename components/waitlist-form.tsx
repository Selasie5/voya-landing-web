"use client";

import { useWaitlist } from "@clerk/nextjs";
import { Island } from "@phosphor-icons/react";

export function WaitlistForm() {
  const { waitlist, errors, fetchStatus } = useWaitlist();
  const isSubmitting = fetchStatus === "fetching";
  const emailError = errors.fields.emailAddress?.longMessage;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const emailAddress = String(formData.get("emailAddress") ?? "").trim();

    if (!emailAddress || isSubmitting) return;

    await waitlist.join({ emailAddress });
  }

  if (waitlist.id) {
    return (
      <div
        className="mt-8 flex w-full max-w-xl items-center gap-3 text-white md:mt-10"
        role="status"
      >
        <Island
          className="text-burnt-orange shrink-0"
          size={34}
          weight="fill"
          aria-hidden="true"
        />
        <p className="font-season-sans text-sm leading-relaxed sm:text-base">
          You&apos;re on the waitlist. Check your inbox for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 w-full max-w-xl md:mt-10"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:ring-1 sm:ring-white/20 sm:backdrop-blur-md">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="emailAddress"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          disabled={isSubmitting}
          aria-invalid={emailError ? true : undefined}
          aria-describedby={emailError ? "waitlist-email-error" : undefined}
          className="font-season-sans min-h-12 min-w-0 flex-1 rounded-full bg-white/10 px-5 text-base text-white outline-none ring-1 ring-white/20 transition-colors placeholder:text-white/55 focus:bg-white/15 focus:ring-2 focus:ring-white/70 disabled:cursor-wait disabled:opacity-70 sm:bg-transparent sm:ring-0 sm:focus:bg-transparent sm:focus:ring-0"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-season-sans min-h-12 shrink-0 rounded-full bg-burnt-orange px-7 text-base font-semibold text-white transition-colors hover:bg-burnt-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>
      </div>

      {emailError && (
        <p
          id="waitlist-email-error"
          className="font-season-sans mt-2 px-2 text-sm text-orange-200"
          role="alert"
        >
          {emailError}
        </p>
      )}
    </form>
  );
}
