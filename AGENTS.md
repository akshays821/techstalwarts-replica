# Techstalwarts Replica — Agent Reference
## CRITICAL RULES
- Execute ONLY the task in the current prompt. Nothing else.
- This is a PIXEL-PERFECT REPLICA of https://techstalwarts.com
- Do NOT redesign. Do NOT use creative freedom. Match the original exactly.
- Visit https://techstalwarts.com directly to study layout before coding.
- Placeholder images: https://placehold.co/WxH

## Exact Color Palette
- Accent Red:      #E8192C  ← logo arrow, highlights, icons, buttons
- Primary Text:    #1A1A1A  ← headings
- Body Text:       #4A4A4A
- Light BG:        #F5F5F5  ← alternating sections
- White:           #FFFFFF  ← navbar, cards
- Dark Footer:     #1A1A2E
- Muted:           #6B7280

## Typography
- Clean sans-serif (use Inter via next/font)
- Large bold headings, normal weight body
- Red accent on specific heading words (e.g. "Growth" in hero)

## Stack
- Next.js 14, App Router, JavaScript
- Tailwind CSS only

## Structure
/app/layout.js        → root layout (Navbar + Footer)
/app/page.js          → homepage
/app/contact/page.js  → contact page
/components/          → all section components
/data/                → static JS data arrays

## Key Visual Notes
- HERO: Full-bleed real office photo as background (use placehold.co/1920x900 dark-tinted). White text overlaid. "Growth" word in red. Stats bar is a white floating card overlapping hero bottom.
- NAVBAR: White bg, logo left (arrow icon in red + "techstalwarts." text), nav links center, "Contact" button right with border, Services has dropdown
- STATS BAR: White card with soft shadow, 4 columns, red icons, bold numbers
- SERVICES SECTION: Left tab list, right content panel. Active tab = red left border + red text
- AI/ML SECTION: Light gray bg (#F5F5F5), NOT dark. Two columns.
- HOW WE WORK: White bg, 4-col x 2-row icon grid, red map-marker connectors
- FOOTER: Dark bg, white text, 4 link columns + 3 office location cards at bottom