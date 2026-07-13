import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../../components/common/PageHero";
import SectionHeader from "../../components/common/SectionHeader";
import CallToAction from "../../components/home/CallToAction";
import { programs } from "../../data/content";

const processSteps = [
  {
    step: "01",
    title: "Identify Need",
    description:
      "We work with schools and community leaders to identify children and households lacking educational resources.",
  },
  {
    step: "02",
    title: "Deliver Support",
    description:
      "Our team coordinates supply distribution, mentorship sessions, and outreach activities tailored to local needs.",
  },
  {
    step: "03",
    title: "Measure Impact",
    description:
      "We track attendance, participation, and feedback to ensure programs create meaningful, lasting change.",
  },
];

export default function Programs() {
  return (
    <>
      <PageHero
        badge="What We Do"
        title="Our Programs"
        subtitle="Practical, community-driven initiatives that directly improve the learning experience and wellbeing of children across Uganda."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Programs That Create Real Change"
            subtitle="Each program is designed to address a specific barrier to education — from missing school supplies to lack of mentorship and community support."
          />
        </div>
      </section>

      {/* Program Details */}
      {programs.map((program, index) => {
        const Icon = program.icon;
        const isReversed = index % 2 === 1;

        return (
          <section
            key={program.id}
            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            id={program.id}
          >
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? "" : ""}`}
              >
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[450px]"
                    />
                  </div>
                </div>

                <div className={isReversed ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 text-green-600">
                    <Icon size={24} />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Program {index + 1}
                    </span>
                  </div>

                  <h2 className="mt-3 text-3xl font-bold text-gray-900">
                    {program.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-8">
                    {program.fullDescription}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-flex rounded-xl bg-green-50 px-5 py-3 text-sm font-medium text-green-700">
                    {program.impact}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* How It Works */}
      <section className="bg-green-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="How Our Programs Work"
            subtitle="A simple, effective approach to delivering support where it matters most."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map(({ step, title, description }) => (
              <div
                key={step}
                className="relative rounded-2xl bg-white p-8 shadow-sm"
              >
                <span className="text-5xl font-extrabold text-green-100">{step}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-gray-600 leading-7">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Support Our Programs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Your contribution helps us reach more children with books, supplies,
            mentorship, and community support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/donate"
              className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
