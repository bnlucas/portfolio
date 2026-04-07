---
## title: Nathan Lucas - Resume
layout: default.njk
permalink: /resume/
---

[📄 Download Resume (PDF)](https://bnlucas.com/static/Nathan-Lucas-Resume.pdf)

## Professional Summary

Systems architect and platform engineer who builds production-grade infrastructure from scratch. Designed and shipped a composable cryptographic platform (12 engines, Rust), a behavioral matching engine, a real-time messaging system, and a metering platform — all running in production as multi-tenant services. A decade of backend engineering across Ruby, Python, TypeScript, Java, and Rust, with a track record of owning the hardest problems in the room: system-wide architectural migrations, billing pipelines nobody could crack, and integrations that became core revenue drivers. Progressed from Tier 1 support to Staff Engineer by consistently building things that outlast the team that shipped them.

## Core Skills

- **Languages**: Rust, Ruby, TypeScript, Python, Java
- **Frameworks**: Rails, React, Node.js, FastAPI, Django, Spring Boot, Axum, Tonic
- **Infrastructure**: AWS, Docker, Kubernetes, Terraform, CI/CD, Envoy, PostgreSQL, Redis, RabbitMQ, Kafka, NATS
- **Domains**: Cryptographic systems, distributed architecture, API platform design, microservices migration, billing and metering, real-time messaging, search and matching systems
- **Practices**: Systems design, service-oriented architecture, protocol design, SDK and client generation, performance optimization, mentorship

## Experience

---

### Skeptik.io

**Founder & Principal Engineer** · 2025 – Present

Self-funded, solo-built portfolio of infrastructure products and consumer applications. Four platforms, five-language SDK coverage, multi-tenant production deployments.

**ShrouDB** — Security infrastructure platform (Rust)

- Architected a 12-engine cryptographic platform that replaces ad-hoc auth, encryption, and secrets management with a single unified gateway, eliminating the need to rebuild these primitives per project
- Designed a schema-driven credential system where developers annotate fields and the platform automatically routes each to the correct cryptographic treatment — fail-closed, so PII cannot be stored without encryption
- Shipped client-side E2EE via WASM, enabling users to encrypt data and search over it without the server ever accessing plaintext
- Solved GDPR right-to-erasure through crypto-shredding, reducing deletion compliance from a cross-service data hunt to a single key destruction operation

**Meterd** — Metering and quota enforcement platform (Rust)

- Built a gateway-layer metering engine that handles rate limiting, quota enforcement, and usage tracking as a single concern at the Envoy edge, before requests reach application code
- Designed atomic quota checks with two-phase reservation semantics and automatic Postgres fallback when Redis is unavailable, ensuring billing accuracy without sacrificing availability
- Integrated Stripe billing, webhook delivery, and a full product catalog (plans, features, per-customer overrides) to power usage-based pricing for downstream products

**Simbee** — Matching and discovery platform (Ruby/Rails, Python/FastAPI)

- Designed a consent-scoped matching platform where user affinities, signals, and preferences are isolated per context — enabling a single platform to power dating, professional networking, and community discovery without cross-contamination
- Built a dual-path matching pipeline that transitions users from trait-based cold start matching to behavioral embedding-based scoring as signal history accumulates, improving match quality over time
- Implemented a self-correcting clustering system that monitors drift and automatically triggers re-clustering when user behavior shifts, keeping recommendations current without manual intervention

**Herald** — Real-time messaging platform (Rust)

- Built a multi-tenant WebSocket server with WAL-backed message retention and replay, designed as the transport layer for any application needing live communication
- Kept the server zero-knowledge by treating message bodies as opaque bytes, pushing E2EE and encrypted search entirely to the client via WASM

---

### LILT, Inc. – Boston, MA

**Senior Software Engineer** · September 2025 – January 2026

- Designed and deployed a worker-based ingestion pipeline serving 50+ content connectors, replacing a fragile synchronous flow with a scalable async architecture
- Optimized the core job runner, reducing per-file processing time from 7s to 0.3s (~96% improvement) across the ingestion pipeline
- Owned multiple backend services and plugins across Python, Java, TypeScript, and C#, operating as a generalist across a complex multi-language platform

---

### LinkSquares, Inc. – Boston, MA

**Staff Software Engineer** · July 2023 – January 2025

**Senior Software Engineer** · April 2022 – July 2023

- Served as the integration architect responsible for the company’s entire third-party integration offerings — designed the event-driven architecture (RabbitMQ), extracted Salesforce integration and notification systems from two monoliths, and defined the patterns that enabled the organization’s transition to microservices
- Reduced deployment cycle from weekly hours-long monolith releases to on-demand microservice deploys (15–30 minutes), directly accelerating feature delivery across the engineering org
- Designed and implemented JWT authentication standards adopted across all services in collaboration with Architecture and DevOps
- Mentored a team of 6 engineers on architectural patterns, code quality, and service design

---

### Globalization Partners – Boston, MA

**Senior Software Engineer** · August 2021 – April 2022

- Built the credits pipeline in the billing flow — a problem the team had been unable to solve — enabling accurate credit tracking across the platform’s global payroll operations
- Reduced critical Postgres reporting query times by ~99% through systematic query optimization and indexing, unblocking the business intelligence team’s reporting workflows
- Architected automated payment reconciliation workflows that eliminated manual errors and saved the finance team 10–15 hours weekly
- Established standardized development practices across Java (Spring Boot) services for a growing engineering organization

---

### Constant Contact – Loveland, CO & Boston, MA

**Associate Software Engineer → Senior Software Engineer** · May 2018 – August 2021

- Sole developer of the Facebook Ads integration — designed, built, and maintained a revenue-critical feature connecting Constant Contact’s platform to Facebook’s advertising APIs
- Co-led the company-wide React frontend migration, defining architectural patterns adopted across engineering teams
- Built and maintained Java (Spring Boot) backend APIs powering core customer features and third-party integrations
- Mentored junior engineers and established team-wide coding standards and review practices

**Customer Engagement Specialist → Senior VOC Technical Engineer** · August 2015 – May 2018

- Built internal automation tooling that improved support team throughput by 15–20%, establishing the technical foundation for a transition into engineering
- Served as technical liaison between customers, support, and engineering — identifying systemic product issues and driving fixes upstream

---

## Additional Background

My formal engineering career began in 2018, building on decades of self-directed programming and several years in technical operations. Progressing from Tier 1 support to Staff Engineer shaped a practical intuition for reliability, edge cases, and building systems that work under real-world pressure — the same instinct that drives the infrastructure I build independently today.