import React from "react";
import { useOutletContext } from "react-router-dom";
import { Warehouse, MapPin, Layers, CheckCircle2, AlertCircle } from "lucide-react";

export default function ProductInventory() {
  const { product } = useOutletContext();
  const warehouse = product.warehouse || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <Warehouse className="w-5 h-5 text-indigo-400" />
            <span>Multi-Regional Warehouse Logistics</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Nested Child Route Path: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">/products/{product.id}/inventory</code>
          </p>
        </div>
        <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          Total Stock: {product.stock} units
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {warehouse.map((hub, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-200 flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{hub.location}</span>
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                Rack {hub.rack}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-2 border-t border-slate-700/40">
              <span className="text-xs text-slate-400">Allocated Units</span>
              <span className="text-2xl font-bold text-white font-mono">{hub.quantity}</span>
            </div>

            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full"
                style={{ width: `${Math.min(100, (hub.quantity / product.stock) * 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
