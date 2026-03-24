import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_10px_40px_rgba(10,25,47,0.18)] hover:-translate-y-0.5 hover:brightness-110",
  secondary:
    "bg-accent text-accent-foreground shadow-[0_8px_20px_rgba(212,175,55,0.25)] hover:-translate-y-0.5 hover:brightness-105",
  ghost: "bg-transparent text-primary ring-1 ring-primary/20 hover:bg-primary/5",
  light:
    "bg-transparent text-white ring-1 ring-white/25 hover:bg-white/10 hover:-translate-y-0.5",
};

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200",
        variantClasses[variant],
        className
      )}
    >
      {label}
    </Link>
  );
}
