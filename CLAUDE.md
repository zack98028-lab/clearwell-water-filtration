# Clearwell Water Filtration — Website

Live site: **https://clearwellwaterfiltration.com**
Repo: https://github.com/zack98028-lab/clearwell-water-filtration
Owner: Sharbin (GitHub user `zack98028-lab`)

## How to publish a change

This folder IS the live site. Editing a file here and pushing puts it live.

```bash
git add -A && git commit -m "describe the change" && git push origin main
```

GitHub Pages rebuilds in ~1 minute. There is also `START - Auto Publish Website.bat` —
double-click it and every file save auto-commits and pushes with no further action.

**When the user asks for a site change, just make the edit and push it.** Don't ask
where the site lives or how to deploy — it's this folder, and the command is above.

## The business

Clearwell Water Filtration — residential water treatment.

- **Service area:** Plymouth, Canton, Salem Township, and Northville, MI.
  Livonia, Novi, and South Lyon case-by-case. Well inquiries west of Napier Rd get priority.
- **Phone:** (734) 306-5475 — used as `tel:+17343065475` in markup
- **Email:** hello@clearwellwaterfiltration.com
- **Positioning:** test first, flat published pricing, customer owns the equipment
  outright. No rental contracts. Explicitly anti-"vague phone quote."

### Two customer types, different pitch

- **Plymouth & Canton** — municipal GLWA water. Safe to drink; the problem is
  hardness (7–13 grains per gallon) and chlorine taste. Comfort/appliance-life fix.
- **Salem Township & well homes** — private wells, unregulated and untested by
  default. Iron, sulfur, coliform, nitrates, arsenic. Test before recommending.

### Services and pricing shown on the site

| Service | Price shown |
|---|---|
| Water softener (most common) | $2,000–3,500 installed |
| Whole-home filtration | $1,000–4,500 (avg ~$2,000–2,500) |
| Under-sink RO (add-on) | $300–2,500 (avg ~$1,100–1,300) |
| Well water treatment | $3,000–8,000+ bundled |

## Files

- `index.html` — the main page. Self-contained: all CSS is in a `<style>` block
  in the head, no external stylesheet. Edit this one for homepage changes.
- `services.html`, `about.html`, `water-test.html`, `contact.html` — subpages.
  These DO use `assets/styles.css` and `assets/main.js`.
- `assets/styles.css`, `assets/main.js` — shared by the subpages only.
- `CNAME` — holds the custom domain. Do not delete; removing it unbinds the domain.
- `.nojekyll` — stops GitHub Pages from running Jekyll on the files.
- `sitemap.xml`, `robots.txt` — both reference the live domain.

**Known inconsistency:** `index.html` is a newer, more refined design than the four
subpages, which still use the older `assets/styles.css`. They share the same color
tokens so it doesn't look broken, but the subpages are due for a visual refresh to
match the homepage. Worth raising if the user asks about polish.

## Design system

Fonts: Fraunces (headings, weight 500) and Inter (body) — loaded from Google Fonts.

```
--slate:#1F3B4D   --slate-deep:#152A37
--stone:#C9BBA0   --stone-light:#E4DBC8
--teal:#4A9B8E    --teal-deep:#3A7E73
--bone:#F2EEE6    --bone-white:#FBFAF7
--ink:#232323     --clay:#B0603F
```

Voice: plain, specific, non-salesy. Real numbers over adjectives. The site's whole
credibility argument is "we tell you if you don't need anything," so avoid copy that
oversells or manufactures urgency.

## Not yet done

- **Contact forms don't submit anywhere.** `assets/main.js` intercepts submit, hides
  the form, and shows a success message — nothing is sent or stored. Anyone who fills
  out the "free water test" form is silently dropped. Needs a real handler (Formspree,
  Netlify Forms, or similar) before the site takes real traffic.
- No analytics installed.
- `hello@clearwellwaterfiltration.com` needs to actually exist as a mailbox.
