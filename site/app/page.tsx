import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marrow & Tide | Coastal suppers and pantry provisions in Lyttelton",
  description:
    "Chef-led coastal suppers, pantry staples, and slow hospitality in Lyttelton. Reserve a long-table evening or explore small-batch provisions from Marrow & Tide.",
};

const suppers = [
  {
    date: "18 April 2026",
    title: "Smoke, Shell, and Wild Fennel",
    description:
      "A late-autumn menu of line-caught fish, smoked brassicas, broth-poached potatoes, and a fennel seed cake to finish.",
    availability: "8 seats left",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=900&fit=crop",
    alt: "Chef plating food carefully in a professional kitchen",
  },
  {
    date: "02 May 2026",
    title: "Harbour Fire Supper",
    description:
      "Open-flame vegetables, mussels, cultured butter, warm rye, and a dessert built around poached quince and cream.",
    availability: "Selling quickly",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop",
    alt: "Plated fish dish with herbs and textured garnish",
  },
  {
    date: "16 May 2026",
    title: "Broth, Bread, and the Last of the Season",
    description:
      "A slower, deeper supper built around marrow-rich stock, oven loaves, preserved leaves, and shared platters for the table.",
    availability: "Limited release",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&h=900&fit=crop",
    alt: "Rustic meal shared at a wooden table with serving plates",
  },
];

const pantryItems = [
  {
    name: "Cultured Harbour Butter",
    category: "Cultured dairy",
    note: "Deep yellow, lightly salted, and wrapped for the week’s loaves.",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&h=800&fit=crop",
    alt: "Pantry shelves with jars, bottles, and preserved goods",
  },
  {
    name: "Kelp & Lemon Sea Salt",
    category: "Seasoning",
    note: "A bright finishing salt for fish, eggs, and roasted greens.",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=800&fit=crop",
    alt: "Bread and pantry ingredients arranged on a table",
  },
  {
    name: "Smoked Tomato Preserve",
    category: "Preserves",
    note: "Sweet-savoury and slow-cooked for toast, broth bowls, and cheese.",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&h=800&fit=crop",
    alt: "Close-up of prepared food and accompaniments on ceramic dishes",
  },
  {
    name: "Thursday Rye Loaf",
    category: "Baking",
    note: "Crackling crust, dark crumb, and best sliced thick while still warm.",
    price: "$11",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=800&fit=crop",
    alt: "Fresh baked loaves stacked on a bakery surface",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&h=700&fit=crop",
    alt: "Friends gathered around a table in warm evening light",
    classes: "sm:col-span-2 sm:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=700&h=900&fit=crop",
    alt: "Styled plated meal on a rustic tabletop",
    classes: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&h=900&fit=crop",
    alt: "Seafood dish plated with herbs and dark stoneware",
    classes: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=700&h=700&fit=crop",
    alt: "Harbour view with misty light and boats near shore",
    classes: "sm:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=700&h=700&fit=crop",
    alt: "Hands pouring a drink beside a set dinner table",
    classes: "sm:col-span-1",
  },
];

const quotes = [
  {
    quote:
      "It felt like being invited into someone’s very beautiful, very competent kitchen — except every plate landed at exactly the right moment.",
    author: "Anna, Christchurch",
  },
  {
    quote:
      "The broth alone was worth the trip over the hill. Everything else made us stay longer than we meant to.",
    author: "Matiu, Wellington",
  },
  {
    quote: "You can feel the harbour in the room without anyone needing to say it out loud.",
    author: "Elise, Lyttelton",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-32 md:pt-40">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1100&fit=crop"
          alt="Candlelit long-table supper with plates and glasses in a dim restaurant setting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative mx-auto flex w-full max-w-[1280px] px-6 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="max-w-[620px] text-background">
            <p className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              <span className="inline-block h-px w-14 bg-secondary" />Lyttelton, Aotearoa New Zealand
            </p>
            <h1 className="font-heading text-[42px] leading-none tracking-[-0.03em] md:text-6xl lg:text-[64px]">
              Coastal suppers and pantry provisions shaped by harbour weather, open flame, and the long table.
            </h1>
            <p className="prose-copy mt-6 text-lg leading-8 text-background/85">
              By night, Marrow &amp; Tide gathers guests around seasonal suppers built from local catch, smoked vegetables, broths, loaves, and wild herbs. By day, the shelves fill with small-batch staples made for the port community.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/suppers/#upcoming" className="rounded-full bg-accent px-6 py-3 text-center font-semibold text-primary transition hover:bg-[#b88f46]">
                Book a Supper
              </Link>
              <Link href="/pantry/" className="rounded-full border border-background/50 bg-background/10 px-6 py-3 text-center font-semibold text-background transition hover:bg-background/20">
                View Pantry
              </Link>
            </div>
            <Link href="/about/" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-muted transition hover:text-accent">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=1100&fit=crop"
            alt="Warm restaurant interior with diners and natural wood textures"
            className="order-1 h-[440px] w-full rounded-[28px] object-cover shadow-medium lg:order-2 lg:h-[560px]"
          />
          <div className="order-2 lg:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Part galley. Part pantry. Part ritual.</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              A space built for weather, appetite, and return visits.
            </h2>
            <p className="prose-copy mt-6 text-lg leading-8 text-text/85">
              Marrow &amp; Tide began as a winter pop-up by former expedition cook Hana Wereta and baker-turned-fermenter Luca Bennett. After years cooking on research vessels, in remote lodges, and across South Island kitchens, they settled in Lyttelton to make something slower and closer to home.
            </p>
            <p className="prose-copy mt-5 text-lg leading-8 text-text/85">
              The room shifts with the day: candlelit suppers after dark, provisions and fresh bread by morning, and a steady sense that hospitality can be both beautiful and useful.
            </p>
            <Link href="/about/" className="mt-8 inline-flex rounded-full border border-secondary/30 px-6 py-3 font-semibold text-primary transition hover:bg-muted">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Upcoming suppers</p>
              <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
                Three evenings built around the season now on the table.
              </h2>
              <p className="mt-5 text-lg leading-8 text-text/85">
                Small groups. Shared courses. Menus that respond to weather, catch, and what the growers have brought in that week.
              </p>
            </div>
            <Link href="/suppers/" className="text-sm uppercase tracking-[0.24em] text-primary transition hover:text-secondary">
              See all suppers
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {suppers.map((supper) => (
              <article key={supper.title} className="overflow-hidden rounded-[28px] bg-background shadow-soft transition hover:-translate-y-1 hover:shadow-medium">
                <div className="overflow-hidden">
                  <img src={supper.image} alt={supper.alt} className="h-72 w-full object-cover transition duration-300 hover:scale-[1.03]" />
                </div>
                <div className="space-y-4 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{supper.date}</p>
                  <h3 className="font-heading text-3xl leading-tight text-primary">{supper.title}</h3>
                  <p className="text-base leading-7 text-text/80">{supper.description}</p>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <span className="rounded-full border border-secondary/30 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      {supper.availability}
                    </span>
                    <Link href="/contact/" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-background transition hover:bg-secondary">
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">From the pantry</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              The staples people come back for between suppers.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text/85">
              Small-batch goods for the walk home, the weekend table, or a useful gift brought to someone else’s kitchen.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pantryItems.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-[28px] border border-secondary/15 bg-muted/30 shadow-soft">
                <img src={item.image} alt={item.alt} className="h-64 w-full object-cover" />
                <div className="space-y-3 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{item.category}</p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-3xl leading-tight text-primary">{item.name}</h3>
                    <span className="rounded-full bg-background px-3 py-1 text-sm font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-base leading-7 text-text/80">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-primary py-16 text-background md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Our table</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Local catch. Slow ferments. Generous plates. No theatre required.
            </h2>
            <p className="prose-copy mt-6 text-lg leading-8 text-background/80">
              We cook close to the season and host with the belief that good food should feel grounded, not overworked. The menus begin with what is coming from the harbour, the gardens, and the pantry shelves — then move toward comfort, depth, and a little surprise.
            </p>
          </div>
          <div className="space-y-5">
            {[
              ["Local catch", "Fish and shellfish guided by availability, weather, and trusted small-scale supply."],
              ["Slow ferments", "Butter, pickles, salts, and cultured elements that deepen the plate without crowding it."],
              ["Neighbourhood hospitality", "A room that feels intimate and considered, but never precious."],
            ].map(([label, text]) => (
              <div key={label} className="border-t border-secondary/35 pt-5 first:border-t-0 first:pt-0">
                <h3 className="font-heading text-3xl text-background">{label}</h3>
                <p className="mt-2 text-base leading-7 text-background/78">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1280px] px-6 md:px-8 lg:px-10">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&h=700&fit=crop"
            alt="Shared dinner scene with glasses and plates across a dark table"
            className="h-64 w-full rounded-[28px] object-cover shadow-hard lg:-mb-40 lg:ml-auto lg:w-[420px]"
          />
        </div>
      </section>

      <section className="bg-background py-16 md:pt-56 md:pb-20 lg:pt-64 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Gallery</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Harbour light, slow hands, and the details that hold the room together.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {galleryImages.map((image) => (
              <figure key={image.src} className={`group overflow-hidden rounded-[28px] ${image.classes}`}>
                <img src={image.src} alt={image.alt} className="h-full min-h-[280px] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                <figcaption className="mt-3 text-sm leading-6 text-text/65 sm:hidden">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-muted py-16 md:py-20 lg:py-28">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop"
          alt="Quiet harbour or waterside detail in soft evening light"
          className="absolute right-0 top-0 hidden h-full w-1/3 object-cover opacity-20 lg:block"
        />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Guest notes</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              What people carry away from the evening.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <blockquote className="rounded-[28px] bg-background p-8 shadow-soft lg:p-10">
              <p className="font-heading text-3xl leading-tight text-primary">“{quotes[0].quote}”</p>
              <footer className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-secondary">{quotes[0].author}</footer>
            </blockquote>
            <div className="space-y-6">
              {quotes.slice(1).map((quote) => (
                <blockquote key={quote.author} className="rounded-[28px] bg-background/90 p-7 shadow-soft">
                  <p className="font-heading text-2xl leading-tight text-primary">“{quote.quote}”</p>
                  <footer className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-secondary">{quote.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-background md:py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 text-center md:px-8">
          <div className="tide-ring rounded-[28px] px-6 py-14 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Reserve a place</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Join us for a seasonal supper or ask what’s on the pantry shelves this week.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/82">
              Bookings open monthly. Pantry updates go out first to the list.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/suppers/#upcoming" className="rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
                Book a Supper
              </Link>
              <Link href="/contact/" className="rounded-full border border-background/40 px-6 py-3 font-semibold text-background transition hover:bg-background/10">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
