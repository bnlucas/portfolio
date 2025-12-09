---
title: Nathan Lucas - Projects
layout: default.njk
permalink: /projects/
---

## Open Source Projects

I actively maintain and contribute to open-source software focused on developer ergonomics, structured data modeling, and runtime efficiency. Below are some of the projects I have authored or led, which address gaps I encountered in real-world systems.

### [Obfuskey](https://github.com/bnlucas/obfuskey) (Python)

A compact library for **reversible, fixed-length obfuscated key generation** from integers. It also supports **bit-packing multiple values** into single, compact identifiers using custom schemas.

### [Corbel](https://github.com/bnlucas/corbel) (Python)

A composable **dataclass extension and runtime modeling toolkit** for Python. Corbel provides mixins for **validation, immutable updates, hashing, comparison, and JSON serialization**, along with **property-level metadata via @corbel_property**. Designed for **structured data modeling with low overhead**.

### [Obfuskey.js](https://github.com/bnlucas/obfuskey-js) (TypeScript)

A cross-platform port of the Python Obfuskey for JavaScript/TypeScript environments. It provides **reversible, fixed-length obfuscated key generation** and **bit-packing of multiple values** into compact identifiers, leveraging `BigInt` for arbitrary precision.

### [Cattri](https://github.com/bnlucas/cattri) (Ruby)

A lightweight Ruby DSL for defining **flexible class and instance attributes**. It supports inheritance, lazy defaults, **`final` (write-once) values**, and fine-grained control over **visibility and coercion**, enabling structured data patterns.

### [Castkit](https://github.com/bnlucas/castkit) (Ruby)

A lightweight **type-safe data transfer object (DTO) and contract system** for Ruby. It offers a declarative approach to structured data with **built-in typecasting, validation, and serialization**, designed for robust service boundaries.

### [Gaskit](https://github.com/bnlucas/gaskit) (Ruby)

A flexible framework for **composable operations and service objects** in Ruby. It promotes structured application logic through **step pipelines, robust error handling with early exits, and integrated logging and duration tracking**.

These libraries were developed independently and are not affiliated with any employer. Each reflects my commitment to clarity, performance, and maintainability.

---

## Experiments

### [IsNathanAlive](https://github.com/bnlucas/isnathanalive) ([Live Site](https://isnathanalive.com)) (Next.js / IoT)

A playful status-check site that integrates a **SwitchBot motion sensor** with **serverless functions (Vercel)** and **Upstash Redis**. When motion is detected, a timestamp is updated and surfaced on a website as a large, humorous message (e.g., “got dunks 2 days ago, still kickin”).

While lighthearted in presentation, the project demonstrates practical use of **IoT webhooks**, **event filtering**, and **real-time serverless data pipelines**.

This project showcases my ability to **blend hardware, serverless cloud architecture, and web frontend development**, all while maintaining a sense of humor.
