---
title: "Updating CatchBug"
description: "How to update your local unpacked CatchBug extension when a new release build is published."
section: "Maintenance"
order: 5
---

## Update Workflow

Because CatchBug is distributed under the **Developer Preview (Unpacked)** channel and is not yet published to the Chrome Web Store, the browser will not auto-update the extension in the background.

You can upgrade CatchBug to the latest release in 3 simple steps:

---

## 3-Step Update Procedure

### 1. Download Latest Release
Visit the official [CatchBug GitHub Releases](https://github.com/bikinan/catch-bug/releases) page and download the newest `.zip` bundle (e.g., `catch-bug-v0.2.0.zip`).

### 2. Replace Extension Folder Files
Extract the newly downloaded archive, and copy the extracted files directly into your existing extension folder on your machine, replacing (**overwriting**) all existing files.

> **Important Tip**: Do not move the folder to a new path on your disk so that the existing browser registration remains valid.

### 3. Click Reload in Browser Extensions
1. Return to your browser's extension page (`chrome://extensions`, `edge://extensions`, or `brave://extensions`).
2. Locate the **CatchBug** card.
3. Click the circular arrow button (**Reload**) located in the lower right corner of the CatchBug card.
4. Confirm that the displayed version number updates to reflect the new release.

---

## Verifying the Update

- Click the CatchBug icon in your browser toolbar to verify that the popup loads properly.
- Inspect the footer of the CatchBug panel to confirm the version matches the downloaded release.
- If any red warnings appear on the extension card, click **Clear all errors** and refresh your web application tab.
