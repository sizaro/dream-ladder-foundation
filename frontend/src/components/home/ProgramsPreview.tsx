import { BookOpen, GraduationCap, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramsPreview() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We focus on practical, community-driven initiatives that directly
            improve the learning experience and wellbeing of children.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Program 1 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">

            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
              alt="Children receiving school supplies"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-green-600">
                <BookOpen size={20} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Book & School Supply Distribution
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We provide essential learning materials such as books, pens,
                and school kits to children who lack access to basic educational
                resources.
              </p>

            </div>
          </div>

          {/* Program 2 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
              alt="Teacher mentoring children in classroom"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-green-600">
                <GraduationCap size={20} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Education & Mentorship Support
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We work closely with teachers and volunteers to provide
                mentorship and academic support that helps children stay in
                school and succeed.
              </p>

            </div>
          </div>

          {/* Program 3 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">

            <img
              src="https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1200&q=80"
              alt="Community outreach and support activities"
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-center gap-2 text-green-600">
                <HeartHandshake size={20} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Community Outreach Programs
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                We engage with communities to identify children in need and
                ensure support reaches the most vulnerable households.
              </p>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">

          <Link
            to="/programs"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            View All Programs
          </Link>

        </div>

      </div>
    </section>
  );
}