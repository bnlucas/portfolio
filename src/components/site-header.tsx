import Link from "next/link";
import { Monogram } from "./monogram";
import { Wordmark } from "./wordmark";
import { primaryNav } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-3 bg-ink-0/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-8 px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Nathan Lucas — home"
        >
          <Monogram size={26} />
          <Wordmark className="text-base" />
        </Link>

        <nav className="ml-auto flex items-center gap-1 sm:gap-4">
          {primaryNav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 text-sm text-ink-7 transition-colors hover:text-ink-9"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="https://github.com/bnlucas"
            target="_blank"
            rel="noopener"
            className="hidden rounded-md border border-ink-4 px-3 py-1.5 text-sm text-ink-8 transition-colors hover:border-ink-6 hover:text-ink-10 sm:inline-flex"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
