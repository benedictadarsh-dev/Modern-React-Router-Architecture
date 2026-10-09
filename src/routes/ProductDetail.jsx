import React from "react";
import { useParams, useLoaderData, NavLink, Outlet, Link } from "react-router-dom";
import { 
  Package, 
  Warehouse, 
  MessageSquare, 
  ArrowLeft, 
  Key, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sliders 
} from "lucide-react";

export default function ProductDetail() {
  const params = useParams(); // Demonstrates route param access!
  const product = useLoaderData(); // Demonstrates data resolved by productDetailLoader!

  return (
    <div className="space-y-6">
      {/* Back button and Param Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </Link>

        {/* Route Param Inspection Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
          <Key className="w-3.5 h-3.5 text-indigo-400" />
          <span>Active Route Param: <span className="font-bold text-white">:productId = "{params.productId}"</span></span>
        </div>
      </div>

      {/* Product Hero Header */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {product.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                SKU: {product.sku}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl">
              {product.description}
            </p>
          </div>

          <div className="flex flex-row lg:flex-col items-baseline lg:items-end justify-between border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
            <span className="text-xs text-slate-400">Inventory Status</span>
            <span className="text-3xl font-bold text-emerald-400">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-slate-400 mt-1">
              {product.stock} units currently in stock
            </span>
          </div>
        </div>

        {/* Nested Route Navigation Tabs */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center space-x-2">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`
            }
          >
            <Sliders className="w-4 h-4" />
            <span>Specifications & Overview</span>
          </NavLink>

          <NavLink
            to="inventory"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`
            }
          >
            <Warehouse className="w-4 h-4" />
            <span>Warehouse Distribution</span>
          </NavLink>

          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`
            }
          >
            <MessageSquare className="w-4 h-4" />
            <span>Customer Reviews ({product.reviews?.length || 0})</span>
          </NavLink>
        </div>
      </div>

      {/* Child Route Outlet */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <Outlet context={{ product }} />
      </div>
    </div>
  );
}
