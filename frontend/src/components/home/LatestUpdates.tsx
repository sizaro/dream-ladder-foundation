import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function LatestUpdates() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest Updates
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Follow our recent activities, outreach programs, and community
            impact stories from the field.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Update 1 */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">

            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
              alt="Children receiving school supplies"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={16} />
                <span>June 2026</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                School Supply Distribution Drive
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                We reached over 300 children with books, pens, and essential
                learning materials across three partner schools.
              </p>

            </div>
          </div>

          {/* Update 2 */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
              alt="Teacher guiding students in classroom"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={16} />
                <span>May 2026</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Mentorship Program Launch
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                We launched a mentorship initiative connecting volunteers with
                students to improve academic performance and motivation.
              </p>

            </div>
          </div>

          {/* Update 3 */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">

            <img
              src="https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1200&q=80"
              alt="Community outreach meeting"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={16} />
                <span>April 2026</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Community Outreach Expansion
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                We expanded our outreach to two new communities, identifying
                children in need of educational support.
              </p>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">

          <Link
            to="/news"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            View All Updates
          </Link>

        </div>

      </div>
    </section>
  );
}