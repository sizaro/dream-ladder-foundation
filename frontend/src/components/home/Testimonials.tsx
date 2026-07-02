import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What People Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Voices from teachers, parents, and community members who have
            experienced the impact of our work firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Testimonial 1 */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">

            <Quote className="text-green-600" />

            <p className="mt-4 text-gray-700 leading-7">
              “Before Dream Ladder Foundation supported our school, many
              children lacked basic learning materials. Now attendance and
              participation have improved significantly.”
            </p>

            <div className="mt-6 flex items-center gap-3">

              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Teacher testimonial"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-gray-900">
                  School Teacher
                </h4>
                <p className="text-sm text-gray-600">
                  Partner School
                </p>
              </div>

            </div>

          </div>

          {/* Testimonial 2 */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">

            <Quote className="text-green-600" />

            <p className="mt-4 text-gray-700 leading-7">
              “My child received books and school supplies that we could
              not afford. This support has changed our family’s outlook on
              education.”
            </p>

            <div className="mt-6 flex items-center gap-3">

              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80"
                alt="Parent testimonial"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-gray-900">
                  Parent
                </h4>
                <p className="text-sm text-gray-600">
                  Community Member
                </p>
              </div>

            </div>

          </div>

          {/* Testimonial 3 */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm md:col-span-2 lg:col-span-1">

            <Quote className="text-green-600" />

            <p className="mt-4 text-gray-700 leading-7">
              “The mentorship program helped me stay in school and believe
              in my future again. I now want to become a teacher myself.”
            </p>

            <div className="mt-6 flex items-center gap-3">

              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                alt="Student testimonial"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-gray-900">
                  Student Beneficiary
                </h4>
                <p className="text-sm text-gray-600">
                  Program Participant
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}