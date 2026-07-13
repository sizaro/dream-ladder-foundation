import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600";

  return (
    <nav className="w-full border-b border-[#e6d9c5] bg-[#f8f2e8]/95 shadow-sm backdrop-blur fixed top-0 left-0 z-50">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3">

        {/* BRAND */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=200"
            alt="Dream Ladder Foundation logo"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-900">
              Dream Ladder Foundation
            </h1>
            <p className="text-xs text-gray-500">
              Education • Hope • Impact
            </p>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/programs" className={linkClass}>Programs</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/news" className={linkClass}>News</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <NavLink
            to="/donate"
            className="text-white bg-green-600 px-4 py-1 rounded-lg hover:bg-green-700"
          >
            Donate
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <Menu />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-gray-900">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-5 p-5 font-medium">

          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/programs" className={linkClass}>
            Programs
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/gallery" className={linkClass}>
            Gallery
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/news" className={linkClass}>
            News
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/donate"
            className="text-center text-white bg-green-600 px-4 py-2 rounded-lg"
          >
            Donate
          </NavLink>

        </div>
      </div>
    </nav>
  );
}