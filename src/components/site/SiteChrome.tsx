// src/components/site/SiteChrome.tsx
import Link from "next/link";
import React from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/account", label: "Member Account" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.10),transparent_60%),radial-gradient(900px_500px_at_95%_0%,rgba(249,115,22,0.10),transparent_55%),linear-gradient(to_bottom,rgba(255,251,235,1),rgba(255,247,237,1))] text-stone-800">
      <div className="pointer-events-none fixed inset-0 opacity-[0.055] mix-blend-multiply [background-image:radial-gradient(rgba(120,113,108,0.55)_1px,transparent_1px)] [background-size:18px_18px]" />
      <Header />
      <main className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative border-b border-stone-200/70 bg-white/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-stone-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm">
            <span className="text-lg">🍲</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight text-stone-900">
              Cozy Kitchen Club
            </div>
            <div className="text-xs text-stone-600">
              recipes • calculators • community
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100/80 hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 shadow-sm transition hover:bg-stone-50"
          >
            Log in
          </Link>
          <Link
            href="/subscribe"
            className="rounded-full bg-emerald-700 px-4 py-2 text-sm text-white shadow-sm transition hover:bg-emerald-800"
          >
            Subscribe
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6 md:hidden">
        <div className="flex flex-wrap gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-stone-200 bg-white/70 px-3 py-1.5 text-xs text-stone-700 shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-stone-200/70 bg-white/60 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-semibold text-stone-900">Cozy Kitchen Club</div>
          <p className="mt-2 text-sm text-stone-600">
            A warm little corner for recipes, serving-size calculators, and
            members-only extras.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-semibold text-stone-900">Explore</div>
          <ul className="mt-2 space-y-2 text-stone-700">
            <li>
              <Link className="hover:underline" href="/recipes">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/subscribe">
                Subscribe
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/account">
                Member Account
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold text-stone-900">Note</div>
          <p className="mt-2 text-stone-600">
            This is a static demo UI (no Stripe, no login, no gating). Buttons
            are visuals only.
          </p>
        </div>
      </div>
    </footer>
  );
}
