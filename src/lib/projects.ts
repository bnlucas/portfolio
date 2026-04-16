export type PlatformKey = "shroudb" | "herald" | "meterd" | "simbee";

export type Platform = {
  key: PlatformKey;
  name: string;
  tagline: string;
  category: string;
  language: string;
  description: string;
  highlights: string[];
  replaces: string[];
  href: string;
  accent: string;
  accentDeep: string;
};

export const platforms: Platform[] = [
  {
    key: "shroudb",
    name: "ShrouDB",
    tagline: "Security infrastructure as one binary.",
    category: "Security & secrets",
    language: "Rust",
    description:
      "A 9-engine security platform — credentials, encryption, secrets, encrypted object storage, encrypted search, internal CA, authorization, secure notifications, and audit — running as a single binary with one auth model, one config format, one telemetry pipeline.",
    highlights: [
      "Per-tenant AES-256-GCM key isolation baked into the storage layer",
      "44K JWT verifications/sec, 33K encrypt/decrypt ops/sec at sub-ms latency",
      "Client-side E2EE via WASM — search over data the server never sees in plaintext",
      "Crypto-shredding turns GDPR right-to-erasure into a single key-destroy op",
    ],
    replaces: ["Vault", "KMS", "Auth0", "OPA", "step-ca", "SendGrid", "Datadog"],
    href: "https://shroudb.io",
    accent: "var(--color-shroudb)",
    accentDeep: "var(--color-shroudb-deep)",
  },
  {
    key: "herald",
    name: "Herald",
    tagline: "Real-time events that actually arrive.",
    category: "Realtime & messaging",
    language: "Rust",
    description:
      "A multi-tenant WebSocket transport with embedded WAL storage — no Redis, no broker, no external retry queue. Auth, presence, and chat engines ship built in and can be swapped without forking.",
    highlights: [
      "~8K msg/sec sustained at 0.1ms p50 latency",
      "Clients reconnect and replay up to 7 days without gaps",
      "Four Docker images: transport-only, chat, presence, full stack",
      "Zero-knowledge by design — message bodies are opaque bytes",
    ],
    replaces: ["Pusher", "Ably", "Centrifugo"],
    href: "https://herald.skeptik.io",
    accent: "var(--color-herald)",
    accentDeep: "var(--color-herald-deep)",
  },
  {
    key: "meterd",
    name: "Meterd",
    tagline: "Catch revenue leaks before they reach the invoice.",
    category: "Usage & billing",
    language: "Rust",
    description:
      "Real-time metering and quota enforcement that runs in the request path, not after the fact. Atomic Redis Lua quota checks with two-phase reservation prevent overselling; Postgres takes over when Redis is unavailable.",
    highlights: [
      "~10K events/sec per tenant at the Envoy edge",
      "Five pricing models — flat, graduated, volume, package, weighted",
      "Credits system with FIFO burn and contract drawdown",
      "Stripe integration plus a swappable billing backend",
    ],
    replaces: ["Orb", "Metronome", "Lago"],
    href: "https://meterd.io",
    accent: "var(--color-meterd)",
    accentDeep: "var(--color-meterd-deep)",
  },
  {
    key: "simbee",
    name: "Simbee",
    tagline: "Matching and discovery, without the ML team.",
    category: "Graph & discovery",
    language: "Ruby/Rails · Python/FastAPI",
    description:
      "A consent-scoped social graph with matching, ranked feeds, and campaigns across five microservices behind Envoy. Warm and cold-start matching live in a single pipeline, with affinities isolated per context so one platform can power dating, networking, and community discovery without cross-contamination.",
    highlights: [
      "FAISS retrieval + HDBSCAN clustering + SVD reduction in one pipeline",
      "35+ scoring parameters tunable without shipping code",
      "Self-correcting clustering that re-clusters on detected drift",
      "Native CPM/CPE campaign engine with A/B variants",
    ],
    replaces: ["Homegrown ML pipelines", "Algolia Recommend"],
    href: "https://simbee.io",
    accent: "var(--color-simbee)",
    accentDeep: "var(--color-simbee-deep)",
  },
];

export type LibraryGroup = {
  heading: string;
  href?: string;
  blurb?: string;
  items: Library[];
};

export type Library = {
  name: string;
  language: string;
  href: string;
  description: string;
};

export const librariesIntro =
  "Open-source tooling focused on runtime data modeling, service boundaries, and operational clarity — the same instincts that drive the platform work above.";

export const libraryGroups: LibraryGroup[] = [
  {
    heading: "Obfuskey",
    href: "https://obfuskey.skeptik.io",
    blurb:
      "Reversible, fixed-length obfuscated keys from integers with bit-packing — multiple language ports sharing a single spec and test surface.",
    items: [
      {
        name: "obfuskey",
        language: "Python",
        href: "https://github.com/bnlucas/obfuskey",
        description: "Reference implementation.",
      },
      {
        name: "obfuskey-js",
        language: "TypeScript",
        href: "https://github.com/bnlucas/obfuskey-js",
        description: "BigInt-based, safe across browser, Node, and edge runtimes.",
      },
      {
        name: "obfuskey-rs",
        language: "Rust",
        href: "https://github.com/bnlucas/obfuskey-rs",
        description: "Rust port.",
      },
      {
        name: "obfuskey-rb",
        language: "Ruby",
        href: "https://github.com/bnlucas/obfuskey-rb",
        description: "Ruby port.",
      },
    ],
  },
  {
    heading: "Ruby",
    items: [
      {
        name: "Cattri",
        language: "Ruby",
        href: "https://github.com/bnlucas/cattri",
        description:
          "Class and instance attributes with strict semantics: inheritance, lazy defaults, write-once finals, fine-grained visibility and coercion.",
      },
      {
        name: "Castkit",
        language: "Ruby",
        href: "https://github.com/bnlucas/castkit",
        description:
          "Type-safe DTOs and contracts with declarative schemas, typecasting, validation, and serialization for hardening service boundaries.",
      },
      {
        name: "Gaskit",
        language: "Ruby",
        href: "https://github.com/bnlucas/gaskit",
        description:
          "Composable operations and service objects as step pipelines — early exits, explicit error handling, integrated logging and duration tracking.",
      },
    ],
  },
  {
    heading: "Python",
    items: [
      {
        name: "Corbel",
        language: "Python",
        href: "https://github.com/bnlucas/corbel",
        description:
          "Dataclass extension with mixins for validation, immutable updates, hashing, comparison, and JSON serialization plus property-level metadata.",
      },
    ],
  },
];

export type Experiment = {
  name: string;
  href: string;
  source?: string;
  description: string;
};

export const experiments: Experiment[] = [
  {
    name: "IsNathanAlive",
    href: "https://isnathanalive.com",
    source: "https://github.com/bnlucas/isnathanalive",
    description:
      "A status-check site wiring a SwitchBot motion sensor to Vercel functions and Upstash Redis. Motion updates a timestamp that renders as an intentionally absurd status (\"got dunks 2 days ago, still kickin\"). IoT webhooks, event filtering, near-real-time serverless data flow.",
  },
];
