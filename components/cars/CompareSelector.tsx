"use client";

import { useState, useEffect } from "react";
import { Search, X, Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllCars } from "@/lib/api/cars";
import { Car } from "@/types";
import Image from "next/image";

export default function CompareSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Car[]>([]);
  const [allCars, setAllCars] = useState<Car[]>([]);

  const selectedIds = searchParams.get("ids")?.split(",").filter(Boolean) || [];

  useEffect(() => {
    getAllCars().then(setAllCars);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = allCars.filter(
      (car) =>
        (car.name.toLowerCase().includes(query.toLowerCase()) ||
          car.brand.toLowerCase().includes(query.toLowerCase())) &&
        !selectedIds.includes(car.id)
    );
    setResults(filtered.slice(0, 5));
  }, [query, allCars, selectedIds]);

  const addCar = (id: string) => {
    if (selectedIds.length >= 3) return;
    const newIds = [...selectedIds, id];
    const params = new URLSearchParams(searchParams.toString());
    params.set("ids", newIds.join(","));
    router.push(`?${params.toString()}`);
    setQuery("");
  };

  const removeCar = (id: string) => {
    const newIds = selectedIds.filter((cid) => cid !== id);
    const params = new URLSearchParams(searchParams.toString());
    if (newIds.length > 0) {
      params.set("ids", newIds.join(","));
    } else {
      params.delete("ids");
    }
    router.push(`?${params.toString()}`);
  };

  const selectedCars = allCars.filter((car) => selectedIds.includes(car.id));

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <div className="flex items-center gap-2 flex-1 px-2">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search car to add for comparison..."
              className="w-full py-2 bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {selectedIds.length < 3 && (
            <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium">
              {selectedIds.length}/3 Selected
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl z-50 overflow-hidden">
            {results.map((car) => (
              <button
                key={car.id}
                onClick={() => addCar(car.id)}
                className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
              >
                <div className="relative h-12 w-20 rounded-md overflow-hidden bg-slate-100">
                  <Image src={car.imageUrl} alt={car.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900">{car.name}</p>
                  <p className="text-xs text-slate-500">{car.brand} • {car.fuelType}</p>
                </div>
                <Plus className="ml-auto h-5 w-5 text-blue-600" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        {selectedCars.map((car) => (
          <div
            key={car.id}
            className="flex items-center gap-3 bg-blue-50 border border-blue-100 p-2 pr-4 rounded-xl group"
          >
            <div className="relative h-10 w-16 rounded-lg overflow-hidden border border-blue-200">
              <Image src={car.imageUrl} alt={car.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900 leading-none">{car.name}</p>
              <p className="text-[10px] text-blue-600 font-medium uppercase mt-1">Ready to compare</p>
            </div>
            <button
              onClick={() => removeCar(car.id)}
              className="ml-2 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
