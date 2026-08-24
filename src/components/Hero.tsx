import heroImage from "@/assets/hero.jpg";
import { ButtonLink } from "./ui/Button";

const STATS = [
  { value: "Discover", label: "Wander — travel & nature" },
  { value: "Build", label: "Fit — strength & discipline" },
  { value: "Grow", label: "Wealth — money literacy" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="A traveller looking out over a misty forest valley at dawn"
        width={1600}
        height={1104}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink)_0%,transparent_38%,transparent_52%,var(--color-ink)_100%)]"
      />

      <div className="shell relative flex min-h-[92svh] flex-col justify-end pt-28 pb-14 lg:min-h-[88svh] lg:pb-20">
        <p className="eyebrow text-ink-foreground/70">Explore · Evolve · Empower</p>
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] text-ink-foreground"
        >
          Explore. Evolve. <span className="italic text-sand">Empower.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
          Travel farther. Build a stronger body. Build a smarter financial future.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/wander" size="lg" variant="primary" className="bg-sand text-ink hover:bg-ink-foreground">
            Explore WanderFitWealth
          </ButtonLink>
          <ButtonLink to="/contact" size="lg" variant="onDark">
            Start Your Journey
          </ButtonLink>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden border-t border-ink-foreground/20 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="py-6 sm:pr-8">
              <dt className="font-display text-2xl text-ink-foreground">{stat.value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-ink-foreground/60 uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
