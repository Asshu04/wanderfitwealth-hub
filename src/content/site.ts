/**
 * Static content layer.
 *
 * Every collection below is typed and exported from one place so it can later
 * be swapped for a CMS/database fetch without touching UI components.
 */

import destDeomali from "@/assets/dest-deomali.jpg";
import destKoraput from "@/assets/dest-koraput.jpg";
import destDaringbadi from "@/assets/dest-daringbadi.jpg";
import destSatkosia from "@/assets/dest-satkosia.jpg";
import blogYoga from "@/assets/blog-yoga.jpg";
import blogCareer from "@/assets/blog-career.jpg";
import blogNutrition from "@/assets/blog-nutrition.jpg";
import pillarWander from "@/assets/pillar-wander.jpg";
import pillarFit from "@/assets/pillar-fit.jpg";
import pillarWealth from "@/assets/pillar-wealth.jpg";

export const SITE = {
  name: "WanderFitWealth",
  tagline: "Explore. Evolve. Empower.",
  description:
    "A lifestyle brand for people building a complete life — travel farther, build a stronger body, and grow smarter financial habits.",
  email: "hello@wanderfitwealth.com",
} as const;

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Wander", to: "/wander" },
  { label: "Fit", to: "/fit" },
  { label: "Wealth", to: "/wealth" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

export type Pillar = {
  id: "wander" | "fit" | "wealth";
  name: string;
  step: string;
  title: string;
  description: string;
  image: string;
  to: string;
  cta: string;
};

export const PILLARS: Pillar[] = [
  {
    id: "wander",
    name: "Wander",
    step: "Discover",
    title: "Discover places worth remembering.",
    description:
      "Slow travel, nature routes and eco-tourism across hills, forests and coastlines — planned properly, travelled responsibly.",
    image: pillarWander,
    to: "/wander",
    cta: "Explore journeys",
  },
  {
    id: "fit",
    name: "Fit",
    step: "Build",
    title: "Build strength, discipline and confidence.",
    description:
      "Gym, boxing, MMA, yoga, strength work and nutrition — training frameworks that survive real schedules.",
    image: pillarFit,
    to: "/fit",
    cta: "Start training",
  },
  {
    id: "wealth",
    name: "Wealth",
    step: "Grow",
    title: "Learn how to manage, grow and build wealth.",
    description:
      "Educational guides on budgeting, saving, investing literacy, careers and entrepreneurship. Knowledge, never promises.",
    image: pillarWealth,
    to: "/wealth",
    cta: "Learn the basics",
  },
];

export type Destination = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  image: string;
  bestSeason: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  tags: string[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "deomali",
    name: "Deomali",
    region: "Koraput, Odisha",
    summary:
      "The highest peak in the state. Grassland summits, layered ridgelines and one of the cleanest sunrises you can drive to.",
    image: destDeomali,
    bestSeason: "Oct – Feb",
    difficulty: "Moderate",
    tags: ["Sunrise", "Camping", "Peak"],
  },
  {
    slug: "koraput",
    name: "Koraput",
    region: "Southern Odisha",
    summary:
      "Coffee terraces, tribal markets and waterfalls folded into green valleys. A base town for a week of slow exploring.",
    image: destKoraput,
    bestSeason: "Sep – Mar",
    difficulty: "Easy",
    tags: ["Culture", "Coffee", "Valleys"],
  },
  {
    slug: "daringbadi",
    name: "Daringbadi",
    region: "Kandhamal, Odisha",
    summary:
      "Pine-lined roads and morning fog at altitude. Cool weather, quiet trails and easy access for a first hill trip.",
    image: destDaringbadi,
    bestSeason: "Nov – Jan",
    difficulty: "Easy",
    tags: ["Pine forest", "Cold", "Roadtrip"],
  },
  {
    slug: "satkosia",
    name: "Satkosia",
    region: "Angul, Odisha",
    summary:
      "A river gorge cutting through dense sanctuary forest. Riverside camps, boat crossings and genuine wildlife country.",
    image: destSatkosia,
    bestSeason: "Nov – Mar",
    difficulty: "Moderate",
    tags: ["River", "Wildlife", "Gorge"],
  },
];

export type Program = {
  slug: string;
  name: string;
  focus: string;
  description: string;
  sessions: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "gym",
    name: "Gym",
    focus: "Foundation",
    description:
      "Learn the movement patterns first: hinge, squat, push, pull, carry. Progress load only when form holds.",
    sessions: "3–4 sessions / week",
  },
  {
    slug: "boxing",
    name: "Boxing",
    focus: "Conditioning",
    description:
      "Footwork, guard and combinations. Boxing builds cardio and composure faster than almost anything else.",
    sessions: "2–3 sessions / week",
  },
  {
    slug: "mma",
    name: "MMA",
    focus: "Skill",
    description:
      "Striking, clinch and ground fundamentals. Trained under supervision, with a strong warm-up and recovery habit.",
    sessions: "2 sessions / week",
  },
  {
    slug: "yoga",
    name: "Yoga",
    focus: "Mobility",
    description:
      "Breath, mobility and recovery work that keeps the rest of your training available week after week.",
    sessions: "2–5 sessions / week",
  },
  {
    slug: "strength",
    name: "Strength Training",
    focus: "Progression",
    description:
      "Structured progressive overload across a 12-week block, with deload weeks built in rather than improvised.",
    sessions: "4 sessions / week",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    focus: "Fuel",
    description:
      "Protein targets, whole-food defaults and realistic meal prep. No elimination trends, no crash phases.",
    sessions: "Daily habit",
  },
];

export type WealthTopic = {
  slug: string;
  name: string;
  description: string;
  points: string[];
};

export const WEALTH_TOPICS: WealthTopic[] = [
  {
    slug: "personal-finance",
    name: "Personal Finance",
    description:
      "Understand where your money actually goes before trying to optimise anything else.",
    points: ["Cash-flow mapping", "Emergency fund basics", "Debt awareness"],
  },
  {
    slug: "saving",
    name: "Saving",
    description:
      "Automate the boring part so saving stops depending on willpower at the end of the month.",
    points: ["Pay-yourself-first", "Goal buckets", "Spending reviews"],
  },
  {
    slug: "investing-education",
    name: "Investing Education",
    description:
      "Learn how instruments, risk and time horizons work. Educational content only — never a recommendation.",
    points: ["Risk vs. volatility", "Diversification", "Costs and taxes"],
  },
  {
    slug: "career",
    name: "Career Development",
    description:
      "Your income is your largest financial asset early on. Treat skill-building as compounding.",
    points: ["Skill stacking", "Negotiation prep", "Portfolio building"],
  },
  {
    slug: "entrepreneurship",
    name: "Entrepreneurship",
    description:
      "Validate small, keep overheads honest, and understand unit economics before scaling anything.",
    points: ["Idea validation", "Pricing basics", "Runway planning"],
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Travel",
  "Fitness",
  "Money",
  "Career",
  "Lifestyle",
] as const;

export type BlogCategory = Exclude<(typeof BLOG_CATEGORIES)[number], "All">;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readingTime: string;
  image: string;
};

export const POSTS: Post[] = [
  {
    slug: "deomali-sunrise-guide",
    title: "A practical guide to catching sunrise at Deomali",
    excerpt:
      "Permits, road conditions, what to pack for a cold summit morning, and why leaving at 3am is worth it.",
    category: "Travel",
    date: "2026-08-04",
    readingTime: "7 min read",
    image: destDeomali,
  },
  {
    slug: "first-12-weeks-strength",
    title: "Your first 12 weeks of strength training, planned honestly",
    excerpt:
      "What progress actually looks like when you stop chasing programmes and start finishing one.",
    category: "Fitness",
    date: "2026-07-28",
    readingTime: "9 min read",
    image: blogYoga,
  },
  {
    slug: "budget-that-survives",
    title: "Building a budget that survives an unpredictable month",
    excerpt:
      "A flexible three-bucket system for irregular income, written for students and early-career professionals.",
    category: "Money",
    date: "2026-07-19",
    readingTime: "6 min read",
    image: blogCareer,
  },
  {
    slug: "koraput-slow-travel",
    title: "Seven slow days in Koraput without a fixed itinerary",
    excerpt:
      "Coffee terraces, weekly tribal markets and the case for staying longer in fewer places.",
    category: "Travel",
    date: "2026-07-11",
    readingTime: "8 min read",
    image: destKoraput,
  },
  {
    slug: "protein-without-obsession",
    title: "Hitting your protein target without obsessing over food",
    excerpt:
      "Five repeatable meals, a shopping list, and how to keep it going while travelling.",
    category: "Fitness",
    date: "2026-06-30",
    readingTime: "5 min read",
    image: blogNutrition,
  },
  {
    slug: "skill-stacking-career",
    title: "Skill stacking: how early-career leverage really compounds",
    excerpt:
      "Why two adjacent skills usually beat one deep one in your first five working years.",
    category: "Career",
    date: "2026-06-22",
    readingTime: "7 min read",
    image: blogCareer,
  },
  {
    slug: "satkosia-river-camp",
    title: "Camping beside the Satkosia gorge, responsibly",
    excerpt:
      "Sanctuary rules, leave-no-trace basics and how to book riverside stays that support local guides.",
    category: "Travel",
    date: "2026-06-09",
    readingTime: "6 min read",
    image: destSatkosia,
  },
  {
    slug: "morning-systems",
    title: "The morning system behind consistent training and saving",
    excerpt:
      "One hour, three habits, and the reason discipline is a design problem rather than a motivation problem.",
    category: "Lifestyle",
    date: "2026-05-27",
    readingTime: "5 min read",
    image: destDaringbadi,
  },
];

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
