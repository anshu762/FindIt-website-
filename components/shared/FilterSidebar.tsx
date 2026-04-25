"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CAR_TYPES = ["SUV", "Sedan", "Hatchback", "MUV", "Crossover"] as const;
const FUEL_TYPES = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"] as const;
const BRANDS = [
  "Maruti",
  "Hyundai",
  "Tata",
  "Honda",
  "Kia",
  "Mahindra",
  "Toyota",
  "Skoda",
  "Volkswagen",
  "MG",
  "Jeep"
] as const;

function parseList(value: string | null): string[] {
  if (!value) return [];
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function serializeList(values: string[]): string | null {
  return values.length > 0 ? values.join(",") : null;
}

const BUDGET_OPTIONS = [
  { label: "1 Lakh", value: "100000" },
  { label: "2 Lakh", value: "200000" },
  { label: "5 Lakh", value: "500000" },
  { label: "10 Lakh", value: "1000000" },
  { label: "15 Lakh", value: "1500000" },
  { label: "20 Lakh", value: "2000000" },
  { label: "30 Lakh", value: "3000000" },
  { label: "50 Lakh", value: "5000000" },
  { label: "75 Lakh", value: "7500000" },
  { label: "1 Crore", value: "10000000" },
  { label: "2 Crore", value: "20000000" }
];

export default function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTypes = parseList(searchParams.get("type"));
  const selectedFuel = parseList(searchParams.get("fuelType"));
  const selectedBrand = parseList(searchParams.get("brand"));
  
  const budgetMin = searchParams.get("budgetMin") ?? "";
  const budgetMax = searchParams.get("budgetMax") ?? "";

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value.length > 0) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const toggleSelection = (key: string, currentValues: string[], value: string) => {
    const updated = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    updateParam(key, serializeList(updated));
  };

  const resetFilters = () => {
    router.replace(pathname);
  };

  return (
    <aside className="space-y-5 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-900 uppercase text-xs tracking-wider">Price</h2>
        <button
          type="button"
          onClick={resetFilters}
          className="text-xs font-bold text-blue-600 uppercase hover:underline"
        >
          Clear
        </button>
      </div>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1">
            <select
              value={budgetMin}
              onChange={(e) => updateParam("budgetMin", e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Min</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={`min-${opt.value}`} value={opt.value}>
                  ₹{(parseInt(opt.value)/100000).toFixed(0)} Lakh
                </option>
              ))}
            </select>
          </div>
          <span className="text-slate-400 text-sm">to</span>
          <div className="flex-1">
            <select
              value={budgetMax}
              onChange={(e) => updateParam("budgetMax", e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Max</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={`max-${opt.value}`} value={opt.value}>
                  ₹{(parseInt(opt.value)/100000).toFixed(0)} Lakh
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-sm font-medium text-slate-700">Car Type</h3>
        <div className="space-y-2">
          {CAR_TYPES.map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleSelection("type", selectedTypes, type)}
              />
              {type}
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-sm font-medium text-slate-700">Fuel Type</h3>
        <div className="space-y-2">
          {FUEL_TYPES.map((fuelType) => (
            <label key={fuelType} className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={selectedFuel.includes(fuelType)}
                onChange={() => toggleSelection("fuelType", selectedFuel, fuelType)}
              />
              {fuelType}
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-sm font-medium text-slate-700">Brand</h3>
        <div className="space-y-2">
          {BRANDS.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={selectedBrand.includes(brand)}
                onChange={() => toggleSelection("brand", selectedBrand, brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </section>
    </aside>
  );
}
