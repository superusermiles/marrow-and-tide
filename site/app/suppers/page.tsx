import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Soup, Users } from "lucide-react";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Seasonal Suppers in Lyttelton | Marrow & Tide",
  description:
    "Book seasonal long-table suppers in Lyttelton, Christchurch with Marrow & Tide. Explore upcoming dining events, private suppers, and practical booking details.",
  keywords: [
    "seasonal suppers Lyttelton",
    "long-table dining Christchurch",
    "private dining Lyttelton",
    "chef-led supper club Christchurch",
    "book supper Lyttelton",
  ],
  alternates: { canonical: "/suppers/" },
  openGraph: {
    title: "Seasonal Suppers in Lyttelton | Marrow & Tide",
    description:
      "Explore upcoming Marrow & Tide suppers, seasonal menu themes, and private dining options in Lyttelton, Christchurch.",
    url: "/suppers/",
  },
  twitter: {
    title: "Seasonal Suppers in Lyttelton | Marrow & Tide",
    description:
      "Explore upcoming Marrow & Tide suppers, seasonal menu themes, and private dining options in Lyttelton, Christchurch.",
  },
};

const steps = [
  {
    label: "01",
    title: "Arrive to something warm",
    text: "A welcome pour, small bites, and time to settle before the table gathers.",
    icon: Users,
  },
  {
    label: "02",
    title: "Shared seasonal courses",
    text: "Plates move through fish, vegetables, broth, bread, and preserved elements shaped by the week.",
    icon: Flame,
  },
  {
    label: "03",
    title: "A quiet finish",
    text: "Dessert, tea, or a final broth closes the evening without rushing anyone toward the door.",
    icon: Soup,
  },
];

const events = [
  {
    date: "18 April 2026",
    title: "Smoke, Shell, and Wild Fennel",
    body: "Line-caught fish, mussels, smoked brassicas, cultured butter, herb oils, and a fennel-scented finish.",
    dietary: "Vegetarian adaptation available with notice",
    availability: "8 seats left",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop",
    alt: "Seasonal seafood course served at a Marrow & Tide supper in Lyttelton",
  },
  {
    date: "02 May 2026",
    title: "Harbour Fire Supper",
    body: "Fire-charred vegetables, broth-poached potatoes, shellfish, warm rye, and a quince dessert with cream.",
    dietary: "Gluten-light option available",
    availability: "Selling quickly",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=900&h=700&fit=crop",
    alt: "Long-table dining plate for a seasonal supper club in Christchurch",
  },
  {
    date: "16 May 2026",
    title: "Broth, Bread, and the Last of the Season",
    body: "A deeper autumn menu of marrow stock, roast alliums, preserved leaves, thick-cut loaves, and slow sweets.",
    dietary: "Please enquire for major dietary needs",
    availability: "Limited release",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&h=700&fit=crop",
    alt: "Coastal supper dish plated for a chef-led dining event in Lyttelton",
  },
];

const faqItems = [
  {
    question: "Do you cater for dietary requirements?",
    answer:
      "We can usually accommodate vegetarian and some allergy-aware requests with notice. Because the menu is small and seasonal, please include dietary details when booking.",
  },
  {
    question: "How long does a supper run?",
    answer: "Allow around two and a half hours from arrival to final course. The pacing is deliberate and never rushed.",
  },
  {
    question: "Is the menu released in advance?",
    answer:
      "Themes are shared ahead of time, but exact dishes may shift with catch and produce. That flexibility is part of the format.",
  },
  {
    question: "Is the venue accessible?",
    answer: "Yes. If you have mobility or seating needs, note them in your enquiry and we will prepare accordingly.",
  },
  {
    question: "Can I book for a group?",
    answer: "Yes. Small group bookings are welcome, and private hire is available for selected dates.",
  },
];

const bookingPath = "/contact/?enquiry=supper-booking#enquiry-form";
const privateDiningPath = "/contact/?enquiry=private-dining#enquiry-form";

export default function SuppersPage() {
  return (
    <>
      <section className="bg-background pt-32 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 pb-20 md:px-8 lg:px-10 lg:pb-28">
          <div className="relative overflow-hidden rounded-[32px] bg-primary shadow-hard">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop"
              alt="Candlelit long-table dining event at Marrow & Tide in Lyttelton"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-primary/45" />
            <div className="relative -mt-20 px-6 pb-6 md:px-10 lg:-mt-24 lg:max-w-3xl">
              <div className="rounded-[28px] bg-background p-8 shadow-medium md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Suppers</p>
                <h1 className="mt-4 font-heading text-[42px] leading-none tracking-[-0.03em] text-primary md:text-6xl lg:text-[64px]">
                  Seasonal suppers in Lyttelton built around the harbour, the table, and a room that fills slowly on purpose.
                </h1>
                <p className="mt-6 text-lg leading-8 text-text/82">
                  Each supper is small by design. Menus change with catch, weather, and pantry work already underway in the kitchen, but the structure remains steady: a warm arrival, shared courses, attentive pacing, and a finish that lingers.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={bookingPath} className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-background transition hover:bg-secondary">
                    Book a Supper Enquiry
                  </Link>
                  <Link href={privateDiningPath} className="rounded-full border border-secondary/30 px-6 py-3 text-center font-semibold text-primary transition hover:bg-muted">
                    Private Dining Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.label} className="rounded-[28px] bg-background p-8 shadow-soft">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{step.label}</p>
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-5 font-heading text-3xl leading-tight text-primary">{step.title}</h2>
                  <p className="mt-4 text-base leading-7 text-text/82">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="upcoming" className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Upcoming suppers</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Upcoming long-table suppers in Lyttelton with enough room for the season to move.
            </h2>
          </div>
          <div className="space-y-6">
            {events.map((event) => (
              <article key={event.title} className="overflow-hidden rounded-[28px] border border-secondary/15 bg-muted/25 shadow-soft lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                <img src={event.image} alt={event.alt} className="h-72 w-full object-cover lg:h-full" />
                <div className="space-y-5 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">{event.date}</span>
                    <span className="rounded-full border border-secondary/25 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      {event.availability}
                    </span>
                  </div>
                  <h3 className="font-heading text-4xl leading-tight text-primary">{event.title}</h3>
                  <p className="text-lg leading-8 text-text/82">{event.body}</p>
                  <p className="rounded-[18px] bg-background px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-secondary">
                    {event.dietary}
                  </p>
                  <Link href={bookingPath} className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-background transition hover:bg-secondary">
                    Start Booking Enquiry
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-background md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 md:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&h=900&fit=crop"
            alt="Private dining gathering at a long table in Lyttelton, Christchurch"
            className="h-[420px] w-full rounded-[28px] object-cover shadow-hard"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Private dining</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Private dining in Lyttelton for birthdays, visiting friends, or harbour-side gatherings that need their own pace.
            </h2>
            <p className="mt-6 text-lg leading-8 text-background/82">
              We host a small number of private suppers for groups who want the room, menu, and evening shaped around the occasion. Best suited to intimate celebrations, work dinners with taste, or visitors you actually want to feed well.
            </p>
            <ul className="mt-8 space-y-3 text-base leading-7 text-background/82">
              <li>• Best for 10–24 guests</li>
              <li>• Seasonal shared menu format</li>
              <li>• Dietary planning by arrangement</li>
            </ul>
            <Link href={privateDiningPath} className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
              Enquire for Private Dining
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">FAQ</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Practical details for the evening.
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 text-center md:px-8">
          <div className="rounded-[28px] bg-primary px-6 py-14 text-background shadow-medium md:px-10">
            <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Need a table for a group or a custom evening?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/82">
              Tell us what you’re planning and we’ll come back with options.
            </p>
            <Link href={privateDiningPath} className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
              Start a Private Dining Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
