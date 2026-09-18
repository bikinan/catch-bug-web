---
title: "Getting Started & Overview"
description: "An introduction to CatchBug, the Developer Preview (Unpacked MV3) status, and our zero-cloud telemetry philosophy."
section: "Getting Started"
order: 1
---

## What is CatchBug?

**CatchBug** is a lightweight, Chrome Manifest V3 browser extension built specifically to streamline frontend bug reporting and QA diagnostic workflows. It bridges the gap between testers and developers by capturing live execution context as issues occur—including console error stack traces, network telemetry (XHR/Fetch), and DOM interaction breadcrumbs—and compiling them into actionable, developer-ready issue reports in a single click.

> **Zero-Cloud Guarantee**: All telemetry events, DOM breadcrumbs, and token scrubbers are executed 100% locally within your browser's in-memory sandbox. CatchBug maintains no external analytics servers, transmits zero telemetry to third parties, and requires no account creation or authentication.

---

## Developer Preview Status

CatchBug is currently distributed under a **Developer Preview (Unpacked MV3)** release channel. This allows developers and engineering teams to evaluate, test, and run the extension immediately in browser developer mode without waiting for Chrome Web Store review cycles.

### Developer Preview Characteristics

- **Unpacked Distribution**: Packaged as a clean `.zip` archive containing the compiled extension assets (`manifest.json`, background service worker, popup UI, and content script).
- **Direct Source Auditing**: Complete transparency—you can inspect every line of bundled JavaScript and permission configuration before loading it into your browser.
- **BYOK (Bring Your Own Key)**: The optional AI-driven root cause summary operates entirely via your own LLM provider API key, encrypted and saved strictly in `chrome.storage.local`.

---

## Download Latest Build

Get the official release package directly from our GitHub releases:

- [📥 Download CatchBug Build v0.1.0 (.zip)](https://github.com/bikinan/catch-bug/releases/latest)
- [⭐ Inspect Source on GitHub](https://github.com/bikinan/catch-bug)

### Technical Specifications

| Specification            | Details                                                          |
| :----------------------- | :--------------------------------------------------------------- |
| **Manifest Version**     | Manifest V3 (MV3) compliant                                      |
| **Package Size**         | ~240 KB (including static UI assets)                             |
| **Supported Browsers**   | Google Chrome (v109+), Microsoft Edge (v109+), Brave, Opera, Arc |
| **Runtime Dependencies** | 0 external CDNs / 0 third-party telemetry beacons                |

Proceed to [Step-by-Step Installation](/docs/installation) for a quick setup guide that takes under 60 seconds.
