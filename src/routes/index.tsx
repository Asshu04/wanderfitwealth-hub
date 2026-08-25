import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { PillarCard } from "@/components/cards/PillarCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { ButtonLink } from "@/components/ActionButton";
import { DESTINATIONS, PILLARS, POSTS, PROGRAMS, WEALTH_TOPICS } from "@/content/site";

const TITLE = "WanderFitWealth — Explore. Evolve. Empower.";
const DESCRIPTION =
  "Travel farther, build a stronger body and build a smarter financial future. WanderFitWealth is one lifestyle brand across three pillars: Wander, Fit and Wealth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wanderfitwealth-hub.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://wanderfitwealth-hub.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Pillars */}
      <section aria-labelledby="pillars-title" className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Discover · Build · Grow"
          title={<span id="pillars-title">One brand. Three disciplines. A complete life.</span>}
          description="Wander, Fit and Wealth aren't separate hobbies. They're the same practice applied to where you go, how you move and how you handle money."
          action={
            <ButtonLink to="/about" variant="outline">
              The philosophy
            </ButtonLink>
          }
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 110}>
              <PillarCard pillar={pillar} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured journeys */}
      <section aria-labelledby="journeys-title" className="rule-top">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            eyebrow="Wander"
            title={<span id="journeys-title">Featured journeys</span>}
            description="Start with places that reward slow travel. Each route is written for real budgets, real weekends and responsible tourism."
            action={
              <ButtonLink to="/wander" variant="outline">
                All destinations
              </ButtonLink>
            }
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {DESTINATIONS.map((destination, i) => (
              <Reveal key={destination.slug} delay={i * 90}>
                <DestinationCard destination={destination} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness */}
      <section aria-labelledby="fit-title" className="bg-ink text-ink-foreground">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            tone="dark"
            eyebrow="Fit"
            title={<span id="fit-title">Build strength, discipline and confidence</span>}
            description="Six disciplines, one progression. Train consistently rather than intensely, and the rest follows."
            action={
              <ButtonLink to="/fit" variant="onDark">
                Build Your Stronger Self
              </ButtonLink>
            }
          />
          <ul className="mt-14 grid gap-px border-t border-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((program, i) => (
              <Reveal
                as="li"
                key={program.slug}
                delay={i * 70}
                className="group border-b border-ink-foreground/15 py-8 sm:pr-10"
              >
                <p className="eyebrow text-ink-foreground/50">{program.focus}</p>
                <h3 className="mt-3 text-2xl text-ink-foreground">{program.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">
                  {program.description}
                </p>
                <p className="mt-4 text-xs tracking-wide text-sand uppercase">{program.sessions}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Wealth */}
      <section aria-labelledby="wealth-title" className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Wealth"
          title={<span id="wealth-title">Learn how to manage, grow and build wealth</span>}
          description="Educational guides written in plain language. We explain how money works — we never promise outcomes."
          action={
            <ButtonLink to="/wealth" variant="outline">
              Explore wealth
            </ButtonLink>
          }
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {WEALTH_TOPICS.map((topic, i) => (
            <Reveal
              key={topic.slug}
              delay={i * 80}
              className="flex h-full flex-col border-t border-border pt-6"
            >
              <h3 className="text-xl text-foreground">{topic.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
              <ul className="mt-5 space-y-2">
                {topic.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-foreground">
                    <span aria-hidden className="text-clay">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Educational information only. Nothing on this site is financial advice, and no returns are
          implied or guaranteed.
        </p>
      </section>

      {/* Stories */}
      <section aria-labelledby="stories-title" className="rule-top">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            eyebrow="Stories"
            title={<span id="stories-title">Latest from the journal</span>}
            action={
              <ButtonLink to="/blog" variant="outline">
                All stories
              </ButtonLink>
            }
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
            {POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Explore · Evolve · Empower"
        title="Your next journey starts with one decision"
        description="Pick a destination, start a training block, or learn one money concept properly this week."
        primary={{ label: "Start Your Journey", to: "/contact" }}
        secondary={{ label: "Read the philosophy", to: "/about" }}
      />
    </>
  );
}
