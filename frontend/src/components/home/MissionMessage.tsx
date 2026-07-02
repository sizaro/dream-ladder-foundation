export default function MissionMessage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Image */}
        <div className="order-1 lg:order-2 overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
            alt="Teacher guiding children in a classroom setting"
            className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[550px]"
          />
        </div>

        {/* Content */}
        <div className="order-2 lg:order-1">

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            At Dream Ladder Foundation, our mission is to bridge the gap
            between potential and opportunity for every child. We believe
            that education is not a privilege, but a fundamental right that
            should be accessible to all children regardless of their
            circumstances.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We are committed to removing barriers that prevent children from
            accessing quality education by providing school materials,
            mentorship, and community-based support systems that foster
            long-term growth.
          </p>

          {/* Mission Principles */}
          <div className="mt-8 space-y-3 text-gray-700">

            <p>✔ Education should be accessible to every child</p>
            <p>✔ No child should be limited by their background</p>
            <p>✔ Community support creates lasting change</p>
            <p>✔ Small contributions can create large impact</p>

          </div>

          {/* Highlight Quote */}
          <div className="mt-10 border-l-4 border-green-600 pl-5">
            <p className="text-lg italic text-gray-700">
              “We are building more than a program — we are building a
              future where every child has the chance to succeed.”
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}