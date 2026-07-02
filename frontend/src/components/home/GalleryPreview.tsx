import { Link } from "react-router-dom";

export default function GalleryPreview() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Moments From Our Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Real stories captured from our outreach programs, schools, and
            community activities.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
            alt="Volunteers distributing school materials"
            className="h-64 w-full rounded-2xl object-cover shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
            alt="Children receiving books and supplies"
            className="h-64 w-full rounded-2xl object-cover shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
            alt="Teacher guiding students in classroom"
            className="h-64 w-full rounded-2xl object-cover shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1200&q=80"
            alt="Community outreach meeting"
            className="h-64 w-full rounded-2xl object-cover shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
            alt="Children learning together in classroom"
            className="h-64 w-full rounded-2xl object-cover shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
            alt="Group learning activity with children"
            className="h-64 w-full rounded-2xl object-cover shadow-sm"
          />

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">

          <Link
            to="/gallery"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            View Full Gallery
          </Link>

        </div>

      </div>
    </section>
  );
}