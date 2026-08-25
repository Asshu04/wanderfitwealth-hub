import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { BlogCard } from "@/components/cards/BlogCard";
import { cn } from "@/lib/utils";
import { BLOG_CATEGORIES, POSTS } from "@/content/site";

const TITLE = "Blog — Travel, fitness, money and career stories | WanderFitWealth";
const DESCRIPTION =
  "Long-form stories and practical guides across travel, fitness, money, career and lifestyle from the WanderFitWealth journal.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wanderfitwealth-hub.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://wanderfitwealth-hub.lovable.app/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "WanderFitWealth Journal",
          description: DESCRIPTION,
          url: "https://wanderfitwealth-hub.lovable.app/blog",
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [active, setActive] = useState<(typeof BLOG_CATEGORIES)[number]>("All");

  const posts = useMemo(
    () => (active === "All" ? POSTS : POSTS.filter((p) => p.category === active)),
    [active],
  );

  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Stories from the road, the gym and the spreadsheet."
        lede="Practical writing on travel, fitness, money, career and the systems that hold them together."
        meta={
          <div role="group" aria-label="Filter stories by category" className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.8rem] font-semibold tracking-wide transition-colors",
                  active === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        }
      />

      <section aria-label="Articles" className="shell py-16 lg:py-24">
        {posts.length === 0 ? (
          <p className="py-10 text-sm text-muted-foreground">
            No stories in this category yet — check back soon.
          </p>
        ) : (
          <>
            {featured ? (
              <Reveal id={featured.slug} className="mb-16 lg:mb-20">
                <BlogCard post={featured} featured />
              </Reveal>
            ) : null}
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 90}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </section>

      <CTASection
        eyebrow="Newsletter"
        title="One considered email a month"
        description="Journeys, training notes and money literacy — no noise, no guarantees, no hype."
        primary={{ label: "Get in touch", to: "/contact" }}
        secondary={{ label: "Explore destinations", to: "/wander" }}
      />
    </>
  );
}
