import { Car } from "@/types";
import { formatPrice } from "@/lib/utils/formatters";
import Image from "next/image";
import { Shield, Zap, TrendingDown, Info } from "lucide-react";

interface CompareMatrixProps {
  cars: Car[];
}

export default function CompareMatrix({ cars }: CompareMatrixProps) {
  if (cars.length === 0) return null;

  const rows = [
    { label: "Price Range", key: "price", icon: <Zap className="h-4 w-4" /> },
    { label: "Monthly Running Cost", key: "runningCost", icon: <Zap className="h-4 w-4" /> },
    { label: "5Y Resale Value", key: "resale", icon: <TrendingDown className="h-4 w-4" /> },
    { label: "Safety Rating", key: "safety", icon: <Shield className="h-4 w-4" /> },
    { label: "Fuel Type", key: "fuel" },
    { label: "Engine", key: "engine" },
    { label: "Power", key: "power" },
    { label: "Mileage", key: "mileage" },
    { label: "Seating", key: "seats" },
    { label: "Ground Clearance", key: "gc" },
  ];

  const getValue = (car: Car, key: string) => {
    switch (key) {
      case "price": return `${formatPrice(car.priceMin)} - ${formatPrice(car.priceMax)}`;
      case "runningCost": return formatPrice(car.monthlyService + (car.insuranceYear1 / 12) + (1200 / car.mileageCity * 96)); // Estimate based on 40km/day
      case "resale": return formatPrice(car.priceMin * car.depRate5Yr);
      case "safety": return `${car.safetyRating} Star`;
      case "fuel": return car.fuelType;
      case "engine": return `${car.engineCC}cc`;
      case "power": return `${car.powerBhp} bhp`;
      case "mileage": return `${car.mileageHighway} kmpl`;
      case "seats": return `${car.seatingCapacity} Seater`;
      case "gc": return `${car.groundClearance} mm`;
      default: return "-";
    }
  };

  return (
    <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="p-6 text-left w-64 bg-slate-50/50">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Comparison</span>
            </th>
            {cars.map((car) => (
              <th key={car.id} className="p-6 text-center min-w-[280px]">
                <div className="relative mx-auto h-24 w-40 rounded-xl overflow-hidden mb-4 border border-slate-100">
                  <Image src={car.imageUrl} alt={car.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{car.brand}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
              <td className="p-6 flex items-center gap-3 font-semibold text-slate-600 bg-slate-50/50 group-hover:bg-slate-100/50 transition-colors">
                {row.icon && <span className="text-blue-500">{row.icon}</span>}
                {row.label}
              </td>
              {cars.map((car) => (
                <td key={`${car.id}-${row.label}`} className="p-6 text-center">
                  <span className={`text-sm font-bold ${row.icon ? "text-slate-900" : "text-slate-700"}`}>
                    {getValue(car, row.key)}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2 justify-center">
          <Info className="h-4 w-4 text-slate-400" />
          <p className="text-[10px] text-slate-500 italic">Monthly costs are estimates based on 40km daily driving habits.</p>
      </div>
    </div>
  );
}
