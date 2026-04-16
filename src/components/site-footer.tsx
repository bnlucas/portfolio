import Link from "next/link";
import { Monogram } from "./monogram";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-3 bg-ink-0">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Monogram size={26} />
              <Wordmark className="text-base" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink-6">
              Staff engineer building back-end platforms from scratch.
            </p>
          </div>

          <div>
            <h3 className="mono-label text-ink-6">Site</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-ink-8 transition-colors hover:text-ink-10">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-ink-8 transition-colors hover:text-ink-10">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-ink-8 transition-colors hover:text-ink-10">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-ink-6">Elsewhere</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="mailto:nathan@bnlucas.com"
                  className="text-ink-8 transition-colors hover:text-ink-10"
                >
                  nathan@bnlucas.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/bnlucas"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-8 transition-colors hover:text-ink-10"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/bnlucas88"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-8 transition-colors hover:text-ink-10"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-ink-3 pt-6 text-xs text-ink-6 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Nathan Lucas.</span>
          <span className="font-mono">bnlucas.com</span>
        </div>
      </div>
    </footer>
  );
}
