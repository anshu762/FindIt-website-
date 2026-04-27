"use client"

import { useState, useMemo, useEffect } from "react";
import { formatPrice } from "@/lib/utils/formatters";
import { Car } from "@/types";
import { Calculator, Info } from "lucide-react";
import { useQuizData } from "@/hooks/use-quiz-data";

interface RunningCostCalculatorProps {
  car: Car;
}

export default function RunningCostCalculator({ car }: RunningCostCalculatorProps) {
  const { quizData } = useQuizData();
  const [dailyKm, setDailyKm] = useState(40);
  const [fuelPrice, setFuelPrice] = useState(96); // Average Petrol price in INR

  useEffect(() => {
    if (quizData?.dailyKm) {
      setDailyKm(quizData.dailyKm);
    }
  }, [quizData]);

  const costs = useMemo(() => {
    const monthlyKm = dailyKm * 30;
    const fuelNeeded = monthlyKm / car.mileageCity;
    const fuelCost = fuelNeeded * fuelPrice;
    
    // Pro-rated monthly figures
    const maintenanceCost = car.monthlyService; 
    const insuranceCost = car.insuranceYear1 / 12;
    
    const total = fuelCost + maintenanceCost + insuranceCost;

    return {
      fuel: fuelCost,
      maintenance: maintenanceCost,
      insurance: insuranceCost,
      total,
      annual: total * 12
    };
  }, [car, dailyKm, fuelPrice]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
          <Calculator className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Running Cost Calculator</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">Daily Driving (km)</label>
              <span className="text-sm font-bold text-blue-600">{dailyKm} km</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={dailyKm}
              onChange={(e) => setDailyKm(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-blue-600"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">Fuel Price (₹/Litre)</label>
              <span className="text-sm font-bold text-blue-600">₹{fuelPrice}</span>
            </div>
            <input
              type="range"
              min="80"
              max="120"
              step="1"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-blue-600"
            />
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <div className="flex gap-2 text-xs text-slate-500 items-start">
              <Info className="h-4 w-4 mt-0.5 shrink-0" />
              <p>Calculations are based on average city mileage ({car.mileageCity} kmpl) and include pro-rated maintenance and insurance costs.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 rounded-xl bg-blue-600 p-6 text-white">
          <div>
            <p className="text-sm font-medium text-blue-100 uppercase tracking-wider">Total Monthly Expense</p>
            <p className="text-4xl font-bold">{formatPrice(costs.total)}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 border-t border-blue-500 pt-4">
            <div>
              <p className="text-xs text-blue-100">Fuel Cost</p>
              <p className="font-semibold">{formatPrice(costs.fuel)}</p>
            </div>
            <div>
              <p className="text-xs text-blue-100">Maintenance</p>
              <p className="font-semibold">{formatPrice(costs.maintenance)}</p>
            </div>
            <div>
              <p className="text-xs text-blue-100">Insurance</p>
              <p className="font-semibold">{formatPrice(costs.insurance)}</p>
            </div>
            <div>
              <p className="text-xs text-blue-100">Annual Total</p>
              <p className="font-semibold">{formatPrice(costs.annual)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
