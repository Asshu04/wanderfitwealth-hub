import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede: string;
  meta?: ReactNode;
};

export function PageHeader({ eyebrow, title, lede, meta }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-foreground">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lede}
        </p>
        {meta ? <div className="mt-10">{meta}</div> : null}
      </div>
    </section>
  );
}
