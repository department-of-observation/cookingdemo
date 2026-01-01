// src/app/forgot-password/page.tsx
import Link from "next/link";
import { Button, Card } from "@/components/ui/Ui";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-lg">
      <Card className="p-5 sm:p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
          Reset password
        </h1>
        <p className="mt-1 text-sm text-stone-700">
          Static demo flow (no email sent).
        </p>

        <form className="mt-5 space-y-3">
          <label className="block">
            <div className="text-xs font-semibold text-stone-700">Email</div>
            <input
              placeholder="you@example.com"
              className="mt-1 h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-800 shadow-sm outline-none focus:border-emerald-400"
            />
          </label>

          <Button disabled>Send reset link (demo)</Button>

          <div className="text-sm">
            <Link className="text-emerald-800 hover:underline" href="/login">
              ← Back to login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
