import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Home, Package, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-900/60 border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            HTTP 404 Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Route Does Not Exist
          </h1>
          <p className="text-sm text-slate-400">
            The requested path could not be resolved by any defined route in the router hierarchy.
          </p>
        </div>

        {/* Display unmatched requested path */}
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 break-all">
          Unmatched Route: <span className="text-rose-400">{location.pathname}</span>
        </div>

        {/* Suggested actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>View Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
