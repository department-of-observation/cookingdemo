// src/app/recipes/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Button, Card } from "@/components/ui/Ui";
import { RECIPES, getRecipe } from "@/lib/mock-recipes";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ slug: r.slug }));
}

export default function RecipeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = getRecipe(params.slug);
  if (!recipe) return notFound();

  const ingredients = [
    { item: "Oil", qty: "1 tbsp" },
    { item: "Garlic", qty: "3 cloves" },
    { item: "Onion", qty: "1/2" },
    { item: "Protein of choice", qty: "300 g" },
    { item: "Salt", qty: "to taste" },
    { item: "Pepper", qty: "to taste" },
    { item: "Something cozy (butter / broth / soy)", qty: "2–3 tbsp" },
    { item: "Optional garnish", qty: "spring onion" },
  ];

  const steps = [
    "Prep aromatics. Warm the pan until it feels ready (you’ll smell it).",
    "Sear protein until golden. Remove and rest it.",
    "Soften aromatics. Add your sauce base and simmer briefly.",
    "Return protein. Let everything mingle until glossy.",
    "Taste, adjust, serve hot. Enjoy the kitchen smell moment.",
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-sm font-medium text-emerald-800 hover:underline" href="/recipes">
          ← Back to recipes
        </Link>

        <div className="flex flex-wrap gap-2">
          {recipe.isMemberOnly ? (
            <Badge tone="orange">Member-only</Badge>
          ) : (
            <Badge tone="emerald">Free</Badge>
          )}
          <Badge tone="amber">{recipe.minutes} min</Badge>
          <Badge tone="stone">{recipe.difficulty}</Badge>
          {recipe.hasCalculator ? <Badge tone="emerald">Calculator</Badge> : null}
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="h-36 bg-[radial-gradient(560px_180px_at_20%_20%,rgba(249,115,22,0.22),transparent_60%),radial-gradient(560px_220px_at_90%_10%,rgba(16,185,129,0.16),transparent_55%),linear-gradient(to_bottom,rgba(255,251,235,1),rgba(255,247,237,1))]" />
        <div className="p-5 sm:p-6">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            {recipe.title}
          </h1>
          <p className="mt-2 text-stone-700">{recipe.blurb}</p>

          {recipe.isMemberOnly ? (
            <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
              <div className="text-sm font-semibold text-orange-900">
                Preview mode (static demo)
              </div>
              <p className="mt-1 text-sm text-orange-900/80">
                This post shows a free preview + a “locked” section to illustrate membership gating.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button href="/subscribe">Unlock with subscription</Button>
                <Button href="/login" variant="secondary">
                  Log in (demo)
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-stone-900">Ingredients</div>
              {recipe.hasCalculator ? (
                <Badge tone="emerald">Calculator-ready</Badge>
              ) : (
                <Badge tone="stone">List</Badge>
              )}
            </div>

            <div className="mt-4 space-y-2">
              {ingredients.slice(0, recipe.isMemberOnly ? 4 : ingredients.length).map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between rounded-xl border border-stone-200/80 bg-white px-3 py-2 text-sm"
                >
                  <span className="text-stone-800">{row.item}</span>
                  <span className="font-medium text-stone-700">{row.qty}</span>
                </div>
              ))}

              {recipe.isMemberOnly ? (
                <LockedBlock label="More ingredients are locked for members (demo)" />
              ) : null}
            </div>
          </Card>

          <Card className="p-5 sm:p-6">
            <div className="font-semibold text-stone-900">Steps</div>

            <ol className="mt-4 space-y-3">
              {steps.slice(0, recipe.isMemberOnly ? 2 : steps.length).map((s, idx) => (
                <li key={idx} className="rounded-2xl border border-stone-200/80 bg-white p-3">
                  <div className="text-xs font-semibold text-stone-500">
                    Step {idx + 1}
                  </div>
                  <div className="mt-1 text-sm text-stone-800">{s}</div>
                </li>
              ))}

              {recipe.isMemberOnly ? (
                <LockedBlock label="Full step-by-step method is locked (demo)" />
              ) : null}
            </ol>

            <div className="mt-5 rounded-2xl border border-stone-200/80 bg-stone-50 p-4">
              <div className="text-sm font-semibold text-stone-900">Notes</div>
              <p className="mt-1 text-sm text-stone-700">
                Keep it forgiving: taste as you go, and don’t chase perfection—chase “cozy and delicious.”
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-stone-900">Ingredient Calculator</div>
              <Badge tone={recipe.hasCalculator ? "emerald" : "stone"}>
                {recipe.hasCalculator ? "Available" : "N/A"}
              </Badge>
            </div>

            <p className="mt-2 text-sm text-stone-700">
              Demo UI for “servings multiplier”. In the real build, quantities update automatically.
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-stone-200 bg-white p-3">
                <div className="text-xs font-semibold text-stone-500">Servings</div>
                <div className="mt-1 flex items-center gap-2">
                  <button className="h-9 w-9 rounded-full border border-stone-200 bg-stone-50 text-stone-700">
                    −
                  </button>
                  <input
                    disabled
                    value="4"
                    className="h-9 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 text-sm text-stone-700"
                  />
                  <button className="h-9 w-9 rounded-full border border-stone-200 bg-stone-50 text-stone-700">
                    +
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-3 text-sm text-stone-700">
                Example: “Garlic 3 cloves” → “Garlic 6 cloves” when servings double.
              </div>

              <Button variant="secondary" disabled>
                Apply multiplier (demo)
              </Button>
            </div>
          </Card>

          <Card className="p-5 sm:p-6">
            <div className="font-semibold text-stone-900">Member extras</div>
            <div className="mt-3 space-y-2 text-sm text-stone-700">
              <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-2">
                <span>WhatsApp invite link</span>
                <Badge tone="orange">Members</Badge>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-2">
                <span>Polls (Tier 2)</span>
                <Badge tone="orange">Tier 2</Badge>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-2">
                <span>Members-only comments</span>
                <Badge tone="orange">Tier 2</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function LockedBlock({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white">
      <div className="p-4 blur-[2px]">
        <div className="h-3 w-2/3 rounded bg-stone-200" />
        <div className="mt-2 h-3 w-5/6 rounded bg-stone-200" />
        <div className="mt-2 h-3 w-1/2 rounded bg-stone-200" />
        <div className="mt-2 h-3 w-4/6 rounded bg-stone-200" />
      </div>
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-white/40 to-white/90 p-4 text-center">
        <div>
          <div className="text-sm font-semibold text-stone-900">{label}</div>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <Button href="/subscribe">Subscribe</Button>
            <Button href="/login" variant="secondary">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
