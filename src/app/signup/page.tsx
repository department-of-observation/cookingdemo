// src/app/signup/page.tsx
import Link from "next/link";
import { Button, Card } from "@/components/ui/Ui";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-lg">
      <Card className="p-5 sm:p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
          Create account
        </h1>
        <p className="mt-1 text-sm text-stone-700">
          Static demo form (no real auth).
        </p>

        <form className="mt-5 space-y-3">
          <Field label="Name" placeholder="Your name" />
          <Field label="Email" placeholder="you@example.com" />
          <Field label="Password" placeholder="Create a password" type="password" />

          <Button disabled>Create account (demo)</Button>

          <div className="text-sm text-stone-700">
            Already have an account?{" "}
            <Link className="text-emerald-800 hover:underline" href="/login">
              Log in
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
