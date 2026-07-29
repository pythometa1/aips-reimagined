# SEO build — facts to confirm with the client

Nothing below is fabricated — these are reasonable, disclosed assumptions
built from public/existing site data. Confirm with the client before treating
any of it as a hard commitment.

## Scope: Kolkata / West Bengal only

The site is scoped to 8 West Bengal cities: Kolkata, Howrah, Hooghly,
Durgapur, Asansol, Burdwan, Arambagh, Siliguri. All pan-India (18-19 city,
10-state) claims were removed sitewide — `site.ts`, homepage, layout schema,
contact/gallery/clients/about pages and metadata, service page schema, the
wood-borer FAQ's city list, and a blog excerpt. Pune's location page and its
10 area pages (built earlier, then removed per this scoping decision) no
longer exist.

**Deliberately left unchanged** (judgment calls, flag for client review):

- **About page timeline**, 2016 ("Expansion beyond Bengal" into Jharkhand/
  Bihar/Odisha) and 2021 ("Pan-India footprint" into Pune/Mumbai/Delhi NCR/
  Lucknow/Varanasi/Guwahati) entries — these read as historical fact claims
  (what the company did in those years), not current-state claims, so there
  was no basis to rewrite them. Only the _current-state_ framing around them
  (section intro, the 2026 entry, stats blocks) was updated to West Bengal.
  If the client wants the historical narrative itself softened, that's a
  separate, deliberate call — not made here.
- **Anup Karmakar's personal career/recognition copy** ("recognised leader in
  India's pest industry", "across India and on international platforms",
  PMA National Ambassador role based in "Maharashtra, India") — his
  individual professional history and an external association's role, not
  AIPS's current service area.
- **Brand name/tagline** ("Advanced Indian Pest Solution", "Protecting Our
  India", homepage H1 "Protecting your India") — brand identity, not a
  service-area claim. Flag to the client if they also want the tagline
  itself revisited now that the service area is narrower.
- **Pest-library educational content** (`pest-biology.ts`) mentioning India
  generally (e.g. "India's post-harvest food losses") — general pest-science
  facts, not AIPS service claims.

## Kolkata location page (`src/data/locations.ts`)

- **`areasServed` list** — Jadavpur, Ballygunge, Tollygunge, Salt Lake, New
  Town, Behala, Garia, Dum Dum, Howrah, Rajarhat, Alipore, Bhowanipore, Park
  Street. Well-known Kolkata localities, not confirmed against an actual
  service log — replace with the real coverage list before treating as a
  hard commitment.
- **Pest-pressure claims** (monsoon humidity, older housing, restaurant
  density, Hooghly-belt humidity) are general, defensible facts about
  Kolkata's climate/geography, not AIPS-specific data.
- **Testimonial** reused verbatim from the homepage ("Meera J. · Kolkata"),
  not invented.

## Pricing page (`src/data/pricing.ts`)

- Only two price points are real, sourced from the already-published `/faq`
  page: General Pest Control ₹1,499 (2 BHK), Termite Control pre-construction
  ₹9/sq.ft. Every other row is "Free on-site quote" — no numbers invented.
  Ask the client for real starting prices if they want fuller transparency.
- GST language says "standard GST applies as per current rates" rather than a
  specific percentage — confirm the applicable rate if they want it explicit.

## "Near me" phrasing

Getpestcontrol.in's Kolkata/Pune pages were fetched live to see their
location-mapping approach: a "Local Pest Control in [City] Near Me" heading
above a locality grid. Copied the phrasing pattern, not their approach of
dumping 40-60 unlinked locality names into one block — the SEO plan's own
rules forbid that as a doorway-page pattern.

## Real per-locality pages (`src/data/location-areas.ts`,

## `/pest-control-kolkata/[area]`)

13 dedicated Kolkata area pages exist (Jadavpur, Ballygunge, Tollygunge, Salt
Lake, New Town, Behala, Garia, Dum Dum, Howrah, Rajarhat, Alipore,
Bhowanipore, Park Street), each with its own title/meta/breadcrumb and a
locally-specific intro + two "pest focus" callouts.

- Every blurb/pest-focus item describes the _area's_ real, publicly-known
  character (housing age, land use, proximity to markets/rivers) — not a
  claim about AIPS's actual service history or volume there. Phrasing avoids
  unverifiable claims like "our busiest X area."
- All 13 pages reuse Kolkata's single testimonial and full FAQ set (not
  enough real per-area testimonials exist yet). Real area-specific
  testimonials or technician quotes, as they become available, would
  meaningfully strengthen these pages' uniqueness further.
- **Ask the client** to confirm the area list against real service records.

## Other West Bengal cities

Howrah, Hooghly, Durgapur, Asansol, Burdwan, Arambagh and Siliguri have no
dedicated city or area pages yet — only listed as plain (unlinked) chips on
the homepage until real local content exists for each.
