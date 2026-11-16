
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}


        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A66C2] text-white">
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            React <span className="text-[#0A66C2]">Routing</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          <NavLink
            to="/"
            className="text-sm font-semibold text-[#0A66C2]"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-sm font-medium text-gray-600 transition hover:text-[#0A66C2]"
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className="text-sm font-medium text-gray-600 transition hover:text-[#0A66C2]"
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className="text-sm font-medium text-gray-600 transition hover:text-[#0A66C2]"
          >
            Contact Us
          </NavLink>
        </div>

        {/* CTA */}
       
        </div>

        {/* Mobile Menu Icon */}
      

    </nav>
  );
}
