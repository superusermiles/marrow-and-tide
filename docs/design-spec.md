# Marrow & Tide — Design Spec

## Brand Direction
Marrow & Tide should feel like stepping from cold harbour air into a room of warm stockpots, candlelight, linen, and quiet competence. The brand sits between coastal larder and modern editorial restaurant design: tactile, restrained, atmospheric, and deeply local. Nothing should feel slick or overly polished. The refinement comes from pacing, proportion, typography, and image curation.

---

## Color Palette
```css
--primary: #23343A;     /* deep blue-slate — hero overlays, footer, dark feature bands, logo mark */
--secondary: #8A5A3C;   /* driftwood copper — dividers, strokes, subtle warm accents, metadata rules */
--accent: #C9A45C;      /* smoked brass — CTA fills, highlights, hover emphasis, key markers */
--background: #F4EFE6;  /* oat paper — main site background, card surfaces on dark sections */
--text: #162126;        /* anchor ink — default text on light backgrounds */
--muted: #CFC4B4;       /* weathered shell — quiet panels, borders, soft alternating sections */
```

### Contrast Rules
- Use `#162126` text on `#F4EFE6` and `#CFC4B4`
- Use `#F4EFE6` or near-white text on `#23343A`
- Use `#23343A` text on `#C9A45C` buttons for stronger contrast
- Never place `#8A5A3C` text on `#23343A` or `#C9A45C`
- Use smoked brass sparingly. It should read as a quiet highlight, not a dominant wash

---

## Typography
- **Heading font:** Cormorant Garamond 600, 700
- **Body font:** Manrope 400, 500, 600
- **Accent / utility font:** IBM Plex Mono 500

### Font Personality
- **Cormorant Garamond** gives the site an editorial, maritime-literary texture without feeling precious
- **Manrope** keeps longer copy clean, modern, and practical for booking and pantry details
- **IBM Plex Mono** adds a coded pantry-label quality for dates, availability, schedule notes, and form microcopy

### Font Scale
- **h1:** 64px / 1.0 desktop, 42px mobile
- **h2:** 42px / 1.1 desktop, 32px mobile
- **h3:** 30px / 1.15
- **h4:** 22px / 1.2
- **body:** 18px / 1.7
- **small:** 15px / 1.6
- **caption/meta:** 13px / 1.5, uppercase or IBM Plex Mono

### Typesetting Notes
- Use generous letter spacing on the wordmark and navigation utility text
- Keep large serif headlines slightly tight for drama
- Body copy should remain narrow in measure: 60–72 characters
- Use mono for dates, pantry labels, event metadata, FAQ labels, and availability badges only

---

## Spacing & Tokens
### Border Radius
- **sm:** 4px
- **md:** 10px
- **lg:** 18px
- **xl:** 28px
- **pill:** 999px

### Shadow System
- **soft:** `0 6px 18px rgba(22, 33, 38, 0.08)`
- **medium:** `0 12px 36px rgba(22, 33, 38, 0.12)`
- **hard:** `0 20px 56px rgba(9, 15, 18, 0.22)`

### Section Padding Rhythm
- **mobile:** `py-16`
- **tablet:** `md:py-20`
- **desktop:** `lg:py-28`
- Hero top padding should account for transparent nav overlap: `pt-32 md:pt-40`
- Use narrower internal gaps inside cards: `gap-4`, `gap-6`, `gap-8`

### Dividers & Lines
- Hairline rules in `#8A5A3C` at 30–40% opacity
- Mono labels often paired with a short horizontal brass or copper line
- Use border density sparingly; rely on spacing and tone blocks first

---

## Layout Architecture
### Overall Site Feel
Airy and cinematic. The site should alternate between open editorial breathing room and grounded dark bands that feel like stepping indoors at dusk. Content should not be crammed. Images need scale and texture. The site moves with a slow, assured rhythm.

### Hero Style
Full-bleed harbour-side supper photography with a deep blue-slate overlay. Copy sits left-of-center in a vertical stack with strong negative space. A thin copper rule and mono location/date eyebrow sit above the main heading. CTAs sit inline on desktop and stack on smaller screens.

### Navigation
- Initial state: transparent overlay over hero
- On scroll: sticky top bar with oat-paper background, subtle bottom border, and slightly reduced height
- Desktop layout: left link cluster (`About`, `Suppers`, `Pantry`), centered logo, right-side booking CTA plus `Contact`
- Mobile: compact bar with centered emblem/wordmark and right-side menu trigger opening a slide-down sheet with section links and CTAs

### Section Rhythm
- Alternate `background` and `muted` sections for editorial pacing
- Insert one or two strong `primary` dark bands for philosophy, testimonials, or final CTA
- Use asymmetrical image/text splits instead of repetitive centered blocks
- Gallery sections should use mixed crop ratios: landscape, portrait, and square in an intentional collage

### Footer
Three-column footer in `primary` with oat text, copper dividers, and a brass-accent newsletter prompt. Center alignment on mobile, staggered columns on desktop. Include subtle mono labels for hours and social links.

### Overall Density
Spacious, calm, and premium without becoming sparse to the point of feeling empty. Each page should have 5–7 clearly paced sections with room for imagery.

---

## Page-by-Page Layout

## Home
### Section Order
1. Hero
2. Intro split section
3. Upcoming Suppers
4. Pantry Highlights
5. Philosophy dark band
6. Gallery strip
7. Guest Notes
8. Final Booking CTA

### Layout Details
**1. Hero**
- Full viewport height, image background with 45–55% dark overlay
- Left-aligned text block max width 620px
- Eyebrow with mono text: `Lyttelton, Aotearoa New Zealand`
- H1, short intro, two CTAs, and a small secondary link to the story page
- Mobile: keep text vertically centered, reduce copy width, stack CTAs
- **Image:** `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1100&fit=crop`

**2. Intro split**
- Two-column layout: copy left, portrait/interior image right
- Include small mono label `Part galley. Part pantry. Part ritual.`
- Copy introduces Hana and Luca plus the dual daytime/nighttime model
- Mobile: image stacks above copy
- **Image:** `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=1100&fit=crop`

**3. Upcoming Suppers**
- Intro row with heading left and `View all suppers` link right
- Three editorial cards in 3-column grid on desktop, stacked on mobile
- Each card includes date, menu theme, one-line description, seats left badge, and CTA
- Add a small supporting image per card
- **Images:**
  - `https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=900&fit=crop`
  - `https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop`
  - `https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&h=900&fit=crop`

**4. Pantry Highlights**
- Section intro + 4-item provisions grid
- Use layered card layout with image on top, label, category, price placeholder, short note
- Desktop 4 columns, tablet 2 columns, mobile 1 column carousel or stack
- **Images:**
  - `https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=800&fit=crop`

**5. Philosophy band**
- Dark full-width band on `primary`
- Two columns: concise philosophy copy left, three value blocks right (`Local catch`, `Slow ferments`, `Neighbourhood hospitality`)
- Minimal image inset overlapping bottom edge on desktop
- Mobile: stacked values with rules
- **Image:** `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&h=700&fit=crop`

**6. Gallery strip**
- Mixed 5-image collage with one large horizontal, two portrait, two square crops
- Hover zoom only, no captions on desktop; captions appear below on mobile
- **Images:**
  - `https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=700&h=900&fit=crop`
  - `https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&h=900&fit=crop`
  - `https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=700&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1515669097368-22e68427d265?w=700&h=700&fit=crop`

**7. Guest Notes**
- Quiet oat-paper section with two or three quoted notes in staggered cards
- Left card large; right side two smaller stacked quotes
- Mobile becomes simple vertical list
- Optional small background detail image tucked to section edge
- **Image:** `https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop`

**8. Final Booking CTA**
- Dark band with centered heading, short copy, two CTA buttons
- Subtle line art tide-ring behind content at low opacity
- No image required; keep clean and high-contrast

---

## About
### Section Order
1. Page intro hero
2. Founders story narrative blocks
3. Our Table philosophy
4. Local sourcing map/list
5. Team & partners mini section
6. CTA to upcoming suppers

### Layout Details
**1. Page intro**
- Split hero: text left, tall environmental portrait right
- Include mono location label and short introductory statement
- Mobile stacks image first
- **Image:** `https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&h=1200&fit=crop`

**2. Founders story**
- Vertical timeline with alternating text/image blocks
- Milestones: expedition cooking, remote lodge years, winter pop-up, Lyttelton opening
- Mobile simplifies to stacked cards
- **Images:**
  - `https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=700&fit=crop`

**3. Our Table philosophy**
- Full-width muted section with a central text column and side pull quotes
- Includes principles around catch, broth, preservation, and hosting style
- Small detail image anchored lower right
- **Image:** `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=900&fit=crop`

**4. Local sourcing map/list**
- Two columns: stylised South Island supplier list on left, text on right
- Could use simple map placeholder with dots for Banks Peninsula, local growers, fishers, dairy makers
- Mobile becomes list-first
- **Image:** `https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&h=700&fit=crop`

**5. Team & partners**
- Small three-card grid with founders and close collaborators
- Cards use image, role, short human note
- **Images:**
  - `https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=800&fit=crop`

**6. CTA**
- Centered invitation to reserve a seat or see the pantry
- Use dark background and minimal copy

---

## Suppers
### Section Order
1. Intro hero
2. Event format explainer
3. Upcoming suppers list
4. Private gatherings
5. FAQ accordion
6. Contact CTA

### Layout Details
**1. Intro hero**
- Wide hero image with text card overlapping bottom edge
- Headline, description, booking CTA, and note about seasonal menus
- **Image:** `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop`

**2. Event format explainer**
- Three-column icon/text row: arrival, shared courses, closing sweet/broth
- Use mono labels and simple line icons
- Mobile stacks vertically

**3. Upcoming suppers list**
- Large vertical cards with image left, details right
- Include theme, date, menu notes, dietary badge, seat status, booking CTA
- Mobile turns into stacked image-top cards
- **Images:**
  - `https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=900&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&h=700&fit=crop`

**4. Private gatherings**
- Split layout with moody table image and copy describing groups, celebrations, and port-side gatherings
- **Image:** `https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&h=900&fit=crop`

**5. FAQ accordion**
- Narrow centered accordion list
- Mono question labels, smooth height transition, subtle border lines
- No image needed

**6. Contact CTA**
- Brass-accent button on dark panel for custom event enquiries

---

## Pantry
### Section Order
1. Intro hero
2. Product category grid
3. Featured products
4. Weekly drop / subscription note
5. FAQ
6. Mailing list CTA

### Layout Details
**1. Intro hero**
- Tall split hero with shelves/jars image right and copy left
- Includes practical note about pickup and limited runs
- **Image:** `https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1100&h=1200&fit=crop`

**2. Product category grid**
- Five category tiles with image background and label overlay
- Categories: Preserves, Cultured Dairy, Baking, Sea Salt Blends, Gift Boxes
- Desktop uses 3+2 asymmetrical grid, mobile stacks cleanly
- **Images:**
  - `https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=700&fit=crop`
  - `https://images.unsplash.com/photo-1514996937319-344454492b37?w=800&h=700&fit=crop`

**3. Featured products**
- Four cards with product image, price, collection note, and short copy
- Cards on muted panels with thin borders
- **Images:**
  - `https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=700&h=800&fit=crop`
  - `https://images.unsplash.com/photo-1453831362806-3d5577f014a4?w=700&h=800&fit=crop`

**4. Weekly drop note**
- Dark feature band with pantry subscription explanation and bullet list of what changes week to week
- Include compact supporting image of wrapped loaf/jars
- **Image:** `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=700&fit=crop`

**5. FAQ**
- Two-column list of pantry practicalities: pickup, shipping, storage, allergens
- Mobile stacks

**6. Mailing list CTA**
- Centered form panel on oat background with brass button

---

## Contact
### Section Order
1. Intro
2. Contact details block
3. Hours and supper schedule
4. Map placeholder
5. Enquiry form
6. Social/newsletter prompt

### Layout Details
**1. Intro**
- Minimal top section with headline, short welcome text, and utility links
- No hero image required to keep page practical

**2. Contact details**
- Two-column card layout with address, phone, email, and booking button
- Right side can include a harbour detail image for warmth
- **Image:** `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop`

**3. Hours & supper schedule**
- Structured schedule blocks using mono labels and brass separators
- Include pantry hours and supper hours clearly

**4. Map placeholder**
- Stylised map block with pin on Norwich Quay and note about parking/walk-in pickup
- Mobile keeps map full width

**5. Enquiry form**
- Two-column desktop form, single-column mobile
- Fields: name, email, phone, enquiry type, preferred date, message, dietary/access note

**6. Social/newsletter prompt**
- Compact footer-adjacent band inviting people to follow weekly menus and pantry drops

---

## Logo Design
### Concept
Wordmark plus abstract emblem. The emblem combines a tide ring with a marrow-bone inspired oval core using simple geometric strokes. It should feel maritime, elemental, and memorable rather than illustrative.

### Inline SVG Code
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

### Color Variants
- **Primary on light:** emblem and wordmark in `#23343A`
- **Reversed on dark:** emblem and wordmark in `#F4EFE6`
- **Monochrome:** all elements in one flat color, either `#162126` or white depending on surface

### Usage
- Minimum full logo width: 132px
- Minimum emblem-only size: 24px
- Clear space: at least the emblem radius on all sides
- Never add gradients, outlines, or drop shadows to the logo

---

## Favicon Design
### Concept
Emblem only. Simplified tide ring with marrow-core oval and two filled bone ends. Must hold at 16×16.

### SVG Code
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="22" stroke="#23343A" stroke-width="4"/>
  <path d="M14 38C20 31 28 28 38 28C44 28 49 29.5 53 31" stroke="#23343A" stroke-width="4" stroke-linecap="round"/>
  <rect x="26" y="16" width="12" height="32" rx="6" stroke="#23343A" stroke-width="4"/>
  <circle cx="32" cy="16" r="5" fill="#23343A"/>
  <circle cx="32" cy="48" r="5" fill="#23343A"/>
</svg>
```

### Colors
- Brand primary `#23343A` on transparent background

---

## OG Image (1200×630)
### Composition
- Background: solid `#23343A`
- Left-aligned content block with generous padding
- Thin `#C9A45C` accent rule near top
- Business name large in Cormorant Garamond, tagline below in Manrope
- Emblem or tide-ring line graphic placed to the right or behind text at low opacity
- Add a faint panel texture effect in a slightly lighter slate rectangle behind the lower text block

### Visual Hierarchy
1. `Marrow & Tide`
2. `Coastal suppers. Pantry staples. Slow hospitality.`
3. Small footer line: `Lyttelton, Christchurch, New Zealand`

### Small-Card Legibility
- Keep text large and sparse
- No photographic background
- Emblem should be secondary and not compete with title

---

## Image Plan
All imagery should feel cohesive: moody natural light, cool-to-neutral shadows, candle warmth, tactile food close-ups, harbour atmosphere, hands at work, stoneware, jars, linen, and timber.

### Home
- Hero — `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1100&fit=crop`
  - Alt: Candlelit long-table supper with plates and glasses in a dim restaurant setting
  - Mood: intimate, cinematic, evening harbour supper
- Intro split — `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=1100&fit=crop`
  - Alt: Warm restaurant interior with diners and natural wood textures
  - Mood: grounded hospitality, lived-in refinement
- Supper card 1 — `https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=900&fit=crop`
  - Alt: Chef plating food carefully in a professional kitchen
  - Mood: hands-on craft, seasonal precision
- Supper card 2 — `https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop`
  - Alt: Plated fish dish with herbs and textured garnish
  - Mood: refined but generous food styling
- Supper card 3 — `https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&h=900&fit=crop`
  - Alt: Rustic meal shared at a wooden table with serving plates
  - Mood: communal dining, warmth
- Pantry 1 — `https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&h=800&fit=crop`
  - Alt: Pantry shelves with jars, bottles, and preserved goods
  - Mood: larder abundance, small-batch provisions
- Pantry 2 — `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=800&fit=crop`
  - Alt: Bread and pantry ingredients arranged on a table
  - Mood: everyday luxury, edible still life
- Pantry 3 — `https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&h=800&fit=crop`
  - Alt: Close-up of prepared food and accompaniments on ceramic dishes
  - Mood: texture, appetite, craft
- Pantry 4 — `https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=800&fit=crop`
  - Alt: Fresh baked loaves stacked on a bakery surface
  - Mood: practical warmth, daily bread
- Philosophy inset — `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&h=700&fit=crop`
  - Alt: Shared dinner scene with glasses and plates across a dark table
  - Mood: convivial, intimate
- Gallery 1 — `https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&h=700&fit=crop`
  - Alt: Friends gathered around a table in warm evening light
  - Mood: sociable, human, candlelit
- Gallery 2 — `https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=700&h=900&fit=crop`
  - Alt: Styled plated meal on a rustic tabletop
  - Mood: editorial food texture
- Gallery 3 — `https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&h=900&fit=crop`
  - Alt: Seafood dish plated with herbs and dark stoneware
  - Mood: coastal specificity, moody detail
- Gallery 4 — `https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=700&h=700&fit=crop`
  - Alt: Harbour view with misty light and boats near shore
  - Mood: place-based atmosphere, sea fog
- Gallery 5 — `https://images.unsplash.com/photo-1515669097368-22e68427d265?w=700&h=700&fit=crop`
  - Alt: Hands pouring a drink beside a set dinner table
  - Mood: hospitality in motion
- Guest notes detail — `https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop`
  - Alt: Quiet harbour or waterside detail in soft evening light
  - Mood: reflective, local atmosphere

### About
- Intro portrait — `https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&h=1200&fit=crop`
- Story image 1 — `https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&h=700&fit=crop`
- Story image 2 — `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=700&fit=crop`
- Philosophy detail — `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=900&fit=crop`
- Sourcing atmosphere — `https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&h=700&fit=crop`
- Team cards — `https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700&h=800&fit=crop`, `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&h=800&fit=crop`, `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=800&fit=crop`

### Suppers
- Hero — `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop`
- Event card 1 — `https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop`
- Event card 2 — `https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=900&h=700&fit=crop`
- Event card 3 — `https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&h=700&fit=crop`
- Private dining — `https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&h=900&fit=crop`

### Pantry
- Hero — `https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1100&h=1200&fit=crop`
- Category 1 — `https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=700&fit=crop`
- Category 2 — `https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=700&fit=crop`
- Category 3 — `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=700&fit=crop`
- Category 4 — `https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=700&fit=crop`
- Category 5 — `https://images.unsplash.com/photo-1514996937319-344454492b37?w=800&h=700&fit=crop`
- Featured 1 — `https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&h=800&fit=crop`
- Featured 2 — `https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=700&h=800&fit=crop`
- Featured 3 — `https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=700&h=800&fit=crop`
- Featured 4 — `https://images.unsplash.com/photo-1453831362806-3d5577f014a4?w=700&h=800&fit=crop`
- Weekly drop — `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=700&fit=crop`

### Contact
- Detail image — `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop`

---

## Interaction & Motion
- Buttons: 180–220ms ease transition; brass fill darkens slightly on hover, text remains high-contrast
- Secondary buttons: transparent or oat background with copper border; hover fills with muted shell
- Links: subtle underline grow or copper rule slide
- Image cards: 1.03 scale zoom on hover with clipped overflow
- Reveal animations: soft fade + 16px upward motion on scroll; stagger cards lightly
- FAQ accordion: smooth height expansion with plus-to-minus icon transition
- Navigation: transparent to solid transition on scroll with backdrop blur kept low
- Page transitions: quick opacity/translate between route entries, no elaborate wipes
- Loading states: muted skeleton blocks with gentle shimmer, never bright gray
- Micro-interactions: seat-availability badges, hover on supplier list points, pantry cards revealing collection notes
