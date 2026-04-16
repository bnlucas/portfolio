# Nathan Lucas

Systems architect and platform engineer

## Professional Summary

Systems architect and platform engineer who builds production-grade infrastructure from scratch. Designed and shipped a 9-engine cryptographic platform (Rust), a behavioral matching engine, a real-time messaging system, and a metering platform — all running in production as multi-tenant services. A decade across Ruby, Python, TypeScript, Java, and Rust, with a track record of owning the hardest problems in the room: architectural migrations, billing pipelines nobody could crack, and integrations that became core revenue drivers.

## Core Skills

- **Languages**: Rust, Ruby, TypeScript, Python, Java
- **Frameworks**: Rails, React, Node.js, FastAPI, Django, Spring Boot, Axum, Tonic
- **Infrastructure**: AWS, Docker, Kubernetes, Terraform, Envoy, PostgreSQL, Redis, RabbitMQ, Kafka, NATS
- **Domains**: Cryptographic systems, distributed architecture, API platform design, microservices migration, billing and metering, real-time messaging, matching systems

## Experience

### Skeptik.io — Founder & Principal Engineer

*January 2026 – Present*

Solo-built portfolio of four independent back-end products with protocol-first codegen SDKs across six languages (TypeScript, Python, Ruby, Go, PHP, C#).

- **ShrouDB** (Rust) — 9-engine security platform replacing a seven-vendor stack (Vault, KMS, Auth0, OPA, step-ca, SendGrid, Datadog) with a single binary; 44K JWT verifications/sec, 33K encrypt/decrypt ops/sec at sub-ms latency
- **Meterd** (Rust) — Gateway-layer metering with atomic Redis Lua quota enforcement in the request path; ~10K events/sec per tenant, five pricing models, Stripe integration with Postgres fallback
- **Simbee** (Ruby/Rails + Python/FastAPI) — Five-microservice matching platform using FAISS candidate retrieval and HDBSCAN behavioral clustering; warm and cold-start paths in a single pipeline with 35+ tunable scoring parameters
- **Herald** (Rust) — Multi-tenant WebSocket transport with embedded WAL storage — no Redis, no broker — sustaining ~8K msg/sec at 0.1ms p50 latency with 7-day reconnect-and-replay

### LILT, Inc. — Senior Software Engineer

*September 2025 – January 2026 · Boston, MA*

- Designed and deployed a worker-based ingestion pipeline serving 50+ content connectors, replacing a fragile synchronous flow
- Optimized the core job runner, reducing per-file processing time from 7s to 0.3s (~96% improvement)
- Owned backend services and plugins across Python, Java, TypeScript, and C# on a multi-language platform

### LinkSquares, Inc. — Staff / Senior Software Engineer

*April 2022 – January 2025 · Boston, MA*

- Integration architect for the company's entire third-party offerings; designed the event-driven (RabbitMQ) architecture that enabled the organization's transition to microservices
- Reduced deployment cycle from weekly hours-long monolith releases to on-demand 15–30 minute microservice deploys
- Designed JWT authentication standards adopted across all services; mentored a team of 6 engineers

### Globalization Partners — Senior Software Engineer

*August 2021 – April 2022 · Boston, MA*

- Built the credits pipeline in the billing flow — a problem the team had been unable to solve
- Reduced critical Postgres reporting query times by ~99% through systematic query optimization and indexing
- Architected automated payment reconciliation that saved finance 10–15 hours weekly

### Constant Contact — Associate → Senior Software Engineer

*May 2018 – August 2021 · Loveland, CO & Boston, MA*

- Sole developer of the Facebook Ads integration — a revenue-critical feature connecting Constant Contact's platform to Facebook's advertising APIs
- Co-led the company-wide React frontend migration, defining patterns adopted across engineering teams
- Built and maintained Java (Spring Boot) backend APIs; mentored junior engineers

*Previously: Customer Engagement Specialist → Senior VOC Technical Engineer (August 2015 – May 2018) — built internal automation improving support throughput 15–20%, establishing the technical foundation for a transition into engineering.*

---

My formal engineering career began in 2018, building on decades of self-directed programming and years in technical operations. The progression from Tier 1 support to Staff Engineer shaped a practical intuition for reliability, edge cases, and systems that hold up under real-world pressure.
