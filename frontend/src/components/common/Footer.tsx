import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      {/* MAIN GRID */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3">

        {/* BRAND INFO */}
        <div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="text-green-500" />
            <h2 className="text-xl font-bold">
              Dream Ladder Foundation
            </h2>
          </div>

          <p className="mt-3 text-sm text-gray-300 leading-6">
            We are a community-driven NGO focused on supporting children
            through education, mentorship, and access to essential learning
            materials.
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Education • Hope • Impact
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link className="hover:text-green-400" to="/">Home</Link></li>
            <li><Link className="hover:text-green-400" to="/about">About</Link></li>
            <li><Link className="hover:text-green-400" to="/programs">Programs</Link></li>
            <li><Link className="hover:text-green-400" to="/gallery">Gallery</Link></li>
            <li><Link className="hover:text-green-400" to="/news">News</Link></li>
            <li><Link className="hover:text-green-400" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT + CTA */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>

          <p className="text-sm text-gray-300">
            Email: info@dreamladderfoundation.org
          </p>

          <p className="text-sm text-gray-300 mt-2">
            Phone: +256 XXX XXX XXX
          </p>

          <p className="text-sm text-gray-300 mt-2">
            Kampala, Uganda
          </p>

          {/* CTA BUTTON */}
          <Link
            to="/donate"
            className="inline-block mt-6 bg-green-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700"
          >
            Donate Now
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-5 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Dream Ladder Foundation. All rights reserved.
        </div>
      </div>

    </footer>
  );
}