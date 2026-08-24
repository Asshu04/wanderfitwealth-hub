import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { BlogCard } from "@/components/cards/BlogCard";
import { POSTS, WEALTH_TOPICS } from "@/content/site";

const TITLE = "Wealth — Financial literacy, career and entrepreneurship | WanderFitWealth";
const DESCRIPTION =
  "Educational guides on budgeting, saving, investing literacy, career growth and entrepreneurship. Information, never promises.";

export const Route = createFileRoute("/wealth")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/wealth" },
    ],
    links: [{ rel: "canonical", href: "/wealth" }],
  }),
  component: WealthPage,
});

const LADDER = [
  { step: "01", title: "Know your numbers", body: "Track one full month of income and spending before changing anything." },
  { step: "02", title: "Build a buffer", body: "A small emergency fund removes the need for expensive borrowing." },
  { step: "03", title: "Automate saving", body: "Move money on payday, not on whatever's left at month end." },
  { step: "04", title: "Learn before investing", body: "Understand risk, time horizon and costs before any instrument." },
  { step: "05", title: "Grow your income", body: "Skills and career progress remain the biggest early-career lever." },
];

function WealthPage() {
  const moneyPosts = POSTS.filter((p) => p.category === "Money" || p.category === "Career").slice(
    0,
    3,
  );

  return (
    <>
      <PageHeader
        eyebrow="Pillar 03 · Grow"
        title="Learn how to manage, grow and build wealth."
        lede="Wealth is the growth half. Plain-language financial literacy for students and early-career professionals — educational content only, with no promises attached."
      />

      <section aria-labelledby="topics-title" className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Topics"
          title={<span id="topics-title">Where to start</span>}
          description="Five areas that cover almost every early-career money question."
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
      </section>

      <section aria-labelledby="ladder-title" className="bg-secondary">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            eyebrow="Sequence"
            title={<span id="ladder-title">The order that keeps people out of trouble</span>}
            description="Most money mistakes are sequencing mistakes rather than knowledge gaps."
          />
          <ol className="mt-14 border-t border-border">
            {LADDER.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 70}
                className="grid gap-3 border-b border-border py-7 sm:grid-cols-[5rem_1fr_2fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-display text-2xl text-clay">{item.step}</span>
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="wealth-stories" className="shell py-20 lg:py-28">
        <SectionHeading eyebrow="Journal" title={<span id="wealth-stories">Money & career</span>} />
        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
          {moneyPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        <aside className="mt-16 border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg text-foreground">Important note on financial content</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Everything published under Wealth is general educational information. It is not
            financial, investment, tax or legal advice, and it does not imply or guarantee any
            return. Investments carry risk, including loss of capital. Speak to a licensed
            professional before making financial decisions.
          </p>
        </aside>
      </section>

      <CTASection
        eyebrow="Wealth"
        title="Learn one money concept properly this month"
        description="Join the newsletter or send a question — we'll answer with sources, not slogans."
        primary={{ label: "Ask a question", to: "/contact" }}
        secondary={{ label: "Read the journal", to: "/blog" }}
      />
    </>
  );
}
