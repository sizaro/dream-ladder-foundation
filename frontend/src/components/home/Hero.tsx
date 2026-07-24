import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-white min-h-[80vh] flex items-center">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2 md:h-[80vh] flex items-start justify-center flex-col">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <HeartHandshake size={18} />
            Empowering Children Through Education
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-4xl align-start">
            Building
            <span className="block text-green-600">
              Brighter Futures
            </span>
            for Every Child
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Dream Ladder Foundation is dedicated to supporting vulnerable
            children through education, mentorship, school supplies, and
            community development programs. Together with our partners and
            supporters, we are creating opportunities that enable every child
            to learn, grow, and build a brighter future.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/donate"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              Support Our Mission
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600 sm:w-auto"
            >
              Learn More
            </Link>

          </div>

         
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 md:h-[70vh] flex items-center">

          <div className="overflow-hidden rounded-3xl shadow-2xl flex items-center">

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80"
              alt="Children learning together in a classroom"
              className=" w-full object-cover h-[350px] w-auto md:min-h-[400px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}