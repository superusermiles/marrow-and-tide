import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

const instagramUrl = "https://www.instagram.com/marrowandtide";
const mailingListUrl = "/contact/?enquiry=mailing-list#enquiry-form";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 text-center lg:grid-cols-3 lg:text-left">
          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Visit / Write / Call</p>
            <LogoMark className="mx-auto h-10 w-auto text-background lg:mx-0" />
            <div className="space-y-2 text-base text-background/85">
              <p>14 Norwich Quay</p>
              <p>Lyttelton 8082, New Zealand</p>
              <p>
                <a href="tel:+6437412098" className="transition hover:text-accent">
                  +64 3 741 2098
                </a>
              </p>
              <p>
                <a href="mailto:hello@marrowandtide.co.nz" className="transition hover:text-accent">
                  hello@marrowandtide.co.nz
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-5 border-y border-secondary/35 py-10 lg:border-x lg:border-y-0 lg:px-10 lg:py-0">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Hours</p>
            <div className="space-y-4 text-base text-background/85">
              <p>
                <span className="mr-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">Pantry</span>
                Thu–Sun · 9am–3pm
              </p>
              <p>
                <span className="mr-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">Suppers</span>
                Fri–Sat · from 6pm
              </p>
              <p className="mx-auto max-w-sm lg:mx-0">Bookings open monthly. Pantry drops vary with the season.</p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Weekly note</p>
            <p className="text-base text-background/85">
              A short note from the harbour — supper dates, fresh loaves, cultured butter, and whatever has come in with the week.
            </p>
            <div className="space-y-3">
              <Link
                href={mailingListUrl}
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 font-semibold text-primary transition hover:bg-[#b88f46]"
              >
                Join the List
              </Link>
              <p className="text-sm leading-6 text-background/65">Use the contact page list signup flow for supper releases and pantry updates.</p>
            </div>
            <div className="flex justify-center gap-5 text-sm uppercase tracking-[0.2em] lg:justify-start">
              <Link href={instagramUrl} className="transition hover:text-accent">
                Instagram
              </Link>
              <a href="mailto:hello@marrowandtide.co.nz" className="transition hover:text-accent">
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary/35 pt-6 text-center text-sm text-background/70 lg:text-left">
          © Marrow &amp; Tide. Coastal suppers. Pantry staples. Slow hospitality.
        </div>
      </div>
    </footer>
  );
}
