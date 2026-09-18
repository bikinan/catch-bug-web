---
title: "Troubleshooting & FAQ"
description: "Answers to common questions regarding installation, incognito mode testing, and diagnostic configuration."
section: "Maintenance"
order: 6
---

## Troubleshooting Guide

Here is a compilation of frequent setup and operational questions encountered when testing unpacked extensions in browser developer mode:

---

## Frequently Asked Questions

### Can CatchBug be used in Incognito or Private Browsing windows?
**Yes**, but Chromium-based browsers disable all extensions in Incognito mode by default for privacy protection. To enable CatchBug in private sessions:
1. Open `chrome://extensions` in your browser.
2. Click the **Details** button on the CatchBug card.
3. Scroll down to locate the **Allow in Incognito** setting.
4. Toggle the switch to **ON**.

### Why is the CatchBug panel empty even though the web page clearly encountered errors?
CatchBug begins capturing network telemetry and console events from the initial page navigation. If you install or enable the extension after errors have already fired, simply **reload the page (`F5` or `Ctrl+R`)** so CatchBug can inject its diagnostic listeners at DOM initialization.

### Is CatchBug compatible with non-Chromium browsers like Mozilla Firefox?
The current Developer Preview focuses specifically on Chromium Manifest V3 architectures (Google Chrome, Microsoft Edge, Brave, Arc, Opera). Manifest V3 support for Firefox (Gecko engine) is undergoing internal testing and will be released in an upcoming build.

### How do I reset all local configurations and API keys?
If you want to clear all stored theme settings, filter rules, or cached AI provider keys:
1. Open `chrome://extensions` in your browser.
2. Click **Details** on the CatchBug card.
3. Scroll down and click **Extension options**.
4. Click the button labeled **Reset All Local Data**. This wipes the `chrome.storage.local` keys created by CatchBug.

---

## Community & Contributing

CatchBug is an open-source tool developed collaboratively with the engineering community:

- **Report Issues or Request Features**: Please submit an issue via the [GitHub Issue Tracker](https://github.com/bikinan/catch-bug/issues).
- **Code Contributions**: Visit the [CatchBug GitHub Repository](https://github.com/bikinan/catch-bug) and check out `CONTRIBUTING.md` to run and test the extension locally with Vite and TypeScript.
