// src/components/ui/Ui.tsx
import React from "react";

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-stone-200/80 bg-white/70 shadow-sm backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "stone",
}: {
  children: React.ReactNode;
  tone?: "stone" | "emerald" | "orange" | "amber";
}) {
  const tones: Record<string, string> = {
    stone: "border-stone-200 bg-stone-50 text-stone-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    orange: "border-orange-200 bg-orange-50 text-orange-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
  };

  return (
    <span
      className={[
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow-sm transition";
  const variants: Record<string, string> = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-800",
    secondary:
      "border border-stone-200 bg-white text-stone-800 hover:bg-stone-50",
    ghost: "text-stone-700 hover:bg-stone-100/80",
  };

  const cls = [
    base,
    variants[variant],
    disabled ? "cursor-not-allowed opacity-60 hover:bg-inherit" : "",
  ].join(" ");

  if (href) {
    return (
      <a className={cls} href={href} aria-disabled={disabled ? "true" : "false"}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
