interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, badge, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white pt-8 pb-16 sm:pb-20 lg:pb-24">
      {image && (
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              {badge}
            </span>
          )}

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
