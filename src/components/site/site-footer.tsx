import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/base-path";

const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/products", label: "Products" },
      { href: "/products", label: "Solutions" },
      { href: "/contact", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/news", label: "In the news" },
      { href: "/contact", label: "Contact us" },
      { href: "/contact", label: "Support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Usage Policy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-primary text-white">
      <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="inline-flex items-center gap-3">
            <Image
              src={`${basePath}/logo.png`}
              alt="Mandla Money logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-contain"
            />
            <p className="font-display text-xl font-bold text-white">Mandla Money</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Power to the people&apos;s finances through digital assets over SMS,
            USSD, and WhatsApp for unbanked and underbanked communities.
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {section.title}
            </p>
            <div className="mt-4 space-y-3">
              {section.links.map((link) => (
                <Link
                  key={`${section.title}-${link.label}`}
                  href={link.href}
                  className="block text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6">
        <p className="text-xs uppercase tracking-[0.14em] text-white/55">
          © 2026 Mandla Money (PTY) LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
