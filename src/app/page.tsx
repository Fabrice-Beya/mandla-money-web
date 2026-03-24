import Image from "next/image";
import {
  ArrowRight,
  Award,
  Coins,
  Globe,
  Landmark,
  MessageSquareText,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { basePath } from "@/lib/base-path";

const rails = [
  {
    icon: MessageSquareText,
    title: "SMS wallet",
    description:
      "Send and receive digital assets through simple text flows on everyday phones.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp wallet",
    description:
      "Move stablecoins and other digital assets in a channel people already trust and use daily.",
  },
  {
    icon: Landmark,
    title: "Bulk disbursements",
    description:
      "Deliver grants, aid, and payroll with traceability, speed, and low operational friction.",
  },
];

const videoPoints = [
  "Built for the 2 billion adults still excluded from modern financial services.",
  "Digital assets over SMS, USSD, and WhatsApp, even without smartphones or internet.",
  "A safer alternative to cash, middlemen, and high-friction informal finance.",
];

const offlinePillars = [
  {
    icon: MessageSquareText,
    title: "USSD & SMS access",
    description:
      "Core transactions work even when smartphone penetration or data availability is limited.",
  },
  {
    icon: Globe,
    title: "Cross-border movement",
    description:
      "Move value across regions with less dependence on slow, expensive intermediaries.",
  },
  {
    icon: Coins,
    title: "Crypto, stablecoins, and CBDCs",
    description:
      "Support native crypto, stablecoins, and even central bank digital currencies through low-tech interfaces.",
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Security by design" },
  { icon: Award, label: "Award-winning innovation" },
  { icon: Globe, label: "Built for real-world scale" },
];

const newsItems = [
  "Mandla Money at Apex Developer Conference in Las Vegas",
  "Mandla Money wins XRPL Creating Real World Impact Hackathon",
  "Ripple Impact Award for Mandla Money in London",
  "Mandla Money awarded XRPL Grant to Advance Financial Inclusion",
];

const financialRealities = [
  {
    title: "Cash can be unsafe",
    description:
      "Users are often forced to carry cash or rely on fragile informal systems to move and store value.",
  },
  {
    title: "Middlemen charge a premium",
    description:
      "When access is limited, the cost of transacting rises and control shifts away from the user.",
  },
  {
    title: "Low-tech should not mean low-power",
    description:
      "Mandla turns SMS, USSD, and WhatsApp into real financial rails instead of fallback experiences.",
  },
];

const assetTypes = [
  "Native crypto",
  "Stablecoins",
  "CBDCs",
  "Aid payouts",
  "Scholarships",
  "Merchant collections",
];

const commandSteps = [
  "Open SMS, USSD, or WhatsApp",
  "Enter a simple wallet command",
  "Confirm with a secure PIN",
  "Receive instant transaction feedback",
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[24%_center] md:object-[28%_center]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Mandla Money hero background video"
        >
          <source src={`${basePath}/visuals/video_heror.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.15)_0%,rgba(7,17,31,0.58)_42%,rgba(7,17,31,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(212,175,55,0.22),transparent_22%),radial-gradient(circle_at_85%_85%,rgba(212,175,55,0.18),transparent_20%)]" />
        <div className="pulse-glow absolute right-[10%] top-[22%] h-24 w-24 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-14 pt-32 md:px-10 md:pt-36">
          <div className="ml-auto max-w-2xl">
            <div className="rounded-[28px] border border-white/12 bg-[#071524]/66 p-6 shadow-[0_40px_100px_rgba(7,17,31,0.45)] backdrop-blur-xl md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Power to the people&apos;s finances
              </div>

              

              <h1 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.04] text-white md:text-6xl">
                A digital wallet for people the financial system left behind.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/78 md:text-lg">
                Mandla Wallet lets people transact with digital assets over SMS,
                USSD, and WhatsApp. No smartphone. No internet connection.
                Just accessible, secure money movement for unbanked and
                underbanked communities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" label="Start with Mandla" variant="secondary" />
                <ButtonLink href="#watch" label="Watch explainer" variant="light" />
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                <span>SMS, USSD, and WhatsApp</span>
                <span>Crypto, stablecoins, and CBDCs</span>
                <span>Built for the unbanked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-14 md:px-10">
        <section
          id="watch"
          className="grid gap-8 rounded-[32px] border border-primary/10 bg-white/70 p-5 shadow-[0_24px_70px_rgba(10,25,47,0.08)] backdrop-blur md:p-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="overflow-hidden rounded-[24px] border border-primary/10 bg-primary">
            <div className="aspect-video">
              <iframe
                title="Mandla Money explainer video"
                src="https://www.youtube-nocookie.com/embed/CsCNYtWfe3w?rel=0"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <PlayCircle className="h-3.5 w-3.5 text-accent" />
              See Mandla in motion
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-primary md:text-4xl">
              See how Mandla Wallet brings digital assets to low-tech channels.
            </h2>
            <p className="mt-4 max-w-xl text-primary/70">
              This is the clearest way to understand the product: a blockchain-
              powered wallet that helps users transact safely without depending
              on expensive smartphones, unreliable internet, or predatory
              middlemen.
            </p>

            <div className="mt-8 space-y-4">
              {videoPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm leading-6 text-primary/72">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[30px] bg-[#041327] p-2 md:p-3">
          <div className="relative overflow-hidden rounded-[28px] border border-[#14345d]/80 bg-[#06172d]">
            <Image
              src={`${basePath}/visuals/background_section.png`}
              alt="Background illustration of Africa and digital connectivity"
              fill
              className="object-cover opacity-55"
            />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,12,24,0.92)_0%,rgba(4,16,33,0.88)_45%,rgba(3,12,24,0.94)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_38%,rgba(68,140,255,0.16),transparent_26%),radial-gradient(circle_at_72%_58%,rgba(38,108,215,0.14),transparent_30%)]" />
            <div className="absolute left-[44%] top-[24%] h-44 w-44 -translate-x-1/2 rounded-full bg-[#2d7fff]/10 blur-3xl" />
            <div className="absolute bottom-[-30px] left-[42%] h-32 w-32 rounded-full bg-[#1f5fb8]/12 blur-3xl" />

            <div className="relative z-10 grid gap-5 p-4 md:p-6 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative overflow-hidden rounded-[28px] border border-[#24476d]/70 bg-[rgba(120,138,164,0.14)] p-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-7 lg:min-h-[630px]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]" />
                <div className="relative z-10">
                  <p className="inline-flex items-center rounded-full border border-[#8e6b16]/55 bg-[rgba(212,175,55,0.07)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                    Why Mandla exists
                  </p>

                  <h2 className="mt-5 max-w-2xl text-[2.05rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#f5f8ff] md:text-[3.35rem]">
                    The gap is not just technology.
                    <br />
                    <span className="text-[#b9c7d9]">
                      It&apos;s financial exclusion
                    </span>
                    <br />
                    <span className="text-[#b9c7d9]">at massive scale.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-[14px] leading-6 text-[#aebfd4] md:text-[15px] md:leading-7">
                    More than two billion adults remain outside the formal financial
                    system. Mandla Wallet reimagines access by bringing digital assets
                    to the channels people already use every day.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-[#29507a]/70 bg-[linear-gradient(180deg,rgba(5,22,42,0.82),rgba(6,24,44,0.72))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-[2.25rem] font-semibold tracking-[-0.04em] text-accent md:text-[3rem]">
                        2B+
                      </p>
                      <p className="mt-3 max-w-[15rem] text-[14px] leading-6 text-[#c1cddd]">
                        Adults globally still excluded from modern financial services
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[#29507a]/70 bg-[linear-gradient(180deg,rgba(5,22,42,0.82),rgba(6,24,44,0.72))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#59d67d]">
                        Outcome
                      </p>
                      <p className="mt-3 max-w-[16rem] text-[1.2rem] font-medium leading-[1.18] tracking-[-0.02em] text-white md:text-[1.45rem]">
                        Financial autonomy without waiting for perfect infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 lg:auto-rows-fr">
                {financialRealities.map((item, index) => (
                  <div
                    key={item.title}
                    className={
                      index === 2
                        ? "relative overflow-hidden rounded-[28px] border border-[#24476d]/70 bg-[rgba(92,112,140,0.14)] p-5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl md:col-span-2 md:p-6 lg:min-h-[205px]"
                        : "relative overflow-hidden rounded-[28px] border border-[#24476d]/70 bg-[rgba(92,112,140,0.14)] p-5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl md:p-6 lg:min-h-[255px]"
                    }
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]" />

                    <div className="relative z-10">
                      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#204c78]/80 bg-[rgba(8,36,66,0.82)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#73b6ff]">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#4ea7ff]" />
                        Reality check
                      </p>

                      <h3
                        className={
                          index === 2
                            ? "mt-4 max-w-3xl text-[1.25rem] font-semibold leading-[1.16] tracking-[-0.02em] text-white md:text-[1.7rem]"
                            : "mt-4 text-[1.2rem] font-semibold leading-[1.18] tracking-[-0.02em] text-white md:text-[1.55rem]"
                        }
                      >
                        {item.title}
                      </h3>

                      <p
                        className={
                          index === 2
                            ? "mt-3 max-w-3xl text-[14px] leading-6 text-[#c1cddd] md:text-[15px]"
                            : "mt-3 text-[14px] leading-6 text-[#c1cddd]"
                        }
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Channel architecture
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">
                One wallet, three familiar ways to move value
              </h2>
            </div>
            <ButtonLink href="/products" label="Explore products" variant="ghost" />
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-5">
              {rails.map((rail, index) => {
                const Icon = rail.icon;

                return (
                  <Card
                    key={rail.title}
                    className={
                      index === 1
                        ? "translate-y-0 lg:translate-x-8 lg:translate-y-6"
                        : index === 2
                          ? "translate-y-0 lg:translate-x-16 lg:translate-y-2"
                          : ""
                    }
                  >
                    <Icon className="h-6 w-6 text-accent" />
                    <h3 className="mt-4 text-xl font-semibold text-primary">
                      {rail.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-primary/70">
                      {rail.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <Card className="relative overflow-hidden bg-[#081426] p-0 text-white">
              <Image
                src={`${basePath}/visuals/mandla-network-general.png`}
                alt="Mandla transaction network"
                width={1600}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,20,38,0.96),rgba(8,20,38,0.72))]" />
              <div className="relative z-10 p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  What moves on Mandla
                </p>
                <h3 className="mt-4 max-w-lg text-3xl font-semibold">
                  A digital asset layer designed for everyday economic life.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">
                  Mandla is not locked to one narrow use case. It can support
                  peer transfers, relief aid, merchant collections, and the next
                  generation of digital currencies.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {assetTypes.map((asset) => (
                    <span
                      key={asset}
                      className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/85"
                    >
                      {asset}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {offlinePillars.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                      <div
                        key={pillar.title}
                        className="rounded-2xl border border-white/10 bg-white/6 p-4"
                      >
                        <Icon className="h-5 w-5 text-accent" />
                        <p className="mt-3 text-sm font-medium">{pillar.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Card className="relative overflow-hidden border-primary/10 bg-surface-strong/35">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              Product choreography
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold text-primary md:text-4xl">
              A low-tech experience that still feels intentional and modern.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-primary/72">
              Instead of designing around ideal conditions, Mandla designs around
              confidence: simple commands, clear confirmation, secure PIN logic,
              and a journey users can trust the first time they try it.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {commandSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[24px] border border-primary/10 bg-white/72 p-5"
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-base font-medium text-primary">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="relative overflow-hidden bg-primary text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_28%)]" />
            <p className="relative z-10 text-xs uppercase tracking-[0.18em] text-accent">
              Live command flow
            </p>
            <h3 className="relative z-10 mt-4 text-3xl font-semibold">
              Blockchain-powered finance can still work offline.
            </h3>
            <p className="relative z-10 mt-4 text-sm leading-7 text-white/76">
              This is where Mandla becomes unique: secure digital asset movement
              delivered through interfaces that feel familiar to the user from
              day one.
            </p>

            <div className="relative z-10 mt-8 space-y-3 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-white/85">
              <div className="rounded-xl bg-white/6 px-4 py-3">
                SEND 25 USDC TO +27 81 234 5678
              </div>
              <div className="rounded-xl bg-accent/18 px-4 py-3 text-accent">
                Enter PIN to confirm transfer
              </div>
              <div className="rounded-xl bg-white/6 px-4 py-3">
                Success. Both parties receive confirmation instantly.
              </div>
              <div className="rounded-xl bg-white/6 px-4 py-3">
                Balance updated. Transaction recorded on-chain.
              </div>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] bg-gradient-to-br from-primary to-[#142b4b] p-8 text-white">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  Trust layer
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Access, autonomy, and trust by design.
                </h2>
                <p className="mt-4 max-w-2xl text-white/75">
                  Mandla combines blockchain infrastructure with user-friendly
                  low-tech interfaces so more people can transact safely and
                  participate in the digital economy.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;

                  return (
                    <div
                      key={badge.label}
                      className="rounded-2xl border border-white/12 bg-white/6 p-5"
                    >
                      <Icon className="h-6 w-6 text-accent" />
                      <p className="mt-4 text-sm font-medium">{badge.label}</p>
                    </div>
                  );
                })}
              </div>

              <ButtonLink href="/contact" label="Talk to the team" variant="light" />
            </div>
          </div>

          <div className="grid gap-4">
            {newsItems.slice(0, 3).map((item, index) => (
              <Card
                key={item}
                className={index === 1 ? "translate-y-0 lg:translate-x-6" : ""}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary/45">
                      Recognition
                    </p>
                    <p className="mt-2 text-base font-medium text-primary">{item}</p>
                  </div>
                  <Newspaper className="h-5 w-5 shrink-0 text-accent" />
                </div>
              </Card>
            ))}
            <div>
              <ButtonLink href="/news" label="View all press" variant="ghost" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[32px] border border-primary/15 bg-primary p-8 text-white">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-accent/35" />
          <div className="absolute -left-8 bottom-4 h-20 w-20 rounded-full bg-accent/20 blur-xl" />
          <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-accent">
                Early access
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Join the movement for financial empowerment.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/80">
                Launch a pilot, modernize your payout rails, or create wallet
                experiences that meet unbanked users where they are.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" label="Get started now" variant="secondary" />
              <ButtonLink href="/contact" label="Speak to sales" variant="light" />
            </div>
          </div>
        </section>

        <div className="pb-2">
          <a
            href="https://mandla.money/web/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary/70 transition hover:text-primary"
          >
            View current public site
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
