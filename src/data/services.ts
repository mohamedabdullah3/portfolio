import { Crosshair, Zap, TrendingUp, type LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  Icon: LucideIcon;
  description: string;
  tag: string;
}

export const services: Service[] = [
  {
    title: "Full-Funnel Paid Media",
    Icon: Crosshair,
    description:
      "End-to-end campaign management across Meta, Google, TikTok, Snapchat, and X — from cold awareness to retention. I structure accounts by buyer intent, not by channel.",
    tag: "META · GOOGLE · TIKTOK · SNAPCHAT",
  },
  {
    title: "Tracking & Attribution Infrastructure",
    Icon: Zap,
    description:
      "Server-side tracking with GTM, GA4, Meta Pixel, TikTok Events API, and CAPI. I build the data layer first because every optimization decision depends on it.",
    tag: "GA4 · GTM · CAPI · WINDSOR.AI",
  },
  {
    title: "Account Restructuring & Scaling",
    Icon: TrendingUp,
    description:
      "Inheriting a stalled account? I diagnose the funnel break-points, kill what doesn't work, and rebuild the campaign architecture so spend scales without ROAS collapse.",
    tag: "AUDIT · RESTRUCTURE · SCALE",
  },
];
