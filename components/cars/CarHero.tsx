import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils/formatters";
import { Car } from "@/types";
import { Star, Fuel, Settings, Users } from "lucide-react";

interface CarHeroProps {
  car: Car;
}

export default function CarHero({ car }: CarHeroProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200">
        <Image
          src={car.imageUrl}
          alt={car.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div>
          <Badge variant="secondary" className="mb-2 bg-blue-50 text-blue-700 hover:bg-blue-50">
            {car.brand}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{car.name}</h1>
          <p className="mt-2 text-2xl font-semibold text-blue-600">
            {formatPrice(car.priceMin)} - {formatPrice(car.priceMax)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center">
            <Fuel className="mx-auto mb-2 h-5 w-5 text-slate-500" />
            <p className="text-xs text-slate-500 uppercase font-medium">Fuel</p>
            <p className="text-sm font-semibold text-slate-900">{car.fuelType}</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center">
            <Settings className="mx-auto mb-2 h-5 w-5 text-slate-500" />
            <p className="text-xs text-slate-500 uppercase font-medium">Engine</p>
            <p className="text-sm font-semibold text-slate-900">{car.engineCC}cc</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center">
            <Users className="mx-auto mb-2 h-5 w-5 text-slate-500" />
            <p className="text-xs text-slate-500 uppercase font-medium">Seats</p>
            <p className="text-sm font-semibold text-slate-900">{car.seatingCapacity}</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center">
            <Star className="mx-auto mb-2 h-5 w-5 text-yellow-500" />
            <p className="text-xs text-slate-500 uppercase font-medium">Safety</p>
            <p className="text-sm font-semibold text-slate-900">{car.safetyRating} Star</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {car.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
