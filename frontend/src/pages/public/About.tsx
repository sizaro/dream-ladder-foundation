import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

import PageHero from "../../components/common/PageHero";
import SectionHeader from "../../components/common/SectionHeader";
import CallToAction from "../../components/home/CallToAction";
import {
  coreValues,
  impactStats,
  testimonials,
} from "../../data/content";

export default function About() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="About Dream Ladder Foundation"
        subtitle="We are a community-driven organization dedicated to improving the lives of children through education support, mentorship, and access to essential learning materials."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
              alt="Volunteers helping children with education materials"
              className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[500px]"
            />
          </div>

          <div>
            <SectionHeader
              centered={false}
              title="Who We Are"
              subtitle="Founded on the belief that every child deserves the chance to learn, grow, and succeed."
            />

            <p className="mt-6 text-gray-600 leading-8">
              Dream Ladder Foundation was born from a simple observation: too many
              children in our communities start each school term without the basic
              materials they need to learn. What began as a small initiative to
              distribute books and supplies has grown into a comprehensive
              education support program reaching hundreds of children across
              multiple schools and communities.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              We work directly with schools, teachers, and community leaders to
              identify children in need and deliver targeted support — from
              school kits and textbooks to mentorship and parent engagement
              programs that create lasting change.
            </p>

            <div className="mt-8 space-y-3 text-gray-700">
              <p>✔ Supporting vulnerable children with education resources</p>
              <p>✔ Working directly with schools and local communities</p>
              <p>✔ Promoting equal access to learning opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Mission & Vision"
            subtitle="Guiding principles that shape everything we do."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-green-600">Our Mission</h3>
              <p className="mt-4 text-gray-600 leading-8">
                To bridge the gap between potential and opportunity for every child
                by providing school materials, mentorship, and community-based
                support systems that foster long-term growth and success.
              </p>
              <div className="mt-6 border-l-4 border-green-600 pl-5">
                <p className="italic text-gray-700">
                  "We are building more than a program — we are building a future
                  where every child has the chance to succeed."
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-green-600">Our Vision</h3>
              <p className="mt-4 text-gray-600 leading-8">
                A Uganda where no child is held back by poverty or circumstance —
                where every student has access to quality education, supportive
                mentors, and the resources they need to reach their full potential.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>✔ Education accessible to every child</li>
                <li>✔ No child limited by their background</li>
                <li>✔ Community support creating lasting change</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide our work with children, schools, and communities."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:border-green-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-green-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Impact in Numbers"
            subtitle="Every number represents a child supported, a family helped, and a future changed."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-4xl font-bold text-green-600">{value}</h3>
                <p className="mt-2 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="What People Say"
            subtitle="Voices from teachers, parents, and community members who have experienced our work."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ quote, name, role, avatar }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
              >
                <Quote className="text-green-600" />
                <p className="mt-4 leading-7 text-gray-700">"{quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{name}</h4>
                    <p className="text-sm text-gray-600">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Whether you donate, volunteer, or partner with us — your support helps
            children access the education they deserve.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/donate"
              className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Support Our Mission
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
