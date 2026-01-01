// src/app/account/page.tsx
import Link from "next/link";
import { Badge, Button, Card } from "@/components/ui/Ui";

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            Member Account
          </h1>
          <p className="mt-1 text-stone-700">
            Static demo of tier status, renewal, billing portal link, and members-only links.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="emerald">Status: Active (demo)</Badge>
          <Badge tone="amber">Tier: Basic (demo)</Badge>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 sm:p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-stone-900">Plan details</div>
              <div className="mt-2 space-y-1 text-sm text-stone-700">
                <div>
                  Current tier: <span className="font-semibold">Basic</span>
                </div>
                <div>
                  Renewal date: <span className="font-semibold">Feb 1, 2026</span> (demo)
                </div>
                <div>
                  Access rule: payment failed / canceled → remove access after{" "}
                  <span className="font-semibold">24 hours</span> (demo)
                </div>
              </div>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-stone-200 bg-white text-xl">
              👩‍🍳
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button disabled>Manage billing (Stripe portal)</Button>
            <Button variant="secondary" href="/subscribe">
              Upgrade / view tiers
            </Button>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200/80 bg-stone-50 p-4 text-sm text-stone-700">
            <div className="font-semibold text-stone-900">Logging (real build)</div>
            <p className="mt-1">
              Membership change events (created, renewed, failed, canceled, tier change)
              should be logged to troubleshoot “paid but no access”.
            </p>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <div className="text-sm font-semibold text-stone-900">Member-only links</div>
          <div className="mt-3 space-y-2 text-sm">
            <Row label="WhatsApp Community invite" right={<Badge tone="orange">Members</Badge>} />
            <Row label="Subscriber recipes" right={<Badge tone="orange">Members</Badge>} />
            <Row label="Polls (Tier 2)" right={<Badge tone="stone">Locked</Badge>} />
            <Row label="Members-only comments" right={<Badge tone="stone">Locked</Badge>} />
          </div>

          <div className="mt-4 text-xs text-stone-600">
            Static demo: links don’t validate access.
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button href="/recipes" variant="secondary">
              Browse recipes
            </Button>
            <Button href="/subscribe">Subscribe</Button>
          </div>
        </Card>
      </div>

      <Card className="p-5 sm:p-6">
        <div className="text-sm font-semibold text-stone-900">Security & ops (real build)</div>
        <p className="mt-1 text-sm text-stone-700">
          Protect routes + APIs for gated content, rate-limit auth/polls, backups + restore plan,
          and basic uptime/error monitoring.
        </p>
      </Card>

      <div className="text-sm text-stone-600">
        Want a dedicated “Polls” and “Comments” page mock too? Add:
        {" "}
        <Link className="text-emerald-800 hover:underline" href="/subscribe">
          Tier 2
        </Link>
        {" "}
        sections as separate pages.
      </div>
    </div>
  );
}

function Row({ label, right }: { label: string; right: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-2">
      <span className="text-stone-700">{label}</span>
      {right}
    </div>
  );
}
