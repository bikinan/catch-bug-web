# Contributing to CatchBug Web

Thank you for your interest in contributing to CatchBug's website and documentation!

This repository hosts the official landing page and technical documentation for the [CatchBug Chrome Extension](https://github.com/bikinan/catch-bug).

---

## 🛠️ Development Setup

### Prerequisites
- Node.js `>= 22.12.0`
- [pnpm](https://pnpm.io) `>= 9.0.0`

### Quickstart

1. **Fork & clone the repository**:
   ```bash
   git clone https://github.com/bikinan/catch-bug-web.git
   cd catch-bug-web
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the local development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Build and preview production bundle**:
   ```bash
   pnpm build
   pnpm preview
   ```

---

## 📝 Documentation Contributions

All documentation articles are written in Markdown and located under `src/content/docs/`:

- `index.md` — Overview and core concepts
- `getting-started/index.md` — Quickstart guide
- `installation/index.md` — Unpacked developer build & Chrome Web Store installation
- `architecture/index.md` — Manifest V3 architecture & security model
- `security-and-privacy/index.md` — Client-side sanitization and permissions audit
- `updating/index.md` — Step-by-step update process
- `troubleshooting/index.md` — Common errors and diagnostics

When adding or modifying docs, ensure the frontmatter follows the schema:

```yaml
---
title: "Article Title"
description: "A concise 1-2 sentence summary."
section: "Getting Started" # or "Guides", "Architecture", "Support"
order: 1
---
```

---

## 🎨 Design & Code Standards

- **Astro**: Static-site generation with lightweight, isolated component scripts.
- **Styling**: Vanilla CSS using tokens defined in `src/styles/tokens.css`. Do not add Tailwind CSS or inline inline frameworks unless discussed.
- **Performance**: Zero layout thrashing during scroll, GPU-accelerated compositing (`transform: translate3d`).
- **Typography**: Self-hosted via `@fontsource` (Syne for headings, Inter for body, JetBrains Mono for code).

---

## 🚀 Submitting a Pull Request (PR)

1. Create a descriptive feature branch:
   ```bash
   git checkout -b fix/docs-typo
   # or
   git checkout -b feat/new-guide
   ```
2. Commit your changes with conventional commit messages:
   - `docs: update installation instructions for Brave browser`
   - `fix: resolve mobile navigation backdrop contrast`
   - `style: refine footer badge alignment`
3. Push to your fork and submit a PR to the `main` branch.
4. Verify that `pnpm build` passes cleanly before requesting review.

---

## 📜 Code of Conduct

Please treat all contributors, maintainers, and community members with kindness, empathy, and respect. Harassment or toxic behavior of any kind will not be tolerated.
