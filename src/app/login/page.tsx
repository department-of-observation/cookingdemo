// src/app/login/page.tsx
import Link from "next/link";
import { Button, Card } from "@/components/ui/Ui";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-lg">
      <Card className="p-5 sm:p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
          Log in
        </h1>
        <p className="mt-1 text-sm text-stone-700">
          Static demo form (no real auth).
        </p>

        <form className="mt-5 space-y-3">
          <Field label="Email" placeholder="you@example.com" />
          <Field label="Password" placeholder="••••••••" type="password" />

          <Button disabled>Log in (demo)</Button>

          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <Link className="text-emerald-800 hover:underline" href="/forgot-password">
              Forgot password?
            </Link>
            <Link className="text-stone-700 hover:underline" href="/signup">
              Create account →
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-stone-700">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-800 shadow-sm outline-none focus:border-emerald-400"
      />
    </label>
  );
}
