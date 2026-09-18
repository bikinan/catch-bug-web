---
title: "Security & Privacy Model"
description: "Manifest V3 permission audit, Zero-Cloud guarantee, and client-side token scrubbing mechanisms."
section: "Security & Privacy"
order: 4
---

## Security & Privacy Philosophy

Developer and end-user data privacy is the foundational design pillar of CatchBug. The extension strictly adheres to the principle of **Least Privilege** and **Zero External Storage**.

---

## Manifest V3 Permissions Audit

CatchBug requests only the minimum set of permissions necessary to monitor and inspect the active debugging session:

| Permission | Risk Level | Technical Justification |
| :--- | :--- | :--- |
| `activeTab` | **Minimal** | Grants temporary, scoped access to the currently viewed tab when you click the extension icon to read console logs. It does not run across background tabs. |
| `storage` | **Minimal** | Saves local user preferences (dark theme, error code filters, and optional AI keys) strictly in `chrome.storage.local`. |
| `webRequest` | **Low** | Passively inspects response headers and detects HTTP failure status codes (4xx / 5xx) to populate the in-memory telemetry buffer. |

CatchBug **never** requests elevated permissions such as `<all_urls>`, `cookies`, `webNavigation`, `management`, or `nativeMessaging`.

---

## Client-Side Token Scrubber

Before any network payload or console entry is placed into the in-memory circular buffer or exported to JSON / Markdown, all string content is evaluated by a multi-pass regex sanitizer:

### Sensitive Entities Automatically Redacted:
- **Authorization Headers**: Matches like `Bearer eyJ...` are replaced with `Bearer [REDACTED_JWT]`.
- **Passwords & Passphrases**: JSON key-value pairs matching `"password": "..."` or `"secret": "..."` are replaced with `"[REDACTED_SECRET]"`.
- **Credit Card Numbers**: 13–16 digit numerical sequences satisfying the Luhn checksum are masked as `[REDACTED_CC]`.
- **API Keys & Secrets**: Common service patterns (e.g., GitHub tokens `ghp_...`, AWS Access Keys `AKIA...`, Stripe secrets `sk_live_...`) are intercepted and scrubbed.

```ts
// Built-in sanitization regex patterns
const SENSITIVE_PATTERNS = [
  /Bearer\s+[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*/gi,
  /"(password|secret|token|apiKey|auth)"\s*:\s*"[^"]+"/gi,
  /\b(?:\d[ -]*?){13,16}\b/g,
];
```

---

## Zero-Cloud Guarantee

1. **No Third-Party Telemetry**: The extension bundle includes zero trackers, analytics beacons, or remote logging services (no Google Analytics, Mixpanel, or Sentry).
2. **No User Accounts**: CatchBug is instantly operational upon installation. No registration, email collection, or OAuth logins are ever required.
3. **Pure In-Memory Persistence**: Session history lives only while the inspected tab is open and is destroyed when the tab is closed or refreshed, unless you explicitly choose to export it to your local disk.
