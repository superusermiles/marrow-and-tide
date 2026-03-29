# Review Report: Marrow & Tide
**Status: FAIL**
**Live URL:** https://marrow-and-tide.vercel.app
**Date:** 2026-03-29

## Screenshots
- Home desktop: site/qa/home/desktop.png
- Home tablet: site/qa/home/tablet.png
- Home mobile: site/qa/home/mobile.png
- About desktop: site/qa/about/desktop.png
- About tablet: site/qa/about/tablet.png
- About mobile: site/qa/about/mobile.png
- Suppers desktop: site/qa/suppers/desktop.png
- Suppers tablet: site/qa/suppers/tablet.png
- Suppers mobile: site/qa/suppers/mobile.png
- Pantry desktop: site/qa/pantry/desktop.png
- Pantry tablet: site/qa/pantry/tablet.png
- Pantry mobile: site/qa/pantry/mobile.png
- Contact desktop: site/qa/contact/desktop.png
- Contact tablet: site/qa/contact/tablet.png
- Contact mobile: site/qa/contact/mobile.png

## Checklist
- [x] Site is live and accessible (HTTP 200)
- [x] All pages from brief exist and render
- [x] Content matches brief — no placeholder text
- [x] Images load on all pages reviewed
- [x] Logo present in header
- [x] Favicon implemented in source
- [x] Navigation works across the main site pages reviewed
- [x] Responsive layout holds at desktop, tablet, and mobile viewports reviewed
- [x] Meta tags present (title, description, OG)
- [x] Color palette matches the design direction and remains cohesive
- [x] Text is readable on all reviewed backgrounds
- [x] Typography matches the design spec direction
- [x] Footer includes contact info, hours, and social links
- [ ] Favicon confirmed on the live deployment
- [ ] robots.txt available on the live deployment
- [ ] sitemap.xml available on the live deployment
- [ ] OG image confirmed on the live deployment

## Issues Found
1. **Critical SEO/deployment issue — platform metadata files are not available on the live site.** Requests to `/robots.txt`, `/sitemap.xml`, `/favicon.svg`, and `/opengraph-image` all returned 404 during review. This fails the studio SEO baseline and prevents confirmation of the live favicon and OG asset.
2. **Footer newsletter and social CTA use placeholder-level destinations.** The footer newsletter form posts to `formsubmit.co` and the Instagram links point to `https://www.instagram.com/` rather than a brand account. The Contact page also includes a `Join the List` link with `href="#"`. These are not broken visually, but they are incomplete production pathways.
3. **Primary booking flow is still routed through generic contact links rather than a clearer booking destination.** Multiple `Book Now` and booking CTAs point to `/contact/` instead of a dedicated booking integration or clearer booking placeholder flow. This is acceptable as a temporary pattern, but it reads unfinished against the brief’s request for strong booking pathways.

## Verdict
The live site is polished, on-brand, and cohesive in tone. It matches the editorial-coastal brief well, the content is strong, the layout feels considered across viewports, and the core pages are present with working primary navigation. However, this review is a **FAIL** because the live deployment is missing key SEO and identity assets at public routes: `robots.txt`, `sitemap.xml`, favicon, and the OG image route all returned 404. Those issues are enough to fail the studio quality gate even though the visual and content execution is otherwise strong. Fix the missing metadata asset deployment and replace the remaining placeholder external/contact pathways, then re-review.