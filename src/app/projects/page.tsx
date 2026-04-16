import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Github } from "lucide-react";
import {
  experiments,
  libraryGroups,
  librariesIntro,
  platforms,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Skeptik platforms, open-source libraries, and experiments by Nathan Lucas.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-20 md:pt-24">
          <div className="mono-label text-tide">Projects</div>
          <h1 className="display mt-3 text-4xl text-ink-10 md:text-5xl">
            Production platforms. Open-source libraries.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-7">
            Production back-end products and the open-source tooling that grew
            up alongside them — each focused on one problem, end-to-end.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mono-label text-tide">Platforms</div>
          <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
            <Link
              href="https://skeptik.io"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 transition-colors hover:text-tide"
            >
              Skeptik
              <ArrowUpRight
                className="h-6 w-6 text-ink-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tide"
                aria-hidden
              />
            </Link>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-7">
            Self-funded, solo-built. Each platform lives on its own site with
            its own docs, pricing, and roadmap — no suite lock-in.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {platforms.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                target="_blank"
                rel="noopener"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-3 bg-ink-1 p-7 transition-colors hover:border-ink-5"
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

                <p className="mt-5 text-base font-medium leading-snug text-ink-9">
                  {p.tagline}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-7">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-8"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full"
                        style={{ background: p.accent }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="mono-label text-ink-6">Stack</span>
                    <span className="text-ink-7">{p.language}</span>
                  </div>

                  {p.replaces.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="mono-label text-ink-6">Replaces</span>
                      {p.replaces.map((r) => (
                        <span
                          key={r}
                          className="rounded-full border border-ink-3 bg-ink-2 px-2 py-0.5 text-[11px] text-ink-7"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-ink-8 group-hover:text-ink-10">
                    Visit {p.name}
                    <span
                      className="h-px flex-1 transition-colors"
                      style={{ background: `${p.accent}40` }}
                    />
                    <span style={{ color: p.accent }}>{new URL(p.href).host}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Libraries */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mono-label text-tide">Libraries</div>
          <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
            Open-source tooling.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-7">
            {librariesIntro}
          </p>

          <div className="mt-10 space-y-10">
            {libraryGroups.map((group) => (
              <div key={group.heading}>
                <div className="flex flex-col gap-1 border-b border-ink-3 pb-3">
                  <h3 className="text-base font-semibold text-ink-10">
                    {group.href ? (
                      <Link
                        href={group.href}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-center gap-1.5 transition-colors hover:text-tide"
                      >
                        {group.heading}
                        <ArrowUpRight
                          className="h-4 w-4 text-ink-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tide"
                          aria-hidden
                        />
                      </Link>
                    ) : (
                      group.heading
                    )}
                  </h3>
                  {group.blurb && (
                    <p className="text-sm leading-relaxed text-ink-7">{group.blurb}</p>
                  )}
                </div>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((lib) => (
                    <li key={lib.href}>
                      <Link
                        href={lib.href}
                        target="_blank"
                        rel="noopener"
                        className="group flex h-full flex-col rounded-xl border border-ink-3 bg-ink-1 p-5 transition-colors hover:border-ink-5 hover:bg-ink-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Github className="h-4 w-4 text-ink-6" aria-hidden />
                            <span className="font-mono text-sm font-semibold text-ink-9">
                              {lib.name}
                            </span>
                          </div>
                          <span className="mono-label text-ink-6">{lib.language}</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-7">
                          {lib.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs italic text-ink-6">
            These libraries are developed independently and are not affiliated
            with any employer.
          </p>
        </div>
      </section>

      {/* Experiments */}
      <section className="border-t border-ink-3 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mono-label text-tide">Experiments</div>
          <h2 className="display mt-2 text-3xl text-ink-10 md:text-4xl">
            Side projects and one-offs.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {experiments.map((exp) => (
              <div
                key={exp.name}
                className="flex flex-col rounded-2xl border border-ink-3 bg-ink-1 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-ink-10">{exp.name}</h3>
                  <Link
                    href={exp.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Visit ${exp.name}`}
                    className="text-ink-6 transition-colors hover:text-ink-9"
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-7">
                  {exp.description}
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs">
                  <Link
                    href={exp.href}
                    target="_blank"
                    rel="noopener"
                    className="text-ink-9 underline decoration-tide/40 underline-offset-4 transition-colors hover:decoration-tide"
                  >
                    {new URL(exp.href).host}
                  </Link>
                  {exp.source && (
                    <Link
                      href={exp.source}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-ink-7 transition-colors hover:text-ink-9"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
