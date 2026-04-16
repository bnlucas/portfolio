import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/lib/projects";

const PRINCIPLES = [
  {
    label: "Systems first",
    title: "Protocol before product.",
    body:
      "I design the wire, the schema, and the failure modes before writing the application code. The platforms I ship are codegen-driven across six languages because the contract is the source of truth.",
  },
  {
    label: "End-to-end ownership",
    title: "I own the hard problem.",
    body:
      "Billing pipelines nobody could crack. Architectural migrations the team had been deferring. Integrations that became core revenue drivers. The pattern across a decade is the same — pick the load-bearing problem and finish it.",
  },
  {
    label: "Honest constraints",
    title: "The limits ship in the docs.",
    body:
      "Every platform's docs spell out what it does well and what it deliberately doesn't. You shouldn't discover a constraint in production. The same applies to the code I write inside a team.",
  },
  {
    label: "Built to outlast",
    title: "Patterns over heroics.",
    body:
      "I went from Tier 1 support to Staff Engineer by building things that outlast the team that shipped them. JWT standards adopted org-wide. Service patterns that defined a microservices migration. Tooling that mentored itself.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, color-mix(in srgb, var(--color-tide) 12%, transparent), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 md:pt-28">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
            <div className="mx-auto md:mx-0">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-ink-4 shadow-[0_0_0_4px_rgba(94,234,212,0.08)] md:h-36 md:w-36">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Nathan Lucas"
                  fill
                  sizes="144px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <div className="mono-label text-tide">Staff Software Engineer</div>
              <h1 className="display mt-3 text-5xl text-ink-10 md:text-6xl">
                Nathan Lucas
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-7">
                I build production-grade back-end platforms from scratch — currently
                shipping under{" "}
                <Link
                  href="https://skeptik.io"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-9 underline decoration-tide/40 underline-offset-4 transition-colors hover:decoration-tide"
                >
                  Skeptik
                </Link>
                . A decade across Rust, Ruby, TypeScript, Python, and Java. Tier 1
                support to Staff Engineer, by way of finishing the hard problem.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="rounded-md bg-tide px-4 py-2 text-sm font-semibold text-ink-0 transition-colors hover:bg-tide-bright"
                >
                  See the work
                </Link>
                <Link
                  href="/about"
                  className="rounded-md border border-ink-4 px-4 py-2 text-sm font-medium text-ink-9 transition-colors hover:border-ink-6"
                >
                  How I work
                </Link>
              </div>
            </div>
          </div>

          {/* Platform strip */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-3 bg-ink-3 md:grid-cols-4">
            {platforms.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-3 bg-ink-1 px-4 py-4 transition-colors hover:bg-ink-2"
              >
                <span
                  aria-hidden
                  className="h-9 w-1 rounded-sm"
                  style={{ background: p.accent }}
                />
                <div className="min-w-0">
                  <div className="text-sm font-semibold" style={{ color: p.accent }}>
                    {p.name}
                  </div>
                  <div className="truncate text-[11px] text-ink-6">{p.category}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm building */}
      <section className="border-t border-ink-3 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mono-label text-tide">Currently</div>
              <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
                What&apos;s shipping right now.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-ink-7 transition-colors hover:text-ink-9"
            >
              See all projects
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-3 bg-ink-3 md:grid-cols-2">
            {platforms.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                target="_blank"
                rel="noopener"
                className="group flex flex-col bg-ink-1 p-7 transition-colors hover:bg-ink-2"
                style={{
                  backgroundImage: `radial-gradient(ellipse 90% 60% at 0% 0%, ${p.accent}10, transparent 70%)`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="text-lg font-semibold"
                      style={{ color: p.accent }}
                    >
                      {p.name}
                    </div>
                    <div className="mono-label mt-1 text-ink-6">{p.category}</div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-9"
                    aria-hidden
                  />
                </div>
                <p className="mt-4 text-base font-medium leading-snug text-ink-9">
                  {p.tagline}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-7">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs">
                  <span className="mono-label text-ink-6">Stack</span>
                  <span className="text-ink-7">{p.language}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-ink-3 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mono-label text-tide">How I work</div>
            <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
              A practical bias toward systems that hold up.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-3 bg-ink-3 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.label} className="bg-ink-1 p-8">
                <div className="mono-label text-tide-deep">{p.label}</div>
                <h3 className="mt-2 text-lg font-semibold text-ink-10">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-7">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
