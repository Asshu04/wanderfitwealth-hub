import { Link } from "@tanstack/react-router";
import type { Pillar } from "@/content/site";

export function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <article className="group relative flex h-full flex-col">
      <Link
        to={pillar.to}
        aria-label={`${pillar.name} — ${pillar.title}`}
        className="flex h-full flex-col"
      >
        <div className="relative aspect-4/5 overflow-hidden bg-secondary">
          <img
            src={pillar.image}
            alt={`${pillar.name} pillar`}
            width={1000}
            height={1200}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-foreground uppercase">
            {String(index + 1).padStart(2, "0")} · {pillar.step}
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-6">
          <h3 className="text-2xl leading-tight text-foreground">{pillar.name}</h3>
          <p className="mt-3 font-display text-lg leading-snug text-primary">{pillar.title}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {pillar.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-wide text-foreground">
            {pillar.cta}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
