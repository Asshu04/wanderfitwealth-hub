import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: ReactNode;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className={cn("eyebrow", tone === "dark" && "text-ink-foreground/60")}>{eyebrow}</p>
        ) : null}
        <Tag
          className={cn(
            "mt-4 text-3xl leading-[1.08] sm:text-4xl lg:text-5xl",
            tone === "dark" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          {title}
        </Tag>
        {description ? (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed",
              tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
