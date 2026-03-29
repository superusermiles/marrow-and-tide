# Marrow & Tide — Development Handoff

## Tech Setup
### Stack
- Next.js 14+ App Router
- TypeScript
- Tailwind CSS
- Vercel deployment

### Google Fonts
Use either `next/font/google` or a stylesheet import.

#### Recommended `next/font` setup
```ts
import { Cormorant_Garamond, Manrope, IBM_Plex_Mono } from 'next/font/google'

export const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading'
})

export const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
})

export const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono'
})
```

#### Google Fonts URL fallback
```txt
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;500;600&display=swap
```

### Tailwind Tokens
Add to `tailwind.config.ts`:
```ts
extend: {
  colors: {
    primary: '#23343A',
    secondary: '#8A5A3C',
    accent: '#C9A45C',
    background: '#F4EFE6',
    text: '#162126',
    muted: '#CFC4B4',
  },
  fontFamily: {
    heading: ['var(--font-heading)', 'serif'],
    body: ['var(--font-body)', 'sans-serif'],
    mono: ['var(--font-mono)', 'monospace'],
  },
  borderRadius: {
    sm: '4px',
    md: '10px',
    lg: '18px',
    xl: '28px',
    pill: '999px',
  },
  boxShadow: {
    soft: '0 6px 18px rgba(22, 33, 38, 0.08)',
    medium: '0 12px 36px rgba(22, 33, 38, 0.12)',
    hard: '0 20px 56px rgba(9, 15, 18, 0.22)',
  },
  maxWidth: {
    prose: '72ch',
    content: '1280px',
  },
  spacing: {
    18: '4.5rem',
    22: '5.5rem',
    28: '7rem',
  },
}
```

### Additional Packages
- `clsx` for class composition
- `lucide-react` for simple line icons
- `framer-motion` only if subtle reveal animations are easier to implement there; keep restrained
- No carousel dependency required unless gallery is turned into swipe cards on mobile

### Global Implementation Notes
- Body background: `#F4EFE6`
- Default text: `#162126`
- Build a sticky header that changes from transparent to solid after scroll
- Add LocalBusiness JSON-LD in the root layout or home page
- Include OG tags per page and shared OG image asset
- Add `robots.txt`, `sitemap.xml`, canonical URLs, and favicon SVG

---

## Component Breakdown

### 1. `SiteHeader`
**Purpose:** Main navigation with transparent-to-solid scroll behavior.

**Props:**
- `links: { label: string; href: string }[]`
- `ctaLabel: string`
- `ctaHref: string`

**Layout:**
- Desktop: left nav cluster, centered logo, right-side contact link + booking CTA
- Mobile: centered logo, right-side menu toggle, sheet menu with stacked links and CTA

**Responsive:**
- Desktop nav visible from `lg`
- Mobile sheet under `lg`

### 2. `LogoMark`
**Purpose:** Render full logo or emblem-only variant.

**Props:**
- `variant: 'full' | 'icon'`
- `className?: string`

**Layout:**
- Inline SVG using provided logo code

**Responsive:**
- Full wordmark in header desktop and footer
- Icon version for favicon, compact mobile use if needed

### 3. `HeroSection`
**Purpose:** Full-bleed page hero with background image or split format.

**Props:**
- `eyebrow: string`
- `title: string`
- `body: string`
- `primaryCta: { label: string; href: string }`
- `secondaryCta?: { label: string; href: string }`
- `backgroundImage?: string`
- `align?: 'left' | 'center'`
- `overlay?: boolean`

**Layout:**
- Home uses full-bleed background image with overlay
- Interior pages can use split or wide image with overlapping text card

**Responsive:**
- CTAs stack on small screens
- Reduce vertical padding and font sizes on mobile

### 4. `SectionIntro`
**Purpose:** Reusable section heading block.

**Props:**
- `eyebrow?: string`
- `title: string`
- `body?: string`
- `align?: 'left' | 'center'`
- `action?: { label: string; href: string }`

**Layout:**
- Heading stack with optional right-side action on desktop

### 5. `SplitStorySection`
**Purpose:** Two-column story/image section.

**Props:**
- `eyebrow?: string`
- `title: string`
- `body: string[]`
- `image: { src: string; alt: string }`
- `reverse?: boolean`
- `cta?: { label: string; href: string }`

**Layout:**
- 6/6 or 5/7 split with image edge-softened by radius

**Responsive:**
- Stack image above text on mobile

### 6. `SupperCard`
**Purpose:** Display upcoming supper event.

**Props:**
- `date: string`
- `title: string`
- `description: string`
- `availability: string`
- `image: { src: string; alt: string }`
- `href: string`

**Layout:**
- Home: compact editorial card
- Suppers page: can expand into horizontal layout variant

**Responsive:**
- Grid on desktop, stack on mobile

### 7. `ProvisionCard`
**Purpose:** Showcase pantry products.

**Props:**
- `name: string`
- `category: string`
- `note: string`
- `price: string`
- `image: { src: string; alt: string }`

**Layout:**
- Image top, content bottom, mono utility line for pickup/limited batch

### 8. `ValueBand`
**Purpose:** Dark philosophy section with short values.

**Props:**
- `title: string`
- `body: string`
- `values: { label: string; text: string }[]`
- `image?: { src: string; alt: string }`

**Layout:**
- Two columns on desktop, stacked on mobile

### 9. `ImageGalleryStrip`
**Purpose:** Mixed-ratio image collage.

**Props:**
- `images: { src: string; alt: string; ratio: 'landscape' | 'portrait' | 'square' }[]`

**Layout:**
- CSS grid with defined spans for editorial rhythm

**Responsive:**
- Simplify to 2-column grid on tablet and single column or swipe row on mobile

### 10. `QuoteCard`
**Purpose:** Guest testimonial display.

**Props:**
- `quote: string`
- `author: string`
- `context?: string`

### 11. `TimelineBlock`
**Purpose:** About page milestone story blocks.

**Props:**
- `yearLabel: string`
- `title: string`
- `body: string`
- `image?: { src: string; alt: string }`

### 12. `SupplierListMap`
**Purpose:** Stylised sourcing block.

**Props:**
- `suppliers: { name: string; type: string; location: string }[]`

**Layout:**
- Optional simple illustrated map plus supplier list

### 13. `EventFormatSteps`
**Purpose:** Explain the supper format.

**Props:**
- `steps: { label: string; title: string; text: string }[]`

### 14. `FAQAccordion`
**Purpose:** Expand/collapse practical information.

**Props:**
- `items: { question: string; answer: string }[]`

### 15. `CategoryTileGrid`
**Purpose:** Pantry category overview.

**Props:**
- `items: { title: string; image: string; alt: string; href?: string }[]`

### 16. `ContactDetailsCard`
**Purpose:** Address, email, phone, and booking links.

**Props:**
- `address: string[]`
- `phone: string`
- `email: string`
- `bookingHref: string`

### 17. `HoursBlock`
**Purpose:** Opening hours and schedule notes.

**Props:**
- `items: { label: string; value: string }[]`

### 18. `MapPlaceholder`
**Purpose:** Styled static map block until live map embed is chosen.

**Props:**
- `title: string`
- `address: string`
- `note?: string`

### 19. `EnquiryForm`
**Purpose:** Contact and booking-adjacent enquiry form.

**Props:**
- `submitLabel: string`
- `enquiryTypes: string[]`

**Fields:**
- Full name
- Email address
- Phone
- Enquiry type
- Preferred date
- Message
- Dietary or accessibility notes

### 20. `SiteFooter`
**Purpose:** Three-column footer with contact, hours, provisions/newsletter note, and social links.

**Props:**
- `socials: { label: string; href: string }[]`

---

## Page Routes

### `/`
**Title:** Marrow & Tide | Coastal suppers and pantry provisions in Lyttelton

**Meta description:** Chef-led coastal suppers, pantry staples, and slow hospitality in Lyttelton. Reserve a long-table evening or explore small-batch provisions from Marrow & Tide.

**Sections:**
1. Hero
2. Intro split story
3. Upcoming suppers
4. Pantry highlights
5. Philosophy band
6. Gallery strip
7. Guest notes
8. Final CTA

### `/about`
**Title:** About Marrow & Tide | Hana, Luca, and the table behind the harbour

**Meta description:** Meet the founders of Marrow & Tide and learn how expedition cooking, fermentation, and Lyttelton harbour shaped this chef-led supper club and provisions studio.

**Sections:**
1. Page intro
2. Founders story timeline
3. Our Table philosophy
4. Sourcing list/map
5. Team and partners
6. CTA

### `/suppers`
**Title:** Suppers at Marrow & Tide | Seasonal long-table dining in Lyttelton

**Meta description:** Explore upcoming Marrow & Tide suppers, seasonal menu themes, private dining options, and practical details for booking a seat in Lyttelton.

**Sections:**
1. Intro hero
2. Format explainer
3. Upcoming suppers list
4. Private gatherings
5. FAQ
6. CTA

### `/pantry`
**Title:** Marrow & Tide Pantry | Preserves, loaves, cultured butter, and provisions

**Meta description:** Browse Marrow & Tide pantry favourites including preserves, cultured dairy, breads, sea salt blends, and weekly drops from Lyttelton.

**Sections:**
1. Intro hero
2. Category grid
3. Featured products
4. Weekly drop note
5. FAQ
6. Mailing list CTA

### `/contact`
**Title:** Contact Marrow & Tide | Bookings, pantry pickups, and enquiries

**Meta description:** Get in touch with Marrow & Tide in Lyttelton for supper bookings, pantry pickups, private dining enquiries, and weekly provisions updates.

**Sections:**
1. Intro
2. Contact details
3. Hours
4. Map placeholder
5. Form
6. Social/newsletter prompt

---

## Content
Provide this copy exactly unless implementation constraints require minor line breaks.

## Shared Navigation
- Left links: `About`, `Suppers`, `Pantry`
- Right links: `Contact`
- Primary CTA: `Book a Supper`

## Shared Footer
**Column 1 — Contact**
- Eyebrow: `Visit / Write / Call`
- Heading: `Marrow & Tide`
- Address line 1: `14 Norwich Quay`
- Address line 2: `Lyttelton 8082, New Zealand`
- Phone: `+64 3 741 2098`
- Email: `hello@marrowandtide.co.nz`

**Column 2 — Hours**
- Eyebrow: `Hours`
- Pantry: `Thu–Sun · 9am–3pm`
- Suppers: `Fri–Sat · from 6pm`
- Note: `Bookings open monthly. Pantry drops vary with the season.`

**Column 3 — From the pantry**
- Eyebrow: `Weekly note`
- Body: `A short note from the harbour — supper dates, fresh loaves, cultured butter, and whatever has come in with the week.`
- Field placeholder: `Email address`
- Button: `Join the List`
- Social links: `Instagram`, `Email`

**Footer fine print**
- `© Marrow & Tide. Coastal suppers. Pantry staples. Slow hospitality.`

---

## Home Page Copy
### Hero
- Eyebrow: `Lyttelton, Aotearoa New Zealand`
- Heading: `Coastal suppers and pantry provisions shaped by harbour weather, open flame, and the long table.`
- Body: `By night, Marrow & Tide gathers guests around seasonal suppers built from local catch, smoked vegetables, broths, loaves, and wild herbs. By day, the shelves fill with small-batch staples made for the port community.`
- Primary CTA: `Book a Supper`
- Secondary CTA: `View Pantry`
- Tertiary link: `Read Our Story`

### Intro Split
- Eyebrow: `Part galley. Part pantry. Part ritual.`
- Heading: `A space built for weather, appetite, and return visits.`
- Paragraph 1: `Marrow & Tide began as a winter pop-up by former expedition cook Hana Wereta and baker-turned-fermenter Luca Bennett. After years cooking on research vessels, in remote lodges, and across South Island kitchens, they settled in Lyttelton to make something slower and closer to home.`
- Paragraph 2: `The room shifts with the day: candlelit suppers after dark, provisions and fresh bread by morning, and a steady sense that hospitality can be both beautiful and useful.`
- CTA: `Read Our Story`

### Upcoming Suppers Section Intro
- Eyebrow: `Upcoming suppers`
- Heading: `Three evenings built around the season now on the table.`
- Body: `Small groups. Shared courses. Menus that respond to weather, catch, and what the growers have brought in that week.`
- Action link: `See all suppers`

### Supper Cards
**Card 1**
- Date: `18 April 2026`
- Title: `Smoke, Shell, and Wild Fennel`
- Description: `A late-autumn menu of line-caught fish, smoked brassicas, broth-poached potatoes, and a fennel seed cake to finish.`
- Availability: `8 seats left`
- CTA: `Book Now`

**Card 2**
- Date: `02 May 2026`
- Title: `Harbour Fire Supper`
- Description: `Open-flame vegetables, mussels, cultured butter, warm rye, and a dessert built around poached quince and cream.`
- Availability: `Selling quickly`
- CTA: `Book Now`

**Card 3**
- Date: `16 May 2026`
- Title: `Broth, Bread, and the Last of the Season`
- Description: `A slower, deeper supper built around marrow-rich stock, oven loaves, preserved leaves, and shared platters for the table.`
- Availability: `Limited release`
- CTA: `Book Now`

### Pantry Highlights Intro
- Eyebrow: `From the pantry`
- Heading: `The staples people come back for between suppers.`
- Body: `Small-batch goods for the walk home, the weekend table, or a useful gift brought to someone else’s kitchen.`

### Pantry Highlight Cards
**1**
- Name: `Cultured Harbour Butter`
- Category: `Cultured dairy`
- Note: `Deep yellow, lightly salted, and wrapped for the week’s loaves.`
- Price: `$12`

**2**
- Name: `Kelp & Lemon Sea Salt`
- Category: `Seasoning`
- Note: `A bright finishing salt for fish, eggs, and roasted greens.`
- Price: `$14`

**3**
- Name: `Smoked Tomato Preserve`
- Category: `Preserves`
- Note: `Sweet-savoury and slow-cooked for toast, broth bowls, and cheese.`
- Price: `$16`

**4**
- Name: `Thursday Rye Loaf`
- Category: `Baking`
- Note: `Crackling crust, dark crumb, and best sliced thick while still warm.`
- Price: `$11`

### Philosophy Band
- Eyebrow: `Our table`
- Heading: `Local catch. Slow ferments. Generous plates. No theatre required.`
- Body: `We cook close to the season and host with the belief that good food should feel grounded, not overworked. The menus begin with what is coming from the harbour, the gardens, and the pantry shelves — then move toward comfort, depth, and a little surprise.`
- Value 1 label: `Local catch`
- Value 1 text: `Fish and shellfish guided by availability, weather, and trusted small-scale supply.`
- Value 2 label: `Slow ferments`
- Value 2 text: `Butter, pickles, salts, and cultured elements that deepen the plate without crowding it.`
- Value 3 label: `Neighbourhood hospitality`
- Value 3 text: `A room that feels intimate and considered, but never precious.`

### Guest Notes
- Eyebrow: `Guest notes`
- Heading: `What people carry away from the evening.`
- Quote 1: `It felt like being invited into someone’s very beautiful, very competent kitchen — except every plate landed at exactly the right moment.`
- Author 1: `Anna, Christchurch`
- Quote 2: `The broth alone was worth the trip over the hill. Everything else made us stay longer than we meant to.`
- Author 2: `Matiu, Wellington`
- Quote 3: `You can feel the harbour in the room without anyone needing to say it out loud.`
- Author 3: `Elise, Lyttelton`

### Final CTA
- Eyebrow: `Reserve a place`
- Heading: `Join us for a seasonal supper or ask what’s on the pantry shelves this week.`
- Body: `Bookings open monthly. Pantry updates go out first to the list.`
- Primary CTA: `Book a Supper`
- Secondary CTA: `Get in Touch`

---

## About Page Copy
### Intro
- Eyebrow: `About Marrow & Tide`
- Heading: `A harbour-side table shaped by expedition kitchens, fermentation, and long winters down south.`
- Body: `What began as a winter pop-up became a permanent rhythm in Lyttelton: suppers after dark, pantry staples by day, and a way of hosting that values warmth, provenance, and return custom over novelty alone.`

### Timeline
**Block 1**
- Year label: `Before Lyttelton`
- Title: `Cooking where weather called the terms`
- Body: `Hana Wereta spent years cooking aboard research vessels and in remote field settings, building menus from what could be carried, caught, preserved, or coaxed into comfort after a hard day outside. That instinct for useful beauty still shapes every service.`

**Block 2**
- Year label: `South Island kitchens`
- Title: `Bread, ferments, and the work between meals`
- Body: `Luca Bennett came through bakery benches and kitchen prep rooms, then moved steadily toward cultured butter, pickles, and pantry work that gives a table depth long before a plate arrives. The pantry side of Marrow & Tide grows from that practice.`

**Block 3**
- Year label: `Winter pop-up`
- Title: `A room people started returning to`
- Body: `Their first long-table evenings were meant to carry a quiet season. Instead, they became something regular: a place where locals brought friends, visitors booked ahead, and the room developed its own pace.`

**Block 4**
- Year label: `Now`
- Title: `Part neighbourhood ritual, part destination table`
- Body: `Today, Marrow & Tide holds both sides together — intimate coastal suppers and a provisions counter made for daily use. It belongs to Lyttelton first, but rewards anyone willing to come for the evening.`

### Our Table Philosophy
- Eyebrow: `Our table`
- Heading: `The best hospitality feels steady, seasonal, and deeply attentive.`
- Body: `We value ingredients with a clear origin, food that tastes of care rather than complication, and service that knows when to step forward and when to let the table settle. Smoke, stock, cultured richness, sea air, and simple confidence run through everything we make.`

### Sourcing Section
- Eyebrow: `Local sourcing`
- Heading: `Close relationships shape the menu more than fixed recipes ever could.`
- Body: `Our menus and shelves respond to who is bringing in line-caught fish, what the growers have cut that week, and which makers are working with the same patience we value in our own kitchen.`

**Supplier list**
- `Banks Peninsula Line Catch — small-scale fishers, Banks Peninsula`
- `Tūī Ridge Growers — mixed leaves, brassicas, herbs`
- `Charteris Bay Dairy — cream and cultured dairy inputs`
- `Harbour Hill Apiary — raw honey and beeswax`
- `Portstone Ceramics — serving ware and pantry vessels`

### Team & Partners
- Heading: `The people around the table`
- Card 1 title: `Hana Wereta`
- Card 1 role: `Co-founder · Chef`
- Card 1 body: `Builds the supper menus, broths, and savoury backbone of the house.`
- Card 2 title: `Luca Bennett`
- Card 2 role: `Co-founder · Pantry & Ferments`
- Card 2 body: `Leads loaves, cultured butter, preserves, and the pantry counter rhythm.`
- Card 3 title: `Neighbourhood makers`
- Card 3 role: `Seasonal collaborators`
- Card 3 body: `Fishers, growers, ceramicists, and friends whose work shows up in quiet but essential ways.`

### CTA
- Heading: `See what’s coming up at the long table.`
- Primary CTA: `Reserve a Seat`
- Secondary CTA: `See the Pantry`

---

## Suppers Page Copy
### Intro Hero
- Eyebrow: `Suppers`
- Heading: `Long-table evenings built around the season, the harbour, and a room that fills slowly on purpose.`
- Body: `Each supper is small by design. Menus change with catch, weather, and pantry work already underway in the kitchen, but the structure remains steady: a warm arrival, shared courses, attentive pacing, and a finish that lingers.`
- Primary CTA: `Book Now`
- Secondary CTA: `Enquire for Private Dining`

### Format Explainer
**Step 1**
- Label: `01`
- Title: `Arrive to something warm`
- Text: `A welcome pour, small bites, and time to settle before the table gathers.`

**Step 2**
- Label: `02`
- Title: `Shared seasonal courses`
- Text: `Plates move through fish, vegetables, broth, bread, and preserved elements shaped by the week.`

**Step 3**
- Label: `03`
- Title: `A quiet finish`
- Text: `Dessert, tea, or a final broth closes the evening without rushing anyone toward the door.`

### Upcoming Suppers
**Event 1**
- Date: `18 April 2026`
- Title: `Smoke, Shell, and Wild Fennel`
- Body: `Line-caught fish, mussels, smoked brassicas, cultured butter, herb oils, and a fennel-scented finish.`
- Dietary note: `Vegetarian adaptation available with notice`
- Availability: `8 seats left`
- CTA: `Book Now`

**Event 2**
- Date: `02 May 2026`
- Title: `Harbour Fire Supper`
- Body: `Fire-charred vegetables, broth-poached potatoes, shellfish, warm rye, and a quince dessert with cream.`
- Dietary note: `Gluten-light option available`
- Availability: `Selling quickly`
- CTA: `Book Now`

**Event 3**
- Date: `16 May 2026`
- Title: `Broth, Bread, and the Last of the Season`
- Body: `A deeper autumn menu of marrow stock, roast alliums, preserved leaves, thick-cut loaves, and slow sweets.`
- Dietary note: `Please enquire for major dietary needs`
- Availability: `Limited release`
- CTA: `Book Now`

### Private Gatherings
- Eyebrow: `Private dining`
- Heading: `For birthdays, visiting friends, or harbour-side gatherings that need their own pace.`
- Body: `We host a small number of private suppers for groups who want the room, menu, and evening shaped around the occasion. Best suited to intimate celebrations, work dinners with taste, or visitors you actually want to feed well.`
- Bullet 1: `Best for 10–24 guests`
- Bullet 2: `Seasonal shared menu format`
- Bullet 3: `Dietary planning by arrangement`
- CTA: `Enquire for Private Dining`

### FAQ
- Q: `Do you cater for dietary requirements?`
- A: `We can usually accommodate vegetarian and some allergy-aware requests with notice. Because the menu is small and seasonal, please include dietary details when booking.`
- Q: `How long does a supper run?`
- A: `Allow around two and a half hours from arrival to final course. The pacing is deliberate and never rushed.`
- Q: `Is the menu released in advance?`
- A: `Themes are shared ahead of time, but exact dishes may shift with catch and produce. That flexibility is part of the format.`
- Q: `Is the venue accessible?`
- A: `Yes. If you have mobility or seating needs, note them in your enquiry and we will prepare accordingly.`
- Q: `Can I book for a group?`
- A: `Yes. Small group bookings are welcome, and private hire is available for selected dates.`

### CTA
- Heading: `Need a table for a group or a custom evening?`
- Body: `Tell us what you’re planning and we’ll come back with options.`
- Button: `Contact Marrow & Tide`

---

## Pantry Page Copy
### Intro Hero
- Eyebrow: `Pantry`
- Heading: `Small-batch staples for the walk home, the weekend table, and the friend you’re not arriving empty-handed to.`
- Body: `The pantry shelves hold the practical side of Marrow & Tide: preserves, cultured butter, sea salt blends, fresh loaves, and limited weekly goods made in the same kitchen as the suppers.`
- Primary CTA: `Browse Favourites`
- Secondary CTA: `Ask About Weekly Drops`

### Category Grid
- Preserves: `Slow-cooked preserves, pickles, and savoury jars for toast, cheese, and cooking.`
- Cultured Dairy: `Butter and cultured elements made for bread, fish, and quiet excess.`
- Baking: `Fresh loaves and seasonal baked goods for pantry regulars and weekend visitors.`
- Sea Salt Blends: `Kelp, citrus, smoke, and mineral notes blended in small runs.`
- Gift Boxes: `Useful, beautiful pantry bundles for hosts, travellers, and generous people.`

### Featured Products
**1**
- Name: `Cultured Harbour Butter`
- Price: `$12`
- Note: `Available Thu–Sun until sold out`
- Body: `Slow-cultured, lightly salted, and wrapped in parchment for the week’s bread.`

**2**
- Name: `Smoked Tomato Preserve`
- Price: `$16`
- Note: `240ml jar`
- Body: `Sweet depth, savoury smoke, and enough acidity to lift roast vegetables or sharp cheese.`

**3**
- Name: `Kelp & Lemon Sea Salt`
- Price: `$14`
- Note: `Small-batch blend`
- Body: `A finishing salt with clean citrus lift and a coastal mineral edge.`

**4**
- Name: `Thursday Rye Loaf`
- Price: `$11`
- Note: `Pickup from 9am`
- Body: `Dark crumb, crackling crust, and built to take too much butter.`

### Weekly Drop Note
- Eyebrow: `Weekly drops`
- Heading: `Some things return every week. Others appear once and vanish with the weather.`
- Body: `Join the list for first notice on fresh loaves, new preserves, special salts, gift bundles, and pantry runs tied to upcoming suppers.`
- Bullet 1: `Limited jars and fresh bakes`
- Bullet 2: `Pickup notes and collection windows`
- Bullet 3: `Seasonal extras tied to supper menus`

### Pantry FAQ
- Q: `Do you ship pantry items?`
- A: `Selected shelf-stable goods can be shipped within New Zealand. Fresh loaves, cultured dairy, and some weekly drops are pickup only.`
- Q: `When do new items land?`
- A: `Most updates happen Thursday or Friday, depending on prep runs and seasonal supply.`
- Q: `Can I reserve a loaf or gift box?`
- A: `Yes. Send an enquiry or join the mailing list for advance notice.`
- Q: `Do you list ingredients and allergens?`
- A: `Yes. Each pantry item includes a short ingredient note, and staff can advise on allergens at pickup.`

### Mailing List CTA
- Heading: `Get the weekly note from the pantry.`
- Body: `Supper dates, fresh batches, and first word on what’s coming out of the kitchen.`
- Field placeholder: `Your email address`
- Button: `Join the List`

---

## Contact Page Copy
### Intro
- Eyebrow: `Contact`
- Heading: `Bookings, pantry pickups, private dining, and practical questions.`
- Body: `If you need a seat, a loaf, a gift box, or a clear answer, you’re in the right place.`

### Contact Details
- Heading: `Marrow & Tide`
- Address label: `Address`
- Address: `14 Norwich Quay, Lyttelton 8082, New Zealand`
- Phone label: `Phone`
- Phone: `+64 3 741 2098`
- Email label: `Email`
- Email: `hello@marrowandtide.co.nz`
- Booking CTA: `Book a Supper`

### Hours
- Heading: `Opening hours`
- Pantry label: `Pantry`
- Pantry value: `Thu–Sun · 9am–3pm`
- Suppers label: `Suppers`
- Suppers value: `Fri–Sat · from 6pm`
- Note: `Monthly supper releases are announced first through the mailing list.`

### Map Placeholder
- Heading: `Find us on Norwich Quay`
- Body: `A short harbour-side walk in central Lyttelton, with nearby parking and easy pickup access during pantry hours.`

### Enquiry Form Labels
- Name: `Full name`
- Email: `Email address`
- Phone: `Phone`
- Enquiry type: `Enquiry type`
- Enquiry options: `General question`, `Supper booking`, `Private dining`, `Pantry order`, `Press / collaboration`
- Preferred date: `Preferred date`
- Message: `What can we help with?`
- Dietary/access field: `Dietary or accessibility notes`
- Submit: `Send an Enquiry`
- Helper text: `We usually reply within two business days.`

### Social Prompt
- Heading: `Follow the weekly rhythm.`
- Body: `Find supper releases, pantry drops, and harbour glimpses on Instagram, or join the list for the practical version.`
- CTA 1: `Instagram`
- CTA 2: `Join the List`

---

## Image References

| Page | Placement | URL | Dimensions | Alt text |
|---|---|---|---|---|
| Home | Hero | https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1100&fit=crop | 1600×1100 | Candlelit long-table supper with plates and glasses in a dim restaurant setting |
| Home | Intro split | https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=1100&fit=crop | 900×1100 | Warm restaurant interior with diners and natural wood textures |
| Home | Supper card 1 | https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=900&fit=crop | 800×900 | Chef plating food carefully in a professional kitchen |
| Home | Supper card 2 | https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop | 800×900 | Plated fish dish with herbs and textured garnish |
| Home | Supper card 3 | https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&h=900&fit=crop | 800×900 | Rustic meal shared at a wooden table with serving plates |
| Home | Pantry card 1 | https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&h=800&fit=crop | 700×800 | Pantry shelves with jars, bottles, and preserved goods |
| Home | Pantry card 2 | https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=800&fit=crop | 700×800 | Bread and pantry ingredients arranged on a table |
| Home | Pantry card 3 | https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&h=800&fit=crop | 700×800 | Close-up of prepared food and accompaniments on ceramic dishes |
| Home | Pantry card 4 | https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=800&fit=crop | 700×800 | Fresh baked loaves stacked on a bakery surface |
| Home | Philosophy inset | https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&h=700&fit=crop | 900×700 | Shared dinner scene with glasses and plates across a dark table |
| Home | Gallery 1 | https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&h=700&fit=crop | 900×700 | Friends gathered around a table in warm evening light |
| Home | Gallery 2 | https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=700&h=900&fit=crop | 700×900 | Styled plated meal on a rustic tabletop |
| Home | Gallery 3 | https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&h=900&fit=crop | 700×900 | Seafood dish plated with herbs and dark stoneware |
| Home | Gallery 4 | https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=700&h=700&fit=crop | 700×700 | Harbour view with misty light and boats near shore |
| Home | Gallery 5 | https://images.unsplash.com/photo-1515669097368-22e68427d265?w=700&h=700&fit=crop | 700×700 | Hands pouring a drink beside a set dinner table |
| Home | Guest note detail | https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop | 800×600 | Quiet harbour or waterside detail in soft evening light |
| About | Intro | https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&h=1200&fit=crop | 1000×1200 | Chef plating food carefully in a professional kitchen |
| About | Story image 1 | https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=700&fit=crop | 900×700 | Rustic meal shared at a wooden table with serving plates |
| About | Story image 2 | https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=700&fit=crop | 900×700 | Warm restaurant interior with diners and natural wood textures |
| About | Philosophy detail | https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=900&fit=crop | 800×900 | Shared dinner scene with glasses and plates across a dark table |
| About | Sourcing atmosphere | https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&h=700&fit=crop | 900×700 | Coastal landscape detail suggesting local origin and seasonality |
| About | Team card 1 | https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700&h=800&fit=crop | 700×800 | Friends gathered around a table in warm evening light |
| About | Team card 2 | https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&h=800&fit=crop | 700×800 | Portrait of a man in soft natural light |
| About | Team card 3 | https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=800&fit=crop | 700×800 | Portrait of a woman in soft natural light |
| Suppers | Hero | https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop | 1600×900 | Candlelit long-table supper with plates and glasses in a dim restaurant setting |
| Suppers | Event 1 | https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop | 900×700 | Plated fish dish with herbs and textured garnish |
| Suppers | Event 2 | https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=900&h=700&fit=crop | 900×700 | Styled plated meal on a rustic tabletop |
| Suppers | Event 3 | https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&h=700&fit=crop | 900×700 | Seafood dish plated with herbs and dark stoneware |
| Suppers | Private dining | https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&h=900&fit=crop | 1000×900 | Group seated around a dinner table during an evening gathering |
| Pantry | Hero | https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1100&h=1200&fit=crop | 1100×1200 | Pantry shelves with jars, bottles, and preserved goods |
| Pantry | Category preserves | https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=700&fit=crop | 800×700 | Close-up of prepared food and accompaniments on ceramic dishes |
| Pantry | Category baking | https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=700&fit=crop | 800×700 | Fresh baked loaves stacked on a bakery surface |
| Pantry | Category dairy | https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=700&fit=crop | 800×700 | Bread and pantry ingredients arranged on a table |
| Pantry | Category salts | https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=700&fit=crop | 800×700 | Fresh ingredients arranged in bowls and dishes |
| Pantry | Category gift boxes | https://images.unsplash.com/photo-1514996937319-344454492b37?w=800&h=700&fit=crop | 800×700 | Wrapped pantry items arranged as a gift set |
| Pantry | Featured 1 | https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&h=800&fit=crop | 700×800 | Jarred pantry goods on a shelf |
| Pantry | Featured 2 | https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=700&h=800&fit=crop | 700×800 | Preserved produce in glass jars |
| Pantry | Featured 3 | https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=700&h=800&fit=crop | 700×800 | Seasoning ingredients and salts on a surface |
| Pantry | Featured 4 | https://images.unsplash.com/photo-1453831362806-3d5577f014a4?w=700&h=800&fit=crop | 700×800 | Rustic baked loaf or bread arrangement |
| Pantry | Weekly drop | https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=700&fit=crop | 900×700 | Coffee counter or market-style provisions scene |
| Contact | Detail image | https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop | 900×700 | Harbour-side natural landscape detail |

---

## Logo & Favicon SVG

### Logo SVG
```svg
<svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Marrow and Tide logo">
  <g transform="translate(2 4)">
    <circle cx="20" cy="20" r="15.5" stroke="currentColor" stroke-width="2.2"/>
    <path d="M7 23.5C11.2 18.8 17 16.4 24 16.4C28.5 16.4 32.5 17.3 35 18.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="15" y="10" width="10" height="20" rx="5" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="20" cy="10" r="3.2" fill="currentColor"/>
    <circle cx="20" cy="30" r="3.2" fill="currentColor"/>
  </g>
  <text x="52" y="31" fill="currentColor" font-family="Cormorant Garamond, serif" font-size="28" letter-spacing="2.8">MARROW &amp; TIDE</text>
</svg>
```

### Favicon SVG
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="22" stroke="#23343A" stroke-width="4"/>
  <path d="M14 38C20 31 28 28 38 28C44 28 49 29.5 53 31" stroke="#23343A" stroke-width="4" stroke-linecap="round"/>
  <rect x="26" y="16" width="12" height="32" rx="6" stroke="#23343A" stroke-width="4"/>
  <circle cx="32" cy="16" r="5" fill="#23343A"/>
  <circle cx="32" cy="48" r="5" fill="#23343A"/>
</svg>
```

---

## Responsive Notes
### Mobile `<640px`
- Header becomes compact with slide-down or sheet navigation
- Home hero copy centers vertically but stays left-aligned internally
- Split sections stack image first, then copy
- Cards become single column
- Gallery simplifies to single column or horizontally scrollable row
- Footer columns stack with generous spacing
- Maintain h1 at 42px and h2 at 32px

### Tablet `640px–1023px`
- Two-column sections may remain split if imagery allows, but text widths must stay comfortable
- Event and pantry grids shift to 2 columns
- Header can use compact desktop layout if space allows, otherwise mobile pattern
- Keep CTA visibility high above the fold

### Desktop `1024px+`
- Use full editorial asymmetry
- Keep centered logo in nav with links balanced left/right
- Allow overlapping text cards and inset imagery in feature bands
- Use wider gallery collage and staggered testimonial layout

### Accessibility / UX Notes
- All text/background pairings must follow the supplied contrast rules
- Buttons need clear hover and focus states
- Forms must have explicit labels and visible focus outlines
- Availability badges should not rely on color alone; include text states like `8 seats left` or `Selling quickly`
- Accordions should be keyboard accessible and announce expanded state
- Ensure all images use meaningful alt text from the image plan
