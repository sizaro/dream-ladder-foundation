import { useState } from "react";
import {
  BookOpen,
  Building2,
  CreditCard,
  Gift,
  Heart,
  Shield,
  Users,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";
import SectionHeader from "../../components/common/SectionHeader";
import { donationTiers } from "../../data/content";

const presetAmounts = [10, 25, 50, 100, 250];

const otherWays = [
  {
    icon: Building2,
    title: "Corporate Partnership",
    description:
      "Partner with us through sponsorship, employee giving programs, or matched donations.",
  },
  {
    icon: Gift,
    title: "In-Kind Donations",
    description:
      "Donate books, school supplies, uniforms, or educational materials directly to our programs.",
  },
  {
    icon: Users,
    title: "Fundraise for Us",
    description:
      "Organize a fundraiser in your community, school, or workplace to support our mission.",
  },
];

export default function Donate() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  const matchedTier =
    [...donationTiers].reverse().find((tier) => activeAmount >= tier.amount) ??
    donationTiers[0];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount > 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <PageHero
        badge="Make a Difference"
        title="Support Our Mission"
        subtitle="Your donation provides books, school supplies, mentorship, and life-changing opportunities for vulnerable children across Uganda."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Why Donate */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Direct Impact",
                text: "100% of your donation goes toward programs that support children in partner schools and communities.",
              },
              {
                icon: Heart,
                title: "Trusted Partner",
                text: "We work with verified schools and community leaders to ensure resources reach those who need them most.",
              },
              {
                icon: Shield,
                title: "Transparent Giving",
                text: "We are committed to accountability and share regular updates on how donations are used.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
              <SectionHeader
                centered={false}
                title="Make a Donation"
                subtitle="Choose an amount and frequency that works for you."
              />

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Heart size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Thank You for Your Generosity!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Your {frequency === "monthly" ? "monthly " : ""}donation of $
                    {activeAmount} will help us continue supporting children
                    through education.
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    Payment processing will be connected in a future update.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    Make another donation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="mt-8">
                  {/* Frequency Toggle */}
                  <div className="flex rounded-xl bg-gray-100 p-1">
                    <button
                      type="button"
                      onClick={() => setFrequency("once")}
                      className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                        frequency === "once"
                          ? "bg-white text-green-700 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency("monthly")}
                      className={`flex-1 rounded-lg py-3 text-sm font-semibold transition ${
                        frequency === "monthly"
                          ? "bg-white text-green-700 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Preset Amounts */}
                  <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`rounded-xl border-2 py-3 text-sm font-semibold transition ${
                          selectedAmount === amount && !customAmount
                            ? "border-green-600 bg-green-50 text-green-700"
                            : "border-gray-200 text-gray-700 hover:border-green-300"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mt-4">
                    <label
                      htmlFor="customAmount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Or enter a custom amount
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        id="customAmount"
                        type="number"
                        min="1"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Other amount"
                        className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      />
                    </div>
                  </div>

                  {/* Impact Preview */}
                  <div className="mt-6 rounded-xl bg-green-50 p-5">
                    <p className="text-sm font-medium text-green-800">
                      Your ${activeAmount || 0}
                      {frequency === "monthly" ? "/month " : " "}
                      donation {matchedTier.impact.toLowerCase()}.
                    </p>
                  </div>

                  {/* Payment Placeholder */}
                  <div className="mt-6 space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!activeAmount || activeAmount <= 0}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <CreditCard size={20} />
                    Donate ${activeAmount || 0}
                    {frequency === "monthly" ? " / month" : ""}
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-500">
                    Secure payment processing coming soon. This form demonstrates
                    the donation experience.
                  </p>
                </form>
              )}
            </div>

            {/* Impact Tiers */}
            <div>
              <SectionHeader
                centered={false}
                title="Your Impact"
                subtitle="See how different donation amounts translate into real support for children."
              />

              <div className="mt-8 space-y-4">
                {donationTiers.map((tier) => (
                  <div
                    key={tier.amount}
                    className={`flex items-center gap-4 rounded-2xl border p-5 transition ${
                      activeAmount >= tier.amount
                        ? "border-green-300 bg-green-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg font-bold text-green-700">
                      ${tier.amount}
                    </div>
                    <p className="text-gray-700">{tier.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Other Ways to Give"
            subtitle="Beyond financial donations, there are many ways to support our mission."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {otherWays.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-green-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
