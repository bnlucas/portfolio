---
title: Nathan Lucas - Projects
layout: default.njk
permalink: /projects/
---

## Platforms

Four focused back-end products I build independently under [Skeptik](https://skeptik.io) — each solves one problem end-to-end, with no suite lock-in.

### [ShrouDB](https://shroudb.io) — Security & secrets

*"Stop stitching. Start shipping."*

A 9-engine security infrastructure platform (Rust) that replaces the usual pile of vendors with a single binary: **Sigil** (credentials), **Cipher** (encryption), **Keep** (secrets), **Stash** (encrypted object storage), **Veil** (encrypted search), **Forge** (internal CA), **Sentry** (authorization), **Courier** (secure notifications), and **Chronicle** (audit). One auth model, one config format, one telemetry pipeline. Per-tenant AES-256-GCM key isolation baked into the storage layer. Benchmarked at **44K JWT verifications/sec** and **33K encrypt/decrypt ops/sec** at sub-millisecond latency.

SDKs: TypeScript, Python, Go, Ruby. Open-source (MIT / Apache-2.0).

**Replaces:** Vault, KMS, Auth0, OPA, step-ca, Let's Encrypt, SendGrid, Datadog.

---

### [Herald](https://herald.skeptik.io) — Realtime & messaging

*"Real-time events that actually arrive."*

A multi-tenant realtime transport (Rust) with **embedded WAL storage** — no Redis, no broker, no external retry queue. Auth, presence, and chat engines ship built-in and can be swapped without forking. Clients reconnect and replay up to 7 days without gaps. Sustains **~8K msg/sec at 0.1ms p50 latency**. Four Docker images (transport-only, chat, presence, full stack).

SDKs: TypeScript (core, chat state machine, chat React hooks, presence), plus admin SDKs in Go, Python, Ruby, PHP, and C#.

**Replaces:** Pusher, Ably, Centrifugo.

---

### [Meterd](https://meterd.io) — Usage & billing

*"Catch revenue leaks before they reach the invoice."*

Real-time metering and quota enforcement (Rust) that runs **in the request path, not after the fact**. Atomic Redis Lua quota checks with two-phase reservation prevent overselling; five pricing models (flat, graduated, volume, package, weighted) cover the common cases; Stripe and swappable billing backends. Handles **~10K events/sec per tenant** with Postgres fallback when Redis is unavailable. Next.js dashboard + embeddable customer portal.

SDK: TypeScript.

**Replaces:** Orb, Metronome, Lago.

---

### [Simbee](https://simbee.io) — Graph & discovery

*"Matching and discovery, without the ML team."*

A multi-tenant social graph with matching, ranked feeds, and campaigns. Five microservices (Ruby/Rails + Python/FastAPI) behind Envoy, with **warm and cold-start matching in a single pipeline** — FAISS for candidate retrieval, HDBSCAN for behavioral clustering, SVD for dimensionality reduction. **35+ scoring parameters tunable without shipping code.** Consent-aware embeddings built for GDPR workflows. Native CPM/CPE campaign engine with A/B variants.

SDKs: TypeScript, Python, Ruby.

**Replaces:** Homegrown ML pipelines, Algolia Recommend.

---

## Libraries

Open-source tooling focused on **runtime data modeling, service boundaries, and operational clarity** — the same instincts that drive the platform work above.

### [Obfuskey](https://obfuskey.skeptik.io)

Reversible, fixed-length obfuscated key generation from integers with bit-packing support — four language ports sharing a single spec and test surface.

- **[obfuskey](https://github.com/bnlucas/obfuskey)** — Python (reference implementation).
- **[obfuskey-js](https://github.com/bnlucas/obfuskey-js)** — TypeScript, `BigInt`-based, safe across frontend, Node, and edge runtimes.
- **[obfuskey-rs](https://github.com/bnlucas/obfuskey-rs)** — Rust.
- **[obfuskey-rb](https://github.com/bnlucas/obfuskey-rb)** — Ruby.

### Ruby

- **[Cattri](https://github.com/bnlucas/cattri)** — class and instance attributes with strict semantics: inheritance, lazy defaults, `final` (write-once) values, fine-grained visibility and coercion control.
- **[Castkit](https://github.com/bnlucas/castkit)** — type-safe DTOs and contracts with declarative schemas, typecasting, validation, and serialization for hardening service boundaries.
- **[Gaskit](https://github.com/bnlucas/gaskit)** — composable operations and service objects structured as step pipelines with early exits, explicit error handling, and integrated logging and duration tracking.

### Python

- **[Corbel](https://github.com/bnlucas/corbel)** — dataclass extension with mixins for validation, immutable updates, hashing, comparison, and JSON serialization, plus property-level metadata via `@corbel_property`.

These libraries are developed independently and are not affiliated with any employer.

---

## Experiments

### [IsNathanAlive](https://isnathanalive.com)

A playful status-check site wiring a **SwitchBot motion sensor** to **Vercel serverless functions** and **Upstash Redis**. Motion updates a timestamp that renders as an intentionally absurd status message (e.g., "got dunks 2 days ago, still kickin"). Demonstrates practical IoT webhooks, event filtering, and near-real-time serverless data flow. Source: [github.com/bnlucas/isnathanalive](https://github.com/bnlucas/isnathanalive).
