"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { basePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/news", label: "In the news" },
  { href: "/contact", label: "Contact us" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex h-[72px] max-w-7xl items-center overflow-hidden rounded-2xl border border-primary/10 bg-white/78 shadow-[0_14px_40px_rgba(10,25,47,0.08)] backdrop-blur-xl">
        <Link
          href="/"
          className="inline-flex h-full shrink-0 items-center border-r border-[#1d365b] bg-[#071524] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-5"
        >
          <Image
            src={`${basePath}/logo.png`}
            alt="Mandla Money logo"
            width={250}
            height={64}
            className="h-9 w-auto object-contain md:h-10"
            priority
          />
        </Link>

        <div className="relative flex flex-1 items-center justify-end px-4 md:px-6">
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b-2 pb-1 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "border-primary text-primary"
                    : "border-transparent text-primary/65 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="/contact" label="Get started" variant="primary" />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md border border-primary/20 p-2 text-primary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
