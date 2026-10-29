"use client";

import { useMemo, useState } from "react";
import { getVariantsBySlug, type CarVariant } from "@/lib/data/car-variants";
import { Badge } from "@/components/ui/badge";
import { Fuel, Gauge, Sparkles } from "lucide-react";

interface CarVariantsSectionProps {
  slug: string;
  carName: string;
}

export default function CarVariantsSection({ slug, carName }: CarVariantsSectionProps) {
  const allVariants = useMemo(() => getVariantsBySlug(slug), [slug]);
  const [selectedFuel, setSelectedFuel] = useState<string>("All");
  const [selectedTrans, setSelectedTrans] = useState<string>("All");

  if (!allVariants || allVariants.length === 0) {
    return null;
  }

  // Derive unique fuels and transmissions for this car
  const availableFuels = ["All", ...Array.from(new Set(allVariants.map((v) => v.fuel)))];
  const availableTrans = ["All", ...Array.from(new Set(allVariants.map((v) => v.transmission)))];

  const filteredVariants = allVariants.filter((variant) => {
    const fuelMatch = selectedFuel === "All" || variant.fuel === selectedFuel;
    const transMatch = selectedTrans === "All" || variant.transmission === selectedTrans;
    return fuelMatch && transMatch;
  });

  const getFuelBadgeClass = (fuel: CarVariant["fuel"]) => {
    switch (fuel) {
      case "CNG":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Hybrid":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Electric":
        return "bg-cyan-100 text-cyan-800 border-cyan-300";
      case "Diesel":
        return "bg-amber-100 text-amber-800 border-amber-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              {carName} Variants & Ex-Showroom Prices
            </h2>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              {allVariants.length} Trims
            </Badge>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Compare all trim levels, powertrain options, and price breakdowns.
          </p>
        </div>

        {/* Quick Fuel & Transmission Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {availableFuels.length > 2 && (
            <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1">
              {availableFuels.map((fuel) => (
                <button
                  key={fuel}
                  type="button"
                  onClick={() => setSelectedFuel(fuel)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
                    selectedFuel === fuel
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          )}

          {availableTrans.length > 2 && (
            <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1">
              {availableTrans.map((trans) => (
                <button
                  key={trans}
                  type="button"
                  onClick={() => setSelectedTrans(trans)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
                    selectedTrans === trans
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {trans}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {filteredVariants.length === 0 ? (
        <div className="py-8 text-center space-y-2">
          <p className="text-sm font-medium text-slate-600">No variants match this specific filter.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedFuel("All");
              setSelectedTrans("All");
            }}
            className="text-xs font-semibold text-blue-600 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-3 px-4">Variant</th>
                <th className="py-3 px-4">Fuel Type</th>
                <th className="py-3 px-4">Transmission</th>
                <th className="py-3 px-4 text-right">Approx Ex-Showroom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredVariants.map((variant, index) => (
                <tr key={`${variant.name}-${index}`} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    {variant.name}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getFuelBadgeClass(
                        variant.fuel
                      )}`}
                    >
                      <Fuel className="h-3 w-3" />
                      {variant.fuel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-700 font-medium">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-xs font-medium">
                      <Gauge className="h-3 w-3 text-slate-500" />
                      {variant.transmissionDetail || variant.transmission}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-slate-900 text-base">
                    {variant.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
