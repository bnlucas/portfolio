export const summary =
  "Systems architect and platform engineer who builds production-grade infrastructure from scratch. Designed and shipped a composable cryptographic platform (9 engines, Rust), a behavioral matching engine, a real-time messaging system, and a metering platform — all running in production as multi-tenant services. A decade of backend engineering across Ruby, Python, TypeScript, Java, and Rust, with a track record of owning the hardest problems in the room: system-wide architectural migrations, billing pipelines nobody could crack, and integrations that became core revenue drivers. Progressed from Tier 1 support to Staff Engineer by consistently building things that outlast the team that shipped them.";

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Rust", "Ruby", "TypeScript", "Python", "Java"],
  },
  {
    label: "Frameworks",
    items: [
      "Rails",
      "React",
      "Node.js",
      "FastAPI",
      "Django",
      "Spring Boot",
      "Axum",
      "Tonic",
    ],
  },
  {
    label: "Infrastructure",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Envoy",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Kafka",
      "NATS",
    ],
  },
  {
    label: "Domains",
    items: [
      "Cryptographic systems",
      "Distributed architecture",
      "API platform design",
      "Microservices migration",
      "Billing & metering",
      "Real-time messaging",
      "Search & matching",
    ],
  },
  {
    label: "Practices",
    items: [
      "Systems design",
      "Service-oriented architecture",
      "Protocol design",
      "SDK & client generation",
      "Performance optimization",
      "Mentorship",
    ],
  },
];

export type ExperienceEntry = {
  org: string;
  location?: string;
  roles: { title: string; period: string }[];
  intro?: string;
  highlights?: string[];
  projects?: { name: string; stack: string; bullets: string[] }[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "Skeptik.io",
    roles: [{ title: "Founder & Principal Engineer", period: "January 2026 – Present" }],
    intro:
      "Self-funded, solo-built portfolio of independent back-end products, each designed to solve one problem end-to-end. Protocol-first design with codegen-driven SDKs across six languages (TypeScript, Python, Ruby, Go, PHP, C#), multi-tenant production deployments.",
    projects: [
      {
        name: "ShrouDB",
        stack: "Security infrastructure platform · Rust",
        bullets: [
          "Architected a 9-engine security infrastructure platform (credentials, encryption, secrets, encrypted object storage, encrypted search, internal CA, authorization, secure notifications, audit) that replaces the usual seven-vendor stack with a single binary — one auth model, one config format, one telemetry pipeline",
          "Designed a schema-driven credential system where developers annotate fields and the platform automatically routes each to the correct cryptographic treatment — fail-closed, so PII cannot be stored without encryption",
          "Benchmarked at 44K JWT verifications/sec and 33K encrypt/decrypt ops/sec with sub-millisecond latency; AES-256-GCM with per-tenant key isolation baked into the storage layer",
          "Shipped client-side E2EE via WASM, enabling users to encrypt data and search over it without the server ever accessing plaintext",
          "Solved GDPR right-to-erasure through crypto-shredding, reducing deletion compliance from a cross-service data hunt to a single key destruction operation",
        ],
      },
      {
        name: "Meterd",
        stack: "Metering and quota enforcement platform · Rust",
        bullets: [
          "Built a gateway-layer metering engine that handles rate limiting, quota enforcement, and usage tracking as a single concern at the Envoy edge, before requests reach application code — sustaining ~10K events/sec per tenant",
          "Designed atomic Redis Lua quota checks with two-phase reservation semantics and automatic Postgres fallback when Redis is unavailable, ensuring billing accuracy without sacrificing availability",
          "Shipped five pricing models (flat, graduated, volume, package, weighted) plus a credits system with FIFO burn and contract drawdown, covering the full range of usage-based billing patterns",
          "Integrated Stripe billing, webhook delivery, and a full product catalog (plans, features, per-customer overrides) to power usage-based pricing for downstream products",
        ],
      },
      {
        name: "Simbee",
        stack: "Matching and discovery platform · Ruby/Rails, Python/FastAPI",
        bullets: [
          "Designed a consent-scoped matching platform across five microservices behind an Envoy gateway, where user affinities, signals, and preferences are isolated per context — enabling a single platform to power dating, professional networking, and community discovery without cross-contamination",
          "Built a dual-path matching pipeline using FAISS for candidate retrieval and HDBSCAN for behavioral clustering, transitioning users from trait-based cold start to embedding-based scoring as signal history accumulates — with 35+ scoring parameters tunable without shipping code",
          "Implemented a self-correcting clustering system that monitors drift and automatically triggers re-clustering when user behavior shifts, keeping recommendations current without manual intervention",
        ],
      },
      {
        name: "Herald",
        stack: "Real-time messaging platform · Rust",
        bullets: [
          "Built a multi-tenant WebSocket server with embedded WAL storage — no Redis, no broker, no external retry queue — sustaining ~8K msg/sec at 0.1ms p50 latency with 7-day reconnect-and-replay",
          "Designed pluggable auth, presence, and chat engines shipped as composable Docker images (transport-only, chat, presence, full stack), so downstream products adopt only what they need",
          "Kept the server zero-knowledge by treating message bodies as opaque bytes, pushing E2EE and encrypted search entirely to the client via WASM",
        ],
      },
    ],
  },
  {
    org: "LILT, Inc.",
    location: "Boston, MA",
    roles: [{ title: "Senior Software Engineer", period: "September 2025 – January 2026" }],
    highlights: [
      "Designed and deployed a worker-based ingestion pipeline serving 50+ content connectors, replacing a fragile synchronous flow with a scalable async architecture",
      "Optimized the core job runner, reducing per-file processing time from 7s to 0.3s (~96% improvement) across the ingestion pipeline",
      "Owned multiple backend services and plugins across Python, Java, TypeScript, and C#, operating as a generalist across a complex multi-language platform",
    ],
  },
  {
    org: "LinkSquares, Inc.",
    location: "Boston, MA",
    roles: [
      { title: "Staff Software Engineer", period: "July 2023 – January 2025" },
      { title: "Senior Software Engineer", period: "April 2022 – July 2023" },
    ],
    highlights: [
      "Served as the integration architect responsible for the company's entire third-party integration offerings — designed the event-driven architecture (RabbitMQ), extracted Salesforce integration and notification systems from two monoliths, and defined the patterns that enabled the organization's transition to microservices",
      "Reduced deployment cycle from weekly hours-long monolith releases to on-demand microservice deploys (15–30 minutes), directly accelerating feature delivery across the engineering org",
      "Designed and implemented JWT authentication standards adopted across all services in collaboration with Architecture and DevOps",
      "Mentored a team of 6 engineers on architectural patterns, code quality, and service design",
    ],
  },
  {
    org: "Globalization Partners",
    location: "Boston, MA",
    roles: [{ title: "Senior Software Engineer", period: "August 2021 – April 2022" }],
    highlights: [
      "Built the credits pipeline in the billing flow — a problem the team had been unable to solve — enabling accurate credit tracking across the platform's global payroll operations",
      "Reduced critical Postgres reporting query times by ~99% through systematic query optimization and indexing, unblocking the business intelligence team's reporting workflows",
      "Architected automated payment reconciliation workflows that eliminated manual errors and saved the finance team 10–15 hours weekly",
      "Established standardized development practices across Java (Spring Boot) services for a growing engineering organization",
    ],
  },
  {
    org: "Constant Contact",
    location: "Loveland, CO & Boston, MA",
    roles: [
      {
        title: "Associate Software Engineer → Senior Software Engineer",
        period: "May 2018 – August 2021",
      },
      {
        title: "Customer Engagement Specialist → Senior VOC Technical Engineer",
        period: "August 2015 – May 2018",
      },
    ],
    highlights: [
      "Sole developer of the Facebook Ads integration — designed, built, and maintained a revenue-critical feature connecting Constant Contact's platform to Facebook's advertising APIs",
      "Co-led the company-wide React frontend migration, defining architectural patterns adopted across engineering teams",
      "Built and maintained Java (Spring Boot) backend APIs powering core customer features and third-party integrations",
      "Mentored junior engineers and established team-wide coding standards and review practices",
      "Built internal automation tooling that improved support team throughput by 15–20%, establishing the technical foundation for a transition into engineering",
      "Served as technical liaison between customers, support, and engineering — identifying systemic product issues and driving fixes upstream",
    ],
  },
];

export const additionalBackground =
  "My formal engineering career began in 2018, building on decades of self-directed programming and several years in technical operations. Progressing from Tier 1 support to Staff Engineer shaped a practical intuition for reliability, edge cases, and building systems that work under real-world pressure — the same instinct that drives the infrastructure I build independently today.";
