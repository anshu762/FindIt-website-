"use client";

import { useCompare } from "@/context/compare-context";
import { formatPrice } from "@/lib/utils/formatters";
import { X, ArrowRight, Car as CarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CompareStatusBar() {
  const { selectedCars, removeFromCompare, clearCompare } = useCompare();
  const pathname = usePathname();

  if (selectedCars.length === 0 || pathname === "/compare") return null;

  const compareUrl = `/compare?ids=${selectedCars.map((c) => c.id).join(",")}`;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] w-full max-w-2xl -translate-x-1/2 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between gap-4 rounded-3xl border border-blue-200 bg-white/80 p-2 pl-4 pr-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {selectedCars.map((car) => (
              <div
                key={car.id}
                className="group relative h-12 w-12 rounded-2xl border-2 border-white bg-slate-100 overflow-hidden shadow-sm"
              >
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => removeFromCompare(car.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            {selectedCars.length < 3 && (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-400">
                <CarIcon className="h-5 w-5 opacity-50" />
              </div>
            )}
          </div>
          
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-900">{selectedCars.length} Cars Ready</p>
            <button 
              onClick={clearCompare}
              className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hover:text-red-500"
            >
              Clear All
            </button>
          </div>
        </div>

        <Link
          href={compareUrl}
          className="flex h-12 items-center gap-2 rounded-2xl bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-95"
        >
          Compare Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
