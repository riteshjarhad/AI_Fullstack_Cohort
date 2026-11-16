
import React from "react";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Page404() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-16">

      <div className="w-full max-w-2xl text-center">

        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#0A66C2]"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
            Error 404
          </span>
        </div>

        {/* Error Number */}
        <h1 className="text-8xl font-bold tracking-tighter text-gray-900 sm:text-9xl">
          4<span className="text-[#0A66C2]">0</span>4
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Oops! Page not found.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <NavLink
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto"
          >
            <Home size={17} />
            Back to Home
            <ArrowUpRight size={16} />
          </NavLink>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-gray-100 pt-6">
          <p className="text-sm font-semibold tracking-tight text-gray-900">
            Link<span className="text-[#0A66C2]">bean</span>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            © 2026 Linkbean. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
