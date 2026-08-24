import { Link } from "@tanstack/react-router";
import { NAV_ITEMS, SITE, SOCIALS } from "@/content/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl tracking-tight">
            Wander<span className="text-sand">Fit</span>Wealth
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            {SITE.description}
          </p>
          <p className="mt-8 font-display text-xl text-ink-foreground/90">{SITE.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-ink-foreground/55">Explore</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link to="/" className="link-underline text-sm text-ink-foreground/80">
                Home
              </Link>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline text-sm text-ink-foreground/80">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-ink-foreground/55">Newsletter</h2>
          <p className="mt-5 text-sm text-ink-foreground/70">
            One considered email a month. Journeys, training notes and money literacy.
          </p>
          <NewsletterForm className="mt-5" />

          <h2 className="eyebrow mt-10 text-ink-foreground/55">Follow</h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="link-underline text-sm text-ink-foreground/80"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/12">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-xl">
            Wealth content is educational only and is not financial advice. No returns are implied
            or guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
