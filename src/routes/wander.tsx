import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { DESTINATIONS, POSTS } from "@/content/site";

const TITLE = "Wander — Travel, nature and eco-tourism | WanderFitWealth";
const DESCRIPTION =
  "Slow travel routes, hill stations, river gorges and responsible eco-tourism. Discover places worth remembering with WanderFitWealth.";

export const Route = createFileRoute("/wander")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wanderfitwealth-hub.lovable.app/wander" },
    ],
    links: [{ rel: "canonical", href: "https://wanderfitwealth-hub.lovable.app/wander" }],
  }),
  component: WanderPage,
});

const PRINCIPLES = [
  {
    title: "Travel slower",
    body: "Fewer places, longer stays. You learn a region by returning to the same tea shop three mornings in a row.",
  },
  {
    title: "Spend locally",
    body: "Local guides, homestays and community-run camps keep tourism money where the landscape actually is.",
  },
  {
    title: "Leave no trace",
    body: "Carry your waste out, stay on marked trails, and respect sanctuary rules — especially in wildlife country.",
  },
];

function WanderPage() {
  const travelPosts = POSTS.filter((p) => p.category === "Travel").slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Pillar 01 · Discover"
        title="Discover places worth remembering."
        lede="Wander is the discovery half of the brand: nature, adventure and eco-tourism planned with the same discipline you'd bring to training or money."
      />

      <section aria-labelledby="destinations-title" className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Featured journeys"
          title={<span id="destinations-title">Destinations to start with</span>}
          description="A starter set of routes across eastern India's hills, forests and river gorges. This collection is structured so it can be managed from a CMS later."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {DESTINATIONS.map((destination, i) => (
            <Reveal key={destination.slug} delay={i * 90}>
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="principles-title" className="bg-secondary">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            eyebrow="How we travel"
            title={<span id="principles-title">Three rules for every trip</span>}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
            {PRINCIPLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border-t border-border pt-6">
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="travel-stories" className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Journal"
          title={<span id="travel-stories">Travel stories</span>}
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
          {travelPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Wander"
        title="Plan a journey that's actually worth the leave days"
        description="Tell us where you want to go and we'll point you at the route, the season and the local guides."
        primary={{ label: "Start Your Journey", to: "/contact" }}
        secondary={{ label: "Train for the trail", to: "/fit" }}
      />
    </>
  );
}
