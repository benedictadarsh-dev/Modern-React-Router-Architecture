import React from "react";
import { useLoaderData, Link, useSearchParams, Form, useSubmit } from "react-router-dom";
import { Search, Star, ArrowRight, Tag, Box, SlidersHorizontal } from "lucide-react";

export default function ProductList() {
  const { products, query, currentCategory } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const submit = useSubmit();

  const categories = ["all", "Hardware", "Peripherals", "Displays", "Audio"];

  const handleCategoryChange = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params);
  };

  return (
    <div className="space-y-6">
      {/* Page Title & Search Form */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center space-x-2">
            <Box className="w-6 h-6 text-indigo-400" />
            <span>Product Catalog</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Data pre-fetched by <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">productsLoader</code> before rendering.
          </p>
        </div>

        {/* Search Input using React Router Form */}
        <Form method="get" className="flex items-center space-x-2 max-w-md w-full">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search by name, SKU or description..."
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              onChange={(e) => submit(e.currentTarget.form)}
            />
          </div>
          {currentCategory && currentCategory !== "all" && (
            <input type="hidden" name="category" value={currentCategory} />
          )}
        </Form>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <SlidersHorizontal className="w-4 h-4 text-slate-500 mr-2 shrink-0" />
        {categories.map((cat) => {
          const isActive = (currentCategory === cat) || (!currentCategory && cat === "all");
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 capitalize ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/60"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      {products.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-base">No products match your active search filters.</p>
          <Link
            to="/products"
            className="inline-block mt-3 text-xs text-indigo-400 hover:underline"
          >
            Clear filters and reload catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {item.sku}
                  </span>
                  <span className="flex items-center text-amber-400 font-semibold space-x-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{item.rating}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.name}
                </h3>
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 mt-1 mb-3">
                  {item.category}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Unit Price</span>
                  <span className="text-lg font-bold text-emerald-400">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* React Router link with route param :productId */}
                <Link
                  to={`/products/${item.id}`}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-medium transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
