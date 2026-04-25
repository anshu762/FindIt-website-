"use client";

import { Car } from "@/types";
import { formatPrice } from "@/lib/utils/formatters";
import Image from "next/image";
import { Shield, Zap, TrendingDown, Info, Gauge } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useQuizData } from "@/hooks/use-quiz-data";

interface CompareMatrixProps {
  cars: Car[];
}

export default function CompareMatrix({ cars }: CompareMatrixProps) {
  const { quizData } = useQuizData();
  const [dailyKm, setDailyKm] = useState(40);
  const [fuelPrice, setFuelPrice] = useState(96);

  useEffect(() => {
    if (quizData?.dailyKm) {
      setDailyKm(quizData.dailyKm);
    }
  }, [quizData]);

  if (cars.length === 0) return null;

  const rows = [
    { label: "Price Range", key: "price", icon: <Zap className="h-4 w-4" /> },
    { label: "Monthly Running Cost", key: "runningCost", icon: <Zap className="h-4 w-4" />, highlight: true },
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
      case "runningCost": {
        const monthlyKm = dailyKm * 30;
        const fuelCost = (monthlyKm / car.mileageCity) * fuelPrice;
        const total = fuelCost + car.monthlyService + (car.insuranceYear1 / 12);
        return formatPrice(total);
      }
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
    <div className="space-y-6">
      {/* Dynamic Calculation Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
            <Gauge className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adjust Habits</p>
            <p className="text-sm text-slate-200">Personalize costs for these cars</p>
          </div>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 font-mono">
              <span>Daily Driving</span>
              <span className="text-blue-400">{dailyKm} KM</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={dailyKm}
              onChange={(e) => setDailyKm(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-blue-500"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 font-mono">
              <span>Fuel Price</span>
              <span className="text-blue-400">₹{fuelPrice}/L</span>
            </div>
            <input
              type="range"
              min="80"
              max="120"
              step="1"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
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
              <tr key={row.label} className={`group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 ${row.highlight ? "bg-blue-50/30" : ""}`}>
                <td className={`p-6 flex items-center gap-3 font-semibold text-slate-600 bg-slate-50/50 group-hover:bg-slate-100/50 transition-colors ${row.highlight ? "text-blue-700" : ""}`}>
                  {row.icon && <span className="text-blue-500">{row.icon}</span>}
                  {row.label}
                </td>
                {cars.map((car) => (
                  <td key={`${car.id}-${row.label}`} className="p-6 text-center">
                    <span className={`text-sm font-bold ${row.highlight ? "text-blue-600 text-lg" : "text-slate-900"}`}>
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
            <p className="text-[10px] text-slate-500 italic font-medium">Calculations synced with your driving habits. Costs include fuel, maintenance, and insurance.</p>
        </div>
      </div>
    </div>
  );
}
