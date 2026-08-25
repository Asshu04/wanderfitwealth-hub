import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ActionButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Primary" className="shell flex h-18 items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-lg leading-none font-semibold tracking-tight text-foreground"
        >
          Wander<span className="text-primary">Fit</span>Wealth
          <span className="sr-only"> — home</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="link-underline text-[0.85rem] font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                activeProps={{ "aria-current": "page" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" size="sm">
            Start Your Journey
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex h-3.5 w-5 flex-col justify-between">
            <span
              className={cn(
                "h-px w-full bg-foreground transition-transform duration-300",
                open && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-foreground transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-foreground transition-transform duration-300",
                open && "-translate-y-[6.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 top-18 z-40 bg-background px-5 pt-6 pb-10 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="border-b border-border">
              <Link
                to={item.to}
                className="block py-5 font-display text-2xl text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink to="/contact" size="lg" className="mt-8 w-full">
          Start Your Journey
        </ButtonLink>
        <p className="mt-6 text-sm text-muted-foreground">{SITE.tagline}</p>
      </div>
    </header>
  );
}
