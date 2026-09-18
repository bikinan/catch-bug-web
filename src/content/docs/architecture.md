---
title: "Core Architecture"
description: "Internal mechanics of CatchBug: In-Memory Circular Buffer, DOM Action Breadcrumbs, and AI Root Cause Analysis."
section: "Core Architecture"
order: 3
---

## Architectural Overview

CatchBug is engineered for high performance and zero host interference. It operates quietly in the background without degrading the rendering thread or execution speed of the application under test. The system consists of three core layers:

```
[ Web Application Context ]
            │
            ▼ (Pass-through telemetry hooks)
[ In-Memory Circular Buffer (Max 50 events) ] ──▶ [ Token Sanitizer Engine ]
            │
            ▼
[ Local CatchBug Popup UI / DevTools Panel ] ──▶ [ BYOK AI Diagnostic Triage ]
```

---

## 1. Network Interception Pipeline

CatchBug injects a lightweight, non-destructive proxy wrapper into the host page's `window.fetch` and `window.XMLHttpRequest` prototypes when the page initializes.

### Pipeline Characteristics:
- **Asynchronous Passthrough**: Outgoing network requests proceed normally with zero artificial latency or thread blocking.
- **Header & Payload Capture**: Passively records HTTP status codes, query parameters, latency durations (ms), and response headers.
- **In-Memory Circular Buffer**: Implements an in-memory ring buffer capped at 50 rolling events. When capacity is reached, older entries are gracefully overwritten. This bounds extension memory consumption to under 2 MB with **0 disk I/O**.

```ts
// Telemetry event schema representation
interface TelemetryEvent {
  id: string;
  type: 'xhr' | 'fetch' | 'console-error' | 'unhandled-rejection';
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  status: number;
  durationMs: number;
  timestamp: number;
  sanitizedHeaders: Record<string, string>;
}
```

---

## 2. DOM Action Breadcrumbs

Bug tickets frequently bounce back between QA and engineering because the exact sequence of clicks preceding an exception cannot be reproduced. CatchBug automatically maintains a rolling trail of the last 10 DOM user interactions:

- **Target Selectors**: Captures clean CSS selectors, tag names, IDs, and ARIA attributes (e.g., `button#submit-order.btn-primary`).
- **Focus & Blur Lifecycle**: Tracks user focus movement across form fields without recording keystrokes or input values (**strict zero-keystroke logging**).
- **Client Route Transitions**: Detects client-side SPA navigation via `popstate` events and HTML5 History API interceptors with millisecond precision.

---

## 3. BYOK AI Root Cause Analysis

CatchBug includes an optional diagnostic assistant that inspects stack traces and correlated failed network requests to provide an instant preliminary root cause analysis.

### Bring Your Own Key (BYOK) Principles:
1. **Local Key Storage**: Your OpenAI, Anthropic, or Google Gemini API key is encrypted and stored strictly in `chrome.storage.local`.
2. **Direct Client Dispatch**: AI inference requests are sent directly from your browser to your AI provider's endpoint without routing through any CatchBug intermediary server.
3. **Mandatory Pre-Sanitization**: Error payloads and network logs are systematically filtered by the local Token Sanitizer before dispatch to any LLM endpoint.
