import React from "react";
import { useOutletContext } from "react-router-dom";
import { Cpu, Check, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export default function ProductOverview() {
  const { product } = useOutletContext();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-indigo-400" />
          <span>Technical Architecture & Hardware Specifications</span>
        </h2>
        <span className="text-xs text-slate-500 font-mono">Rendered via Child Index Route</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(product.specs || {}).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-sm"
          >
            <span className="text-slate-400 capitalize font-medium">
              {key.replace(/([A-Z])/g, " $1")}
            </span>
            <span className="font-semibold text-slate-200 font-mono">{value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
          <Truck className="w-5 h-5 text-indigo-400" />
          <div>
            <div className="text-xs font-semibold text-slate-200">Express Dispatch</div>
            <div className="text-xs text-slate-400">Next-day global delivery</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div>
            <div className="text-xs font-semibold text-slate-200">3-Year Warranty</div>
            <div className="text-xs text-slate-400">Direct enterprise RMA</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
          <RefreshCw className="w-5 h-5 text-purple-400" />
          <div>
            <div className="text-xs font-semibold text-slate-200">Hassle-Free Return</div>
            <div className="text-xs text-slate-400">30-day money-back window</div>
          </div>
        </div>
      </div>
    </div>
  );
}
