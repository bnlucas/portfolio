-----

## title: Nathan Lucas - Resume
layout: default.njk
permalink: /resume/

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

-----

### Skeptik.io

**Founder & Principal Engineer** · 2025 – Present

Building a portfolio of composable infrastructure products and consumer applications as an independent, self-funded operation. All products are multi-tenant, deployed across dev/staging/production environments, and running in production.

**ShrouDB** — Cryptographic infrastructure platform (Rust)

- Designed and built 12 composable engines: credential envelopes (Sigil), encryption-as-a-service (Cipher), encrypted search via blind indices (Veil), secrets management (Keep), certificate authority (Forge), authorization (Sentry), audit trail (Chronicle), secure delivery (Courier), encrypted blob storage (Stash), and a unified API gateway (Moat) exposing all engines over RESP3 and HTTP
- Implemented field-level crypto routing — developers annotate a schema and Sigil automatically applies the correct cryptographic treatment per field (Argon2id hashing, AES-256-GCM encryption, blind indexing, versioned secret storage) with fail-closed enforcement: PII fields without Cipher capability are rejected, not stored as plaintext
- Built client-side E2EE via Cipher and Veil compiled to WASM, enabling encrypted search over encrypted data without server-side plaintext access
- GDPR right-to-erasure implemented as crypto-shredding — delete the key, the data is mathematically irrecoverable
- Automatic key rotation with REWRAP TTL jobs; ciphertext metadata (algorithm, key version) obfuscated via custom bit-packing library to eliminate metadata leakage
- Clients generated for TypeScript, Python, Rust, Go, and Ruby from machine-readable protocol specifications via codegen

**Meterd** — Usage metering and quota enforcement platform (Rust)

- Built a high-throughput event ingestion pipeline with in-memory aggregation (DashMap, 60s flush cycles), 7 aggregation strategies, and spike detection
- Implemented atomic quota enforcement via Redis Lua scripts with two-phase reservation (reserve/commit/release), Postgres fallback, and configurable fail-open mode
- Designed as an Envoy external processor for gateway-level rate limiting, quota enforcement, and usage metering before requests reach application code
- REST (Axum) and gRPC (Tonic) APIs with full product catalog (applications, environments, features, plans), Stripe billing bridge, HMAC-signed webhook delivery, and Prometheus metrics
- Circuit breaker on Postgres writes, dead-letter queue via Redis streams with automatic replay, graceful shutdown with in-flight drain

**Simbee** — Behavioral matching and discovery platform (Ruby/Rails, Python/FastAPI)

- Architected a multi-service matching platform: graph service (social graph, affinities, signals, content feeds), discovery service (matching, clustering, campaigns), clustering service (SVD, HDBSCAN, FAISS), and account service (auth via ShrouDB Sigil, tenant management)
- Designed a consent-scoped affinity model with directional preference modeling (identifies_as vs. interested_in), per-field visibility controls, and hard-limit exclusion constraints — enabling complementary matching for relationship and interest-based platforms
- Built a dual-path matching pipeline: warm path using pairwise scoring over pgvector embeddings with FAISS approximate nearest neighbor search; cold start path blending trait compatibility, affinity overlap, and popularity signals with adaptive weighting
- Implemented a campaign system with CPM/CPE pricing, A/B variant splitting, budget tracking, fair placement, and ranked feed interleaving
- Self-correcting cluster infrastructure with drift monitoring (cosine distance from centroid), automatic re-clustering triggers, and stale embedding regeneration

**Herald** — Real-time messaging platform (Rust)

- Built a multi-tenant WebSocket server handling rooms, presence, message fan-out, and delivery with sequence-numbered WAL for retention and replay
- Message bodies treated as opaque bytes — encryption and search handled client-side via Cipher/Veil WASM, enabling true E2EE where the server never sees plaintext
- HTTP clients for TypeScript, Python, Rust, Go, and Ruby; WebSocket client for TypeScript with embedded WASM for client-held E2EE

-----

### LILT, Inc. – Boston, MA

**Senior Software Engineer** · September 2025 – January 2026

- Designed and deployed a worker-based ingestion pipeline serving 50+ content connectors, replacing a fragile synchronous flow with a scalable async architecture
- Optimized the core job runner, reducing per-file processing time from 7s to 0.3s (~96% improvement) across the ingestion pipeline
- Owned multiple backend services and plugins across Python, Java, TypeScript, and C#, operating as a generalist across a complex multi-language platform

-----

### LinkSquares, Inc. – Boston, MA

**Staff Software Engineer** · July 2023 – January 2025

**Senior Software Engineer** · April 2022 – July 2023

- Served as the integration architect responsible for the company’s entire third-party integration offerings — designed the event-driven architecture (RabbitMQ), extracted Salesforce integration and notification systems from two monoliths, and defined the patterns that enabled the organization’s transition to microservices
- Reduced deployment cycle from weekly hours-long monolith releases to on-demand microservice deploys (15–30 minutes), directly accelerating feature delivery across the engineering org
- Designed and implemented JWT authentication standards adopted across all services in collaboration with Architecture and DevOps
- Mentored a team of 6 engineers on architectural patterns, code quality, and service design

-----

### Globalization Partners – Boston, MA

**Senior Software Engineer** · August 2021 – April 2022

- Built the credits pipeline in the billing flow — a problem the team had been unable to solve — enabling accurate credit tracking across the platform’s global payroll operations
- Reduced critical Postgres reporting query times by ~99% through systematic query optimization and indexing, unblocking the business intelligence team’s reporting workflows
- Architected automated payment reconciliation workflows that eliminated manual errors and saved the finance team 10–15 hours weekly
- Established standardized development practices across Java (Spring Boot) services for a growing engineering organization

-----

### Constant Contact – Loveland, CO & Boston, MA

**Associate Software Engineer → Senior Software Engineer** · May 2018 – August 2021

- Sole developer of the Facebook Ads integration — designed, built, and maintained a revenue-critical feature connecting Constant Contact’s platform to Facebook’s advertising APIs
- Co-led the company-wide React frontend migration, defining architectural patterns adopted across engineering teams
- Built and maintained Java (Spring Boot) backend APIs powering core customer features and third-party integrations
- Mentored junior engineers and established team-wide coding standards and review practices

**Customer Engagement Specialist → Senior VOC Technical Engineer** · August 2015 – May 2018

- Built internal automation tooling that improved support team throughput by 15–20%, establishing the technical foundation for a transition into engineering
- Served as technical liaison between customers, support, and engineering — identifying systemic product issues and driving fixes upstream

-----

## Additional Background

My formal engineering career began in 2018, building on decades of self-directed programming and several years in technical operations. Progressing from Tier 1 support to Staff Engineer shaped a practical intuition for reliability, edge cases, and building systems that work under real-world pressure — the same instinct that drives the infrastructure I build independently today.