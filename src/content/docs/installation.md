---
title: "Step-by-Step Installation"
description: "A complete guide to installing CatchBug as an Unpacked Extension in Chromium-based browsers in under 60 seconds."
section: "Getting Started"
order: 2
---

## Installation Overview

Installing an unpacked browser extension requires no administrative privileges, CLI tooling, or compilation steps. The entire process takes place through your browser's native extensions management interface.

---

## 4-Step Quick Install

### Step 1: Extract the Release Archive
Download the latest release zip from GitHub, then extract it to a permanent folder on your local machine (e.g., `~/Documents/extensions/catch-bug-dist` or `C:\extensions\catch-bug-dist`).

> Ensure that the extracted folder remains intact in this path. Chromium browsers read extension files directly from this folder in developer mode.

### Step 2: Open Browser Extensions Page
Open a new tab in your Chromium browser and navigate to the extensions settings URL:

- **Google Chrome**: `chrome://extensions`
- **Microsoft Edge**: `edge://extensions`
- **Brave Browser**: `brave://extensions`
- **Opera**: `opera://extensions`

### Step 3: Enable Developer Mode
In the upper right corner of the extensions page, find the toggle switch labeled **"Developer mode"** and switch it to **ON**. Once enabled, an action toolbar will appear across the top of the screen.

### Step 4: Click "Load Unpacked" & Select Folder
1. Click the **"Load unpacked"** button in the top left toolbar.
2. In your operating system file picker, navigate to and select the folder containing `manifest.json`.
3. Click **Select Folder** (or **Open**).

CatchBug will immediately appear in your list of installed, active extensions.

---

## Pinning Extension to Toolbar

For quick access while testing web applications:
1. Click the puzzle piece icon (**Extensions**) in the top right browser toolbar.
2. Locate **CatchBug** in the drop-down list.
3. Click the pin icon next to CatchBug so its Cyber Mint bug icon remains permanently accessible in your toolbar.

---

## Verification Checklist

Once installed, verify that CatchBug is operating normally:

- [x] The **CatchBug** extension card toggle is blue (Active/Enabled).
- [x] No red **Errors** badge appears on the CatchBug card in `chrome://extensions`.
- [x] Clicking the CatchBug toolbar icon opens the live telemetry monitoring panel.
- [x] Opening browser DevTools (`F12`) displays the dedicated **CatchBug Inspector** tab.
