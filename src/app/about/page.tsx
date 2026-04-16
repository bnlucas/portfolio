// Copy drafted by Claude Code — review before deploy
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nathan Lucas — Staff Software Engineer. From Tier 1 support to building production back-end platforms in Rust.",
};

const TIMELINE = [
  {
    period: "2015 – 2018",
    title: "Customer Engagement → Senior VOC Technical Engineer",
    org: "Constant Contact",
    body:
      "Started at the bottom of the support stack and stayed long enough to learn what production actually feels like — every escalation, every bad deploy, every customer who couldn't tell us what was broken. Built internal tooling that lifted team throughput 15–20% and used it as the proof that earned an engineering seat.",
  },
  {
    period: "2018 – 2021",
    title: "Associate → Senior Software Engineer",
    org: "Constant Contact",
    body:
      "Sole developer of the Facebook Ads integration — a revenue-critical surface that I owned end-to-end. Co-led the company-wide React frontend migration and helped define the patterns adopted across teams.",
  },
  {
    period: "2021 – 2022",
    title: "Senior Software Engineer",
    org: "Globalization Partners",
    body:
      "Built the credits pipeline in the billing flow that the team had been unable to crack. Cut critical Postgres reporting query times by ~99% with systematic optimization. Automated payment reconciliation saved finance 10–15 hours weekly.",
  },
  {
    period: "2022 – 2025",
    title: "Senior → Staff Software Engineer",
    org: "LinkSquares",
    body:
      "Integration architect for the company's entire third-party offerings. Designed the event-driven (RabbitMQ) architecture that defined the org's transition to microservices. Cut deployment cycles from weekly hours-long monolith releases to on-demand 15–30 minute deploys. Mentored a team of 6.",
  },
  {
    period: "2025 – 2026",
    title: "Senior Software Engineer",
    org: "LILT",
    body:
      "Designed and deployed a worker-based ingestion pipeline for 50+ content connectors, replacing a fragile synchronous flow. Optimized the core job runner from 7s to 0.3s per file (~96% improvement). Operated as a generalist across Python, Java, TypeScript, and C#.",
  },
  {
    period: "2026 – Present",
    title: "Founder & Principal Engineer",
    org: "Skeptik.io",
    body:
      "Self-funded, solo-built portfolio of production back-end platforms spanning security, realtime, metering, and matching — deployed multi-tenant with codegen-driven SDKs across six languages.",
  },
];

const PRINCIPLES = [
  {
    label: "Protocol-first",
    body:
      "I design the wire, the schema, and the failure modes before writing the application code. SDKs across six languages are codegen targets, not maintenance burdens.",
  },
  {
    label: "Zero-knowledge where it matters",
    body:
      "Servers shouldn't see plaintext they don't need. ShrouDB and Herald both push E2EE to the client via WASM and treat sensitive bytes as opaque on the wire.",
  },
  {
    label: "One product, one problem",
    body:
      "I'd rather ship a few sharp tools than one general-purpose suite. Adopting one of my platforms doesn't commit you to the others; the boundaries are deliberate.",
  },
  {
    label: "The constraints ship in the docs",
    body:
      "You shouldn't discover a limit in production. Every system I build is documented for what it deliberately doesn't do, not just what it does.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Opener */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-24">
          <div className="mx-auto max-w-3xl">
            <div className="mono-label text-tide">About</div>
            <h1 className="display mt-3 text-4xl text-ink-10 md:text-5xl">
              I build back-end platforms from scratch.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-7">
              I&apos;m Nathan — a Staff Software Engineer with a decade of production
              engineering across Rust, Ruby, TypeScript, Python, and Java. Today
              I&apos;m the founder and principal engineer behind{" "}
              <Link
                href="https://skeptik.io"
                target="_blank"
                rel="noopener"
                className="text-ink-9 underline decoration-tide/40 underline-offset-4 transition-colors hover:decoration-tide"
              >
                Skeptik
              </Link>
              , a portfolio of independent back-end products I designed, built,
              and deployed solo. Before Skeptik, I was the engineer teams
              handed the load-bearing problem to: the billing pipeline nobody
              could finish, the migration that had been deferred for a year, the
              integration that became core revenue.
            </p>
          </div>
        </div>
      </section>

      {/* The arc */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mono-label text-tide">The arc</div>
            <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
              Tier 1 to Staff, by way of finishing.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-7">
              <p>
                My formal engineering career started in 2018, but I&apos;d been
                writing code on my own for two decades before that. The three
                years I spent in technical operations at Constant Contact — Tier 1
                support up through Senior VOC Technical Engineer — are the part
                of my background I value most.
              </p>
              <p>
                Customer support is where you learn what production actually
                feels like. Every escalation is a system telling on itself. Every
                irreproducible bug is a hidden assumption. By the time I switched
                into engineering, I&apos;d already developed the instincts most
                engineers spend years acquiring: edge cases, failure modes, the
                gap between what a system claims and what it does.
              </p>
              <p>
                The progression since then — Associate, Senior, Staff, founder —
                has been a single arc: take the hardest problem in the room and
                finish it. The systems I build are designed to outlast the team
                that shipped them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mono-label text-tide">Path</div>
            <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
              A decade in production.
            </h2>

            <ol className="mt-10 space-y-8 border-l border-ink-3 pl-6">
            {TIMELINE.map((entry) => (
              <li key={`${entry.period}-${entry.org}`} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-ink-4 bg-ink-0"
                  style={{
                    boxShadow: "inset 0 0 0 2px var(--color-tide-deep)",
                  }}
                />
                <div className="mono-label text-ink-6">{entry.period}</div>
                <h3 className="mt-1.5 text-base font-semibold text-ink-10">
                  {entry.title} ·{" "}
                  <span className="text-ink-7 font-medium">{entry.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-7">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>

            <div className="mt-10 flex items-center gap-2 text-sm text-ink-7">
              <span>Want the full version?</span>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1 text-ink-9 underline decoration-tide/40 underline-offset-4 transition-colors hover:decoration-tide"
              >
                See the resume
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mono-label text-tide">How I work</div>
            <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
              Instincts I lean on.
            </h2>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-3 bg-ink-3 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.label} className="bg-ink-1 p-6">
                  <div className="mono-label text-tide-deep">{p.label}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-7">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Now */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mono-label text-tide">Now</div>
            <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
              What I&apos;m building right now.
            </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-7">
            Production back-end platforms under{" "}
            <Link
              href="https://skeptik.io"
              target="_blank"
              rel="noopener"
              className="text-ink-9 underline decoration-tide/40 underline-offset-4 transition-colors hover:decoration-tide"
            >
              Skeptik
            </Link>
            . Each solves one problem end-to-end with no suite lock-in.
          </p>

          <ul className="mt-8 grid gap-2.5">
            {platforms.map((p) => (
              <li key={p.key}>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-4 rounded-xl border border-ink-3 bg-ink-1 px-5 py-4 transition-colors hover:border-ink-5 hover:bg-ink-2"
                >
                  <span
                    aria-hidden
                    className="h-10 w-1 rounded-sm"
                    style={{ background: p.accent }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold" style={{ color: p.accent }}>
                        {p.name}
                      </span>
                      <span className="mono-label text-ink-6">{p.category}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-ink-7">{p.tagline}</p>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-9"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>
    </>
  );
}
