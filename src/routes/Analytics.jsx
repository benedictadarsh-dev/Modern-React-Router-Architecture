import React from "react";
import { useLoaderData, useRevalidator, Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Boxes, 
  RotateCw, 
  CheckCircle2, 
  Calendar,
  Layers
} from "lucide-react";

export default function Analytics() {
  const data = useLoaderData();
  const revalidator = useRevalidator();
  const isReloading = revalidator.state === "loading";

  return (
    <div className="space-y-8">
      {/* Header with Loader Proof */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pre-Render Data Loader Active</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-indigo-400" />
            <span>Enterprise Telemetry & Analytics</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Data fetched via <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">analyticsLoader()</code> before this page component mounted.
          </p>
        </div>

        {/* Revalidate Button */}
        <button
          onClick={() => revalidator.revalidate()}
          disabled={isReloading}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all self-start sm:self-auto"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isReloading ? "animate-spin" : ""}`} />
          <span>{isReloading ? "Re-executing Loader..." : "Re-run Loader"}</span>
        </button>
      </div>

      {/* Timestamp Audit */}
      <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-slate-500" />
          <span>Loader Resolution Timestamp:</span>
        </span>
        <span className="font-mono text-indigo-300 bg-slate-800 px-2 py-0.5 rounded">
          {data.timestamp}
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Monthly Gross Revenue</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            ${data.monthlyRevenue.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3" />
            <span>+18.4% vs last quarter</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Inventory Units in Transit</span>
            <Boxes className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {data.totalInventoryUnits} units
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Across 3 regional hubs</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Fulfillment Precision</span>
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {data.warehouseFulfillmentRate}%
          </div>
          <div className="text-[11px] text-purple-400 mt-1">SLA target exceeded</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Average Order Value</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            ${data.averageOrderValue.toFixed(2)}
          </div>
          <div className="text-[11px] text-amber-400 mt-1">High conversion basket</div>
        </div>
      </div>

      {/* Traffic Trend Visual Table */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-4">
        <h3 className="text-base font-semibold text-white">Monthly Growth Trajectory</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-800/60 text-slate-400 border-b border-slate-700">
              <tr>
                <th className="py-3 px-4">Period</th>
                <th className="py-3 px-4">Catalog Views</th>
                <th className="py-3 px-4">Completed Orders</th>
                <th className="py-3 px-4">Conversion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {data.trafficTrend.map((row) => (
                <tr key={row.month} className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-white">{row.month} 2026</td>
                  <td className="py-3 px-4 font-mono">{row.views.toLocaleString()}</td>
                  <td className="py-3 px-4 font-mono">{row.orders.toLocaleString()}</td>
                  <td className="py-3 px-4 font-mono text-emerald-400">
                    {((row.orders / row.views) * 100).toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
