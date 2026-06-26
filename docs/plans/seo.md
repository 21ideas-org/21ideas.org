# Plan — 21ideas SEO & discoverability enhancement

> **Status:** DRAFT / not yet implemented. **Revised 2026-06-09** against current (2025–2026) best
> practices for static/Hugo sites, **Yandex/RU-first** discoverability, and the AI-search era.
> Ordered best-value-for-effort first; each phase is self-contained: **Goal · Effort · Value · Files ·
> Steps (with Hugo code) · Acceptance.** Implement one phase at a time. Many phases are independent —
> different contributors can run them in parallel (noted per phase).
> **Audited against the repo at 2026-06-09** (theme `hugo-book` vendored; CI/Netlify pin **Hugo
> 0.144.2**, local toolchain is **0.159.0** — version skew matters, see §8). Re-verify file contents
> before editing; the theme and content move.

> **What changed in this revision (read first).** The original draft was strong *technical hygiene*
> but weighted for ~2022's scoreboard. The 2026 field research shifted the center of gravity and
> corrected several now-false claims and two build/deprecation bugs:
> - **Promoted (high 2026 ceiling):** an explicit **E-E-A-T / author-trust layer** (Phase 4 — new;
>   Bitcoin is YMYL and *trust* is the dominant quality signal), **topical-authority interlinking**
>   (Phase 6 — promoted from the tail; it is *the* primary ranking/AI-citation lever for a narrow
>   evergreen site), and **Yandex behavioral + Alice-AI** optimization (Phase 8 — new; the RU-primary
>   audience's dominant engine and answer surface).
> - **Corrected (was wrong/outdated):** the "convert SVG logo to raster" task (**false in 2026** —
>   Google now lists SVG as a supported logo format; **dropped**), the `WebSite` `SearchAction` (Google
>   **retired** the sitelinks search box Nov 2024 — it is **inert**; drop it), the hreflang code (uses
>   a **deprecated** Hugo method and **region-locks** RU; fixed), and Phase 4 (its deletions **break
>   the build** via `menu/index.md`; fixed).
> - **Corrected (non-functional code):** the Phase 8 image render-hook cannot set dimensions on this
>   repo (images live in the **theme's** `static/`, not `assets/`); replaced with a fail-safe snippet
>   + the migration that actually unblocks it.
> - **Demoted / deferred (low ROI for a volunteer-run evergreen site):** IndexNow "High"→"Medium",
>   **full-content RSS** and **llms.txt deep-refinement** moved to **Deferred** (no major AI engine
>   consumes `llms.txt`; keep the cheap existing file, stop investing in it).

> **What changed in the 2026-06-11 re-audit (read this too).** A second field-research pass (verified
> against primary 2025–2026 sources; full annotated list in §9) corrected several claims that flipped or
> softened since 06-09, and rebalanced two levers:
> - **Corrected (now wrong/over-stated):** **FAQPage is no longer a Yandex SERP play** (Yandex has no
>   FAQPage rich result — only a best-effort mobile `QAPage` that largely stopped firing; Google removed
>   FAQ rich results 2026-05-07) — keep Q&A as *content* only; **"Alice cites from the organic top-30"**
>   is a conflation (the official "top 30" is the Organization *address snippet*, not Alice); **topical
>   authority is not a "badge"** Google awards for interlinking (Mueller debunked it; no verifiable
>   "March 2026 core update" — keep the *work*, drop the mechanism claim); **E-E-A-T is a *rater*
>   concept, not a ranking factor** (the real ranking proxy is off-site reputation — reframe Phase 4);
>   **`llms.txt`** is dead for consumer answer-engine citation but has minor dev-tool/retrieval use
>   (action unchanged: keep, don't invest).
> - **Reweighted:** **Wikidata demoted** from "single best lever" to cheap-optional (weak/declining
>   evidence, real deletion risk) — do it *after* the entity-home + corroborating-mentions work, which is
>   the actually-verified entity lever; **off-site brand/entity mentions promoted** (the strongest
>   *verified* AI-citation signal — branded mentions correlate ~0.66 with AI-Overview visibility vs ~0.22
>   for backlinks).
> - **Added:** the evidence-based **GEO tactic** (statistics + sourced quotations + citations, the
>   best-evidenced editorial lever — Phase 7); a refreshed **2026 AI-measurement stack** (GSC gen-AI
>   report, Bing AI-Performance, Yandex "Видимость в Алисе AI" panel — Phase 12); an **agent-readability**
>   rule (answer/index bots don't run JS — your static HTML already wins — §8); a **crypto-content** note
>   (RU law carves out educational content — §5); and an explicit **"don't bother"** list (MCP server,
>   C2PA-for-ranking, paid AI trackers — §5).
> - **Owner data (2026-06-11):** **Google Search Console is already set up.** Trailing-30-day referrals
>   **Google 533 vs Yandex 150**; GSC 28-day **590 clicks / 47.6k impressions / 1.2% CTR / avg pos 13.8**
>   — broad visibility, weak capture, stuck on page 2. This makes the priorities concrete: **climb from
>   page 2 (Phases 6–7) and CTR-tune titles (Phase 8) for Google (the proven primary), while *growing*
>   the under-developed Yandex/Alice channel (Phase 8)** rather than treating it as primary.

---

## 0. How to use this doc

This plan was written by **comparing 21ideas against a more exhaustive SEO build** (the `gm-web`
daily-digest project), **keeping only what transfers**, and then **re-checking every recommendation
against 2026 practice**. The two sites have different missions, and that shapes everything:

| | **gm-web** (the reference) | **21ideas** (this repo) |
| --- | --- | --- |
| Stack | Astro 6 (build-time endpoints) | **Hugo + `hugo-book` theme** (CI pinned 0.144.2) |
| Content | Daily Bitcoin **news digest**, single-language `ru` | **Evergreen educational** resource, **bilingual** `ru`(primary)+`en`, plus a `posts` blog + `vestnik` bulletin |
| SEO center of gravity | **News SEO** (freshness, instant indexing, Google News, Yandex fresh feed) | **Evergreen + bilingual + RU-first SEO** in the AI-search era: **topical authority, E-E-A-T/trust, entity signals, hreflang, Yandex behavioral/Alice, social cards** |

**The honest 2026 summary.** 21ideas is *not* starting from zero. It already has canonical URLs,
hreflang basics, JSON-LD (`BreadcrumbList`/`WebSite`/`Organization`/`Article`), a good `robots.txt`
with an explicit AI-crawler policy, `llms.txt`/`llms-full.txt`, a git-driven sitemap with `lastmod`,
RSS with `<language>` + atom self-link, and Yandex verification. But the **biggest gaps are no longer
just technical** — they are: **(1) trust/author-entity signals** (Bitcoin is YMYL; the site is
effectively anonymous to crawlers despite having 7 real contributor identities in
`.well-known/nostr.json`), **(2) topical-authority interlinking** (the corpus exists — Theory/Practice/
Rabbithole + a 1,189-line glossary — but the hub/cross-link layer that turns it into a defensible
topical graph does not), **(3) entity presence** (weak entity home + few third-party mentions; AI engines cite
entities they can resolve), and **(4) Yandex behavioral + Alice** optimization for the RU-speaking audience. The technical
items (instant indexing, OG/social completeness, schema depth, two correctness bugs) are still worth
doing — they're just cheaper *and lower-ceiling* than the trust/content/entity work.

**Why the AI-search era changes the math.** For evergreen *informational* Bitcoin queries, the answer
increasingly renders inside an **AI Overview / Алиса answer** with no click. Optimizing the blue-link
click (titles/snippets/cards) still helps but has a **lower ceiling** than in 2022. The durable plays
are **being a recognized entity engines trust enough to cite** and **structuring content so it is
extractable** — which is exactly what Phases 4, 6, 7, 8 and 11 build.

See **§4 (already done — don't redo)** and **§5 (deliberately excluded)** before starting.

---

## 1. Current-state audit (grounded in the repo + 2026 verification)

Verified by reading the repo and the generated output on 2026-06-09.

| Area | Current state | Implication |
| --- | --- | --- |
| **Framework / host** | `hugo-book` theme (vendored, not a submodule). `baseURL https://21ideas.org/`. **CI `.github/workflows/hugo.yml` and `netlify.toml` both pin `HUGO_VERSION 0.144.2`; the local toolchain is `0.159.0`** (18 minor versions ahead). Two deploy paths exist; the GH Action sets `cname: 21ideas.org` → likely prod. | Confirm prod before wiring IndexNow (Phase 9). The **version skew** is a latent trap: code that "builds clean" in CI (0.144.2) can emit deprecation **warnings** locally (0.159) — and vice-versa for ≥0.160 features. See §8. |
| **Languages** | `defaultContentLanguage: ru` (no subdir → RU at root, EN at `/en/`). RU sets `languageCode: ru-RU`; **EN sets no `languageCode`**. | Bilingual correctness (hreflang, `og:locale`, `inLanguage`) matters — Phases 2/5. The `ru-RU` on RU only **region-locks** the RU half (bad for diaspora) — Phase 2. |
| **`<head>` / meta** | Theme `open-graph.html` emits `og:title/description/type/url` and `og:image` **only if `.Params.cover` exists**. `inject/head.html` (owned) adds `robots="index, follow"`, canonical, `keywords`, Umami, JSON-LD. | **No `og:locale`, `og:site_name`, Twitter cards, `article:*`, default OG image; weak `robots`.** Phase 1. |
| **OG image** | Coverless pages emit **no `og:image`** (verified: `/start/` → 0). | Every coverless page shares as a **blank card on Telegram** (the main distribution channel). Phase 1. |
| **`robots.txt`** | `static/robots.txt`: allow-all + explicit Googlebot/bingbot/YandexBot + AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended). | Good — and **more complete than the original plan's prose**: it already allows both *training* and *answer/search* bots. Keep; just document the distinction so the citation-critical search bots are never accidentally blocked (Phase 11). |
| **Sitemap** | Hugo `sitemapindex` → `/ru/sitemap.xml` + `/en/sitemap.xml`, with per-URL `lastmod` from git (`enableGitInfo`). | The "add lastmod" work is **already done**. But it **includes theme demo pages** — Phase 3. |
| **RSS** | Hugo internal RSS. Has `xmlns:atom`, `<language>ru-RU</language>`, `atom:link rel="self"`. `<description>` is a truncated summary; **no `<content:encoded>`**. | Language + self-link done. Full-content feed is **Deferred** (near-zero search value; see §5). |
| **JSON-LD** | `inject/structured-data.html` (owned): `BreadcrumbList` (non-home), `WebSite`+`SearchAction` & `Organization` (home), `Article` (posts/vestnik). Verified flaws: **`SearchAction` (inert since Nov 2024)**, **two separate `Organization` nodes** (home + Article `publisher`), **date-only** timestamps, **`author` only emitted when `.Params.author` exists, as a bare `Person.name`** (no `sameAs`, no fallback), `sameAs` = **GitHub only**, **SVG logo** (fine in 2026 — needs `width`/`height`, not rasterizing). | Solid foundation; the fixes changed — Phase 5. |
| **hreflang** | Theme `html-head.html` ranges `.Translations` → **other-language alternates only**, via `{{ default .Language.Lang .Site.LanguageCode }}` → RU emits **`ru-RU`**, EN emits **`en`** (asymmetric, region-locked RU). | **Bug:** no self-referential hreflang, no `x-default` → cluster may be ignored. Plus region-lock + a deprecated method. Phase 2. |
| **Content hygiene** | `content.{ru,en}/docs/example/**` are `hugo-book` demo pages — `hidden.md` is **Lorem-ipsum Latin**, plus `table-of-contents/`, `collapsed/3rd-level/4th-level`. All in sitemap + `llms.txt`. `docs/example/_index.md` was **repurposed** as the real "Главная/Добро пожаловать" intro. **`content.{ru,en}/menu/index.md` `relref` every demo page** (verified). | Placeholder/Latin content dilutes quality + crawl budget; the cornerstone intro sits on a junk slug. **Deleting the demo pages without first fixing `menu/index.md` breaks the build** — Phase 3. |
| **E-E-A-T / trust** | **No About / "who we are" / editorial-policy page** (the Contribute page is donations). **48 of 721** content files carry an `author:` string; rendered only as a bare name. **`.well-known/nostr.json` holds 7 real contributor identities** (`tony`, `almoo`, `radiokot`, `ncrashed`, `zap`, `vito`, `cemehbl4`) with npubs — **unused** for SEO. | For a **YMYL** topic this is the **single biggest gap**. Trust is the most important E-E-A-T signal and the site is effectively anonymous to crawlers. Phases 4–5. |
| **Topical structure** | Large evergreen corpus + 1,189-line glossary + `/bitcoin-myths/`, but **little internal interlinking / no topic hubs / no tag taxonomy**. | The corpus exists; the authority-concentrating link layer does not. Highest durable lever. Phase 6. |
| **Images / CWV** | `_markup/render-image.html` emits bare `<img>` — no `loading`/`decoding`/dimensions. **All ~1,685 content images live in `themes/hugo-book/static/img/`; project `static/img/` has 1 file; there is no `assets/` dir.** | LCP/CLS headroom — **but dimensions/responsive/AVIF are blocked** until images move to `assets/` or page bundles (Hugo can't process `static/` files). Phase 10. |
| **`llms.txt`/`llms-full.txt`** | Custom `home`-only outputs per language. | Cheap, harmless — but **no major AI engine is known to consume third-party `llms.txt`** (Google's Mueller: "comparable to the keywords meta tag"; ~408 of 500M AI-bot hits across a 90-day study). Keep the file; **Deferred** for further investment (§5). |
| **Verification / measurement** | **Yandex + Google Search Console** (GSC live as of 2026-06; 28-day baseline **590 clicks / 47.6k impressions / 1.2% CTR / avg position 13.8** — broad visibility, weak capture, stuck on page 2). **No Bing Webmaster.** | **Bing is the remaining gap — and it gates ChatGPT** (~87% of ChatGPT citations track Bing's index). Phase 0/9. The pos-13.8 / 1.2%-CTR baseline frames the work: climb to page 1 (Phases 6–7) + CTR-tune titles (Phase 8). |
| **Instant indexing** | **None.** | A discovery lever for the Yandex+Bing audience — but *medium* value at an evergreen cadence. Phase 9. |
| **Analytics** | Umami loaded; theme also calls `_internal/google_analytics.html` with no GA id → no-op. | Fine; rely on Umami. Optional cleanup in §8. |

---

## 2. Master priority list (best value-for-effort, re-weighted for 2026)

| # | Phase | Effort | Value | Type |
| --- | --- | :---: | :---: | :---: |
| 0 | Search Console + Bing + **Yandex** Webmaster (measure + region/tooling) | Trivial | 🔴 Foundational | manual + tiny code |
| 1 | Meta/OG/Twitter completeness + default OG image | Low | 🟠 Med-High *(social-share, not search)* | code |
| 2 | hreflang correctness (self + `x-default`, region-agnostic, fix deprecation) | Trivial | 🟠 Med-High | code |
| 3 | Content hygiene — prune demo pages + fix intro slug **+ menu links** | Low | 🟠 Med-High | content + code |
| 4 | **E-E-A-T & author/entity trust layer** *(new)* | Med | 🔴 High *(YMYL trust + AI-citation; not a ranking factor)* | content + code |
| 5 | Structured-data hardening & entity graph (drop `SearchAction`; author `Person`; Wikidata `sameAs`; `@graph`; ISO dates; `inLanguage`) | Low-Med | 🟠 Med-High | code |
| 6 | **Topical authority — internal linking, glossary interlinking, hubs, tags** *(promoted)* | Med | 🔴 High *(durable internal-link lever; not a "badge")* | content + code |
| 7 | AI-extractable content + freshness cadence *(new)* | Med (ongoing) | 🟠 Med-High | content + ops |
| 8 | **Yandex behavioral & Alice-AI optimization** *(new)* | Low (ongoing) | 🟠 Med-High *(grow under-developed RU/Alice channel)* | content + ops |
| 9 | IndexNow instant indexing (Yandex + Bing) *(demoted)* | Low-Med | 🟡 Med | code + CI |
| 10 | Core Web Vitals — images + alt/a11y | Low-Med *(Med w/ migration)* | 🟡 Med | code |
| 11 | Off-site distribution, brand & entity authority (brand mentions ≫ **Wikidata**) | Ongoing | 🔴 High *(slow; strongest verified AI lever)* | manual |
| 12 | Measurement & iteration (incl. AI-citation spot-checks) | Ongoing | 🟠 compounding | ops |
| — | **Deferred:** full-content RSS · `llms.txt` deep-refinement | — | ⚪ Low ROI | — |

**Reading the order.** Phases 0–3 and 5 are *trivial-to-low* effort and front-loaded because they
unblock measurement/sharing and fix bugs cheaply. The 🔴 **High durable levers — trust (4), off-site
brand/entity mentions (11), and extractable+fresh content (7); plus internal linking (6) and a *growth*
push on Yandex/Alice (8)** — are where a narrow evergreen site actually wins in 2026; they're spread
through the list because several depend on the cheap fixes first (e.g. Phase 5 marks up the author
entities Phase 4 creates). *Owner data (06-11) sets the weighting:* Google referrals ≫ Yandex (533 vs
150 / 30 days), so **Google is the proven primary** and Yandex (8) is a *growth* bet, not the dominant
channel. **Phases are largely independent** — a CI-comfortable contributor can ship Phase 9 (IndexNow)
anytime; a writer can start Phase 6/7 immediately. Phase 0 needs the owner's webmaster accounts.

---

## 3. The phased plan

### Phase 0 — Search Console + Bing + Yandex Webmaster *(manual + tiny code; FOUNDATIONAL)*

**Goal:** be able to *measure*. You already have Yandex verification **and Google Search Console** (live,
2026-06) — the remaining gap is **Bing**, which matters more than its ~4% market share implies because
**ChatGPT Search citations track Bing's index ~87%** (Seer), so Bing inclusion gates your largest AI
surface. DuckDuckGo/Brave also ride Bing. You can't tune titles or catch schema/coverage errors without
these dashboards.

**Effort:** Trivial. **Value:** Foundational (unlocks Phases 5, 6, 8, 12). **Depends on:** nothing — do first.

**Steps:**
1. **Google Search Console — ✅ DONE (verified live 2026-06-11).** Already set up and reporting (28-day
   baseline: 590 clicks / 47.6k impressions / 1.2% CTR / avg position 13.8). Nothing to do except confirm
   the **Domain property** covers both languages and the sitemap is submitted. Treat the baseline as the
   Phase 12 starting line — the low CTR at avg position ~14 is the problem statement for Phases 6–8.
2. **Bing Webmaster Tools** — add the site, **"Import from GSC"**, submit the sitemap. **Generate the
   IndexNow key here** (or `openssl rand -hex 16`) for Phase 9.
3. **Yandex Webmaster (the priority engine for this audience — do the RU-specific setup now):**
   - Confirm the sitemap is submitted and check the structured-data report
     (`webmaster.yandex.com/tools/microtest/`).
   - **Set Site region = "No region" (geo-independent).** *Display in search → Site region → "No
     region."* This is the correct call for a **global RU diaspora** site whose content matches
     geo-independent (educational) queries. **Do not pin it to Russia** — that suppresses it for
     diaspora queries from other countries. (Status takes ~2 weeks.)
   - Note two tools for later: **"Reindex pages" / "Переобход"** (manual recrawl nudge — the fallback
     when IndexNow isn't wired) and **ICS / ИКС (Site Quality Index)**, a monthly site-health score to
     *watch* (it's an output of doing everything else right, not a button).
4. **If you prefer meta-tag verification over DNS** for Google/Bing, add to the owned
   `layouts/partials/docs/inject/head.html` (public tokens, safe to commit):
   ```go-html-template
   <meta name="google-site-verification" content="REPLACE_ME">
   <meta name="msvalidate.01" content="REPLACE_ME">
   ```
   (DNS Domain property is cleaner — prefer it.)

**Acceptance:** all three dashboards verified and showing the sitemap accepted; Yandex region set to
"No region"; the IndexNow key recorded for Phase 9.

---

### Phase 1 — Meta / OpenGraph / Twitter completeness + default OG image *(code; low effort)*

**Goal:** stop leaving free *social-share* signals on the table. Every shared link should render a rich
card (you distribute via **Telegram** and Nostr), and every page should be eligible for large image
previews. **Frame the value as share-CTR, not Google ranking** — OG/Twitter tags are not a search
ranking factor; they drive the click when the link is posted.

**Effort:** Low. **Value:** Med-High (social distribution). **Depends on:** nothing.

**Files:** `layouts/partials/docs/open-graph.html` (**new override** of the theme partial),
`layouts/partials/docs/inject/head.html` (owned), `config.yaml`, plus a new
`static/img/og-default.png` (1200×630).

**Steps:**

1. **Create a default OG image** at `static/img/og-default.png` (1200×630, on-brand) and register it:
   ```yaml
   params:
     ogImage: /img/og-default.png   # fallback social card for coverless pages
     ogSiteName: "21ideas"
   ```
   **Keep it small and use JPEG:** ship **one 1200×630 JPEG ≤250 KB** (WhatsApp silently drops previews
   above ~300 KB *and* caches the failure ~7 days; LinkedIn rejects WebP — so JPEG, not PNG/WebP, is the
   safe primary). Telegram caps ~5 MB but renders snappier well under 1 MB; X/LinkedIn 5 MB, FB 8 MB.
   Note on X *(updated 06-11)*: the large card now shows **image + a small overlaid headline but no
   description** (the description panel is permanently gone since Oct 2023) — so bake the logo + tagline
   (and ideally the headline) into the image so it communicates on its own.

2. **Override `layouts/partials/docs/open-graph.html`** (copy the theme file, replace its body). Adds
   `og:locale`(+alternate), `og:site_name`, a **default-image fallback**, **structured `og:image:*`**,
   full **Twitter card** tags, and **`article:*`** for posts/vestnik:
   ```go-html-template
   {{- /* Resolve the social image: page cover → site default */ -}}
   {{- $img := "" -}}
   {{- with .Params.cover }}{{ $img = printf "%s%s" (trim $.Site.BaseURL "/") . }}{{ end -}}
   {{- if not $img }}{{ with .Site.Params.ogImage }}{{ $img = printf "%s%s" (trim $.Site.BaseURL "/") . }}{{ end }}{{ end -}}
   {{- $locale := cond (eq .Language.Lang "en") "en_US" "ru_RU" -}}

   <meta property="og:title" content="{{ with .Params.OGTitle }}{{ . }}{{ else }}{{ .Title }}{{ end }}" />
   <meta property="og:description" content="{{ with .Params.OGDescription }}{{ . }}{{ else }}{{ with .Description }}{{ . }}{{ else }}{{ with .Params.list_description }}{{ . }}{{ end }}{{ end }}{{ end }}" />
   <meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}" />
   <meta property="og:url" content="{{ .Permalink }}" />
   <meta property="og:site_name" content="{{ .Site.Params.ogSiteName | default .Site.Title }}" />
   <meta property="og:locale" content="{{ $locale }}" />
   {{- range .Translations }}
   <meta property="og:locale:alternate" content="{{ cond (eq .Language.Lang "en") "en_US" "ru_RU" }}" />
   {{- end }}
   {{- with $img }}
   <meta property="og:image" content="{{ . }}" />
   <meta property="og:image:alt" content="{{ $.Title }}" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   {{- end }}

   {{- /* Article metadata — posts + vestnik */ -}}
   {{- if and .IsPage (or (eq .Section "posts") (eq .Section "vestnik")) }}
   {{- with .Date }}<meta property="article:published_time" content="{{ .Format "2006-01-02T15:04:05Z07:00" }}" />{{ end }}
   {{- with .Lastmod }}<meta property="article:modified_time" content="{{ .Format "2006-01-02T15:04:05Z07:00" }}" />{{ end }}
   {{- with .Params.author }}<meta property="article:author" content="{{ . }}" />{{ end }}
   <meta property="article:section" content="{{ .Section }}" />
   {{- range .Params.tags }}<meta property="article:tag" content="{{ . }}" />{{ end }}
   {{- end }}

   {{- /* Twitter card — twitter:card is still required; OG alone renders the SMALL card on X */ -}}
   <meta name="twitter:card" content="{{ if $img }}summary_large_image{{ else }}summary{{ end }}" />
   <meta name="twitter:title" content="{{ with .Params.OGTitle }}{{ . }}{{ else }}{{ .Title }}{{ end }}" />
   <meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{ with .Params.list_description }}{{ . }}{{ end }}{{ end }}" />
   {{- with $img }}<meta name="twitter:image" content="{{ . }}" /><meta name="twitter:image:alt" content="{{ $.Title }}" />{{ end }}
   ```
   - **`og:locale` keeps the underscore + territory** (`ru_RU`/`en_US`) — that's the OGP spec, and is
     *separate* from (and need not match) the region-agnostic hreflang `ru`/`en` in Phase 2.
   - **Correctly omit `twitter:site`/`twitter:creator`** unless a real @handle exists — an empty value
     *breaks* the card fallback. Add them only if 21ideas commits to an X account.

3. **Upgrade the `robots` meta** in `inject/head.html` — replace `index, follow` with:
   ```go-html-template
   <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
   ```
   (`max-image-preview:large` is what makes Google **and Yandex** show the large thumbnail.)

**Acceptance:** view-source any page → `og:locale`, `og:site_name`, `twitter:card`, and an `og:image`
(+`og:image:width/height/alt`) present even with no `cover`; a posts/vestnik page additionally emits
`article:published_time`; `robots` carries `max-image-preview:large`. Paste a coverless URL into the
Telegram/X/Facebook debugger → a card with the default image renders. **Telegram caches previews for
days** — for URLs shared *before* this ships, force a refresh by messaging **@WebpageBot** the link (or
append `?v=2`). `hugo --minify` builds clean.

---

### Phase 2 — hreflang correctness (self-referential + `x-default`, region-agnostic) *(code; trivial)*

**Goal:** fix a real bilingual-SEO bug. The theme ranges `.Translations` (excludes the current page),
so each page advertises the *other* language but **not itself**, with **no `x-default`** — and clusters
must be **bidirectional + self-referential** or Google may ignore the annotations. Two extra defects
the original plan missed: the RU side is **region-locked to `ru-RU`** (wrong for a diaspora), and the
proposed code used **`.Language.LanguageCode`, deprecated in Hugo 0.158** (the local toolchain is
0.159, so it warns — violating "builds clean"). *(Bonus, 06-11: putting hreflang in `<head>` — which this
does — is now **required for Yandex too**, since Yandex dropped support for sitemap-based hreflang.)*

**Effort:** Trivial. **Value:** Med-High (bilingual ranking). **Depends on:** nothing.

**Files:** `layouts/partials/docs/inject/head.html` (owned); `config.yaml` (one-line removal).

**Steps:**
1. In the owned partial, add only the **missing** self + `x-default` links, using **`.Language.Lang`**
   (→ `ru`/`en`: region-agnostic for the diaspora **and** non-deprecated):
   ```go-html-template
   {{- /* hreflang: theme html-head.html already emits OTHER-language alternates via .Translations.
          Add the missing self-referential link + a single x-default (default lang = ru).
          .Language.Lang → "ru"/"en": region-agnostic AND avoids the .Language.LanguageCode
          deprecation warning on Hugo >= 0.158 (local toolchain is 0.159). */ -}}
   <link rel="alternate" hreflang="{{ .Language.Lang }}" href="{{ .Permalink }}">
   {{- range .AllTranslations -}}
     {{- if eq .Language.Lang "ru" }}
     <link rel="alternate" hreflang="x-default" href="{{ .Permalink }}">
     {{- end -}}
   {{- end -}}
   ```
   `.AllTranslations` **includes** the current page, so it always contains the RU variant (the RU page
   itself, or the RU translation of an EN page) → `x-default` resolves in all three cases (RU page, EN
   page, RU-only `vestnik` page) with no duplicate tag.
2. **Remove `languageCode: ru-RU` from `config.yaml`** (RU block). The theme's other-language
   alternates use `{{ default .Language.Lang .Site.LanguageCode }}`, which emits `ru-RU` *only because*
   this is set; removing it makes the **whole cluster** consistent region-agnostic `ru`/`en`. (Region
   targeting belongs in Yandex Webmaster — Phase 0 "No region" — not in the language code.) If you ever
   genuinely want regions, migrate to Hugo's non-deprecated `locale:` key instead — but for a diaspora
   audience, **don't**.
3. **`x-default` → the RU (default-language) root is correct** here: there is no language-selector
   page, and RU is the primary content. No selector needs building.
4. *(Optional, more robust)* Instead of relying on the theme loop, override `html-head.html` to emit
   the **entire** cluster from one place: `{{ range .AllTranslations }}<link ... hreflang="{{ .Language.Lang }}" ...>{{ end }}` + the `x-default`. Only do this if you're comfortable patching the vendored theme; Step 1 is the smaller change.

**Acceptance:** view-source an EN page → `hreflang="en"` (self) **and** `hreflang="ru"` (theme, now
region-agnostic) **and** `hreflang="x-default"`. A translated RU page → `ru` (self) + `en` + `x-default`.
A RU-only page → `ru` + `x-default`. No `ru-RU` anywhere; no duplicate hreflang for one language. **Note
(06-11): GSC's International Targeting / hreflang report was retired — validate with Screaming Frog or
Ahrefs, not GSC.** Confirm the `canonical` stays **self-referential per page** (a canonical pointing every
language at the RU master silently *breaks* hreflang — the repo currently emits `canonical = .Permalink`,
which is correct; don't regress it). `hugo --minify` builds clean **with no deprecation warning**.

---

### Phase 3 — Content hygiene: prune demo pages + fix the intro slug + menu links *(content + code; low effort)*

**Goal:** remove **Lorem-ipsum Latin placeholder pages** from the index and give the cornerstone intro
a real URL. Placeholder/thin content dilutes quality signals and wastes crawl budget; `/docs/example/`
is a poor slug for the site's welcome page.

**Effort:** Low. **Value:** Med-High. **Depends on:** nothing.

> **⚠️ Build-break warning (verified).** Both `content.ru/menu/index.md` and `content.en/menu/index.md`
> `relref` **every** demo page (`/docs/example`, `/docs/example/table-of-contents/**`,
> `/docs/example/collapsed/**`). **Deleting the demo pages without first editing these two menu files
> will fail `hugo --minify`** on the broken `relref`. The original plan only mentioned the homepage
> button — this is the load-bearing fix.

**Steps:**
1. **Fix the side-nav first:** edit `content.ru/menu/index.md` and `content.en/menu/index.md` — remove
   the demo `relref` lines (the Table-of-Contents / Collapsed scaffolding) and repoint the top
   "Main Page / Example Site" entry to the relocated intro slug from Step 3. *(Aside: EN still labels it
   "Example Site" — rename to a real label like "Welcome/Introduction.")*
2. **Delete the genuine demo subpages** (both languages):
   `content.{ru,en}/docs/example/{hidden.md, table-of-contents, collapsed}`. Pure theme scaffolding
   with placeholder Latin text.
3. **Relocate the repurposed intro** off `/docs/example/`. In `docs/example/_index.md` front matter:
   ```yaml
   url: /docs/intro/        # or /vvedenie/ ; pick a meaningful slug
   aliases: [/docs/example/]
   ```
   Then update the homepage "Введение" button in `content.{ru,en}/_index.md` from
   `{{</* button relref="/docs/example/" */>}}` to the new path.
4. **Belt-and-suspenders sitemap exclusion** for anything you want crawlable-but-not-listed:
   ```yaml
   sitemap: { disable: true }      # Hugo >= 0.125
   # or: build: { list: never, render: link }
   ```
   Note: `bookHidden: true` only hides from the **theme menu** — it is **not** noindex/sitemap-exclusion.

**Acceptance:** `hugo --minify` builds clean (no broken `relref`); `grep -r 'docs/example'
public/*/sitemap.xml` → empty (or only the aliased redirect); no Latin Lorem-ipsum page builds; the
intro resolves at the new slug and the old path aliases to it; `llms.txt` no longer lists demo pages.

---

### Phase 4 — E-E-A-T & author/entity trust layer *(content + code; the biggest 2026 gap)*

**Goal:** make the site *trustworthy to crawlers, AI engines, and readers*. Bitcoin/finance is **YMYL
(Your Money or Your Life)** — Google applies its **most rigorous** rater standards, and of E-E-A-T,
**Trust is explicitly the most important** dimension. **Framing corrected (06-11):** E-E-A-T is a
*quality-rater* concept, **not a direct ranking factor** — Google (Sullivan, 2024) says there is no
E-E-A-T score and author bios are "too easy to fake" to be a ranking signal. So this phase is *not* a
"do bios → rank higher" play. Its real payoff is threefold: **(a)** the baseline **trust artifacts**
(About/editorial page, transparency) that YMYL raters and cautious users look for; **(b)** **AI-citation
eligibility** — answer engines preferentially cite **resolvable, named entities**; and **(c)** feeding
the **off-site reputation engine** (Phase 11), which *is* the real ranking proxy. The site is currently
anonymous to crawlers despite **7 real, verifiable contributor identities** sitting unused in
`.well-known/nostr.json`. (Pseudonymity is fine — confirmed not disqualifying for technical/educational
crypto; see step 2.)

**Effort:** Med. **Value:** High (durable; foundational for Phases 5, 6, 11). **Depends on:** nothing
(but pairs with Phase 5, which marks up what you create here).

**Steps:**
1. **Add an "About / О проекте" page** (both languages): who runs the site, the mission, **how content
   is reviewed/vetted, how to report errors, funding/transparency** (the donations/Contribute page is
   *not* a substitute). Link it from the footer and main nav. This is the baseline YMYL trust artifact
   Google looks for.
2. **Author bio pages** for recurring contributors (e.g. `/authors/<handle>/`), each a short bio +
   areas of expertise + links. Seed identities from `.well-known/nostr.json` (`tony`, `almoo`,
   `radiokot`, `ncrashed`, `zap`, `vito`, `cemehbl4`). **Pseudonymity is fine in Bitcoin culture** —
   the goal is **consistent, cross-linked, verifiable entities**, not legal names (trust ≠ doxxing).
3. **Wire bylines** on `posts`/`vestnik` to link the author name → their bio page.
4. **References/sources discipline** on YMYL articles: cite primary sources inline; concrete
   facts/figures with attribution. (Only ~16 posts currently have a sources section.)
5. Front-matter convention so Phase 5 can emit a proper `Person` (e.g. `author`, `author_url`,
   `author_sameas: [ ... ]`).

**Acceptance:** an About + editorial-info page exists in both languages and is linked sitewide; recurring
authors have bio pages with at least one external `sameAs` each; bylines link to them; a sample of
YMYL articles cites sources. (Schema for these entities lands in Phase 5.)

---

### Phase 5 — Structured-data hardening & entity graph *(code; low-med effort)*

**Goal:** make the JSON-LD correct for 2026, **drop the dead bits**, and turn the author/Org data into a
resolvable **entity graph** (the part that actually helps Google's Knowledge Graph + AI citation).
Primary benefit is **rich-results eligibility + entity disambiguation** — *not* a direct AI-citation
lever (controlled studies show AI engines extract visible HTML, not JSON-LD; schema "won't make a site
rank better"). Do it for correctness and entity-resolution, not as a citation hack.

**Effort:** Low-Med. **Value:** Med-High. **Depends on:** Phase 4 (author entities to mark up).

**Files:** `layouts/partials/docs/inject/structured-data.html` (owned).

**Steps — apply these fixes:**
1. **DROP the `WebSite` `SearchAction` / `potentialAction` subtree.** Google **retired the sitelinks
   search box on 2024-11-21** (docs removed Nov 29); the markup *"won't be used by Google."* It is
   inert. Keep a slimmed `WebSite` node (`name`, `url`, `inLanguage`) — the site-name feature still
   uses it. *(Yandex offers a search box only for `yandex.ru`-registered sites — not worth keeping the
   markup solely for that.)*
2. **DROP the "convert logo to raster" task — it is false in 2026.** Google's Organization doc (updated
   2026-04-15) lists **SVG among supported logo formats** (BMP, GIF, JPEG, PNG, WebP, **SVG**, AVIF).
   The existing `logo_black.svg` is valid. Instead, **add `width`/`height` to the logo `ImageObject`**:
   ```go-html-template
   {{- $logo := dict "@type" "ImageObject" "url" (printf "%ssvg/logo_black.svg" .Site.BaseURL) "width" 512 "height" 512 -}}
   ```
   (Use the SVG's real intrinsic box; ensure it isn't robots-blocked.)
3. **Full ISO-8601 timestamps** (not date-only) on `Article`:
   ```go-html-template
   "datePublished" (.Date.Format "2006-01-02T15:04:05Z07:00")
   "dateModified"  (.Lastmod.Format "2006-01-02T15:04:05Z07:00")
   ```
4. **Add `inLanguage`** to `Article` and `WebSite`, using the hreflang-consistent value:
   ```go-html-template
   "inLanguage" .Language.Lang   {{/* ru / en — matches Phase 2 */}}
   ```
5. **Author as a real `Person` entity** (the highest-ROI schema upgrade for an expertise site). Replace
   the bare `Person.name` with a node carrying `@id`, `url` (the Phase 4 bio page), and **`sameAs`**
   (Nostr `njump.me/<npub>`, GitHub, X — from Phase 4). **Always emit an author** — fall back to the
   `Organization` when no person is set (currently no author is emitted at all without the param).
6. **Consolidate into a single `@graph` with stable `@id`s.** Today the home `Organization` and the
   `Article.publisher` `Organization` are **two separate nodes**; unify them as
   `https://21ideas.org/#organization` and point `publisher`/`author.worksFor` at it. Cleaner and
   de-duplicated; Google flattens `@graph` to the same node set and recommends `@id` cross-refs.
7. **Expand `Organization.sameAs`** beyond GitHub: real **Telegram/Nostr/X** profiles (from the
   footer/`.well-known/nostr.json`) **and the Wikidata Q-ID *if/once* it exists** (Phase 11 — demoted to
   optional there; see the reweight). The higher-value `sameAs` targets are the real external profiles,
   not Wikidata.
8. *(Optional, AI/Yandex-oriented)* On genuinely course-structured material, `Course`/`LearningResource`
   (with `about`/`teaches`/`educationalLevel`, `isAccessibleForFree: true`) is valid and helps
   AI/entity understanding — but note the Google *course* rich result was retired (June 2025) and the
   Course-List carousel needs ≥3 courses, so treat this as an **entity/AI** play, not a Google rich
   result. `isAccessibleForFree`/`mainEntityOfPage` are harmless but **low-value** (Google's Article
   doc no longer lists them; `url` already covers the page) — add cheaply or skip.

**Acceptance:** Google **Rich Results Test** + **Schema.org** + **Yandex** validators → zero errors on
the home page and a posts/vestnik page; a single `@graph` with one `Organization`; `Article` shows
full-ISO dates, `inLanguage`, and a `Person` author with `sameAs`; no `SearchAction` remains.

---

### Phase 6 — Topical authority: internal linking, glossary interlinking, hubs & tags *(content + code; promoted)*

**Goal:** build the internal-link layer that turns the existing corpus into a navigable, deeply-covered
topic graph. **Framing corrected (06-11):** there is **no "topical-authority badge"** Google awards for
interlinking a cluster — Mueller explicitly debunked that ("no basis in reality"), and Google's only
official *topic-authority system* is scoped to **News** (I could not verify any "March 2026 core update
crystallising topical authority" — that phrasing matches the AI-generated SEO spam this re-audit flagged).
What's *real*: internal linking is a genuinely valuable, fully-controllable signal (Mueller: "internal
linking is super critical to SEO"), deep first-hand coverage of a narrow topic helps, and good cross-links
raise depth-per-visit (which **does** serve Yandex's behavioral factors — Phase 8). So keep every action
below — just win on **coverage, originality, and usefulness**, not interlink density or a mythical
authority score. The glossary-interlinking step is the single highest value-for-effort item in the plan.

**Effort:** Med. **Value:** High (durable). **Depends on:** Phase 3 (clean structure).

**Steps / options (roughly in value order):**
1. **Glossary interlinking (quick win).** You have a 1,189-line glossary — link jargon in articles to
   its definitions. Classic hub-and-spoke that builds authority *and* dwell. Highest value-for-effort
   item in the plan.
2. **Related content** at the foot of `posts`/`vestnik` (`.Site.RegularPages.Related` or tag-overlap) —
   more internal links + dwell.
3. **Tag taxonomy + topic hubs.** Add `taxonomies: {tag: tags}` and curated pillar/hub pages (mining,
   Lightning, privacy, custody, regulation) **only where a tag has enough articles to be substantial.**
   `noindex` thin/auto-generated tag and archive pages — the Jan 2025 rater guidelines treat *even a
   single* low-effort, unoriginal page as lowest-quality, so thin tag pages are a net site-quality
   *liability*, not a free win. Each *substantial* hub is an indexable topic landing page concentrating
   internal links and topical signal.
4. **Visible breadcrumb UI** mirroring the existing `BreadcrumbList` JSON-LD (you emit the schema —
   surface it for users + crawlers).

**Acceptance:** glossary terms link from articles; related/hub pages exist and are non-thin; internal
link depth measurably increases; GSC shows hubs indexed.

---

### Phase 7 — AI-extractable content + freshness cadence *(content + ops; new)*

**Goal:** make pages easy for AI answer engines (Google AI Overviews/AI Mode, ChatGPT Search,
Perplexity, **Yandex Alice**) to *extract and cite*, and counter the citation decay that hits even
evergreen pages. This is a **content-authoring discipline**, not a markup task.

**Effort:** Med (ongoing). **Value:** Med-High. **Depends on:** Phase 4 (trust) — engines cite trusted,
well-structured sources.

**Steps:**
1. **Answer-first structure + the best-evidenced GEO levers.** Open each section with a direct,
   self-contained answer that makes sense quoted in isolation, under clear H2/H3 headings phrased as the
   question a reader would ask. **The strongest *experimentally-validated* tactic** (Princeton "GEO," KDD
   2024, peer-reviewed, n=10k): adding **concrete statistics, sourced quotations, and inline citations**
   each raised generative-engine visibility **~30–40%**, and the lift was **largest for lower-authority
   sites** (up to ~115%) — i.e., exactly this site. So pack cornerstone pages with **sourced figures,
   short quotes from authoritative Bitcoiners/papers, and citations**, and use **comparison tables** for
   "X vs Y" topics (custodial vs non-custodial, on-chain vs Lightning). **Do *not* keyword-stuff or write
   promotionally** — both measurably *hurt* in the same study. *(Caveat: that study predates current
   engines — directionally strong, not freshly replicated. ~55% of AI-Overview citations still come from
   the top third of a page, but clean Q&A blocks get cited from deep positions too.)*
2. **Lean on native formats you already have.** The **glossary** and **`/bitcoin-myths/`** pages are
   ideal AI-citation shapes (definitional + question-framed) — expand and interlink them.
3. **FAQ as *content*, not markup-for-rich-results *(corrected 06-11)*.** Q&A sections help AI
   extraction — but FAQ *rich results* are now gone on **both** engines (Google removed them 2026-05-07;
   Yandex has no FAQPage rich result — see Phase 8), so the markup yields **no SERP feature**. Write the
   visible Q&A for readers and AI extraction; don't add `FAQPage` markup *expecting a rich snippet*.
4. **Freshness cadence for "evergreen."** AI citations to a page drop sharply after ~13 weeks without
   an update, and Bitcoin has facts that age (fees, fork status, tooling). Adopt a lightweight schedule:
   **substantive (not cosmetic) refresh of cornerstone pages ~every 6 months**, full audit every 12–18
   months, with a visible **"last reviewed / what changed"** note. `enableGitInfo` already gives honest
   `dateModified` (Phase 5) — don't fake-edit to game it.

**Acceptance:** cornerstone pages open with extractable direct answers and clear heading hierarchy; a
documented review cadence exists; "last reviewed" notes appear on refreshed pages. Spot-check by asking
ChatGPT/Perplexity/Alice a few target RU Bitcoin questions and seeing whether 21ideas is cited
(baseline for Phase 12).

---

### Phase 8 — Yandex behavioral & Alice-AI optimization *(content + ops; RU-primary; new)*

**Goal:** grow the **under-developed** Yandex/Alice channel. **Reality check (owner data, 2026-06-11):**
trailing-30-day referrals are **Google 533 vs Yandex 150** — for this *global diaspora*, **Google is the
proven primary**, not Yandex (Yandex's ~60–70% share holds *inside Russia*, not abroad). But the low
Yandex number may be **under-investment, not a low ceiling** — so this phase is framed as *growth*,
measured by the new Alice-visibility panel (Phase 12), not as optimizing an already-dominant engine. It's
cheap because it mostly **reframes** other phases. Yandex weights **behavioral/user factors** heavily (the
2023 leak exposed CTR, dwell, and **return-to-SERP as a strong negative**), and its neural models (YATI)
reward **semantic depth and full coverage** — which an evergreen educational corpus is built for.

**Effort:** Low (ongoing; mostly reframes other phases). **Value:** High (RU-primary). **Depends on:**
Phases 1, 6, 7.

**Steps:**
1. **CTR is the highest-leverage on-page lever for Yandex** — elevate it from a Phase-12 afterthought.
   Write compelling, accurate `<title>` + meta `description` for every cornerstone page; iterate using
   GSC/Yandex impression-vs-CTR data (Phase 12).
2. **Dwell / no-return-to-SERP:** strong intros that satisfy intent immediately (Phase 7), and internal
   links that keep readers on-site (Phase 6). **Do not buy or fake behavioral traffic** — Yandex's PF
   filter is purpose-built to catch it and penalize.
3. **Alice (Нейро merged into Алиса, 22 May 2025) cites high-ranking, EPOS-quality pages.** *(Corrected
   06-11: there is no documented "organic top-30 → Alice citation" rule — the official "top 30" applies to
   the Organization* address *snippet, not Alice.)* There is **no separate "Yandex AI SEO"** — winning
   Alice citations = ranking organically on the primary + adjacent intents (steps 1–2) + extractable
   structure (Phase 7) + meeting **EPOS**. **EPOS is an *official* Yandex framework**
   (`yandex.ru/support/webmaster/ru/epos`), not an SEO-community coinage — Yandex itself ties it to
   inclusion in Alice's neuro-answers: **Э**кспертность (expertise — qualified authors, cited sources →
   Phase 4), **П**олезность (usefulness — clean readable layout, no intrusive banners), **О**ригинальность
   (originality — unique facts/cases, not rewrites), **С**одержательность (substance — dense, no filler).
4. **`FAQPage`/`QAPage` markup is now a *content* aid, not a SERP feature on either engine *(corrected
   06-11)*.** Google removed FAQ rich results entirely (2026-05-07); Yandex has **no `FAQPage` rich
   result** — only a best-effort mobile `QAPage` snippet that, per RU sources, largely stopped firing (it
   was partly tied to the now-dead Turbo pages). So expect **no extra SERP real estate** from it. Still
   worth writing the **visible Q&A** (it aids AI extraction — Phase 7) and the markup is harmless; just
   don't budget effort *expecting a rich snippet*, and never bolt it onto non-FAQ pages.
5. **Region = "No region"** (set in Phase 0) and region-agnostic hreflang (Phase 2) keep the diaspora
   reachable; never pin to Russia.

**Acceptance:** cornerstone titles/descriptions are CTR-tuned; Q&A markup present only where real Q&A
exists (and not expected to yield a SERP feature); the Yandex Webmaster **"Видимость сайта в Алисе AI"**
panel (live since 2026-04-07) shows the site cited for target queries with its share trending up; ICS/ИКС
trends stable-or-up.

---

### Phase 9 — IndexNow instant indexing (Yandex + Bing) *(code + CI; demoted to Medium)*

**Goal:** notify **Yandex AND Bing** instantly on change (Google does **not** participate — fine; it
rides the sitemap). **Value re-rated High→Medium:** IndexNow's payoff scales with *publishing cadence*;
for an **evergreen** site that publishes infrequently, the marginal gain over normal recrawl is modest.
Still worth wiring (cheap to run once built; helps the RU/Bing cohort) — just don't let CI plumbing
precede the trust/content work, and it can be done independently by a CI-comfortable contributor.

**Effort:** Low-Med. **Value:** Med. **Depends on:** Phase 0 (the key).

**Files:** `static/<KEY>.txt` (**new**, committed — public by protocol, *not* a secret),
`.github/workflows/hugo.yml` (add a step).

> **Deploy-path note:** both `netlify.toml` and the GH Pages workflow exist. The steps assume the **GH
> Action is production** (it owns the CNAME). If Netlify is prod, run the same submit logic from a
> Netlify `onSuccess` plugin or a scheduled Action reading the **live** sitemap.

**Steps:**
1. **Key file.** Create `static/<KEY>.txt` whose entire body is the key (32 hex chars, no trailing
   newline). Deploys to `https://21ideas.org/<KEY>.txt`.
2. **Full-depth checkout** (needed for accurate `enableGitInfo` lastmod *and* this step; also bump the
   deprecated `actions/checkout@v2`):
   ```yaml
       - uses: actions/checkout@v4
         with:
           fetch-depth: 0
   ```
3. **After Deploy**, submit changed URLs. Improvements over the original draft: **POST a single bulk
   `urlList`** (up to 10,000 URLs) instead of N GETs — one request, avoids the runner's shared-IP 429s —
   and **submit to Yandex's own endpoint** (`https://yandex.com/indexnow`, which is what Yandex
   documents) in addition to Bing/shared, so delivery to the priority engine is reliable:
   ```yaml
       - name: Notify IndexNow (Yandex + Bing)
         env:
           INDEXNOW_KEY: "<KEY>"      # public IndexNow key (safe to commit)
         run: |
           python3 - <<'PY'
           import os, glob, datetime, json, urllib.request
           import xml.etree.ElementTree as ET
           key = os.environ["INDEXNOW_KEY"]; host = "21ideas.org"
           ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
           today = datetime.date.today().isoformat()
           urls = set()
           for sm in glob.glob("public/**/sitemap.xml", recursive=True):
               try: root = ET.parse(sm).getroot()
               except Exception: continue
               for u in root.findall(".//s:url", ns):
                   loc = u.findtext("s:loc", default="", namespaces=ns)
                   lm  = u.findtext("s:lastmod", default="", namespaces=ns)
                   if loc and lm[:10] == today:      # changed in this build (git-driven lastmod)
                       urls.add(loc)
           urls = sorted(urls)
           print(f"IndexNow: {len(urls)} changed URL(s)")
           if not urls: raise SystemExit
           body = json.dumps({"host": host, "key": key,
                   "keyLocation": f"https://{host}/{key}.txt", "urlList": urls}).encode()
           for ep in ("https://yandex.com/indexnow", "https://www.bing.com/indexnow"):
               try:
                   req = urllib.request.Request(ep, data=body,
                           headers={"Content-Type": "application/json; charset=utf-8"})
                   urllib.request.urlopen(req, timeout=30); print("  ✓", ep)
               except Exception as e:
                   print("  ✗", ep, e)
           PY
   ```
   **Why sitemap-lastmod** (not `git diff` of `content/*.md`): Hugo remaps content→URL non-trivially;
   the generated sitemap gives the real URLs, and `enableGitInfo` sets `lastmod == today` exactly for
   pages changed in this push. Caveat: a **same-day re-deploy** would re-ping unchanged-but-rebuilt
   pages; Yandex asks not to resubmit the same URL more often than every ~10 min, so avoid rapid
   re-deploys (or gate on `git diff` if it becomes a problem). Don't blind-resubmit the whole site.

**Acceptance:** after a content push, the step logs `✓` for both endpoints; within minutes the URLs
appear in **Bing Webmaster → URL submission / IndexNow** and **Yandex Webmaster → Indexing → IndexNow**.
(IndexNow *notifies*; it doesn't *guarantee* indexing.)

---

### Phase 10 — Core Web Vitals: images + alt/a11y *(code; low-med, partly blocked)*

**Goal:** CWV is a *light* 2026 ranking tiebreaker and a Yandex behavioral input (slow pages → bounce).
A static Hugo site is **INP-safe by construction** (INP replaced FID in March 2024; no heavy JS), so
effort rightly targets **LCP** (hero image) and **CLS** (missing dimensions). Also fold in an **alt-text
pass** — it serves both accessibility and machine extraction.

**Effort:** Low-Med for lazy/decoding/alt (shippable now); **Med** for dimensions/responsive (needs the
image migration below). **Value:** Med. **Depends on:** nothing for the cheap part.

> **⚠️ The original Phase-8 code cannot set dimensions on this repo (verified).** It used
> `resources.Get (path.Join "static" $src)`, but (a) `resources.Get` reads **`assets/`**, never
> `static/`, and (b) **this repo has no `assets/` dir and the ~1,685 content images live in the
> *theme's* `static/img/`**, not the project's. So no template trick yields width/height until the
> images move. The lazy/decoding attributes work; the CLS-fixing dimensions silently don't. Also, hero
> auto-detection via `.Ordinal` needs **Hugo ≥ 0.160** (CI is 0.144.2) — not implementable in the hook.

**Files:** `layouts/_default/_markup/render-image.html` (**new override**); the `image` shortcode
(`themes/hugo-book/layouts/shortcodes/image.html`).

**Steps:**
1. **Ship the cheap wins now** — override the render hook to add `loading="lazy"`, `decoding="async"`,
   and `alt` (use `.PlainText`, matching Hugo's embedded hook). Fail-safe snippet that *also* emits real
   dimensions the day images move to `assets/`/page bundles, with a clearly-removable theme-static
   stopgap:
   ```go-html-template
   {{- $u := urls.Parse .Destination -}}
   {{- $src := $u.String -}}{{- $w := 0 -}}{{- $h := 0 -}}
   {{- /* 1) Resource path: page bundle, then assets/ — works once images move there */ -}}
   {{- if not $u.IsAbs -}}
     {{- $path := strings.TrimPrefix "./" $u.Path -}}
     {{- with or (.PageInner.Resources.Get $path) (resources.Get $path) -}}
       {{- $src = .RelPermalink -}}{{- $w = .Width -}}{{- $h = .Height -}}
     {{- end -}}
   {{- end -}}
   {{- /* 2) STOPGAP for absolute /img/... in THEME static (no assets/ today).
          images.Config reads the OS working dir, so reach the theme mount explicitly.
          DELETE this block after migrating images to assets/. */ -}}
   {{- if and (eq $w 0) (strings.HasPrefix $u.Path "/") -}}
     {{- with (images.Config (printf "themes/hugo-book/static%s" $u.Path)) -}}
       {{- $w = .Width -}}{{- $h = .Height -}}
     {{- end -}}
   {{- end -}}
   <img src="{{ $src | safeURL }}" alt="{{ .PlainText }}"{{ with .Title }} title="{{ . }}"{{ end }}
        loading="lazy" decoding="async"{{ if and (gt $w 0) (gt $h 0) }} width="{{ $w }}" height="{{ $h }}"{{ end }} />
   ```
2. **Fix the `image` shortcode** (used by `vestnik`, ~3,000 `{{%/* image */%}}` + ~60 `{{</* image */>}}`):
   it currently renders `<img src="x"alt="y">` (**missing space before `alt`** — invalid HTML). Add the
   space and the same `loading="lazy" decoding="async"` attributes.
3. **The LCP image must NOT be lazy-loaded and should be `fetchpriority="high"`.** Lazy-loading the LCP
   image adds 500 ms+. Since `.Ordinal` is unavailable on 0.144.2, handle the hero via the front-matter
   **`cover`** in the OG/head partial (Phase 1) rather than the body hook — emit the `cover` `<img>`
   with `loading="eager" fetchpriority="high"`.
4. **Alt-text pass:** while touching image-heavy pages, fill meaningful `alt` text (a11y + extraction).

**The real CLS fix (separate, larger, optional later phase):** migrate the image tree from
`themes/hugo-book/static/img/` → project **`assets/img/`** (or page bundles) and switch refs from
`/img/...` to resource-relative. Only then do native `.Width`/`.Height`, responsive `srcset`/`sizes`,
and **AVIF/WebP** conversion become possible (Hugo can't process `static/` files). This is **scope-creep
for now** for a volunteer-run site — recommend it as a dedicated future phase gated on the migration,
not bolted onto this one.

**Acceptance:** rendered `<img>` carry `loading="lazy"` + `decoding="async"` + `alt`; the shortcode bug
is fixed; the hero `cover` is `fetchpriority="high"` and not lazy. **Note:** the "no missing
width/height" Lighthouse audit only fully clears **after** the image migration — until then, treat
dimensions as best-effort (the stopgap covers many but is theme-path-coupled).

---

### Phase 11 — Off-site distribution, brand & entity authority *(manual / ongoing; high ceiling)*

**Goal:** the referral + backlink + **entity-authority** layer — the highest-ceiling 2026 work, because
**brand/entity mentions now out-predict backlinks for AI-Overview citation** and AI engines cite the
domains they trust (Wikipedia, Reddit, authoritative niche sites) far more than the average top-10 link.
21ideas is itself an aged, authoritative domain — use it.

**Effort:** Ongoing. **Value:** High (slow). **Depends on:** Phases 4–7 (trust + cite-worthy content).

**Levers:**
1. **Build the entity, in priority order *(reweighted 06-11)*.** The actually-verified entity lever is
   **not** Wikidata — it's **(a)** a strong **entity home** (the Phase 4 About page as the canonical URL
   with `Organization` JSON-LD + a stable `@id`), **(b)** consistent `sameAs` to real external profiles,
   and **(c)** **~15–20 independent third-party mentions** of "21ideas" across the web — *this* is what
   drives Knowledge-Panel resolution and AI citation (Ahrefs, 75k brands: **branded mentions correlate
   ~0.66 with AI-Overview visibility vs ~0.22 for backlinks**). **Then, and only then, Wikidata** — do it
   because it's cheap, machine-readable, and feeds the Knowledge Graph, but **with eyes open**: 2026
   evidence for its payoff is weak-to-absent (it appears in *no* current AI-citation study; Google's KG
   reliance on Wikidata looks to be *declining*), the notability loophole for small brands is being
   *tightened* against self-promo (real deletion risk if your only references are self-referential), and
   you must already have an independent reference to cite. Add the Q-ID to `Organization.sameAs` (Phase 5)
   once it survives. **A Wikipedia *citation*** (using 21ideas as a source on Bitcoin articles, esp.
   ru.wikipedia) is **higher-leverage than a Wikidata item** — Wikipedia is the most-cited domain across
   AI engines.
2. **Trusted-domain presence:** get referenced where AI engines pull from — **Reddit** (r/Bitcoin and
   RU communities), **Wikipedia** citations, "awesome-bitcoin"/resource directories, and RU/global
   Bitcoin community sites.
3. **Telegram + Nostr** cross-posts linking the **full on-site** article (not in-channel only); you're
   already Nostr-native (zapthreads, `.well-known/nostr.json`).
4. **Document the AI-crawler policy as intentional.** Add a one-line comment in `robots.txt`: the site
   allows both *training* bots (GPTBot, ClaudeBot, Google-Extended) **and** *answer/search* bots
   (OAI-SearchBot, Claude-SearchBot, PerplexityBot) — the latter are **citation-critical** and must
   never be accidentally blocked. (Note: Google-Extended is training-only; it does **not** gate AI
   Overviews, which use the normal Googlebot index.)

Keep content strictly informational/educational (best for trust signals and regulatory caution).

**Acceptance:** the **entity home** (About page) carries `Organization` JSON-LD with a stable `@id` +
real-profile `sameAs`; **independent third-party mentions of "21ideas" accrue** (the primary goal);
measurable referral traffic + inbound links/mentions appear in GSC/Yandex over time; a Wikidata item is
*optional* and, if created, is linked from `Organization.sameAs`; the citation-critical bots remain allowed.

---

### Phase 12 — Measurement & iteration *(ongoing ops)*

Close the loop using the Phase 0 dashboards plus **AI-citation tracking** (essential for 2026, since
rank ≠ citation — AI-Overview citations are only ~38% from the organic top-10):
- **Baseline to beat (GSC, 2026-06-11):** 590 clicks / 47.6k impressions / **1.2% CTR / avg position
  13.8** over 28 days. The story: **lots of impressions, few clicks, stuck on page 2.** The two levers are
  *position* (Phases 6–7: climb to page 1) and *CTR* (Phase 8: sharper titles/descriptions) — and some of
  the low CTR is structural (education queries trigger AI Overviews ~80%+, which siphon the click), which
  is exactly why the success metric shifts toward *citations* below.
- **Dashboards (with the new 2026 AI surfaces):** **GSC** — now includes a **"Search Generative AI
  performance" report (live 2026-06-03)** showing **AI-Overview / AI-Mode impressions** (no clicks yet);
  **Bing WMT** — register it, then use its **"AI Performance" report (Feb 2026)** for **actual Copilot/AI
  citation counts + the queries**; **Yandex Webmaster** — index, structured data, IndexNow, **ICS/ИКС**,
  and the **"Видимость сайта в Алисе AI"** panel (live 2026-04-07: your share-of-voice among Alice's cited
  sources + queries + competitors — *the* RU AI KPI); **Umami** — traffic/dwell/referrers, with a **custom
  AI-referrer segment** (`chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`,
  `copilot.microsoft.com`) + CTA-click events.
- **Two measurement caveats (2026):** **(1)** ~35–70% of AI referrals arrive with **no referrer** and land
  in "Direct" — AI traffic is *systematically undercounted*. **(2)** Compare **clicks, not
  impressions/CTR**, across mid-2025→mid-2026: the `num=100` deprecation (Sept 2025) and a 50-week GSC
  impression-inflation bug (May 2025→Apr 2026) corrupted impression/CTR trend lines (clicks unaffected).
- **AI-answer spot-checks (free, sufficient at this stage):** periodically ask **Yandex Alice** (RU),
  **ChatGPT Search**, **Perplexity**, and **Gemini** your target Bitcoin questions in **both languages**
  and record whether 21ideas is cited and where. Paid AI-visibility trackers are premature for a
  volunteer-run niche site.
- **Iterate:** high-impression/low-CTR queries → sharpen titles/descriptions (Phase 8); recurring topics →
  new evergreen pages + hub interlinking (Phases 6–7); stale cornerstone pages → refresh on the Phase 7
  cadence; slow-indexed pages → check IndexNow logs + schema; missing AI citations → improve
  extractability (Phase 7) and entity presence/mentions (Phase 11).

---

## 4. Already done — do NOT redo

Implemented and correct:
- ✅ Canonical URLs, per-page meta description, `index,follow`.
- ✅ Sitemap with **per-URL `lastmod`** (git-driven) — the "add lastmod" work is covered (just prune
  demo pages — Phase 3).
- ✅ RSS **`<language>`** + **atom self-link** (full content is *not* worth adding — see Deferred, §5).
- ✅ hreflang **other-language** alternates (self + `x-default` + region-fix in Phase 2).
- ✅ JSON-LD `BreadcrumbList` / `WebSite` / `Organization` / `Article` (hardening + dead-bit removal in
  Phase 5).
- ✅ `robots.txt` with explicit search-engine + AI-crawler policy — already allows both *training* and
  *answer/search* bots (keep; document as intentional — Phase 11).
- ✅ `llms.txt` / `llms-full.txt` outputs — **keep the existing file** (cheap optionality), but **don't
  invest further** (Deferred, §5).
- ✅ Yandex verification, favicons/manifest/PWA icons, Nostr comments.
- ✅ **Google Search Console** (live, 2026-06 — confirmed by owner; baseline 590 clicks / 47.6k impr /
  1.2% CTR / avg pos 13.8 over 28 days). **Bing Webmaster** is the remaining registration gap (Phase 0/9).

## 5. Deliberately excluded (with reasons)

**News-publisher machinery — wrong for an evergreen site:**
- ❌ **Google News sitemap + Publisher Center** — not a daily-cadence news org; eligibility unlikely.
- ❌ **Yandex "fresh content" RSS feed** — for current-events publishers. *(If `vestnik` ever becomes a
  frequent dated bulletin, revisit a lightweight version — not now.)*
- ❌ **`NewsArticle` schema** — keep `Article`/`BlogPosting`; content is evergreen.

**Deprecated / dead — don't add (or let creep back in):**
- ❌ **Yandex Turbo pages** — **discontinued by Yandex on 2025-04-01.** A fast static Hugo site never
  needed them; zero value.
- ❌ **Yandex "Оригинальные тексты" (Original Texts)** authorship/anti-plagiarism tool — **discontinued**
  by Yandex; the replacement is the Reindex/Переобход tool (Phase 0). If anyone suggests "register your
  original texts to protect them," that advice is dead.
- ⚠️ **`FAQPage`/`QAPage` markup *for rich results on either engine* — now dead *(corrected 06-11)*.**
  Google dropped FAQ rich results entirely (2026-05-07); Yandex has **no `FAQPage` rich result** and its
  best-effort mobile `QAPage` snippet largely stopped firing. The Q&A *content* still helps AI extraction
  (Phase 7) and the markup is harmless — add it only on real Q&A pages, expecting **no SERP feature**.
- ⚠️ **`<meta name="keywords">`** (emitted from tags) — ignored by all major engines. Harmless; optional
  to remove. Don't invest in it.

**Low ROI for a volunteer-run evergreen site — Deferred (keep what exists, stop investing):**
- 🔸 **Full-content RSS (`<content:encoded>`)** — near-**zero search value** (full-text feeds don't help
  rankings and mildly *aid* content scrapers). Only revisit if a specific Nostr/syndication bridge needs
  it. The existing summary feed with `<language>` + atom self-link is fine.
- 🔸 **`llms.txt` deep-refinement** (recursion, full-content inlining, language cross-links) — **not used
  by consumer search/answer engines for ranking or citation** *(rationale updated 06-11)*: Google
  explicitly won't support it (Mueller, June 2026: "purely speculative"; Google deleted its own llms.txt),
  server logs show near-zero fetches, and a 300k-domain study found no citation lift. There *is* minor
  **retrieval/agent-tooling** use (Perplexity, Claude, and IDE tools like Cursor/Claude Code when pointed
  at docs) — a *marginal* fit for this site's technical audience, but **not a search lever**. Keep the
  cheap existing file; **don't build the recursive partial.** The only edits worth doing ride along free
  with Phase 3 (stop listing demo pages) and the `21ideas`/`21 ideas` normalization. *(Optional: `noindex`
  the llms.txt outputs.)* AI discoverability comes from Phases 4–7 + 11, not this file.
- 🔸 **Paid AI-visibility monitoring tools** — premature; free spot-checks (Phase 12) suffice.

**Don't bother — 2026 hype with no path for a small content site (added 06-11):**
- ❌ **An MCP server to "distribute" your content** — there is **no organic discovery path**: a user must
  *manually* connect your server; no ChatGPT/Claude/Perplexity user asking about Bitcoin will ever
  auto-discover it, and MCP registries are developer-facing. Your already-static, already-crawlable HTML
  *is* your distribution surface. (Revisit only if you ship a developer tool/API.)
- ❌ **C2PA / Content Credentials as an SEO move** — real and worthwhile for image provenance, but **not a
  ranking or citation signal**. Low priority.
- ❌ **Paid "GEO/AEO methodology" tooling** — the GEO information space is polluted with AI-generated
  vendor spam inventing fake Google features (e.g. "Core Web Vitals 2.0," fabricated CWV threshold
  changes, an "INP became an equal ranking signal" claim — none exist). Trust Search Central / web.dev /
  official blogs.
- ⏸️ **Cloudflare "Markdown for Agents" / Crawler-Hints IndexNow** — genuinely cheap wins, but **only on
  Cloudflare** (you're on GitHub Pages + Netlify). N/A today; note for any future host move.

**Crypto-content discoverability note (RU; added 06-11):** Russian law (Aug 2024) and Yandex Direct ban
crypto *advertising* and public *offering* — **but both explicitly carve out informational/educational
content**, which indexes and ranks organically with no penalty. Two implications: **(1)** keep messaging
strictly **educational** (avoid "buy / invest / use exchange X" framing) — this protects both
discoverability and regulatory posture; **(2)** **paid Yandex Direct is off the table** for RU crypto, so
the Yandex channel (Phase 8) is **organic + Alice-visibility only**.

## 6. Consolidated touch list

- `static/img/og-default.png` — **new**, ≤300 KB 1200×630 default card (Phase 1).
- `layouts/partials/docs/open-graph.html` — **new override**: locale/site_name/twitter/article/default
  image + `og:image:width/height/alt` (Phase 1).
- `layouts/partials/docs/inject/head.html` — `robots` upgrade (Phase 1); self + `x-default` hreflang via
  `.Language.Lang` (Phase 2); optional verification metas (Phase 0); hero `cover` `fetchpriority` (Phase 10).
- `config.yaml` — `params.ogImage`/`ogSiteName` (Phase 1); **remove `languageCode: ru-RU`** (Phase 2);
  `taxonomies` (Phase 6).
- `content.{ru,en}/menu/index.md` — **remove demo `relref`s + repoint intro** (Phase 3 — *build-break if
  skipped*).
- `content.{ru,en}/docs/example/**` — delete demo subpages; relocate intro slug + alias (Phase 3).
- `content.{ru,en}/_index.md` — update the "Введение" `relref` (Phase 3).
- **About/editorial page + `/authors/<handle>/` bio pages** (both langs) — **new** (Phase 4).
- `layouts/partials/docs/inject/structured-data.html` — drop `SearchAction`; one `@graph`; `Person`
  author + `sameAs`; logo `width/height` (keep SVG); ISO dates; `inLanguage`; Wikidata/Telegram/Nostr/X
  `sameAs` (Phase 5).
- Glossary/article interlinking, hub pages, related-posts partial (Phase 6).
- `static/<KEY>.txt` — **new**, IndexNow key (Phase 9).
- `.github/workflows/hugo.yml` — `fetch-depth: 0` + IndexNow bulk POST (Yandex + Bing); bump
  `checkout@v2`→`v4` (Phase 9).
- `layouts/_default/_markup/render-image.html` — **new override**, lazy/async/alt + fail-safe dims;
  fix the `image` shortcode's missing-space bug (Phase 10).
- `static/robots.txt` — one-line "training vs answer/search bots intentional" comment (Phase 11).

## 7. Verification (per phase)

After each phase: `hugo --minify` builds clean (**no deprecation warnings** — test on the **local 0.159**
toolchain, not just CI 0.144.2), then spot-check the generated `public/`:
- **Meta/OG:** view-source → `og:locale`, `og:site_name`, `twitter:card`, default `og:image`
  (+`width/height/alt`), `article:*` on posts; `robots` has `max-image-preview:large`. Telegram/X/FB
  debugger renders a card (refresh stale Telegram previews via @WebpageBot).
- **hreflang:** an EN page emits self (`en`) + `ru` + `x-default`; no `ru-RU`; self-referential canonical
  per page; validate return tags via Screaming Frog/Ahrefs (GSC's hreflang report was retired); no
  deprecation warning.
- **Hygiene:** build succeeds (menu `relref`s fixed); `grep docs/example public/*/sitemap.xml` empty; no
  Lorem-ipsum pages build.
- **E-E-A-T:** About/editorial page live in both langs; author bio pages with `sameAs`; bylines link.
- **Schema:** Rich Results Test + Schema.org + Yandex validators → zero errors; single `@graph`; `Person`
  author with `sameAs`; full-ISO dates; no `SearchAction`.
- **Topical authority:** glossary terms link from articles; hubs non-thin and indexed.
- **Yandex:** region = "No region"; FAQ markup only on real Q&A; titles CTR-tuned.
- **IndexNow:** push a change → the Action logs `✓` for both endpoints; confirm in Bing WMT + Yandex WMT.
- **CWV/a11y:** images carry `loading`/`decoding`/`alt`; shortcode bug fixed; hero is `fetchpriority:high`
  and not lazy; (dimensions audit clears only after the image migration).
- **AI citation:** spot-check Alice/ChatGPT/Perplexity for target queries (Phase 12 baseline).

## 8. Appendix — Hugo gotchas & 2026 notes

- **Hugo version skew (important):** CI/Netlify pin **0.144.2**; local toolchain is **0.159.0**. A build
  can pass in CI but warn locally (and vice-versa for newer features). Two concrete consequences:
  (a) **`.Language.LanguageCode` / `languageCode` / `.Site.LanguageCode` are deprecated as of 0.158** →
  use `.Language.Lang` (Phase 2); (b) image-render-hook **`.Ordinal`/`.Position` are new in 0.160** →
  hero auto-detection in the hook is unavailable on 0.144.2 (Phase 10). Consider aligning CI to the
  local version (or vice-versa) to kill the skew.
- **Images live in the *theme's* `static/`, not `assets/`.** Hugo cannot process files under any
  `static/` dir; `resources.Get` reads `assets/` (absent here). So width/height, responsive `srcset`,
  and AVIF/WebP are **blocked until images migrate** to `assets/`/page bundles (Phase 10).
- **INP replaced FID (2024-03-12).** "Good": LCP ≤ 2.5 s, **INP ≤ 200 ms**, CLS ≤ 0.1. A static Hugo
  site is INP-safe by construction; spend CWV effort on LCP (hero) + CLS (dimensions). *(Watch for AI-spam
  inventing "CWV 2.0" / "LCP 2.0 s" — fabricated; thresholds are unchanged as of the 2025-12-10 doc.)*
- **AI crawlers split two ways — and your static HTML wins both (added 06-11).** Indexing/answer bots
  (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Googlebot) fetch **raw HTML and do *not* execute
  JavaScript**; agentic *browsers* (ChatGPT Atlas, Perplexity Comet, Claude-for-Chrome) run full Chromium
  but are human-driven and irrelevant to indexing. A static Hugo site exposes its full content to every
  crawler — a structural advantage you already hold. **Durable rule: never move core educational content
  (definitions, tables, explanations) behind client-rendered JS.** Build-time KaTeX/Mermaid output is fine.
  (You're not on Cloudflare, so Cloudflare's default AI-bot blocking for new domains doesn't apply — but
  if you ever migrate, verify the answer/search bots in `robots.txt` aren't silently blocked at the edge.)
- **Theme overrides:** project `layouts/**` shadow theme files of the same path — that's how
  `open-graph.html` and `render-image.html` overrides work without forking the theme.
- **`bookHidden: true`** hides from the **menu only** — not noindex/sitemap-exclusion. Use front-matter
  `sitemap: {disable: true}` or `build: {list: never}` for real exclusion (Phase 3).
- **Default language has no subdir** (`defaultContentLanguage: ru`, no `defaultContentLanguageInSubdir`)
  → RU at `/`, EN at `/en/`. `x-default` therefore points to the **root** (ru) URLs.
- **`og:locale` keeps a territory** (`ru_RU`/`en_US`, OGP spec) even though **hreflang stays
  region-agnostic** (`ru`/`en`). They serve different specs; they need not match.
- **Two deploy paths** (`netlify.toml` + GH Pages Action). Confirm prod before wiring IndexNow; the
  Action owns the CNAME and is the assumed prod target.
- **`google_analytics.html`** is called by the theme but no GA id is configured → no-op. Umami is live.
  Leave or remove; harmless.
- **Branding:** `Site.Title` = `21ideas` vs home title `21 ideas` — normalize for schema/`llms.txt`.

## 9. Key 2026 facts & sources (annotated; load-bearing claims)

Re-verified against primary sources on **2026-06-11**. Format: **claim — VERDICT — source(s)**.
*Confirmed* = on-record official doc/statement; *Corrected*/*Nuanced* = changed or softened since the
06-09 draft; *Directional* = best available evidence, not a controlled result. The GEO/AEO space is
heavily polluted by AI-generated SEO-vendor spam that invents fake Google features — claims below are
restricted to primary/official sources or named large studies.

**Search-engine mechanics**
- **SVG logo supported (raster not required) — Confirmed.** Google *Organization structured data*
  (updated 2026-04-15) defers to Google Images' supported formats (BMP, GIF, JPEG, PNG, WebP, SVG, AVIF).
  `developers.google.com/search/docs/appearance/structured-data/organization`
- **`SearchAction`/sitelinks search box retired — Confirmed (still dead).** Announced 2024-10-21, retired
  2024-11-21; "won't be used by Google." `developers.google.com/search/blog/2024/10/sitelinks-search-box`
- **FAQ rich results removed for everyone 2026-05-07 — Confirmed.** Report/test support removed Jun–Aug
  2026. Yandex has **no FAQPage rich result** (only best-effort mobile QAPage). → *Corrects 06-09's
  "Yandex still renders FAQ snippets."* `developers.google.com/search/docs/appearance/structured-data/faqpage`;
  `searchengineland.com/google-to-no-longer-support-faq-rich-results-476957`
- **INP replaced FID 2024-03-12; thresholds LCP ≤2.5s / INP ≤200ms / CLS ≤0.1 — Confirmed unchanged**
  (CWV doc updated 2025-12-10). `web.dev/articles/inp`; `web.dev/articles/vitals`
- **hreflang must be bidirectional + self-referential; x-default recommended — Confirmed.** Google
  *Localized versions of your pages* (updated 2025-12-22). **Also:** Yandex **dropped sitemap-based
  hreflang** → use HTML `<head>` (satisfies both); GSC's International Targeting/hreflang report was
  **retired** (validate with Screaming Frog/Ahrefs); self-referential **canonical** is mandatory.
  `developers.google.com/search/docs/specialty/international/localized-versions`;
  `yandex.com/support/webmaster/en/yandex-indexing/locale-pages`

**E-E-A-T, entity, topical authority**
- **E-E-A-T is a rater concept, NOT a ranking factor — Confirmed.** Sullivan (2024-02): no E-E-A-T score;
  bios "too easy to fake." The ranking proxy is **off-site reputation**. → *Reframes Phase 4.*
  `searchengineland.com/google-eeat-misconceptions-437445`
- **Pseudonymous authorship is fine for technical/educational crypto — Confirmed.** Google never requires
  real names; a consistent cross-linked handle reads as a named entity. Weak only for regulated
  financial-advice content. `developers.google.com/search/docs/fundamentals/creating-helpful-content`
- **"Topical-authority badge from interlinking" is a myth — Confirmed debunked.** Mueller (2023-11): "no
  basis in reality"; Google's only official topic-authority *system* is News-scoped. Internal links still
  matter ("super critical"); site- AND page-level signals both exist (2024 leak: siteAuthority,
  siteFocusScore). → *Reframes Phase 6.* `searchenginejournal.com/google-on-topical-authority-dont-worry-about-it/501209/`
- **Thin tag/auto pages are a quality liability — Confirmed.** Jan 2025 rater guidelines: even a *single*
  low-effort, unoriginal page can be rated lowest quality → noindex thin tag/archive pages.
  `developers.google.com/search/docs/essentials/spam-policies`
- **Wikidata payoff for a small brand is weak/declining + carries deletion risk — Corrected (demoted).**
  The famous "Wikidata → +47% traffic" proof is misattributed (UKSG 2016 — about Google discovery, no
  Wikidata, no control). Wikidata appears in no 2025–26 AI-citation study; Google KG reliance looks to be
  declining (Kalicube); notability RfCs are tightening against brand self-promo. Entity home + sameAs +
  independent mentions are the real lever. `wikidata.org/wiki/Wikidata:Notability`;
  `insights.uksg.org/articles/10.1629/uksg.300`; `kalicube.com/learning-spaces/faq-list/knowledge-panels/`

**AI search / GEO / agents (the 2026 frontier)**
- **Schema does NOT drive AI citations or rankings — Confirmed.** Ahrefs 1,885-page study (Aug 2025–Mar
  2026): citations "barely moved"; engines extract visible HTML, ignore JSON-LD on direct fetch. Do schema
  for rich results + entity resolution, not AI citation. `ahrefs.com/blog/schema-ai-citations/`
- **Statistics + quotations + citations raise generative-engine visibility ~30–40% (most for low-authority
  sites) — Directional (strong).** Princeton "GEO," KDD 2024 (peer-reviewed, n=10k); keyword stuffing
  *hurt*. Predates current engines — directionally strong, not freshly replicated.
  `dl.acm.org/doi/10.1145/3637528.3671900`
- **ChatGPT Search citations track Bing's index ~87% — Directional.** Seer Interactive (2025-02). → Bing
  inclusion gates the largest AI surface.
  `seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results`
- **AI-Overview citations are only ~38% from the organic top-10 — Directional (large study).** Page-level
  excellence can win from low-authority domains. `ahrefs.com/blog/ai-overview-citations-top-10/`
- **Branded web mentions out-predict backlinks for AI-Overview visibility — Directional.** Ahrefs, 75k
  brands: mentions ~0.66 vs backlinks ~0.22 (correlation, not causation; at huge scale links still help).
  `ahrefs.com/blog/ai-overview-brand-correlation/`; `semrush.com/blog/most-cited-domains-ai/`
- **~13-week AI-citation decay; recency favored even for evergreen — Directional.** Seer (~50% of AI
  citations from content ≤13 weeks old); Ahrefs (17M citations: AI-cited content ~26% fresher). → keep
  dateModified honest + lightly refresh cornerstones. `salespeak.ai/aeo-news/content-freshness-ai-search`
- **AI indexing/answer bots do NOT execute JavaScript — Confirmed.** GPTBot/OAI-SearchBot/ClaudeBot/
  PerplexityBot read raw HTML; agentic *browsers* (Atlas/Comet/Claude-for-Chrome) run Chromium but are
  human-driven. Static HTML wins. `vercel.com/blog/the-rise-of-the-crawler`
- **`llms.txt` not used by consumer answer engines — Nuanced (updated).** Google explicitly won't support
  it (Mueller, 2026-06: "purely speculative"; deleted its own); ~0 server fetches; no citation lift over
  300k domains. *But* Perplexity + Claude + IDE tools (Cursor/Claude Code) do retrieval-side use. Keep the
  file; don't invest. `searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/`;
  `presenc.ai/research/state-of-llms-txt-2026`
- **Blocking AI crawlers doesn't stop citations but costs traffic — Confirmed.** Cited 70–92% even when
  blocked (BuzzStream, 2026); blocking → −23% traffic (Rutgers/Wharton, 2025-12). Keep allowing
  answer/search bots; Google-Extended/Applebot-Extended are opt-out tokens, not crawlers.
  `ppc.land/blocking-ai-crawlers-doesnt-stop-citations-new-data-shows-why/`
- **MCP server = no organic content-discovery path — Confirmed (skip it).** Users must manually connect;
  registries are developer-facing. `anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation`
- **Zero-click ~68% of Google searches (2026); education queries trigger AI Overviews ~80%+; AIO presence
  ~58% lower CTR for #1 — Directional/Confirmed.** `sparktoro.com` (2026-06); `pewresearch.org` (2025-07-22);
  `ahrefs.com/blog/ai-overviews-reduce-clicks-update/`

**Measurement (new 2026 tooling)**
- **GSC "Search Generative AI performance" report — live 2026-06-03.** AI-Overview/AI-Mode **impressions**
  only (no clicks yet); regional rollout. `developers.google.com/search/blog/2026/06/gen-ai-performance-reports`
- **Bing WMT "AI Performance" report — live Feb 2026.** Copilot/AI **citation counts** + queries.
  `blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview`
- **GA4 "AI Assistant" channel — May 2026** (ChatGPT/Gemini/Claude only; Perplexity/Copilot still land in
  Referral). ~35–70% of AI referrals arrive **with no referrer** (→ "Direct"; AI traffic undercounted).
  `searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/574974/`
- **Compare clicks, not impressions/CTR, mid-2025→mid-2026.** `num=100` deprecation (Sept 2025) + 50-week
  GSC impression-inflation bug (May 2025→Apr 2026) corrupted impression/CTR trends; clicks unaffected.
  `searchengineland.com/google-search-console-bug-inflated-impression-counts-473530`

**Yandex / RU (2026)**
- **Нейро merged into Алиса — Confirmed 2025-05-22** ("День Поиска"); top models free 2025-07-01; "Alice
  AI" rebrand 2025-10-28. `yandex.ru/company/news/01-07-2025-01`; `yandex.com/company/news/2025-10-28-01`
- **"Видимость сайта в Алисе AI" panel — Confirmed, live 2026-04-07** (Webmaster → Эффективность): share
  among Alice's cited sources, example queries, competitors; rolling 3 mo, weekly. `webmaster.yandex.ru/blog/efficiency-alice`
- **EPOS/ЭПОС is an OFFICIAL Yandex framework — Confirmed (upgraded).** `yandex.ru/support/webmaster/ru/epos`
  (Yandex itself coined the acronym; ties it to neuro-answer inclusion).
- **"Alice cites from organic top-30" — Corrected (unverified).** No official source; the official "top
  30" is for the Organization **address snippet**. Treat as a heuristic, not a rule.
- **Behavioral/user factors still dominant; PF-manipulation penalty severe — Confirmed/Directional.** 2023
  leak (~417 active factors) confirms CTR/dwell/return-to-SERP; накрутка ПФ → ~8–12-mo recovery (don't).
  `searchenginejournal.com/yandex-data-leak/477905/`
- **Yandex Turbo discontinued — Confirmed (announced 2025-02-07, effective ~Apr 2025).** "Оригинальные
  тексты" discontinued **back in 2020** (not recent — *corrects 06-09's implied recency*).
  `habr.com/ru/news/880612/`; `searchengines.guru/ru/news/2048754`
- **Yandex market share — Directional.** ~60–70% inside Russia (Google ~21–35%); **no credible figure for
  the diaspora**, where Google dominates. *Owner data 2026-06-11: Google 533 vs Yandex 150 referrals / 30
  days → Google is the proven primary; Yandex (Phase 8) is a growth bet.* `statista.com/statistics/1094920/`
- **RU crypto: ads/offering banned, educational content carved out — Confirmed.** Yandex Direct permits
  informational/educational crypto materials; organic educational content indexes normally.
  `yandex.ru/support/direct/ru/moderation/categories/cryptocurrency`

**Hugo**
- **`languageCode` family deprecated in v0.158 (use `.Language.Lang`/`locale`); image-hook `.Ordinal`/
  `.Position` new in v0.160; latest stable v0.163.0 (2026-06-08) — Confirmed.** CI still pins 0.144.2 —
  consider aligning CI to kill the skew. `github.com/gohugoio/hugo/releases`
