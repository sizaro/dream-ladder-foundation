import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-white h-[90vh]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-5 py-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-2 justify-center self-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <HeartHandshake size={18} />
            Empowering Children Through Education
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
            Building
            <span className="block text-green-600">
              Brighter Futures
            </span>
            for Every Child
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Dream Ladder Foundation is dedicated to supporting vulnerable children
            through education, school supplies, mentorship, and community programs.
            We believe every child deserves the chance to learn, grow, and succeed
            regardless of their background.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Support Our Mission
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
            >
              Learn More
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>
              <h2 className="text-3xl font-bold text-green-600">1,500+</h2>
              <p className="mt-2 text-sm text-gray-600">Children Supported</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-600">8+</h2>
              <p className="mt-2 text-sm text-gray-600">Partner Schools</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-600">4</h2>
              <p className="mt-2 text-sm text-gray-600">Districts Reached</p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-3xl shadow-2xl h-[90vh] ">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="Children learning together in a classroom supported by educational programs"
              className="h-[350px] w-full object-cover focus center sm:h-[450px] lg:h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}