<p align="center">
  <a href="https://catchbug.bikinan.id">
    <img src="public/128.png" width="96" height="96" alt="CatchBug Logo" />
  </a>
</p>

<h1 align="center">CatchBug Web</h1>

<p align="center">
  <strong>Official marketing website & technical documentation for the CatchBug Chrome Extension.</strong>
</p>

<p align="center">
  <a href="https://github.com/bikinan/catch-bug-web/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT" /></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Built%20with-Astro%20v7-BC52EE.svg" alt="Built with Astro" /></a>
  <a href="https://github.com/bikinan/catch-bug"><img src="https://img.shields.io/badge/Extension-CatchBug-6bf99c.svg" alt="CatchBug Extension" /></a>
</p>

---

## ⚡ Overview

[CatchBug](https://github.com/bikinan/catch-bug) turns 5 minutes of tedious bug reporting into a 3-second, one-click diagnostic dispatch.

This repository powers **CatchBug's web presence**, including:

- **Interactive Landing Page**: Featuring an authentic live simulator of the CatchBug avionics cockpit panel, real-time error synthesis, and zero-dependency smooth scroll.
- **Comprehensive Technical Documentation**: Fast, accessible guides covering Manifest V3 architecture, zero-credential masking audits, step-by-step installation, and troubleshooting.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build) (Static Site Generation / Content Collections)
- **Styling**: Vanilla CSS Design Tokens (Bioluminescent Avionics Palette, zero Tailwind overhead)
- **Smooth Scroll & Animation**: [Lenis](https://github.com/darkroomengineering/lenis) + GPU-accelerated CSS `translate3d`
- **Typography**: Self-hosted via `@fontsource/syne` and `@fontsource/inter`
- **Package Manager**: [pnpm](https://pnpm.io)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>= 22.12.0`
- **pnpm**: `>= 9.0.0`

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/bikinan/catch-bug-web.git
cd catch-bug-web

# 2. Install dependencies
pnpm install

# 3. Start local development server
pnpm dev
```

Visit [`http://localhost:4321`](http://localhost:4321) in your browser.

### Building for Production

```bash
# Type-check and generate static production bundle in dist/
pnpm build

# Preview production build locally
pnpm preview
```

---

## 📁 Project Structure

```text
catch-bug-web/
├── public/                 # Static assets, logos, favicons
├── src/
│   ├── components/
│   │   ├── atoms/          # Primitive buttons, badges, icons, prose
│   │   ├── molecules/      # Bento cards, action groups, telemetry headers
│   │   └── organisms/      # HeaderNav, HeroSection, BentoGrid, ContrastMatrix, SiteFooter
│   ├── content/
│   │   └── docs/           # Markdown articles for /docs/* routes
│   ├── layouts/
│   │   ├── BaseLayout.astro # Base HTML layout with tokens & Lenis
│   │   └── DocsLayout.astro # Documentation layout with sidebar & TOC
│   ├── lib/
│   │   └── lenis.ts        # Shared Lenis smooth-scroll singleton
│   ├── pages/              # Astro file-based routing
│   └── styles/
│       └── tokens.css      # Design system CSS custom properties
├── .github/                # Issue & PR templates
├── CONTRIBUTING.md         # Guidelines for contributing
├── LICENSE                 # MIT License
└── README.md
```

---

## 🤝 Contributing

Contributions to the website, design polish, and documentation are warmly welcomed!
Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

Crafted with care by [Bikinan Studio](https://bikinan.id).
