import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero.jpg";
import { PILLARS, SITE } from "@/content/site";

const TITLE = "About — The philosophy behind WanderFitWealth";
const DESCRIPTION =
  "Personal growth isn't only money or fitness. WanderFitWealth is about building a complete life through exploration, physical discipline and financial intelligence.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wanderfitwealth-hub.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://wanderfitwealth-hub.lovable.app/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Evidence over hype",
    body: "We'd rather publish one careful guide than ten motivational posts. Sources, caveats and trade-offs stay in.",
  },
  {
    title: "Consistency over intensity",
    body: "Whether it's a trail, a training block or a savings rate, the version you can repeat wins.",
  },
  {
    title: "Respect the place you're in",
    body: "Responsible travel, honest training, and money habits that don't depend on someone else losing.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A complete life is built in three directions."
        lede={SITE.description}
      />

      <section aria-labelledby="story-title" className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={heroImage}
              alt="A traveller looking out over a forest valley at dawn"
              width={1600}
              height={1104}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Our philosophy</p>
            <h2 id="story-title" className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              Growth isn't a single skill. It's a way of living.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Most advice online splits your life into silos. One account tells you how to train.
                Another tells you how to invest. A third sells you a holiday. None of them talk to
                each other, and none of them describe how a real week actually works.
              </p>
              <p>
                WanderFitWealth exists because those three things are the same practice. Exploring
                the world teaches perspective. Training your body teaches discipline. Understanding
                money teaches patience. Take any one away and the other two get harder.
              </p>
              <p>
                So we write for the whole person: the student planning a first solo trip, the
                early-career professional starting a training block, the founder learning what
                runway means. Same reader, three chapters.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="arc-title" className="bg-ink text-ink-foreground">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            tone="dark"
            eyebrow="The arc"
            title={<span id="arc-title">Discover → Build → Grow</span>}
            description="Three pillars, one story. Each stage makes the next one possible."
          />
          <ol className="mt-14 grid gap-px border-t border-ink-foreground/15 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.id}
                delay={i * 100}
                className="border-b border-ink-foreground/15 py-8 md:pr-10"
              >
                <p className="eyebrow text-sand">{pillar.step}</p>
                <h3 className="mt-3 text-2xl text-ink-foreground">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="values-title" className="shell py-20 lg:py-28">
        <SectionHeading eyebrow="What we stand for" title={<span id="values-title">Values</span>} />
        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 90} className="border-t border-border pt-6">
              <h3 className="text-xl text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Join us"
        title="Explore. Evolve. Empower."
        description="Start wherever you are. The other two pillars will pull you forward."
        primary={{ label: "Start Your Journey", to: "/contact" }}
        secondary={{ label: "Read the journal", to: "/blog" }}
      />
    </>
  );
}
