import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Package, ChevronRight } from "lucide-react";

export default function ProductsLayout() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Dynamic Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-slate-200 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link 
          to="/products" 
          className={location.pathname === "/products" ? "text-indigo-400 font-semibold" : "hover:text-slate-200 transition-colors"}
        >
          Products
        </Link>
        {pathParts.length >= 2 && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-300 font-mono">{pathParts[1]}</span>
          </>
        )}
        {pathParts.length >= 3 && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-indigo-400 capitalize">{pathParts[2]}</span>
          </>
        )}
      </nav>

      {/* Nested Outlet for ProductList or ProductDetail */}
      <Outlet />
    </div>
  );
}
