import { Link } from "@tanstack/react-router";
import { formatDate, type Post } from "@/content/site";

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden bg-secondary" data-featured={featured}>
        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className={
            featured
              ? "aspect-16/10 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              : "aspect-4/3 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          }
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-foreground uppercase">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-xs tracking-wide text-muted-foreground uppercase">
          {formatDate(post.date)} · {post.readingTime}
        </p>
        <h3
          className={
            featured
              ? "mt-3 text-2xl leading-snug text-foreground sm:text-3xl"
              : "mt-3 text-xl leading-snug text-foreground"
          }
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/blog"
          hash={post.slug}
          className="mt-5 inline-flex w-fit items-center gap-2 text-[0.8rem] font-semibold tracking-wide text-foreground"
        >
          Read more
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
          <span className="sr-only">: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
