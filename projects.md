---
title: Nathan Lucas - Projects
layout: default.njk
permalink: /projects/
---

## Open Source Projects

I design open-source tooling focused on **runtime data modeling, service boundaries, and operational clarity**. These libraries reflect the systems I build in production: typed data at the edges, controlled mutation, and explicit execution flow.

### [Cattri](https://github.com/bnlucas/cattri) (Ruby)

A lightweight Ruby DSL for defining **class and instance attributes with strict semantics**. Supports inheritance, lazy defaults, **`final` (write-once) values**, and fine-grained control over **visibility and coercion**. Designed for building predictable, introspectable runtime state.

---

### [Castkit](https://github.com/bnlucas/castkit) (Ruby)

A **type-safe DTO and contract system** for Ruby services. Provides declarative schemas with **typecasting, validation, and serialization**, built to harden service boundaries and reduce implicit coupling.

---

### [Gaskit](https://github.com/bnlucas/gaskit) (Ruby)

A framework for **composable operations and service objects**. Structures business logic as **step pipelines** with early exits, explicit error handling, and integrated **logging + duration tracking** for production observability.

---

### [Corbel](https://github.com/bnlucas/corbel) (Python)

A composable **dataclass extension and runtime modeling toolkit** for Python. Provides mixins for **validation, immutable updates, hashing, comparison, and JSON serialization**, plus **property-level metadata via `@corbel_property`**. Designed for **structured data modeling with minimal overhead**.

---

### [Obfuskey](https://github.com/bnlucas/obfuskey) (Python)

A compact library for **reversible, fixed-length obfuscated key generation** from integers. Supports **bit-packing multiple values** into single compact identifiers using custom schemas.

---

### [Obfuskey.js](https://github.com/bnlucas/obfuskey-js) (TypeScript)

A cross-platform port of Obfuskey for JavaScript and TypeScript. Provides **reversible fixed-length identifiers** and **bit-packing with `BigInt`**, enabling safe use across frontend, Node, and edge runtimes.

---

These libraries were developed independently and are not affiliated with any employer. Each reflects my focus on **clarity, performance, and long-lived system design**.

---

## Experiments

### [IsNathanAlive](https://github.com/bnlucas/isnathanalive)  
([Live Site](https://isnathanalive.com)) — Next.js / IoT

A playful status-check site integrating a **SwitchBot motion sensor**, **Vercel serverless functions**, and **Upstash Redis**. Motion updates a timestamp that renders as a large, humorous status message (e.g., “got dunks 2 days ago, still kickin”).

Demonstrates practical use of **IoT webhooks**, **event filtering**, and **near-real-time serverless data flow**, wrapped in a deliberately absurd interface.