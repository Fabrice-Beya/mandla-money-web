import Image from "next/image";
import { Download, Newspaper, RadioTower, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { basePath } from "@/lib/base-path";

const featured = {
  tag: "Ripple Impact",
  date: "November 14, 2024",
  title: "Ripple Impact Award for Mandla Money in London",
  description:
    "Mandla Money was recognized for advancing financial access through practical low-tech payment channels.",
};

const articles = [
  {
    tag: "XRPL Hackathon",
    date: "October 28, 2024",
    title: "Mandla Money wins XRPL Hackathon",
    description:
      "Our team placed first with an inclusion-focused implementation for secure micro-payments.",
  },
  {
    tag: "Apex Developer",
    date: "September 12, 2024",
    title: "Mandla Money at Apex Developer Conference",
    description:
      "A deep dive into our architecture and why offline-first rails are essential for scale.",
  },
  {
    tag: "Partnership",
    date: "August 05, 2024",
    title: "New strategic alliance for sovereign ledgering",
    description:
      "Regional partnerships expanding reliable fiat-to-digital pathways for underserved markets.",
  },
  {
    tag: "Quarterly Report",
    date: "July 22, 2024",
    title: "Mandla Money Q2 growth: 400% volume increase",
    description:
      "Record transaction growth and stronger institutional trust across pilot corridors.",
  },
];

export const metadata = {
  title: "Mandla Money | News",
  description: "Press and media updates from Mandla Money.",
};

export default function NewsPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 overflow-hidden px-6 pb-10 pt-28 md:px-10 md:pt-32">
      <div className="pointer-events-none absolute right-0 top-14 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
      <header className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-md bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Press and media
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-primary md:text-7xl">
            Mandla in the news
          </h1>
          <p className="mt-6 text-lg text-primary/70">
            Tracking the journey to inclusive digital money rails and resilient
            low-tech infrastructure.
          </p>
        </div>

        <ButtonLink href="/contact" label="Download press kit" variant="ghost" />
      </header>

      <section className="grid gap-6 md:grid-cols-12">
        <Card className="relative overflow-hidden md:col-span-8">
          <Image
            src={`${basePath}/visuals/mandla-network-general.png`}
            alt="Global transaction network visual"
            width={1600}
            height={1000}
            className="mb-5 h-[220px] w-full rounded-md object-cover"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {featured.tag}
          </p>
          <p className="mt-3 text-sm text-primary/55">{featured.date}</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary">{featured.title}</h2>
          <p className="mt-4 text-primary/70">{featured.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Read story
            <Newspaper className="h-4 w-4" />
          </div>
        </Card>

        <Card className="md:col-span-4 bg-primary text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            Media contact
          </p>
          <h3 className="mt-3 text-2xl font-semibold">Press resources</h3>
          <p className="mt-3 text-sm text-white/75">
            Need logos, product screenshots, or executive commentary? Our team
            can support your coverage.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-white">
            <Download className="h-4 w-4 text-accent" />
            Press kit available on request
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {articles.map((article) => (
          <Card key={article.title} className="group transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {article.tag}
              </p>
              <p className="text-xs text-primary/50">{article.date}</p>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-primary">{article.title}</h3>
            <p className="mt-3 text-sm leading-6 text-primary/70">
              {article.description}
            </p>
          </Card>
        ))}
      </section>

      <section className="rounded-xl bg-primary p-8 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Stay informed</h2>
            <p className="mt-3 text-white/75">
              Join our media list for launches, partnerships, and transparency
              updates.
            </p>
          </div>
          <ButtonLink href="/contact" label="Subscribe" variant="secondary" />
        </div>
      </section>

      <div className="inline-flex items-center gap-2 text-sm text-primary/65">
        <RadioTower className="h-4 w-4" />
        For interview requests, contact the Mandla comms team.
      </div>
    </div>
  );
}
