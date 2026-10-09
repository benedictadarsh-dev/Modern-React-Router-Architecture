import React from "react";
import { Link } from "react-router-dom";
import { 
  GitFork, 
  KeyRound, 
  ShieldAlert, 
  DownloadCloud, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ExternalLink 
} from "lucide-react";

export default function Home() {
  const routerFeatures = [
    {
      title: "Nested Routes & Outlets",
      path: "/products",
      badge: "Core Architecture",
      icon: <GitFork className="w-6 h-6 text-indigo-400" />,
      description: "Hierarchical URL structure where parent layout wraps sub-routes. The product catalog nests product details, which further nests live inventory and customer review tabs.",
      testLink: "/products/prod-101/reviews",
      linkText: "Inspect Nested Reviews Route"
    },
    {
      title: "Dynamic Route Parameters",
      path: "/products/prod-102",
      badge: ":productId param",
      icon: <KeyRound className="w-6 h-6 text-purple-400" />,
      description: "Extracts dynamic URL path tokens via useParams() and passes them directly to loader context ({ params }) to perform targeted data lookups.",
      testLink: "/products/prod-102",
      linkText: "View Product :prod-102"
    },
    {
      title: "Loaders (Fetch Before Render)",
      path: "/analytics",
      badge: "Data API",
      icon: <DownloadCloud className="w-6 h-6 text-emerald-400" />,
      description: "Data is resolved BEFORE the route component mounts. Eliminates waterfall useEffect fetching bugs, provides optimistic navigations and clean typing.",
      testLink: "/analytics",
      linkText: "Trigger Analytics Loader"
    },
    {
      title: "404 Catch-All & Error Elements",
      path: "/non-existent-page-demo",
      badge: "Path '*'",
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      description: "Unmatched URL routes are trapped by path: '*' catch-all boundary. Missing IDs throw a 404 Response caught by errorElement boundary.",
      testLink: "/products/prod-999-not-found",
      linkText: "Test 404 Product Lookup"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/20 p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Lab Experiment 47 Reference Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Modern React Router Architecture
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Demonstrating production-grade routing patterns using React Router: nested route layouts, URL parameter resolution, declarative pre-render data loaders, and robust 404/error boundary handling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/30 transition-all hover:translate-x-0.5"
            >
              <span>Explore Products Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/analytics"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors"
            >
              <span>Inspect Loader Data Flow</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
          <Layers className="w-6 h-6 text-indigo-400" />
          <span>Core Routing Milestones</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routerFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {feat.icon}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <Link
                  to={feat.testLink}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1.5 transition-colors"
                >
                  <span>{feat.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routing Topology Hierarchy Preview */}
      <div className="rounded-xl bg-slate-900/40 border border-slate-800 p-6">
        <h3 className="text-base font-semibold text-slate-200 mb-4 flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>Configured Route Hierarchy Tree</span>
        </h3>
        <pre className="text-xs font-mono bg-slate-950 p-4 rounded-lg text-slate-300 border border-slate-800 overflow-x-auto">
{`/ (RootLayout)
├── index: Home (Landing & lab overview)
├── products (ProductsLayout)
│   ├── index: ProductList (Catalog with query-param search & filters)
│   └── :productId (ProductDetail with loader + params)
│       ├── index: ProductOverview (Key specs, pricing, CTA)
│       ├── inventory: ProductInventory (Warehouse stock levels)
│       └── reviews: ProductReviews (Customer feedback & review submission)
├── analytics: Analytics (Loader pre-fetches revenue, orders, inventory before render)
└── * : NotFound (Catch-all 404 handler with return navigation)`}
        </pre>
      </div>
    </div>
  );
}
