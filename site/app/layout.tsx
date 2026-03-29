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
const siteTitle = "Coastal Supper Club Lyttelton | Marrow & Tide";
const siteDescription =
  "Chef-led coastal supper club and pantry provisions studio in Lyttelton, Christchurch. Book seasonal long-table dining and small-batch pantry staples at Marrow & Tide.";
const socialDescription =
  "Discover chef-led coastal suppers, pantry provisions, and slow hospitality in Lyttelton, Christchurch at Marrow & Tide.";
const siteUrl = "https://marrow-and-tide.vercel.app";
const instagramUrl = "https://www.instagram.com/marrowandtide";
const bookingPath = "/contact/?enquiry=supper-booking";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "coastal supper club Lyttelton",
    "Lyttelton supper club",
    "Christchurch supper club",
    "seasonal dining Lyttelton",
    "long-table dining Christchurch",
    "pantry provisions Lyttelton",
    "private dining Lyttelton",
    "chef-led dining Christchurch",
    "Lyttelton restaurant",
    "small-batch pantry staples Christchurch",
  ],
  openGraph: {
    title: siteTitle,
    description: socialDescription,
    url: siteUrl,
    siteName,
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Marrow & Tide coastal supper club and pantry provisions social card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: socialDescription,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
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
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: siteName,
      description: siteDescription,
      url: siteUrl,
      telephone: "+64 3 741 2098",
      email: "hello@marrowandtide.co.nz",
      image: `${siteUrl}/opengraph-image.png`,
      servesCuisine: ["Coastal", "Seasonal", "New Zealand"],
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14 Norwich Quay",
        addressLocality: "Lyttelton",
        addressRegion: "Christchurch",
        postalCode: "8082",
        addressCountry: "NZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -43.6027,
        longitude: 172.7192,
      },
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
      areaServed: [
        { "@type": "City", name: "Lyttelton" },
        { "@type": "City", name: "Christchurch" },
        { "@type": "AdministrativeArea", name: "Banks Peninsula" },
      ],
      sameAs: [instagramUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en-NZ",
      publisher: {
        "@id": `${siteUrl}/#restaurant`,
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen bg-background text-text">
        <SiteHeader links={navLinks} ctaLabel="Book a Supper" ctaHref={bookingPath} />
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
