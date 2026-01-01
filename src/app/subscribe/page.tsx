// src/app/subscribe/page.tsx
import { Badge, Button, Card } from "@/components/ui/Ui";

export default function SubscribePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Badge tone="amber">Pricing (static demo)</Badge>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Subscribe
        </h1>
        <p className="text-stone-700">
          Two tiers with clear benefits. In the real build, this page connects to Stripe Checkout.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <TierCard
          title="Basic"
          price="$9.99"
          highlight="Best for monthly cooks"
          tone="emerald"
          benefits={[
            "Monthly written subscriber recipe (paired to the monthly video topic)",
            "WhatsApp Community invite link (members only)",
            "Ingredient calculators for 4 public YouTube recipes + the monthly subscriber recipe",
            "Serving multiplier: quantities scale automatically",
          ]}
        />

        <TierCard
          title="Intermediate"
          price="$14.99"
          highlight="For the extra goodies"
          tone="orange"
          benefits={[
            "Everything in Basic",
            "Monthly poll to vote on next monthly video topic",
            "Extra monthly cooking video (~10 min, more complex than public YouTube)",
            "Matching written post for the extra video",
            "Members-only comments on-site (Patreon-style)",
          ]}
        />
      </div>

      <Card className="p-5 sm:p-6">
        <div className="text-sm font-semibold text-stone-900">
          Checkout entry point (demo)
        </div>
        <p className="mt-1 text-sm text-stone-700">
          Buttons are disabled here to keep it non-functional. Replace with Stripe Checkout when ready.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button disabled>Start checkout</Button>
          <Button variant="secondary" disabled>
            View billing portal
          </Button>
        </div>
      </Card>
    </div>
  );
}

function TierCard({
  title,
  price,
  highlight,
  benefits,
  tone,
}: {
  title: string;
  price: string;
  highlight: string;
  benefits: string[];
  tone: "emerald" | "orange";
}) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-stone-900">{title}</div>
          <div className="mt-1 text-4xl font-semibold tracking-tight text-stone-900">
            {price}
            <span className="text-base font-medium text-stone-600">/mo</span>
          </div>
          <div className="mt-2">
            <Badge tone={tone}>{highlight}</Badge>
          </div>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-stone-200 bg-white text-xl">
          {tone === "emerald" ? "🥬" : "🍳"}
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-stone-700">
        {benefits.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-0.5">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button disabled>Choose {title} (demo)</Button>
        <Button href="/recipes" variant="secondary">
          Explore recipes
        </Button>
      </div>
    </Card>
  );
}
