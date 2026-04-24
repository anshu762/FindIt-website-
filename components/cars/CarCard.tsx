"use client";

import { formatPrice } from "@/lib/utils/formatters";
import type { CarWithScore } from "@/types";
import Image from "next/image";

interface CarCardProps {
  car: CarWithScore;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44 w-full">
        <Image
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{car.name}</h3>
            <p className="text-sm text-slate-600">
              {car.fuelType} • {car.transmission}
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {car.matchScore}% match
          </span>
        </div>

        <p className="text-sm font-medium text-slate-700">
          {formatPrice(car.priceMin)} - {formatPrice(car.priceMax)}
        </p>

        {car.matchReasons.length > 0 ? (
          <ul className="space-y-1 text-sm text-slate-600">
            {car.matchReasons.slice(0, 2).map((reason) => (
              <li key={reason}>• {reason}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
