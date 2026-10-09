import React from "react";
import { useRouteError, isRouteErrorResponse, Link, useNavigate } from "react-router-dom";
import { AlertOctagon, RotateCcw, Home, Package } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Unexpected Application Error";
  let status = 500;
  let message = "An error occurred during route transition or loader execution.";

  if (isRouteErrorResponse(error)) {
    status = error.status;
    title = error.status === 404 ? "Resource Not Found" : `Error ${error.status}: ${error.statusText}`;
    message = error.data || error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-900/70 border border-rose-500/30 p-8 rounded-3xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
          <AlertOctagon className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
            HTTP Status: {status}
          </span>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            {message}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Go Back</span>
          </button>
          <Link
            to="/products"
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
          >
            <Package className="w-4 h-4" />
            <span>Products Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
