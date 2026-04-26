import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Cursor from "@/components/ui/Cursor";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://mohamedabdullah.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamed Abdullah — Performance Media Buyer | Cairo · MENA",
    template: "%s · Mohamed Abdullah",
  },
  description:
    "Performance Media Buyer based in Cairo. I scale brands across Saudi Arabia and MENA by 400%+ through strategic media restructuring, full-funnel tracking, and ruthless optimization across Meta, Google, TikTok, and Snapchat.",
  keywords: [
    "Performance Media Buyer",
    "Paid Media",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Snapchat Ads",
    "MENA",
    "Saudi Arabia",
    "Cairo",
    "Salla",
    "GA4",
    "GTM",
  ],
  authors: [{ name: "Mohamed Abdullah" }],
  creator: "Mohamed Abdullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mohamed Abdullah — Performance Media Buyer",
    title: "I turn underperforming ad accounts into revenue engines.",
    description:
      "Performance Media Buyer scaling brands across Saudi Arabia and MENA. 4.18x average ROAS · $1.15M+ purchase value generated.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Abdullah — Performance Media Buyer",
    description:
      "I turn underperforming ad accounts into revenue engines. 4.18x average ROAS across MENA brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Abdullah",
  jobTitle: "Performance Media Buyer",
  description:
    "Performance Media Buyer specialising in full-funnel paid media for e-commerce and retail brands across MENA.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  email: "mailto:mohamed.abdullah3877@gmail.com",
  telephone: "+201146555118",
  url: SITE_URL,
  knowsAbout: [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Snapchat Ads",
    "GA4",
    "Google Tag Manager",
    "Looker Studio",
    "Salla",
    "Shopify",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${serif.variable}`}
    >
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <NoiseOverlay />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
