import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SITE, SOCIALS } from "@/content/site";

const TITLE = "Contact — Talk to WanderFitWealth";
const DESCRIPTION =
  "Questions about a destination, a training block or a money concept? Send the WanderFitWealth team a message.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wanderfitwealth-hub.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://wanderfitwealth-hub.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start your journey."
        lede="Tell us where you're headed — a destination, a training goal or a money question. We read everything."
      />

      <section className="shell grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:py-24">
        <Reveal>
          <h2 className="sr-only">Contact form</h2>
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-10">
          <div className="border-t border-border pt-6">
            <h2 className="text-xl text-foreground">Email</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="link-underline mt-3 inline-block text-sm text-muted-foreground"
            >
              {SITE.email}
            </a>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="text-xl text-foreground">Follow</h2>
            <ul className="mt-3 space-y-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    rel="noreferrer"
                    className="link-underline text-sm text-muted-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="text-xl text-foreground">Response time</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We reply within two working days. For financial topics we can share educational
              resources only — never personal financial advice.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
