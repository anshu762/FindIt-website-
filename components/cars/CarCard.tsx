"use client"

import MatchBadge from "@/components/shared/MatchBadge";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils/formatters";
import type { Car } from "@/types";
import { Gauge, Users, Plus, Check } from "lucide-react";
import Link from "next/link";
import { useCompare } from "@/context/compare-context";

interface CarCardProps {
  car: Car;
  matchScore?: number;
  matchReasons?: string[];
  hideCompare?: boolean;
}

export default function CarCard({ car, matchScore, matchReasons, hideCompare }: CarCardProps) {
  const { selectedCars, addToCompare, removeFromCompare, isCompareFull } = useCompare();
  const isSelected = !!selectedCars.find((c) => c.id === car.id);
  const avgMileage = (car.mileageCity + car.mileageHighway) / 2;

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSelected) {
      removeFromCompare(car.id);
    } else {
      addToCompare(car);
    }
  };

  return (
    <Link href={`/cars/${car.slug}`} className="block group">
      <Card className={`overflow-hidden transition-all duration-300 border-2 ${
        isSelected ? "border-blue-500 shadow-lg ring-1 ring-blue-500" : "border-transparent hover:-translate-y-1 hover:shadow-md"
      }`}>
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {!hideCompare && (
            <div className="absolute top-3 left-3">
              <button
                onClick={handleCompareClick}
                disabled={!isSelected && isCompareFull}
                className={`flex h-8 w-8 items-center justify-center rounded-lg shadow-lg transition-all ${
                  isSelected 
                    ? "bg-blue-600 text-white scale-110" 
                    : "bg-white/90 text-slate-900 hover:bg-white hover:scale-105"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSelected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </button>
            </div>
          )}

          {typeof matchScore === "number" ? (
            <div className="absolute top-3 right-3 shadow-lg">
              <MatchBadge score={matchScore} />
            </div>
          ) : null}
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{car.name}</h3>
              <span className="mt-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 uppercase tracking-tighter">
                {car.type}
              </span>
            </div>
          </div>

          <p className="text-sm font-bold text-slate-900">
            {formatPrice(car.priceMin)} - {formatPrice(car.priceMax)}
          </p>

          <div className="grid grid-cols-3 gap-2 text-[10px] uppercase font-bold tracking-tight text-slate-400">
            <div className="rounded-xl border border-slate-50 bg-slate-50/50 p-2 text-center">
              <p className="mb-1">Seats</p>
              <div className="flex items-center justify-center gap-1 text-slate-900 text-xs">
                <Users className="h-3 w-3 text-blue-500" />
                {car.seatingCapacity}
              </div>
            </div>
            <div className="rounded-xl border border-slate-50 bg-slate-50/50 p-2 text-center">
              <p className="mb-1">Mileage</p>
              <div className="flex items-center justify-center gap-1 text-slate-900 text-xs">
                <Gauge className="h-3 w-3 text-blue-500" />
                {avgMileage.toFixed(1)}
              </div>
            </div>
            <div className="rounded-xl border border-slate-50 bg-slate-50/50 p-2 text-center">
              <p className="mb-1">Fuel</p>
              <p className="text-slate-900 text-xs line-clamp-1">{car.fuelType}</p>
            </div>
          </div>

          {matchReasons && matchReasons.length > 0 ? (
            <p className="text-xs text-slate-500 line-clamp-1 italic">Why: {matchReasons[0]}</p>
          ) : null}
        </div>
      </Card>
    </Link>
  );
}
