// src/app/page.tsx
import Link from "next/link";
import { Card, Badge, Button } from "@/components/ui/Ui";
import { RECIPES } from "@/lib/mock-recipes";

export default function HomePage() {
  const latestFree = RECIPES.filter((r) => !r.isMemberOnly).slice(0, 4);

  return (
    <div className="space-y-10">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <Badge tone="amber">✨ Warm, practical cooking</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            A subscription recipe site that feels like home.
          </h1>
          <p className="text-pretty text-stone-700">
            Free previews for everyone, and members get full written recipes,
            ingredient calculators, a community link, and tiered extras like
            polls + members-only comments.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/recipes" variant="secondary">
              Browse recipes
            </Button>
            <Button href="/subscribe">See membership tiers</Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge tone="emerald">Calculators</Badge>
            <Badge tone="stone">Free previews</Badge>
            <Badge tone="orange">Members-only extras</Badge>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-stone-900">What members get</div>
              <Badge tone="emerald">2 tiers</Badge>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Perk title="Monthly subscriber recipe" desc="Written post + calculator-ready ingredients." />
              <Perk title="WhatsApp community" desc="Food pics, cooking advice, general chat." />
              <Perk title="Tier 2 polls" desc="Vote on next monthly video topic." />
              <Perk title="Members-only comments" desc="Patreon-style discussion on-site." />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/subscribe">Subscribe (demo)</Button>
              <Button href="/account" variant="secondary">
                View member dashboard
              </Button>
            </div>
          </div>

          <div className="border-t border-stone-200/80 bg-gradient-to-br from-orange-50 to-amber-50 p-5 sm:p-6">
            <div className="text-sm font-semibold text-stone-900">
              Static demo notes
            </div>
            <p className="mt-1 text-sm text-stone-700">
              No real login, Stripe, or gating here—just the UI to show how the
              site feels.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Latest free recipes
            </h2>
            <p className="text-stone-700">
              Each recipe has a preview, and calculators (for select recipes).
            </p>
          </div>
          <Link
            className="text-sm font-medium text-emerald-800 hover:underline"
            href="/recipes"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {latestFree.map((r) => (
            <Link key={r.slug} href={`/recipes/${r.slug}`} className="group">
              <Card className="h-full overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="h-24 bg-[radial-gradient(400px_120px_at_20%_30%,rgba(249,115,22,0.25),transparent_60%),radial-gradient(420px_160px_at_90%_10%,rgba(16,185,129,0.18),transparent_55%),linear-gradient(to_bottom,rgba(255,251,235,1),rgba(255,247,237,1))]" />
                <div className="p-4">
                  <div className="line-clamp-1 font-semibold text-stone-900 group-hover:underline">
                    {r.title}
                  </div>
                  <div className="mt-1 line-clamp-2 text-sm text-stone-700">
                    {r.blurb}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge tone="stone">{r.minutes} min</Badge>
                    <Badge tone="amber">{r.difficulty}</Badge>
                    {r.hasCalculator ? (
                      <Badge tone="emerald">Calculator</Badge>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Perk({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-stone-200/80 bg-white/70 p-3">
      <div className="text-sm font-semibold text-stone-900">{title}</div>
      <div className="mt-1 text-sm text-stone-700">{desc}</div>
    </div>
  );
}
