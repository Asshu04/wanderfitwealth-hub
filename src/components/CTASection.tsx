import { Reveal } from "./Reveal";
import { ButtonLink } from "./ui/Button";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
};

export function CTASection({ eyebrow, title, description, primary, secondary }: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="shell py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          {eyebrow ? <p className="eyebrow text-primary-foreground/65">{eyebrow}</p> : null}
          <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
            {description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              to={primary.to}
              size="lg"
              className="bg-sand text-ink hover:bg-primary-foreground"
            >
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink to={secondary.to} size="lg" variant="onDark">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
