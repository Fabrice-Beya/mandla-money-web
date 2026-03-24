import Image from "next/image";
import { ArrowRight, LifeBuoy, Mail, MapPin, TerminalSquare } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { basePath } from "@/lib/base-path";

const resources = [
  { label: "FAQ", icon: LifeBuoy, href: "#" },
  { label: "Community forum", icon: Mail, href: "#" },
  { label: "Developer docs", icon: TerminalSquare, href: "#" },
];

const locations = [
  {
    city: "Johannesburg, South Africa",
    detail: "Sandton Financial District",
  },
  {
    city: "Cape Town, South Africa",
    detail: "V&A Waterfront Business Hub",
  },
];

export const metadata = {
  title: "Mandla Money | Contact",
  description: "Contact Mandla Money about wallets, pilots, disbursements, and partnerships.",
};

export default function ContactPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 overflow-hidden px-6 pb-10 pt-28 md:px-10 md:pt-32">
      <div className="pointer-events-none absolute left-0 top-20 h-28 w-28 rounded-full bg-accent/18 blur-3xl" />
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Support center
        </p>
        <div className="mt-5 inline-flex items-center gap-3 rounded-lg border border-primary/10 bg-white/80 px-3 py-2">
          <Image
            src={`${basePath}/logo.png`}
            alt="Mandla Money logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-contain"
          />
          <span className="font-display text-sm font-semibold tracking-[0.12em] text-primary">
            MANDLA SUPPORT
          </span>
        </div>
        <h1 className="mt-4 text-5xl font-semibold leading-tight text-primary md:text-7xl">
          How can we help?
        </h1>
        <p className="mt-6 text-lg text-primary/70">
          Reach out to talk about Mandla Wallet, pilot programs, bulk
          disbursements, or how digital assets over SMS, USSD, and WhatsApp can
          support your users.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-12">
        <Card className="lg:col-span-7">
          <form className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/60"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-md border border-primary/15 bg-surface px-4 py-3 text-sm text-primary outline-none transition focus:border-accent/70"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-md border border-primary/15 bg-surface px-4 py-3 text-sm text-primary outline-none transition focus:border-accent/70"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/60"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your use case, pilot, or support need..."
                className="mt-2 w-full resize-none rounded-md border border-primary/15 bg-surface px-4 py-3 text-sm text-primary outline-none transition focus:border-accent/70"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Send message
            </button>
          </form>
        </Card>

        <div className="space-y-6 lg:col-span-5">
          <Card className="space-y-3">
            <h2 className="text-2xl font-semibold text-primary">Quick resources</h2>
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <a
                  key={resource.label}
                  href={resource.href}
                  className="group flex items-center justify-between rounded-md border border-primary/10 px-4 py-3 transition hover:bg-accent/15"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-medium text-primary">
                    <Icon className="h-4 w-4 text-primary" />
                    {resource.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary/60 transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </Card>

          <Card className="overflow-hidden p-0">
            <Image
              src={`${basePath}/visuals/hero-image.png`}
              alt="Mandla support visual"
              width={1200}
              height={675}
              className="h-44 w-full object-cover object-[32%_center]"
            />
            <div className="p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/55">
              Global presence
            </h3>
            <div className="mt-5 space-y-5">
              {locations.map((location) => (
                <div key={location.city} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <p className="font-medium text-primary">{location.city}</p>
                    <p className="text-sm text-primary/65">{location.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="rounded-xl bg-gradient-to-br from-primary to-[#152d4f] p-8 text-white">
        <h2 className="text-3xl font-semibold">Stay empowered</h2>
        <p className="mt-3 max-w-xl text-white/75">
          Receive updates on product releases, ecosystem milestones, and
          financial inclusion innovation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/news" label="Read latest news" variant="secondary" />
          <ButtonLink href="mailto:info@mandla.money" label="Email us" variant="light" />
        </div>
      </section>
    </div>
  );
}
