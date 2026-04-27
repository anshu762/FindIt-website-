"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Car } from "@/types";
import { TrendingDown } from "lucide-react";
import { formatPrice } from "@/lib/utils/formatters";

interface DepreciationChartProps {
  car: Car;
}

export default function DepreciationChart({ car }: DepreciationChartProps) {
  const data = [
    { year: "New", value: car.priceMin },
    { year: "1 Year", value: car.priceMin * car.depRate1Yr },
    { year: "3 Years", value: car.priceMin * car.depRate3Yr },
    { year: "5 Years", value: car.priceMin * car.depRate5Yr }
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
            <TrendingDown className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Resale Value Estimate</h2>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-slate-500 uppercase">Estimated Value (5Y)</p>
          <p className="text-lg font-bold text-orange-600">{formatPrice(data[3].value)}</p>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(value) => `₹${value / 100000}L`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
              }}
              formatter={(value: any) => [formatPrice(Number(value)), "Estimated Value"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {data.map((item) => (
          <div key={item.year} className="text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">{item.year}</p>
            <p className="text-sm font-bold text-slate-700">{formatPrice(item.value)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
