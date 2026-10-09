import React from "react";
import { Outlet, NavLink, useNavigation, Link } from "react-router-dom";
import { 
  Package, 
  BarChart3, 
  Home, 
  AlertTriangle, 
  Search, 
  Layers, 
  Loader2, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Loading Progress Bar when Loader is active */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-indigo-950 z-50 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse w-full"></div>
        </div>
      )}

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  NexusStore
                </span>
                <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Router v6.28
                </span>
              </div>
            </Link>

            {/* Main Nav Items */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? "bg-slate-800 text-indigo-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`
                }
              >
                <Home className="w-4 h-4" />
                <span>Overview</span>
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? "bg-slate-800 text-indigo-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`
                }
              >
                <Package className="w-4 h-4" />
                <span>Products Catalog</span>
              </NavLink>

              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? "bg-slate-800 text-indigo-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`
                }
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analytics (Loader)</span>
              </NavLink>

              <NavLink
                to="/non-existent-page-demo"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? "bg-slate-800 text-amber-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`
                }
              >
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Test 404 Route</span>
              </NavLink>
            </nav>
          </div>

          {/* Right Header Status */}
          <div className="flex items-center space-x-4">
            {isLoading && (
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Fetching data via Loader...</span>
              </div>
            )}
            <div className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/50">
              Lab Exp 47
            </div>
          </div>
        </div>
      </header>

      {/* Main Outlet */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/40 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>React Router Lab Suite: Nested Routes, Dynamic Route Params, 404 Boundary & Data Loaders</span>
          </div>
          <div>Project 47 &bull; Antigravity Engineering Lab</div>
        </div>
      </footer>
    </div>
  );
}
