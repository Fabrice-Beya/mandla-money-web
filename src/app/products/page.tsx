import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  HandCoins,
  Store,
  WalletCards,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { basePath } from "@/lib/base-path";

const productHighlights = [
  {
    icon: HandCoins,
    title: "Send money",
    description:
      "Send digital assets across low-tech channels with less friction than cash and informal middlemen.",
    tag: "SMS / USSD powered",
  },
  {
    icon: WalletCards,
    title: "Receive funds",
    description:
      "Receive crypto, stablecoins, or CBDC-style value using a phone-number-first wallet with secure PIN confirmation.",
    tag: "Phone-number wallet",
  },
  {
    icon: Store,
    title: "Merchant payments",
    description:
      "Enable merchants to accept digital assets without POS hardware or reliable internet dependency.",
    tag: "Offline-ready",
  },
];

const steps = [
  {
    title: "Initiate",
    description:
      "Dial a USSD code or send structured SMS instructions to Mandla Wallet.",
  },
  {
    title: "Authenticate",
    description:
      "Verify with a secure PIN while the blockchain-backed ledger validates the transaction.",
  },
  {
    title: "Confirm",
    description:
      "Both parties get confirmation with fast settlement and a clear transaction record.",
  },
];

export const metadata = {
  title: "Mandla Money | Products",
  description: "Products and solutions for digital assets over SMS, USSD, and WhatsApp.",
};

export default function ProductsPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 overflow-hidden px-6 pb-10 pt-28 md:px-10 md:pt-32">
      <div className="pointer-events-none absolute left-0 top-16 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-72 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Ecosystem architecture
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-primary md:text-7xl">
            Our solutions
          </h1>
          <p className="text-lg text-primary/70">
            Mandla Wallet gives unbanked and underbanked users access to digital
            assets through SMS, USSD, and WhatsApp. We connect simple telecom
            interfaces with secure blockchain-powered infrastructure.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/18 animated-gradient" />
          <Image
            src={`${basePath}/visuals/mandla-network-general.png`}
            alt="Mandla global transaction network"
            width={1600}
            height={1000}
            className="h-[280px] w-full object-cover md:h-[340px]"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-[#081426]/70 px-4 py-3 text-white backdrop-blur">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Cross-border rails</p>
            <p className="mt-1 text-lg font-semibold">Built for global financial access</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {productHighlights.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="flex flex-col gap-5">
              <Icon className="h-7 w-7 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold text-primary">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-primary/70">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-primary/10 pt-4">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-primary">
                  {item.tag}
                </span>
                <ArrowRight className="h-4 w-4 text-primary/70" />
              </div>
            </Card>
          );
        })}
      </section>

      <section className="rounded-xl border border-primary/10 bg-surface-strong/40 p-8">
        <h2 className="text-3xl font-semibold text-primary">How it works</h2>
        <p className="mt-3 text-primary/70">
          The anatomy of a low-tech digital asset transaction.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-primary/70">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid items-stretch gap-6 lg:grid-cols-2">
        <Card className="bg-primary text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            Developer tools
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Build with us</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/80">
            Integrate Mandla Money into your platform with APIs for
            disbursements, balance checks, and transaction orchestration across
            low-tech channels.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact" label="Documentation" variant="secondary" />
            <ButtonLink href="/contact" label="Request API key" variant="light" />
          </div>
        </Card>

        <Card className="overflow-hidden bg-[#161e2d] p-0">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-6 text-slate-200">
            <code>{`POST /v1/transactions/send
{
  "amount": 250.00,
  "currency": "USD",
  "recipient_phone": "+27812345678",
  "method": "sms_secure"
}

// Response 201 Created
{
  "status": "processing",
  "transaction_id": "tx_982347234"
}`}</code>
          </pre>
        </Card>
      </section>

      <section className="rounded-xl bg-accent/20 p-8 text-primary">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Ready to start?</h2>
            <p className="mt-3 text-primary/75">
              Join the movement toward financial empowerment. No smartphone
              required, just the phone users already own.
            </p>
          </div>
          <ButtonLink href="/contact" label="Contact sales team" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          "Blockchain-backed transaction rails",
          "Simple telecom-based UX",
          "Digital assets for everyday users",
        ].map((point) => (
          <div key={point} className="inline-flex items-center gap-2 text-sm text-primary/75">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            {point}
          </div>
        ))}
      </section>

      <div className="inline-flex items-center gap-2 text-sm text-primary/65">
        <Code2 className="h-4 w-4" />
        API access and product materials available on request.
      </div>
    </div>
  );
}
