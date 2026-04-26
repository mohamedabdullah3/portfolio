export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  readingTime: string;
  tags: string[];
  /**
   * Article body, paragraph by paragraph. Strings prefixed with "## " render
   * as subheadings; strings prefixed with "- " render as bullet items inside a
   * shared list. Everything else is a paragraph.
   */
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "anatomy-of-a-roas-rebuild",
    title: "Anatomy of a 4x ROAS rebuild",
    excerpt:
      "How I diagnose and restructure underperforming Saudi e-commerce accounts in the first 30 days — without burning the existing audience pool.",
    date: "2026-04-12",
    readingTime: "6 min read",
    tags: ["Strategy", "Saudi Arabia", "Meta Ads"],
    content: [
      "Most accounts I inherit aren't broken at the campaign level — they're broken at the diagnosis level. Spend keeps flowing into structures that haven't been earned by the data, because nobody stopped to ask what the data is actually saying.",
      "## The first audit",
      "Before I touch a single ad set, I run the same three-question audit on every account: where is attribution leaking, where is creative fatigue compounding, and where are we paying for an audience the brand already owns?",
      "- Server-side tracking gaps almost always explain the first 20–30% of \"missing\" ROAS.",
      "- Catalog hygiene — feed quality, set logic, exclusions — explains the next 20%.",
      "- Creative concentration risk (one winning ad doing 80% of the work) explains the rest.",
      "## The rebuild",
      "Once the audit is in, the rebuild is a phased migration, not a hard reset. We keep the working spend alive while we ship the new structure in parallel, then move budget across over 7–10 days. By day 30, the account is unrecognizable on paper but the brand never felt a dip in revenue.",
      "If you want a longer breakdown of how this played out for Lord Milano specifically, ping me on WhatsApp — I keep a deck I can walk you through.",
    ],
  },
  {
    slug: "tracking-after-ios-stack",
    title: "The tracking stack I run after iOS 14.5",
    excerpt:
      "GTM server-side, Meta CAPI, TikTok Events API, GA4 — what each one actually fixes, and the order I install them in.",
    date: "2026-03-02",
    readingTime: "5 min read",
    tags: ["Tracking", "GTM", "CAPI"],
    content: [
      "Every account I take over has the same iOS-shaped hole in its data. The browser tells one story, the platform tells another, and the merchant looks at both and assumes the platform is lying.",
      "## What server-side actually buys you",
      "Server-side GTM isn't magic. It's a translator. It takes a clean event payload from the storefront, enriches it with first-party data the merchant already has, and forwards it to every ad platform from a server you own. Two outcomes: better attribution, and a single source of truth you can debug.",
      "## My install order",
      "- 1. Storefront → server GTM (web container as a thin proxy).",
      "- 2. Meta Conversions API with deduplication keys.",
      "- 3. TikTok Events API with the same deduplication contract.",
      "- 4. GA4, last — once the upstream data is trustworthy.",
      "## What I'm not doing",
      "I'm not running Looker Studio dashboards on top of broken data. The dashboard is the last thing I build, not the first.",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);
