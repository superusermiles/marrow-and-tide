import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Marrow & Tide | Bookings, pantry pickups, and enquiries",
  description:
    "Get in touch with Marrow & Tide in Lyttelton for supper bookings, pantry pickups, private dining enquiries, and weekly provisions updates.",
  alternates: { canonical: "/contact/" },
};

const enquiryOptions = [
  "General question",
  "Supper booking",
  "Private dining",
  "Pantry order",
  "Press / collaboration",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-background pt-32 md:pt-40">
        <div className="mx-auto max-w-[980px] px-6 py-16 text-center md:px-8 md:py-20 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Contact</p>
          <h1 className="mt-4 font-heading text-[42px] leading-none tracking-[-0.03em] text-primary md:text-6xl lg:text-[64px]">
            Bookings, pantry pickups, private dining, and practical questions.
          </h1>
          <p className="mx-auto mt-6 max-w-[64ch] text-lg leading-8 text-text/85">
            If you need a seat, a loaf, a gift box, or a clear answer, you’re in the right place.
          </p>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div className="rounded-[28px] bg-background p-8 shadow-soft md:p-10">
            <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Marrow &amp; Tide
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">Address</p>
                <p className="mt-3 text-lg leading-8 text-text/82">14 Norwich Quay, Lyttelton 8082, New Zealand</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">Phone</p>
                <p className="mt-3 text-lg leading-8 text-text/82">
                  <a href="tel:+6437412098" className="transition hover:text-secondary">
                    +64 3 741 2098
                  </a>
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">Email</p>
                <p className="mt-3 text-lg leading-8 text-text/82">
                  <a href="mailto:hello@marrowandtide.co.nz" className="transition hover:text-secondary">
                    hello@marrowandtide.co.nz
                  </a>
                </p>
              </div>
              <div className="flex items-end">
                <Link href="/suppers/#upcoming" className="rounded-full bg-primary px-6 py-3 font-semibold text-background transition hover:bg-secondary">
                  Book a Supper
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop"
            alt="Harbour-side natural landscape detail"
            className="h-full min-h-[320px] w-full rounded-[28px] object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 md:px-8 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[28px] border border-secondary/20 bg-muted/25 p-8 shadow-soft">
            <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Opening hours
            </h2>
            <div className="mt-8 space-y-5">
              <div className="border-b border-secondary/25 pb-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">Pantry</p>
                <p className="mt-2 text-lg leading-8 text-text/82">Thu–Sun · 9am–3pm</p>
              </div>
              <div className="border-b border-secondary/25 pb-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">Suppers</p>
                <p className="mt-2 text-lg leading-8 text-text/82">Fri–Sat · from 6pm</p>
              </div>
              <p className="text-base leading-7 text-text/72">Monthly supper releases are announced first through the mailing list.</p>
            </div>
          </div>
          <div className="rounded-[28px] bg-primary p-8 text-background shadow-medium">
            <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
              Find us on Norwich Quay
            </h2>
            <p className="mt-5 text-lg leading-8 text-background/82">
              A short harbour-side walk in central Lyttelton, with nearby parking and easy pickup access during pantry hours.
            </p>
            <div className="mt-8 rounded-[24px] border border-background/15 bg-background/10 p-5">
              <div className="relative h-64 rounded-[20px] border border-background/15 bg-[linear-gradient(135deg,#31474f_0%,#23343a_50%,#18252a_100%)]">
                <div className="absolute inset-x-8 top-1/2 h-[2px] -translate-y-1/2 bg-background/20" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/45" />
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_10px_rgba(201,164,92,0.18)]" />
                <span className="absolute left-6 top-6 font-mono text-xs uppercase tracking-[0.28em] text-muted">Norwich Quay</span>
                <span className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-[0.28em] text-muted">Lyttelton Harbour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Enquiry form</p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.05] tracking-[-0.03em] text-primary md:text-[42px]">
              Tell us what you need and we’ll come back with a useful answer.
            </h2>
          </div>
          <form action="https://formsubmit.co/hello@marrowandtide.co.nz" method="POST" className="grid gap-5 rounded-[28px] bg-background p-8 shadow-medium md:grid-cols-2 md:p-10">
            <input type="hidden" name="_subject" value="Marrow &amp; Tide enquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                Full name
              </label>
              <input id="name" name="name" required className="w-full rounded-[18px] border border-secondary/25 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                Email address
              </label>
              <input id="email" name="email" type="email" required className="w-full rounded-[18px] border border-secondary/25 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className="w-full rounded-[18px] border border-secondary/25 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="type" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                Enquiry type
              </label>
              <select id="type" name="enquiryType" className="w-full rounded-[18px] border border-secondary/25 px-4 py-3">
                {enquiryOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                Preferred date
              </label>
              <input id="date" name="preferredDate" type="date" className="w-full rounded-[18px] border border-secondary/25 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="notes" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                Dietary or accessibility notes
              </label>
              <input id="notes" name="notes" className="w-full rounded-[18px] border border-secondary/25 px-4 py-3" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                What can we help with?
              </label>
              <textarea id="message" name="message" required rows={6} className="w-full rounded-[18px] border border-secondary/25 px-4 py-3" />
            </div>
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm leading-6 text-text/70">We usually reply within two business days.</p>
              <button type="submit" className="rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
                Send an Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-primary py-16 text-background md:py-20 lg:py-24">
        <div className="mx-auto max-w-[980px] px-6 text-center md:px-8">
          <h2 className="font-heading text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[42px]">
            Follow the weekly rhythm.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/82">
            Find supper releases, pantry drops, and harbour glimpses on Instagram, or join the list for the practical version.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://www.instagram.com/" className="rounded-full bg-accent px-6 py-3 font-semibold text-primary transition hover:bg-[#b88f46]">
              Instagram
            </a>
            <a href="#" className="rounded-full border border-background/40 px-6 py-3 font-semibold text-background transition hover:bg-background/10">
              Join the List
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
