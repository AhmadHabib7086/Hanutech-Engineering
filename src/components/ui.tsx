import Link from "next/link";
import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60";
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];
  const styles = {
    primary:
      "bg-brand text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg",
    outline:
      "border border-brand text-brand hover:-translate-y-0.5 hover:bg-brand hover:text-white",
    ghost: "text-brand hover:bg-orange-50 dark:hover:bg-orange-950/40",
  }[variant];
  return (
    <Link href={href} className={`${base} ${sizes} ${styles} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            dark ? "text-brand-light" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mx-auto mt-4 h-1 rounded-full bg-brand animate-line-grow ${
          dark ? "opacity-80" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-slate-300" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
