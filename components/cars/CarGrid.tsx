"use client";

import CarCard from "@/components/cars/CarCard";
import type { Car, CarWithScore } from "@/types";
import Link from "next/link";

interface CarGridProps {
  cars: Array<Car | CarWithScore>;
  withScores?: boolean;
}

export default function CarGrid({ cars, withScores = false }: CarGridProps) {
  if (cars.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <p className="text-5xl">🚗</p>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">No cars found</h3>
        <p className="mt-2 text-sm text-slate-600">
          Try adjusting your filters or retake the lifestyle quiz for better matches.
        </p>
        <Link
          href="/quiz"
          className="mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Retake Quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          matchScore={withScores && "matchScore" in car ? car.matchScore : undefined}
          matchReasons={withScores && "matchReasons" in car ? car.matchReasons : undefined}
        />
      ))}
    </div>
  );
}
