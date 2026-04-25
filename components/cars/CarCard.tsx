"use client";

import MatchBadge from "@/components/shared/MatchBadge";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils/formatters";
import type { Car } from "@/types";
import { Gauge, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  car: Car;
  matchScore?: number;
  matchReasons?: string[];
}

export default function CarCard({ car, matchScore, matchReasons }: CarCardProps) {
  const avgMileage = (car.mileageCity + car.mileageHighway) / 2;

  return (
    <Link href={`/cars/${car.slug}`} className="block">
      <Card className="overflow-hidden transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md">
        <div className="relative h-44 w-full">
          <Image
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {typeof matchScore === "number" ? (
            <div className="absolute top-3 right-3">
              <MatchBadge score={matchScore} />
            </div>
          ) : null}
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{car.name}</h3>
              <span className="mt-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                {car.type}
              </span>
            </div>
          </div>

          <p className="text-sm font-medium text-slate-700">
            {formatPrice(car.priceMin)} - {formatPrice(car.priceMax)}
          </p>

          <div className="grid grid-cols-3 gap-2 text-xs text-slate-600">
            <div className="rounded-md bg-slate-50 p-2">
              <p className="mb-1">Seating</p>
              <p className="inline-flex items-center gap-1 font-medium text-slate-800">
                <Users className="h-3.5 w-3.5" />
                {car.seatingCapacity}
              </p>
            </div>
            <div className="rounded-md bg-slate-50 p-2">
              <p className="mb-1">Mileage</p>
              <p className="inline-flex items-center gap-1 font-medium text-slate-800">
                <Gauge className="h-3.5 w-3.5" />
                {avgMileage.toFixed(1)}
              </p>
            </div>
            <div className="rounded-md bg-slate-50 p-2">
              <p className="mb-1">Fuel</p>
              <p className="font-medium text-slate-800">{car.fuelType}</p>
            </div>
          </div>

          {matchReasons && matchReasons.length > 0 ? (
            <p className="text-sm text-slate-600">Why recommended: {matchReasons[0]}</p>
          ) : null}
        </div>
      </Card>
    </Link>
  );
}
