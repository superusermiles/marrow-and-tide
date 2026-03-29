import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Marrow & Tide Pantry | Preserves, loaves, cultured butter, and provisions",
  description:
    "Browse Marrow & Tide pantry favourites including preserves, cultured dairy, breads, sea salt blends, and weekly drops from Lyttelton.",
  alternates: { canonical: "/pantry/" },
};

const categories = [
  {
    title: "Preserves",
    body: "Slow-cooked preserves, pickles, and savoury jars for toast, cheese, and cooking.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=700&fit=crop",
    alt: "Close-up of prepared food and accompaniments on ceramic dishes",
  },
  {
    title: "Cultured Dairy",
    body: "Butter and cultured elements made for bread, fish, and quiet excess.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=700&fit=crop",
    alt: "Fresh baked loaves stacked on a bakery surface",
  },
  {
    title: "Baking",
    body: "Fresh loaves and seasonal baked goods for pantry regulars and weekend visitors.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=700&fit=crop",
    alt: "Bread and pantry ingredients arranged on a table",
  },
  {
    title: "Sea Salt Blends",
    body: "Kelp, citrus, smoke, and mineral notes blended in small runs.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=700&fit=crop",
    alt: "Fresh ingredients arranged in bowls and dishes",
  },
  {
    title: "Gift Boxes",
    body: "Useful, beautiful pantry bundles for hosts, travellers, and generous people.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?w=800&h=700&fit=crop",
    alt: "Wrapped pantry items arranged as a gift set",
  },
];

const featured = [
  {
    name: "Cultured Harbour Butter",
    price: "$12",
    note: "Available Thu–Sun until sold out",
    body: "Slow-cultured, lightly salted, and wrapped in parchment for the week’s bread.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&h=800&fit=crop",
    alt: "Jarred pantry goods on a shelf",
  },
  {
    name: "Smoked Tomato Preserve",
    price: "$16",
    note: "240ml jar",
    body: "Sweet depth, savoury smoke, and enough acidity to lift roast vegetables or sharp cheese.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=700&h=800&fit=crop",
    alt: "Preserved produce in glass jars",
  },
  {
    name: "Kelp & Lemon Sea Salt",
    price: "$14",
    note: "Small-batch blend",
    body: "A finishing salt with clean citrus lift and a coastal mineral edge.",
    image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=700&h=800&fit=crop",
    alt: "Seasoning ingredients and salts on a surface",
  },
  {
    name: "Thursday Rye Loaf",
    price: "$11",
    note: "Pickup from 9am",
    body: "Dark crumb, crackling crust, and built to take too much butter.",
    image: "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?w=700&h=800&fit=crop",
    alt: "Rustic baked loaf or bread arrangement",
  },
];

const faqItems = [
  {
    question: "Do you ship pantry items?",
    answer:
      "Selected shelf-stable goods can be shipped within New Zealand. Fresh loaves, cultured dairy, and some weekly drops are pickup only.",
  },
  {
    question: "When do new items land?",
    answer: "Most updates happen Thursday or Friday, depending on prep runs and seasonal supply.",
  },
  {
    question: "Can I reserve a loaf or gift box?",
    answer: "Yes. Send an enquiry or join the mailing list for advance notice.",
  },
  {
    question: "Do you list ingredients and allergens?",
    answer:
      "Yes. Each pantry item includes a short ingredient note, and staff can advise on allergens at pickup.",
  },
];

export default function PantryPage() {
  return (
    <>
      <section className="bg-background pt-32 md:pt-40">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Pantry</p>
            <h1 className="mt-4 font-heading text-[42px] leading-none tracking-[-0.03em] text-primary md:text-6xl lg:text-[64px]">
              Small-batch staples for the walk home, the weekend table, and the friend you’re not arriving empty-handed to.
            </h1>
            <p className="prose-copy mt-6 text-lg leading-8 text-text/85">
              The pantry shelves hold the practical side of Marrow &amp; Tide: preserves, cultured butter, sea salt blends, fresh loaves, and limited weekly goods made in the same kitchen as the suppers.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#featured-products" className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-background transition hover:bg-secondary">
                Browse Favourites
              </a>
              <Link href="/contact/" className="rounded-full border border-secondary/30 px-6 py-3 text-center font-semibold text-primary transition hover:bg-muted">
                Ask About Weekly Drops
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1100&h=1200&fit=crop"
            alt="Pantry shelves with jars, bottles, and preserved goods"
            className="h-[460px] w-full rounded-[28px] object-cover shadow-medium lg:h-[620px]"
          />
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className={`relative overflow-hidden rounded-[28px] shadow-soft ${index < 3 ? "xl:col-span-2" : index === 3 ? "xl:col-span-3" : "xl:col-span-3"}`}
              >
                <img src={category.image} alt={category.alt} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                  <h2 className="font-heading text-3xl leading-tight">{category.title}</h2>
                  <p className="mt-3 text-base leading-7 text-background/82">{category.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-products" className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Featured products</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Core staples with enough personality to become part of the week’s routine.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-[28px] border border-secondary/15 bg-muted/25 shadow-soft">
                <img src={item.image} alt={item.alt} className="h-72 w-full object-cover" />
                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-3xl leading-tight text-primary">{item.name}</h3>
                    <span className="rounded-full bg-background px-3 py-1 text-sm font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{item.note}</p>
                  <p className="text-base leading-7 text-text/82">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-background md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Weekly drops</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Some things return every week. Others appear once and vanish with the weather.
            </h2>
            <p className="mt-6 text-lg leading-8 text-background/82">
              Join the list for first notice on fresh loaves, new preserves, special salts, gift bundles, and pantry runs tied to upcoming suppers.
            </p>
            <ul className="mt-8 space-y-3 text-base leading-7 text-background/82">
              <li>• Limited jars and fresh bakes</li>
              <li>• Pickup notes and collection windows</li>
              <li>• Seasonal extras tied to supper menus</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=700&fit=crop"
            alt="Coffee counter or market-style provisions scene"
            className="h-[380px] w-full rounded-[28px] object-cover shadow-hard"
          />
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Pantry FAQ</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Practical pantry details.
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[760px] px-6 md:px-8">
          <div className="rounded-[28px] border border-secondary/20 bg-background p-8 text-center shadow-medium md:p-10">
            <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Get the weekly note from the pantry.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text/82">
              Supper dates, fresh batches, and first word on what’s coming out of the kitchen.
            </p>
            <form action="https://formsubmit.co/hello@marrowandtide.co.nz" method="POST" className="mx-auto mt-8 max-w-xl space-y-4">
              <input type="hidden" name="_subject" value="Marrow &amp; Tide pantry signup" />
              <input type="hidden" name="_captcha" value="false" />
              <label htmlFor="pantry-email" className="sr-only">
                Your email address
              </label>
              <input
                id="pantry-email"
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-secondary/30 bg-muted/30 px-5 py-3 text-text placeholder:text-text/50"
              />
              <button type="submit" className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
                Join the List
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
