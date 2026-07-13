import { useState } from "react";
import { CalendarDays, Tag } from "lucide-react";

import PageHero from "../../components/common/PageHero";
import SectionHeader from "../../components/common/SectionHeader";
import CallToAction from "../../components/home/CallToAction";
import { newsItems } from "../../data/content";

export default function News() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = newsItems.find((item) => item.featured)!;
  const rest = newsItems.filter((item) => !item.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <PageHero
        badge="News & Updates"
        title="Latest From the Field"
        subtitle="Follow our recent activities, outreach programs, and community impact stories as we work to support children across Uganda."
        image="https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Featured Article */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg lg:grid lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Featured
              </span>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag size={14} />
                  {featured.category}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                {featured.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-8">{featured.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Updates */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="All Updates"
            subtitle="Browse our archive of news, program launches, and community stories."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {item.date}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-6 lg:px-8">
          <SectionHeader
            title="Stay Updated"
            subtitle="Subscribe to receive news about our programs, events, and impact stories."
          />

          {subscribed ? (
            <div className="mt-8 rounded-2xl bg-green-50 p-6 text-green-700">
              Thank you for subscribing! We'll keep you updated on our latest work.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-xl border border-gray-300 px-5 py-4 text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
