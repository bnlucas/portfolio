import Link from "next/link";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import {
  additionalBackground,
  experience,
  skills,
  summary,
} from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Nathan Lucas — Staff Software Engineer. A decade across Rust, Ruby, TypeScript, Python, and Java.",
};

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-20 md:pt-24">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="mono-label text-tide">Resume</div>
                <h1 className="display mt-2 text-4xl text-ink-10 md:text-5xl">
                  Nathan Lucas
                </h1>
                <p className="mt-2 text-sm text-ink-7">
                  Staff Software Engineer · bnlucas.com
                </p>
              </div>
              <Link
                href="/Nathan-Lucas-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-ink-4 bg-ink-1 px-4 py-2 text-sm font-medium text-ink-9 transition-colors hover:border-ink-6 hover:bg-ink-2"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="border-t border-ink-3 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mono-label text-tide">Professional Summary</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-8">{summary}</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-ink-3 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mono-label text-tide">Core Skills</h2>
            <dl className="mt-6 space-y-5">
            {skills.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-ink-9">{group.label}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-3 bg-ink-1 px-2.5 py-0.5 text-xs text-ink-8"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-ink-3 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mono-label text-tide">Experience</h2>

            <div className="mt-8 space-y-12">
            {experience.map((entry) => (
              <article key={entry.org}>
                <header>
                  <h3 className="text-xl font-semibold text-ink-10">
                    {entry.org}
                    {entry.location && (
                      <span className="ml-2 text-sm font-normal text-ink-6">
                        · {entry.location}
                      </span>
                    )}
                  </h3>
                  <ul className="mt-1.5 space-y-0.5">
                    {entry.roles.map((role) => (
                      <li
                        key={`${role.title}-${role.period}`}
                        className="text-sm text-ink-7"
                      >
                        <span className="font-medium text-ink-8">{role.title}</span>{" "}
                        <span className="text-ink-6">· {role.period}</span>
                      </li>
                    ))}
                  </ul>
                </header>

                {entry.intro && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-7">
                    {entry.intro}
                  </p>
                )}

                {entry.highlights && (
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-8"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-tide-deep"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.projects && (
                  <div className="mt-5 space-y-5 border-l border-ink-3 pl-5">
                    {entry.projects.map((project) => (
                      <div key={project.name}>
                        <h4 className="text-sm font-semibold text-ink-10">
                          {project.name}{" "}
                          <span className="font-normal text-ink-6">
                            — {project.stack}
                          </span>
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {project.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-7"
                            >
                              <span
                                aria-hidden
                                className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-tide-deep"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Additional background */}
      <section className="border-t border-ink-3 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mono-label text-tide">Additional Background</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-7">
              {additionalBackground}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
