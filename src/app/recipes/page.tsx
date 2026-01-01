// src/app/recipes/page.tsx
import Link from "next/link";
import { Badge, Card } from "@/components/ui/Ui";
import { CATEGORIES, TAGS, RECIPES } from "@/lib/mock-recipes";

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            Recipes
          </h1>
          <p className="mt-1 text-stone-700">
            Free previews for everyone. Member-only posts show a locked section.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge tone="emerald">Preview + gated sections</Badge>
          <Badge tone="stone">Categories & tags</Badge>
          <Badge tone="amber">Homey layout</Badge>
        </div>
      </div>

      <Card className="p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-stone-900">Categories</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-stone-900">Tags</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-700"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-stone-600">
          (Static demo: filters are visual only.)
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RECIPES.map((r) => (
          <Link key={r.slug} href={`/recipes/${r.slug}`} className="group">
            <Card className="h-full overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="h-28 bg-[radial-gradient(420px_140px_at_15%_20%,rgba(245,158,11,0.25),transparent_60%),radial-gradient(420px_180px_at_95%_10%,rgba(16,185,129,0.16),transparent_55%),linear-gradient(to_bottom,rgba(255,251,235,1),rgba(255,247,237,1))]" />
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="line-clamp-1 font-semibold text-stone-900 group-hover:underline">
                      {r.title}
                    </div>
                    <div className="mt-1 line-clamp-2 text-sm text-stone-700">
                      {r.blurb}
                    </div>
                  </div>
                  {r.isMemberOnly ? (
                    <Badge tone="orange">Member</Badge>
                  ) : (
                    <Badge tone="emerald">Free</Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge tone="stone">{r.category}</Badge>
                  <Badge tone="amber">{r.minutes} min</Badge>
                  {r.hasCalculator ? <Badge tone="emerald">Calculator</Badge> : null}
                </div>

                {r.isMemberOnly ? (
                  <div className="text-xs text-stone-600">
                    Tier: <span className="font-semibold">{r.tier}</span>
                  </div>
                ) : (
                  <div className="text-xs text-stone-600">
                    Preview available • full post shown for everyone (demo)
                  </div>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
