import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Marrow & Tide | Hana, Luca, and the table behind the harbour",
  description:
    "Meet the founders of Marrow & Tide and learn how expedition cooking, fermentation, and Lyttelton harbour shaped this chef-led supper club and provisions studio.",
  alternates: { canonical: "/about/" },
};

const timeline = [
  {
    label: "Before Lyttelton",
    title: "Cooking where weather called the terms",
    body: "Hana Wereta spent years cooking aboard research vessels and in remote field settings, building menus from what could be carried, caught, preserved, or coaxed into comfort after a hard day outside. That instinct for useful beauty still shapes every service.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=700&fit=crop",
    alt: "Rustic meal shared at a wooden table with serving plates",
  },
  {
    label: "South Island kitchens",
    title: "Bread, ferments, and the work between meals",
    body: "Luca Bennett came through bakery benches and kitchen prep rooms, then moved steadily toward cultured butter, pickles, and pantry work that gives a table depth long before a plate arrives. The pantry side of Marrow & Tide grows from that practice.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=700&fit=crop",
    alt: "Warm restaurant interior with diners and natural wood textures",
  },
  {
    label: "Winter pop-up",
    title: "A room people started returning to",
    body: "Their first long-table evenings were meant to carry a quiet season. Instead, they became something regular: a place where locals brought friends, visitors booked ahead, and the room developed its own pace.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=700&fit=crop",
    alt: "Rustic meal shared at a wooden table with serving plates",
  },
  {
    label: "Now",
    title: "Part neighbourhood ritual, part destination table",
    body: "Today, Marrow & Tide holds both sides together — intimate coastal suppers and a provisions counter made for daily use. It belongs to Lyttelton first, but rewards anyone willing to come for the evening.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=700&fit=crop",
    alt: "Warm restaurant interior with diners and natural wood textures",
  },
];

const suppliers = [
  "Banks Peninsula Line Catch — small-scale fishers, Banks Peninsula",
  "Tūī Ridge Growers — mixed leaves, brassicas, herbs",
  "Charteris Bay Dairy — cream and cultured dairy inputs",
  "Harbour Hill Apiary — raw honey and beeswax",
  "Portstone Ceramics — serving ware and pantry vessels",
];

const team = [
  {
    title: "Hana Wereta",
    role: "Co-founder · Chef",
    body: "Builds the supper menus, broths, and savoury backbone of the house.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700&h=800&fit=crop",
    alt: "Friends gathered around a table in warm evening light",
  },
  {
    title: "Luca Bennett",
    role: "Co-founder · Pantry & Ferments",
    body: "Leads loaves, cultured butter, preserves, and the pantry counter rhythm.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&h=800&fit=crop",
    alt: "Portrait of a man in soft natural light",
  },
  {
    title: "Neighbourhood makers",
    role: "Seasonal collaborators",
    body: "Fishers, growers, ceramicists, and friends whose work shows up in quiet but essential ways.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=800&fit=crop",
    alt: "Portrait of a woman in soft natural light",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-background pt-32 md:pt-40">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-28">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&h=1200&fit=crop"
            alt="Chef plating food carefully in a professional kitchen"
            className="order-1 h-[460px] w-full rounded-[28px] object-cover shadow-medium lg:order-2 lg:h-[640px]"
          />
          <div className="order-2 lg:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">About Marrow &amp; Tide</p>
            <h1 className="mt-4 font-heading text-[42px] leading-none tracking-[-0.03em] text-primary md:text-6xl lg:text-[64px]">
              A harbour-side table shaped by expedition kitchens, fermentation, and long winters down south.
            </h1>
            <p className="prose-copy mt-6 text-lg leading-8 text-text/85">
              What began as a winter pop-up became a permanent rhythm in Lyttelton: suppers after dark, pantry staples by day, and a way of hosting that values warmth, provenance, and return custom over novelty alone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Founders story</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              The path to the table was built in weather, prep rooms, and one winter room that kept filling up.
            </h2>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <article key={`${item.label}-${index}`} className="grid gap-6 rounded-[28px] bg-background p-6 shadow-soft lg:grid-cols-2 lg:p-8">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{item.label}</p>
                  <h3 className="mt-3 font-heading text-3xl leading-tight text-primary">{item.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-text/82">{item.body}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`h-72 w-full rounded-[24px] object-cover ${index % 2 === 1 ? "lg:order-1" : ""}`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[980px] px-6 text-center md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Our table</p>
          <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
            The best hospitality feels steady, seasonal, and deeply attentive.
          </h2>
          <p className="mx-auto mt-6 max-w-[72ch] text-lg leading-8 text-text/82">
            We value ingredients with a clear origin, food that tastes of care rather than complication, and service that knows when to step forward and when to let the table settle. Smoke, stock, cultured richness, sea air, and simple confidence run through everything we make.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              "Catch and season lead the menu, not fixed ideas.",
              "Broth, preservation, and baking build depth long before service starts.",
              "Hosting should feel intimate, calm, and genuinely useful to the people in the room.",
            ].map((quote) => (
              <div key={quote} className="rounded-[24px] border border-secondary/20 bg-muted/35 p-6 text-left">
                <p className="font-heading text-2xl leading-tight text-primary">{quote}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=900&fit=crop"
          alt="Shared dinner scene with glasses and plates across a dark table"
          className="mx-auto mt-12 h-[360px] w-[320px] rounded-[28px] object-cover shadow-medium lg:absolute lg:bottom-10 lg:right-10 lg:mt-0"
        />
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[28px] bg-primary p-8 text-background shadow-medium">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Local sourcing</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Close relationships shape the menu more than fixed recipes ever could.
            </h2>
            <div className="mt-8 space-y-4">
              {suppliers.map((supplier) => (
                <div key={supplier} className="rounded-[18px] border border-secondary/30 bg-background/10 p-4">
                  <p className="text-base leading-7 text-background/85">{supplier}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-text/82">
              Our menus and shelves respond to who is bringing in line-caught fish, what the growers have cut that week, and which makers are working with the same patience we value in our own kitchen.
            </p>
            <div className="mt-8 rounded-[28px] border border-secondary/20 bg-background p-6 shadow-soft">
              <div className="grid h-72 place-items-center rounded-[20px] bg-[linear-gradient(135deg,#23343A_0%,#2f444b_55%,#cfc4b4_55%,#f4efe6_100%)] p-6 text-background">
                <div className="w-full max-w-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-accent" />
                    <span className="font-mono text-xs uppercase tracking-[0.28em]">Banks Peninsula</span>
                  </div>
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em]">
                    <span>Lyttelton</span>
                    <span>Charteris Bay</span>
                  </div>
                  <div className="relative h-40 rounded-[18px] border border-background/20">
                    <span className="absolute left-12 top-12 h-4 w-4 rounded-full bg-accent shadow-[0_0_0_6px_rgba(201,164,92,0.2)]" />
                    <span className="absolute right-14 top-16 h-4 w-4 rounded-full bg-background shadow-[0_0_0_6px_rgba(244,239,230,0.14)]" />
                    <span className="absolute left-1/2 top-24 h-4 w-4 -translate-x-1/2 rounded-full bg-muted shadow-[0_0_0_6px_rgba(207,196,180,0.15)]" />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&h=700&fit=crop"
              alt="Coastal landscape detail suggesting local origin and seasonality"
              className="mt-6 h-56 w-full rounded-[28px] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
            The people around the table
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((person) => (
              <article key={person.title} className="overflow-hidden rounded-[28px] border border-secondary/15 bg-muted/25 shadow-soft">
                <img src={person.image} alt={person.alt} className="h-80 w-full object-cover" />
                <div className="space-y-3 p-6">
                  <h3 className="font-heading text-3xl text-primary">{person.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{person.role}</p>
                  <p className="text-base leading-7 text-text/82">{person.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-background md:py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 text-center md:px-8">
          <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
            See what’s coming up at the long table.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/suppers/#upcoming" className="rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
              Reserve a Seat
            </Link>
            <Link href="/pantry/" className="rounded-full border border-background/40 px-6 py-3 font-semibold text-background transition hover:bg-background/10">
              See the Pantry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
