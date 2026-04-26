export interface CaseStudy {
  slug: string;
  brand: string;
  industry: string;
  challenge: string;
  approach: string;
  result: string;
  metric: { value: string; label: string };
  channels: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "lord-milano",
    brand: "Lord Milano",
    industry: "Saudi Perfume Brand · Salla",
    challenge:
      "Underperforming sales and scaling difficulties across MENA despite an established product range and growing organic interest.",
    approach:
      "Restructured the entire media strategy, rebuilt the tracking infrastructure, and phased content from storytelling, into conversion offers, and finally into upselling and retention sequences.",
    result:
      "Sales grew over 400% within the first scaling phase, with sustained ROAS through repeated content cycles.",
    metric: { value: "400%+", label: "sales growth" },
    channels: ["Meta", "Google", "Snapchat", "TikTok", "X"],
  },
  {
    slug: "outlet-pharmacy",
    brand: "Outlet Pharmacy",
    industry: "Saudi Pharmacy Chain",
    challenge:
      "Strong demand in Riyadh but soft performance elsewhere, with uniform messaging deployed across geographically distinct audiences.",
    approach:
      "Built geo-targeted offers based on regional best-sellers, restructured the product catalog into audience-specific sets, and introduced a free-shipping AOV trigger at 250 SAR.",
    result:
      "Total sales lifted 250%+ across regions, with a measurable shift in basket size from the AOV trigger.",
    metric: { value: "250%+", label: "total sales growth" },
    channels: ["Meta", "Google", "Snapchat", "TikTok", "X"],
  },
  {
    slug: "hayat-alandalus-mall",
    brand: "Hayat Mall & Alandalus Mall",
    industry: "Saudi Shopping Malls",
    challenge:
      "Declining footfall and waning customer interest, with brand perception that no longer reflected the malls' modern offerings.",
    approach:
      "Led a full rebrand and repositioning supported by upgrade-focused campaigns and an event-driven activation strategy across paid channels.",
    result:
      "Rebuilt foot traffic and refreshed brand perception, repositioning both malls as destination experiences.",
    metric: { value: "Repositioned", label: "brand & foot traffic" },
    channels: ["Meta", "Google", "Snapchat", "TikTok", "X"],
  },
];
