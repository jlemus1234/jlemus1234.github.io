# Site rewrite — session handoff

Scratch notes for resuming the Gatsby → Astro rewrite in a new terminal/session. Safe to delete once the rewrite is done and cut over; not meant to be a permanent repo doc.

## Status as of 2026-08-26

- Currently checked out on `feat/rewrite-astro` (commit `4c437197`), branched from `feat/rewrite-2024-nextjs` so the old Gatsby reference material stays in the tree.
- **Step 1 complete**: `jlemus1234/portfolio-archive-gatsby` (private) was created manually via github.com/new, then mirrored from a true `git clone --mirror` of the live `origin` (not from this working copy's refs, which only had 2 real local branches — the rest were remote-tracking refs that would've mirrored wrong). All 8 branches (`master`, `dev`, `feat/rewrite-2024-nextjs`, `mediachange`, `projectsGrid`, `remakeCards`, `remaking`, `tryGatsby`) confirmed present with SHAs matching origin exactly. No tags existed on either side. (GitHub's synthetic `refs/pull/1/*` refs can't be mirrored — expected, not real history.)
- `gh` CLI is not installed on this machine and there's no usable API token for repo creation via curl — do this kind of GitHub admin action (new repos) manually via github.com/new going forward rather than trying to script around it.
- **Toolchain set up on this machine**: Node wasn't installed at all before this session. Installed via `fnm` (Fast Node Manager, `winget install Schniz.fnm`) rather than a bare global Node, so future projects on this machine can pin their own Node version without duplication. Node 24 LTS installed and set as fnm default. `pnpm` activated via corepack (not npm/yarn) — content-addressable store, avoids duplicating packages across projects on disk. Shell hooks added to `~/.bashrc` and the PowerShell `$PROFILE` (both previously didn't exist) so `fnm`/`node`/`pnpm` are on PATH in *new* shells automatically — the Claude Code session that did this install still needs the fnm-managed Node dir prepended to PATH manually per Bash call (`/c/Users/jlemu/AppData/Roaming/fnm/node-versions/v24.20.0/installation`) since its own PATH was captured at startup, before the profile changes existed.
- **Step 2 complete**: Astro scaffolded (minimal template, TypeScript strict, `@astrojs/tailwind` via `astro add tailwind`) directly into the repo root — `create-astro` initially refused to scaffold into a non-empty `.` (old_pages/components/assets/images present) and created a `cosmic-cycle/` subdir instead, so the generated files were moved up by hand and that subdir removed. Old Next.js-only files removed (`src/app`, `next.config.mjs`, old `package.json`/`package-lock.json`, `postcss.config.mjs`, old `tsconfig.json`, `.eslintrc.json`, `tailwind.config.ts`, stale `public/next.svg`+`vercel.svg`). `astro.config.mjs` has `site: 'https://jlemus1234.github.io'`. Package manager switched to pnpm (`pnpm-lock.yaml`/`pnpm-workspace.yaml`); pnpm blocks postinstall scripts by default now, so `esbuild`'s build script had to be explicitly allowed in `pnpm-workspace.yaml` (`allowBuilds: esbuild: true`) — safe, it's just Vite/Astro's bundled build tool. Replaced the never-customized `create-next-app` boilerplate README with a real one. Astro's own generated `AGENTS.md`/`CLAUDE.md` (Astro-specific dev guidance, e.g. `astro dev --background`) were kept at repo root since none existed before. **Lost in the shuffle**: the scaffold's default placeholder favicon (`favicon.ico`/`favicon.svg`) got deleted along with the temp `cosmic-cycle/` dir before being moved — cosmetic only (Astro's generic rocket icon), not real content, `src/pages/index.astro` still references `/favicon.svg` and `/favicon.ico` paths that 404 harmlessly for now. A real favicon can be added whenever convenient, no later than the step 11 polish pass.
- Checkpoint verified: `pnpm build` and `pnpm astro dev --background` both work, Tailwind CSS confirmed present in the rendered output.
- **Step 3 complete**: `src/layouts/Layout.astro` (shared `<head>` + `NavBar` + `<slot />` + `Footer`), `src/components/NavBar.astro`, `src/components/Footer.astro`. Site title "Jose Lemus" and nav link set (Projects/Writing/Resume/About) pulled from the old `gatsby-config.js` siteMetadata and `Header.js`/`NavigationBar.jsx` — old site used `/AboutMe`, switched to `/about` since URLs don't need to match during this rewrite. Active-route highlighting via `Astro.url.pathname` (bold vs. muted), verified in the built HTML output per-route. Theme tokens (ink/surface/accent/border colors) defined via Tailwind v4's CSS-first `@theme` block in `src/styles/global.css` — no `tailwind.config.js`, that's not how the v4 integration works. Colors/fonts are a fresh, neutral pick (old site had no real palette, just black text + silver borders + the Windows-only `bahnschrift` font) — **not yet visually reviewed by the user**, since no browser automation was available this session (user has the Claude in Chrome extension partway installed, declined finishing it mid-session; `/chrome` will complete it later, don't re-suggest it). Only checked via `curl` against `pnpm astro dev --background` (all 5 routes return 200, correct hrefs/active-state classes, compiled Tailwind CSS present) and `pnpm build`. **User should eyeball this in an actual browser before step 4 builds real content on top of it.** Added placeholder pages (`src/pages/{projects,writing,resume,about}.astro`) so nav links resolve instead of 404ing; real content for these lands in steps 4-9.
- User confirmed the step 3 shell looked right, requested full name "Jose Lemus Ortiz" instead of "Jose Lemus" throughout the shell (NavBar/Footer/Layout title+description) — done, committed separately (`36372b3e`).
- **Step 4 complete**: home page ported from `old_pages/index.js` — `ImageBanner`, about section (`ImageCircle` + bio + `ConnectedSites`), `MenuCardPanel` of 3 `MenuCard`s linking to Projects/Resume/Writing, same source photos as the old page. New `.astro` components use `astro:assets`' `Image` with CSS `object-cover` (not forced width+height, which would've stretched mismatched aspect ratios). Hit two real build issues, both fixed at the source: (1) the three social icon SVGs (`src/images/Icons/{github,linkedin,gmail}.svg`) had no `viewBox`/`width`/`height` — invalid on their own, and broke Astro's build-time image metadata step; added `viewBox="0 0 24 24" width="24" height="24"` to each. (2) Image optimization failed with `MissingSharp` even though `sharp` was present in the pnpm store — Astro needs `sharp` declared as an explicit dependency in the **project's own** `package.json` to resolve it at build time, not just transitively; added via `pnpm add sharp`. Build now optimizes photos well (e.g. a 2.6MB source photo down to 107KB webp).
- Softened the old bio text ("currently looking for employment") to neutral copy since that's likely stale years later — **user should write real bio copy** when convenient, not a blocker for later steps.
- No browser tooling available this session (same as step 3) — verified via `pnpm build` succeeding + `curl` 200s + rendered HTML inspection, not an actual visual check. Dev server (`pnpm astro dev --background`) has been left running throughout since step 3 for the user to check in their own browser; stop it with `pnpm astro dev stop` when done.
- **Step 5 complete**: resume page. User supplied an updated resume PDF outside the repo (`JoseLemusOrtizResume2026.pdf`, on their Desktop) with real new content — current role Wix.com (Software Engineer, Apr 2022–Jun 2026), prior Exactera (Full Stack Engineer), JumboCode and OpenWeb internships, Tufts BS CS 2019, updated skills list, new contact email. Used that as the source of truth over the old Gatsby resume data (dropped the old "Relevant Courses"/"Projects"/"Other skills" sections since the new resume doesn't have them). `src/data/resume.ts` holds typed contact/summary/skills/experience/education; `resume.astro` renders it plus a PDF download link. **Deviated from the plan doc's literal wording**: moved the PDF to `public/Resume.pdf` instead of `src/assets/Resume.pdf` — files imported from `src/assets` get a content hash in the built filename, which breaks a stable download URL; `public/` is Astro's mechanism for an unhashed path, correct for something like a resume link people might bookmark externally.
- User asked to drop the phone number from the resume page (kept in the PDF itself, just removed from the rendered page and `src/data/resume.ts`) — done, committed separately (`3aee4725`).
- **Step 6 complete**: `src/content.config.ts` (not `src/content/config.ts` — Astro 7 uses the Content Layer API, config lives at `src/content.config.ts` with a `glob()` loader from `astro/loaders`, this is the current convention not the legacy one the plan doc's wording implied). `projects` collection: title, collaborators, videos (YouTube IDs), cover `image()`, `gallery` array of `image()`, abstract, description. `writing` collection: title, description, optional `publishDate` — shaped for a future `blog` collection to reuse without rework, per the plan. `src/content/projects/` and `src/content/writing/` created with `.gitkeep` placeholders (no entries yet); without them the glob loader warns about a missing base directory. Verified via `pnpm astro sync` (types generate cleanly) and `pnpm build` (still succeeds with empty collections, unused by any page yet).
- Home page bio copy (from step 4) is still placeholder text — flag to the user again if it's still unwritten by the time projects/writing content goes in.
- **Step 7 (video upload) deferred to the end** — user wants to batch it later rather than now, but asked for the full inventory up front so it's not lost. Full list below; revisit this when actually doing the upload.

### Step 7 video inventory (for later)

Each old project page only ever embedded **one** video, despite extra/duplicate clips sitting unused in several project asset folders:

| Project (slug) | Video used on old live site | Unused extras in the same folder |
|---|---|---|
| SwimSense | `src/assets/SwimSense/inclusivedesign.mp4` (25MB) | `SwimDemo.mp4` (96MB), `SwimDemo2.mp4` (8.6MB), `SwimDemoShort.mp4` (29MB), `SwimDemoShort2.mp4` (55MB), `Wriststest-1.mp4` (30MB) |
| MIXR | `src/assets/MIXR/MIXRDemo.mp4` (14MB) | `MIXRDemo2.mp4` (4.2MB) |
| SenSit | `src/assets/SenSit/SensitDemo2.mp4` (3.9MB) — **note**: old code imported it as `SenSitDemo2.mp4` (capital "Sit"), a case mismatch that only worked on case-insensitive filesystems (Windows/macOS), not Linux | `SensitDemo.mp4` (11MB) |
| TongueInterface | `src/assets/TongueInterface/TongueInterfaceDemo.mp4` (19MB) | `TongueDemo.mp4` (1.9MB) |
| BisexualResourceCenter (BRC) | `src/assets/BRC/BRCDemo.mp4` (3.8MB) | none |
| *(unattached)* | — | `src/assets/projectshowcase4.mp4` (32MB) — not referenced by any old page found; confirm with user whether to upload or drop. |

Minimum viable set is 5 videos (one per project). User to decide at upload time whether any of the SwimSense/MIXR/SenSit/TongueInterface extras are worth including too.

**How they connect**: each project's `videos: string[]` frontmatter field (in `src/content/projects/<slug>.md`, per the step 6 schema) holds YouTube video IDs (not full URLs). Step 8's project detail pages render each via `astro-embed`'s `<YouTube>` component.

- User wants to keep moving rather than block on step 7: proceed into step 8 now using a **placeholder YouTube video ID** in each project's `videos` field, real IDs get swapped in later once step 7 actually happens. Placeholder ID used: `dQw4w9WgXcQ` (search it if that's not obviously a joke placeholder to future-you) — grep for it across `src/content/projects/` when step 7 is finally done, to find every spot needing a real ID.
- **Step 8 complete**: all 5 projects (SwimSense, MIXR, SenSit, TongueInterface, BisexualResourceCenter) ported into `src/content/projects/*.md` per the step 6 schema — collaborators, abstract, description text carried over from the old pages (whitespace cleanup only, no content rewrites), cover + gallery images point at the same source photos. `src/pages/projects/index.astro` lists them via `getCollection('projects')` through the existing `MenuCard`/`MenuCardPanel`. `src/pages/projects/[slug].astro` is the detail page — title, collaborators, `astro-embed`'s `<YouTube>` for `videos[0]`, abstract, summary, image gallery grid. Added `astro-embed` as a dependency.
  - **Every project's `videos` field is the placeholder ID `dQw4w9WgXcQ`** (user explicitly asked for a placeholder rather than blocking on step 7). When step 7 finally happens, grep `src/content/projects/` for that string to find every spot needing a real ID — there are 5, one per file, each in a `videos:` list with a single entry.
  - Learned mid-session: the running dev server (alive since step 3) did **not** pick up the new `src/pages/projects/[slug].astro` dynamic route via hot-reload — had to `pnpm astro dev stop` + restart. Worth remembering for any future new dynamic-route file, not just this one.
- **Step 9 complete**: `src/content/writing/{graduation,hobbies,mcdonalds}.md`, `src/pages/writing/index.astro` (plain text list, title+description — no image field in the writing schema, unlike projects), `src/pages/writing/[slug].astro` (renders markdown body via `render()` from `astro:content`). **These essays were unfinished stubs on the old site** ("Work in progress" / "Currently editing" was literally in the original source text, not something I added) — kept that honesty rather than inventing content on the user's behalf, same judgment call as the step 4 home page bio. Worth a real writing pass from the user eventually, no rush.
- User asked to hide the writing stubs rather than have them live (keep files, make unavailable). Added `draft: z.boolean().default(true)` to the `writing` schema; all 3 entries now have `draft: true` in frontmatter, and both `writing/index.astro` and `writing/[slug].astro`'s `getStaticPaths` filter with `getCollection('writing', ({ data }) => !data.draft)`. Verified: `/writing` is an empty list, `/writing/graduation` (etc.) 404s, `.md` files untouched in the repo for whenever real content gets written and `draft` flips to `false`. Committed separately (`8a8a981d`).
- **Step 10 complete**: `src/pages/404.astro`, kept the old site's "the sadness" line, added a "Back home" link. Verified `pnpm build` emits `dist/404.html` at the root (what GitHub Pages auto-serves for unmatched routes, no config needed) and that a bad URL in dev returns HTTP 404 with the custom content.
- **Step 11 complete** (polish pass):
  - Ported `/about` for real (was still a step-3 "coming soon" placeholder despite being live in the nav since step 3) — `old_pages/AboutMe.js` content, `ImageCircle` + bio.
  - User asked for a custom project display order: Tongue Interface + SenSit first, Bisexual Resource Center last. Implemented as an explicit slug-order array sorted in `projects/index.astro` (not a schema field — presentation-only concern).
  - `ImageGallery`/`ImageSlideShow` (the two components the plan called out) needed no porting: `ImageGallery`'s job is already done by the project detail page's gallery grid (step 8, and better — uses `astro:assets`), and `ImageSlideShow` turned out to be dead code, never wired into any old page.
  - Deleted `src/old_pages/` and `src/components/unused/` entirely, plus every remaining `.jsx`/`.js`/`.css` file in `src/components/` — all fully superseded by the `.astro` versions built in steps 3-10. `src/assets`/`src/images` (actual media) untouched, still needed as content-collection image sources and step 7's video source clips.
  - Responsive check: no browser tooling available, so did a static review instead — every multi-item flex row across the codebase already uses `flex-wrap` (grepped to confirm), no unguarded fixed-width elements that could overflow a narrow viewport, viewport meta tag present in `Layout.astro`.
  - `pnpm build && pnpm astro preview` parity check: all 11 routes return correct status codes against the production build, matching dev.
  - **Lighthouse run** (Chrome happened to already be installed on this machine, so this worked despite no browser *extension* access): initial run against the home page scored 100/100/96/100 (performance/accessibility/best-practices/SEO) with **0KB of JS shipped** — confirms the "near-zero JS" bet against the old Gatsby bundle. The 96 was a console-error ding from an implicit `/favicon.ico` 404 (browsers auto-probe it when no icon is declared) — a direct consequence of losing the scaffold's placeholder favicon back in step 2's file shuffle, flagged as an open TODO ever since. Fixed for real this time: `public/favicon.svg` (simple blue monogram) + a proper `<link rel="icon">` in `Layout.astro`. Re-run scored 100/100/100/100 (99 performance, normal run-to-run noise).
- **Step 12 complete**: `.github/workflows/deploy.yml` — `withastro/action` builds + uploads the Pages artifact, `actions/deploy-pages` publishes it. Triggers on push to `master` + manual `workflow_dispatch`. Used WebFetch against the live `withastro/action` repo (action.yml + README) rather than guessing versions from memory, since this genuinely won't run until cutover — confirmed current major versions (`checkout@v7`, `withastro/action@v6`, `deploy-pages@v5`) and that no separate pnpm setup step is needed (the action auto-detects pnpm from the lockfile + `packageManager` field). Added `"packageManager": "pnpm@11.24.0"` to `package.json` (matches what's been used locally all session) so CI resolves the identical pnpm version.
- Not yet triggered against real `master` (per the plan, that only happens at cutover) — reviewed only.
- **Recurring gotcha worth knowing**: the long-running dev server (`pnpm astro dev --background`) has gone stale multiple times this session after `pnpm add`-ing a new dependency or adding a new dynamic route file - symptoms seen so far: new `[slug].astro` routes 404ing, and once a fully broken `/_image` endpoint (`MissingSharp` error even though `pnpm build` handled the same image fine). Fix every time was the same: `pnpm astro dev stop && pnpm astro dev --background`. If something looks broken in the browser that isn't reflected in a fresh `pnpm build`, restart the dev server before spending time debugging further.
- User decided to cut over **before** step 7 (video upload) rather than after — decoupled the two. All 328MB of `.mp4` video source files removed from the repo entirely (confirmed via grep: zero references anywhere in `src/pages`/`src/components`/`src/content`/`src/layouts`, only YouTube IDs are used) since carrying them into cutover's fresh orphan history would defeat the point of a clean start. **Moved (not deleted)** to `C:/Users/jlemu/Desktop/portfolio-videos/`, organized by project, with an `UPLOAD-NOTES.txt` there marking the primary file per project (the 5-file minimum set, matching what the old live site actually displayed) vs. optional extras vs. the one unattached file (`projectshowcase4.mp4`). Full originals also remain recoverable from the archive repo regardless. Step 7 now happens whenever, from that Desktop folder — upload to YouTube, grab the ID from the URL, hand back as `{project: videoId}`, gets swapped into `src/content/projects/<slug>.md`'s `videos:` field replacing the placeholder `dQw4w9WgXcQ`.
- Home page bio (step 4) is now written for real (not a placeholder) — see step 4 notes above, superseded. Writing essays (step 9) are still stubs, still `draft: true`, intentionally hidden.
- **Step 13 complete — CUTOVER DONE.** `master` reset to a single fresh orphan commit (`ebb74290`, "Rewrite site with Astro") containing only the Astro site's tree, force-pushed to `origin/master` (old SHA `24e520f9` → `ebb74290`; fully preserved in the archive repo and locally on `feat/rewrite-astro`/`feat/rewrite-2024-nextjs` if ever needed). The `.github/workflows/deploy.yml` push trigger fired immediately and **GitHub auto-provisioned the Actions-based Pages deployment on this first run** — no manual "Settings → Pages → Source" flip was actually needed, contrary to what step 12/13 assumed; the workflow's own `pages: write` permission was sufficient. Verified on the real live domain (not dev/preview): every route resolves to 200 (directory routes 301-redirect to their trailing-slash form first, e.g. `/resume` → `/resume/` → 200 — normal static-host behavior, not a bug), `/Resume.pdf` downloads, `/this-should-404`-style bad URLs correctly 404, real content confirmed live (resume shows Wix.com/Exactera, projects page shows SwimSense/MIXR/BRC).
- **The rewrite plan is complete.** Only remaining open item is step 7 (video upload — files waiting in `C:/Users/jlemu/Desktop/portfolio-videos/`, see that folder's `UPLOAD-NOTES.txt`), which is why all 5 live project pages currently show the placeholder video ID `dQw4w9WgXcQ` — expected, not a bug, swap in real IDs into `src/content/projects/*.md` whenever ready and push to `master` directly (that's the live branch now).
- This file (`REWRITE-CONTEXT.md`) can be deleted whenever — its purpose (resuming the rewrite across sessions) is done. Kept for now in case step 7 needs the same session-handoff pattern.

## Key facts discovered this session

- This repo **is** the live GitHub Pages site (`jlemus1234.github.io`, a user-page repo). Historically, raw Gatsby build output has been committed directly to `master` — that's why `.git` is ~498MB.
- `src/assets` on `feat/rewrite-2024-nextjs` is ~506MB, almost entirely uncompressed project demo `.mp4`s (SwimSense alone is 281MB) plus a couple of PDFs/PPTX.
- `feat/rewrite-2024-nextjs` is just a bare `create-next-app` scaffold (Next 14, App Router, TS, Tailwind) — the default template page was never replaced. Old Gatsby pages/components/assets were moved into `src/old_pages`, `src/components`, `src/assets` but nothing is wired into the Next.js App Router. ~11 files still reference Gatsby-only APIs (`Link`, `StaticQuery`, `gatsby-image`) — this branch is being abandoned in favor of Astro, kept only as component/copy reference during porting.
- Old pages to port: Home, Projects (SwimSense, MIXR, SenSit, TongueInterface, BisexualResourceCenter/BRC), Resume, Writing (Graduation, Hobbies, McDonalds essays), 404.

## Decisions locked in with the user

- **Framework: Astro** (over Next.js) — near-zero JS by default, native static output for GitHub Pages, built-in Content Collections give a clean path to add a blog later. Confirmed a future interactive project (e.g. a JS/TS game) still works fine as a hydrated island or plain Vite-bundled script on its own page.
- **Videos: YouTube, Unlisted, uploaded manually** by the user via studio.youtube.com (no API automation — not worth OAuth/quota setup for ~15 clips). Video IDs get recorded per-project in that project's content-collection entry. Can be done incrementally, per project, right before that project's page is wired up rather than all up front.
- **Git history**: mirror-push full current history to the new private archive repo (step 1, in progress) before anything else touches history. At final cutover, reset `master` to fresh orphan history containing just the Astro site and force-push — deferred to the very last step, with explicit go-ahead required first.
- **Deployment**: GitHub Actions builds and deploys via GitHub Pages' native Actions integration (`Settings → Pages → Source: GitHub Actions`) — build output will never be committed to git again.
- **Styling**: Tailwind (carried over from the Next.js branch decision — maps cleanly onto the old inline `style={{}}` objects and directly addresses old mobile-layout pain points via responsive utilities).
- Work proceeds **one plan step at a time with a review checkpoint after each** — not executed in one continuous pass.

## Full plan

Canonical copy also lives at `C:\Users\jlemu\.claude\plans\async-jumping-bengio.md` (this machine only). Full text below in case that path isn't available in the new session.

---

# Portfolio site rewrite: Gatsby → Astro

## Context

The live site (`jlemus1234.github.io`) is a several-years-old Gatsby build whose raw build output is committed directly to `master` — that's why `.git` is 498MB and `src/assets` (on the in-progress rewrite branch) is 506MB, mostly uncompressed project demo videos. Gatsby's dependencies are old/deprecated, which is the actual motivation for this rewrite. A prior attempt (`feat/rewrite-2024-nextjs`) got as far as a bare `create-next-app` scaffold with the old Gatsby components/pages/assets parked untouched in `src/old_pages`, `src/components`, `src/assets` — nothing is wired up yet, and ~11 files still call Gatsby-only APIs (`Link`, `StaticQuery`, `gatsby-image`).

Decisions made with the user:
- **Framework: Astro.** Ships zero JS by default (islands architecture), has first-class GitHub Pages static output, and Content Collections give a turnkey path to add a blog later — better fit than Next.js for a mostly-static portfolio, and avoids reintroducing Next.js/Contentlayer-style churn. A future interactive project (e.g. a JS/TS game) is still fully supported as a full-page hydrated island or plain Vite-bundled script.
- **Video assets: YouTube (unlisted) embeds, uploaded manually by the user.** No API automation — a one-time batch of ~15 clips doesn't justify OAuth/quota setup. Repo stops carrying hundreds of MB of `.mp4`s; images/PDFs stay in-repo since they're already small.
- **Git history:** mirror-push the current repo's *full* history (all branches) to a new **private** archive repo first (non-destructive, purely additive), then at cutover reset `master` to fresh orphan history containing just the Astro site and force-push. Deferred to the very end, confirmed explicitly before the force-push.
- **Deployment:** GitHub Actions builds the site and deploys via GitHub Pages' native Actions integration — build output is never committed to git again.

Everything below happens on a new branch (`feat/rewrite-astro`); `master` keeps serving the live Gatsby site untouched until cutover. **Work proceeds one step at a time — pause for review after each step before starting the next**, rather than executing the whole plan in one pass.

## Steps

**1. Archive the old repo**
Create a new private GitHub repo (e.g. `jlemus1234/portfolio-archive-gatsby`), `git push --mirror` everything into it.
*Checkpoint: confirm the archive repo has all branches/tags before continuing — this is the safety net for step 13's force-push.*

**2. Scaffold Astro**
`npm create astro@latest` on `feat/rewrite-astro` (TypeScript strict, no example content) + `@astrojs/tailwind`. `astro.config.mjs` set to `site: 'https://jlemus1234.github.io'`.
*Checkpoint: `astro dev` runs, default page loads.*

**3. Shared shell**
`Layout.astro`, `NavBar.astro`, footer, base Tailwind theme (colors/fonts/spacing) — no real content yet.
*Checkpoint: navigate the (empty) site with working nav links, in browser.*

**4. Home page**
Port `old_pages/index.js` → `index.astro`: about blurb, `ConnectedSites`, `MenuCard`/`MenuCardPanel`, `ImageBanner`/`ImageCircle` using `astro:assets` for local images.
*Checkpoint: home page visually reviewed in browser against the old site.*

**5. Resume page**
`src/data/resume.ts` (typed jobs/education/skills, replacing `ResumeJob.jsx`/`ResumeProject.jsx`/`ResumeSection.jsx` prop-drilling) + `resume.astro` + PDF download link (`src/assets/Resume.pdf` stays in-repo, 112KB).
*Checkpoint: resume page renders, PDF download works.*

**6. Content collection schemas**
`src/content/config.ts`: `projects` collection (title, collaborators, `videos: string[]` of YouTube IDs, image via `image()` helper, gallery, abstract, description) and `writing` collection (a future `blog` collection later reuses this same shape — no structural rework needed to add posts). No entries yet, just schemas.
*Checkpoint: types generate cleanly, empty collections compile.*

**7. Manual step — upload demo videos**
User uploads project demo clips to YouTube as Unlisted via studio.youtube.com, records each video ID. Can be done per-project right before that project's page is wired (step 8), not all up front.
*Checkpoint: a list of `{project: [videoIds]}` handed back before continuing.*

**8. Project pages**
Write `projects` content entries, `projects/index.astro` listing, `projects/[slug].astro` detail page using `astro-embed`'s `<YouTube>` component for the recorded video IDs.
*Checkpoint: each project page renders with working embedded video.*

**9. Writing pages**
Write `writing` content entries (Graduation, Hobbies, McDonalds essays), `writing/index.astro` + `writing/[slug].astro`.
*Checkpoint: essays render correctly.*

**10. 404 page**
`404.astro` (Astro emits root `404.html`, which GitHub Pages serves automatically).
*Checkpoint: bad URL in dev shows the custom 404.*

**11. Polish pass**
Remaining components (`ImageGallery`/`ImageSlideShow` as scoped-script or minimal island, not full framework mount), responsive check on mobile widths, `astro build && astro preview` to confirm built output matches dev, spot Lighthouse run to confirm the "near-zero JS" bet against the old Gatsby bundle. Drop `src/components/unused/*` and any leftover `old_pages`/Gatsby-only files.
*Checkpoint: build succeeds locally, preview reviewed end-to-end, Lighthouse numbers shared.*

**12. Deployment workflow**
`.github/workflows/deploy.yml` (`withastro/action` or `upload-pages-artifact` + `deploy-pages`), triggered on push to `master`.
*Checkpoint: workflow YAML reviewed; not yet triggered against real `master`.*

**13. Cutover** *(explicit go-ahead required before the force-push)*
1. Re-verify the archive repo (step 1) is current.
2. Reset `master` to `feat/rewrite-astro`'s tree as fresh orphan history, force-push.
3. Flip **Settings → Pages → Source: "GitHub Actions"** (currently branch-content deploy).
4. Verify the live site: all routes, video embeds, resume download, 404, mobile layout.

## Resuming

When you reopen this in a new terminal, point Claude at this file (`REWRITE-CONTEXT.md`) — it has everything needed to pick back up at step 1 without re-exploring the repo.
