# Hireloop design system

Source: [Design](https://www.figma.com/design/pmhX72njDrXgR4Rmb2OGvZ/hireloop?node-id=2001-2) and [Hireloop 2.0](https://www.figma.com/design/pmhX72njDrXgR4Rmb2OGvZ/hireloop?node-id=12018-260). Values below are taken from the Figma screen layers and their token fallbacks. The older **Design** page is one long marketing homepage; the more complete token set comes from **Hireloop 2.0**. Some individual screens use local colors and typography outside that set.

## Colors

| Role | Value | Evidence and use |
| --- | --- | --- |
| Primary brand | `#635BFF` | `color/brand/default`; active navigation and brand accents |
| Secondary brand | `#9992FF` | `color/brand/soft`; lighter purple accents |
| App background | `#08080A` | `color/bg/app` and sidebar |
| Panel background | `#0E0E11` | `color/bg/panel` |
| Card surface | `#141418` | `color/surface/1` |
| Raised surface | `#1A1A1F` | `color/surface/2` |
| Strong surface | `#222228` | `color/surface/3` |
| Input surface | `#0C0C0F` | `color/surface/input` |
| Primary text | `#EDEDEF` | `color/text/primary` |
| Secondary / muted text | `#A0A0AB` | `color/text/secondary` |
| Tertiary text | `#6E6E78` | `color/text/tertiary` |
| Inverse text | `#0B0B0C` | `color/text/inverse`, on light buttons |
| Primary action fill | `#FAFAFA` | `color/action/primary`; some public buttons use `#FFFFFF` |
| Subtle border | `#FFFFFF12` | White at 7% opacity (`color/border/subtle`) |
| Default border | `#FFFFFF1A` | White at 10% opacity (`color/border/default`) |
| Destructive | `#EF4444` | Red accent in recruiter controls; settings also uses pale red `#FFB4AB` |

Status accents visible on individual screens include blue `#60A5FA`, amber `#F59E0B`, and green `#22C55E`. Checkout uses additional local Stripe colors, including `#2400FF`; these are screen specific rather than shared tokens.

## Typography

**Inter** is the dominant product font. Weights visible in screen layers are Regular 400, Medium 500, Semi Bold 600, and Bold 700. Most body copy uses 12–14px, with 13px/20px common in listings and controls. Section headings are commonly 22px/28px, weight 600. Dashboard page headings are 26px, weight 600. Labels and card subtitles often use 16px, weight 600, with about 27px line height. Small metadata and table labels use 11–12px. The public browse screen also contains isolated Geist and Instrument Sans text, while admin contains isolated Manrope and JetBrains Mono. Treat those as local exceptions; Figma does not show one unified heading scale across both pages.

| Usage | Observed size / line height | Weight |
| --- | --- | --- |
| Dashboard page heading | 26px | 600 |
| Section / card heading | 22px / 28px | 600 |
| Large label / subtitle | 16px / ~27px | 600 |
| Body and controls | 13–14px / 20px | 400–500 |
| Small metadata | 11–12px / ~20px | 400–500 |

## Layout and effects

- **Radii:** `radius/sm` 6px, `radius/md` 8px, `radius/lg` 12px, `radius/xl` 14px, `radius/full` 999px. Some checkboxes and status badges use 4px.
- **Spacing:** recurring 4, 8, 12, 16, 20, 24, and 32px gaps; card padding is often 24–25px. Public browse uses 80px horizontal page padding.
- **Container:** public browse has a 1440px maximum frame width and 80px side padding, yielding about 1280px of content. The older Homepage frame is 1440px wide. Dashboard layouts use a left sidebar and a separate main canvas rather than the same public container.
- **Shadows:** cards use a restrained `0 1px 1px rgba(0,0,0,.35)` shadow and an inset top highlight `0 1px 0 rgba(255,255,255,.04)`. The dashboard floating action button has its own shadow. Shadows are subtle against the dark surfaces.

## Reusable UI patterns

| Component | Observed structure |
| --- | --- |
| Public navbar | Logo, site links, and action buttons; appears in public browse screens |
| Dashboard sidebar | Logo, role specific navigation, active item, footer area |
| Dashboard top bar | Context title, search/input, and account actions |
| Marketing footer | Footer section on the older Homepage |
| Job card | Company logo, role title, company/location, salary and job type chips, save action |
| Company identity/card | Company logo and name grouped with supporting details; repeated in job listings and recruiter views |
| Buttons | Light primary action, outlined/dark secondary action, icon buttons, dashboard floating action button |
| Inputs | Search, text fields, selects, checkboxes, and date/salary fields |
| Filter panel | Grouped job filters in a bordered card with checkbox rows |
| Status badges | Small color coded state labels for jobs, applications, payments, and users |
| Metric card | Icon, trend, label, and prominent value on dashboards |
| Data table | Header, rows, status cells, filter/export actions, and pagination |
| Subscription / checkout card | Plan and payment details, billing state, payment success confirmation |

These are recurring visual patterns; the file does not identify every one as a published Figma component.

## Screen inventory

### Design

1. **Homepage** (`12022:10424`) — long public marketing page with hero, statistics, pricing, and footer. The page canvas contains one top level screen.

### Hireloop 2.0

**01 · Public Site — Browse, Job Details & Checkout**

1. Public / Browse Jobs (`12018:353`)
2. Public / Job Details (`12018:540`)
3. Public / Checkout — Stripe Payment (`12018:711`)
4. Public / Checkout — Payment Successful (`12018:858`)

**02 · Job Seeker**

1. Seeker / Dashboard (`12018:1236`)
2. Seeker / Saved Jobs (`12018:1386`)
3. Seeker / My Applications (`12018:1629`)
4. Seeker / Billing & Subscription (`12018:1820`)
5. Seeker / Settings (`12018:2014`)

**03 · Recruiter**

1. Recruiter / Dashboard (`12018:2202`)
2. Add New Job (`83482:812`)
3. Manage Job Posts (`83484:1158`)
4. `Html → Body` (`83485:1565`) — unnamed job form screen with populated fields; the layer name does not state its route or action.

**04 · Admin Console**

1. Admin / Dashboard Overview (`12018:3084`)
2. Admin / Manage Users (`12018:3362`)
3. Admin / Manage Jobs (`12018:3762`)
4. Admin / Payments & Subscriptions (`12018:4040`)
