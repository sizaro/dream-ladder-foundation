import { Heart, BookOpen, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get Involved Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Every action counts. Choose how you want to support children and
            communities through Dream Ladder Foundation.
          </p>
        </div>

        {/* Action Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Donate */}
          <Link
            to="/donate"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:border-green-500 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <Heart />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Donate
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Support children with school supplies, books, and learning resources.
            </p>
          </Link>

          {/* Volunteer */}
          <Link
            to="/contact"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:border-green-500 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <Users />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Volunteer
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Join our community efforts and help directly in outreach programs.
            </p>
          </Link>

          {/* Programs */}
          <Link
            to="/programs"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:border-green-500 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <BookOpen />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Our Programs
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Explore how we support education, mentorship, and community development.
            </p>
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="group rounded-2xl border border-gray-200 p-6 transition hover:border-green-500 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <Phone />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Contact Us
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Reach out for partnerships, support, or general inquiries.
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}