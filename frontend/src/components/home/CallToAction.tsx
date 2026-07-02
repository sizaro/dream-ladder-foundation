import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-green-700 py-20 sm:py-24 lg:py-28">

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
          alt="Children learning background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-5 text-center text-white sm:px-6 lg:px-8">

        <div className="flex justify-center">
          <HeartHandshake size={40} />
        </div>

        <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Help Us Build Brighter Futures
        </h2>

        <p className="mt-6 text-lg text-green-50 leading-8">
          Every child deserves access to education, opportunity, and hope.
          Your support helps provide books, school supplies, mentorship,
          and life-changing opportunities for vulnerable children.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/donate"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
          >
            Donate Now
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
          >
            Become a Volunteer
          </Link>

        </div>

        {/* Small trust note */}
        <p className="mt-8 text-sm text-green-100">
          Your contribution directly supports children in partner schools and communities.
        </p>

      </div>
    </section>
  );
}