import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import PageHero from "../../components/common/PageHero";
import SectionHeader from "../../components/common/SectionHeader";
import CallToAction from "../../components/home/CallToAction";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "../../data/content";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const selected = galleryItems.find((item) => item.id === selectedId);

  return (
    <>
      <PageHero
        badge="Photo Gallery"
        title="Moments From Our Work"
        subtitle="Real stories captured from our outreach programs, schools, and community activities across Uganda."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Our Gallery"
            subtitle="Browse photos from distribution drives, school visits, mentorship sessions, and community events."
          />

          {/* Category Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className="group relative overflow-hidden rounded-2xl text-left shadow-sm transition hover:shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <ZoomIn className="text-white" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition group-hover:opacity-100">
                  <p className="text-xs font-medium text-green-300">{item.category}</p>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-300">{item.date}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-gray-500">
              No photos in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close gallery image"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="p-6">
              <span className="text-sm font-medium text-green-600">
                {selected.category}
              </span>
              <h3 className="mt-1 text-xl font-bold text-gray-900">
                {selected.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{selected.date}</p>
            </div>
          </div>
        </div>
      )}

      <CallToAction />
    </>
  );
}
