import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { BlogCard } from "@/components/cards/BlogCard";
import pillarFit from "@/assets/pillar-fit.jpg";
import { POSTS, PROGRAMS } from "@/content/site";

const TITLE = "Fit — Gym, boxing, MMA, yoga and nutrition | WanderFitWealth";
const DESCRIPTION =
  "Training frameworks for gym, boxing, MMA, yoga, strength and nutrition. Build strength, discipline and confidence that lasts.";

export const Route = createFileRoute("/fit")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wanderfitwealth-hub.lovable.app/fit" },
    ],
    links: [{ rel: "canonical", href: "https://wanderfitwealth-hub.lovable.app/fit" }],
  }),
  component: FitPage,
});

const WEEK = [
  { day: "Mon", session: "Lower strength" },
  { day: "Tue", session: "Boxing conditioning" },
  { day: "Wed", session: "Mobility + yoga" },
  { day: "Thu", session: "Upper strength" },
  { day: "Fri", session: "MMA skills" },
  { day: "Sat", session: "Long walk / hike" },
  { day: "Sun", session: "Full rest" },
];

function FitPage() {
  const fitnessPosts = POSTS.filter((p) => p.category === "Fitness").slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Pillar 02 · Build"
        title="Build strength, discipline and confidence."
        lede="Fit is the building half. Six disciplines, one honest progression, and a weekly structure you can hold for a year rather than a fortnight."
      />

      <section aria-labelledby="programs-title" className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Disciplines"
          title={<span id="programs-title">Six ways to train</span>}
          description="Pick two to start. Add the rest once the first two are automatic."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROGRAMS.map((program, i) => (
            <Reveal
              key={program.slug}
              delay={i * 80}
              className="flex h-full flex-col border-t border-border pt-6"
            >
              <p className="eyebrow">{program.focus}</p>
              <h3 className="mt-3 text-xl text-foreground">{program.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              <p className="mt-5 text-xs tracking-wide text-primary uppercase">
                {program.sessions}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="week-title" className="bg-ink text-ink-foreground">
        <div className="shell grid gap-14 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <Reveal>
            <img
              src={pillarFit}
              alt="Athlete wrapping hands before a boxing session"
              width={1008}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Sample week"
              title={<span id="week-title">A week that actually fits a real schedule</span>}
              description="Five training days, one easy day, one full rest day. Nothing here needs more than an hour."
            />
            <ul className="mt-10 border-t border-ink-foreground/15">
              {WEEK.map((entry, i) => (
                <Reveal
                  as="li"
                  key={entry.day}
                  delay={i * 50}
                  className="flex items-baseline justify-between gap-6 border-b border-ink-foreground/15 py-4"
                >
                  <span className="eyebrow text-ink-foreground/55">{entry.day}</span>
                  <span className="font-display text-lg text-ink-foreground">{entry.session}</span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-foreground/55">
              General fitness information only. Train under qualified supervision and consult a
              medical professional before starting a new programme.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="fit-stories" className="shell py-20 lg:py-28">
        <SectionHeading eyebrow="Journal" title={<span id="fit-stories">Training notes</span>} />
        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
          {fitnessPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Fit"
        title="Build Your Stronger Self"
        description="Start with one twelve-week block. Finish it before you change anything."
        primary={{ label: "Build Your Stronger Self", to: "/contact" }}
        secondary={{ label: "Grow your money too", to: "/wealth" }}
      />
    </>
  );
}
