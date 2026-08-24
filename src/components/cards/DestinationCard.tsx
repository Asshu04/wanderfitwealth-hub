import type { Destination } from "@/content/site";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group flex h-full flex-col border-t border-border pt-6">
      <div className="relative aspect-16/11 overflow-hidden bg-secondary">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.region}`}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl text-foreground">{destination.name}</h3>
          <span className="text-xs tracking-wide text-muted-foreground uppercase">
            {destination.bestSeason}
          </span>
        </div>
        <p className="mt-1 text-[0.8rem] font-semibold tracking-wide text-primary uppercase">
          {destination.region}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          <li className="rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-secondary-foreground">
            {destination.difficulty}
          </li>
          {destination.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-[0.7rem] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
