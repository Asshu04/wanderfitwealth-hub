import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { isValidEmail, subscribeToNewsletter } from "@/lib/subscribe";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setStatus("loading");
    await subscribeToNewsletter(email);
    setStatus("done");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("flex flex-col gap-3", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="h-11 w-full min-w-0 rounded-full border border-ink-foreground/25 bg-transparent px-4 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-ink-foreground focus:outline-none"
        />
        <Button type="submit" variant="onDark" size="md" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "Join"}
        </Button>
      </div>
      {error ? (
        <p id="newsletter-error" role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
      {status === "done" ? (
        <p role="status" className="text-xs text-ink-foreground/70">
          You're on the list. Welcome aboard.
        </p>
      ) : null}
    </form>
  );
}
