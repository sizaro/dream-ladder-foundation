export default function ImpactStats() {
  return (
    <section className="bg-green-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Every number represents a child supported, a family helped, and a
            future changed through education and community support.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Stat 1 */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-green-600">1,500+</h3>
            <p className="mt-2 text-gray-600">Children Supported</p>
          </div>

          {/* Stat 2 */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-green-600">10,000+</h3>
            <p className="mt-2 text-gray-600">Books & Supplies Distributed</p>
          </div>

          {/* Stat 3 */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-green-600">8+</h3>
            <p className="mt-2 text-gray-600">Partner Schools</p>
          </div>

          {/* Stat 4 */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-green-600">4</h3>
            <p className="mt-2 text-gray-600">Communities Reached</p>
          </div>

        </div>

        {/* Optional trust line */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-600">
            These numbers reflect ongoing field programs, school partnerships, and community outreach initiatives.
          </p>
        </div>

      </div>
    </section>
  );
}