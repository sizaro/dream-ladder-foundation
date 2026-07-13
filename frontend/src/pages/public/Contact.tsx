import { useState } from "react";
import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";
import SectionHeader from "../../components/common/SectionHeader";
import { contactInfo, faqItems } from "../../data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Have a question, want to volunteer, or interested in partnering with us? We'd love to hear from you."
        image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionHeader
                centered={false}
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you within 2–3 business days."
              />

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Send size={24} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for reaching out. We'll respond to your inquiry as
                    soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="donation">Donation Question</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeader
                centered={false}
                title="Contact Information"
                subtitle="Reach us directly through any of the channels below."
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-green-600 hover:text-green-700"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-sm text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <div className="flex h-48 flex-col items-center justify-center text-gray-500">
                  <MapPin size={32} className="text-green-600" />
                  <p className="mt-2 font-medium text-gray-700">
                    {contactInfo.location}
                  </p>
                  <p className="text-sm">Kampala, Central Region, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our work and how to get involved."
          />

          <div className="mt-10 space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  {item.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-500 transition ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-gray-100 px-6 py-4 text-gray-600 leading-7">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
