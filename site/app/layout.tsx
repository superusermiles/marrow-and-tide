import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

const siteName = "Marrow & Tide";
const siteDescription =
  "Chef-led coastal suppers, pantry staples, and slow hospitality in Lyttelton. Reserve a long-table evening or explore small-batch provisions from Marrow & Tide.";
const siteUrl = "https://marrow-and-tide.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Coastal suppers and pantry provisions in Lyttelton`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${siteName} | Coastal suppers and pantry provisions in Lyttelton`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Marrow & Tide brand card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Coastal suppers and pantry provisions in Lyttelton`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

const navLinks = [
  { label: "About", href: "/about/" },
  { label: "Suppers", href: "/suppers/" },
  { label: "Pantry", href: "/pantry/" },
  { label: "Contact", href: "/contact/" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: "+64 3 741 2098",
  email: "hello@marrowandtide.co.nz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Norwich Quay",
    addressLocality: "Lyttelton",
    postalCode: "8082",
    addressCountry: "NZ",
  },
  servesCuisine: ["Seasonal", "Coastal", "New Zealand"],
  sameAs: ["https://www.instagram.com/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "18:00",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen bg-background text-text">
        <SiteHeader links={navLinks} ctaLabel="Book a Supper" ctaHref="/suppers/#upcoming" />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
