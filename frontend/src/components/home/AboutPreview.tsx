import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
            alt="Volunteers helping children with education materials"
            className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[550px]"
          />
        </div>

        {/* Content */}
        <div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Who We Are
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Dream Ladder Foundation is a community-driven organization
            dedicated to improving the lives of children through education
            support, mentorship, and access to essential learning materials.
            We believe that every child, regardless of background, deserves
            the opportunity to learn, grow, and succeed.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            Our work focuses on distributing books, school supplies, and
            learning resources while partnering with schools and communities
            to create sustainable educational opportunities.
          </p>

          {/* Key values */}
          <div className="mt-8 space-y-3 text-gray-700">

            <p>✔ Supporting vulnerable children with education resources</p>
            <p>✔ Working directly with schools and local communities</p>
            <p>✔ Promoting equal access to learning opportunities</p>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/about"
              className="rounded-xl bg-green-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Learn More About Us
            </Link>

            <Link
              to="/donate"
              className="rounded-xl border border-gray-300 px-7 py-4 text-center font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
            >
              Support Our Work
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}