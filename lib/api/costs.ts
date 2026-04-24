import type { Car, RunningCost } from "@/types";

interface RunningCostInput {
  car: Car;
  dailyKm: number;
  highwayPercent: number;
  fuelPricePerLitre: number;
}

export function calculateRunningCost(input: RunningCostInput): RunningCost {
  const highwayRatio = Math.min(Math.max(input.highwayPercent, 0), 100) / 100;
  const cityRatio = 1 - highwayRatio;
  const monthlyDistanceKm = input.dailyKm * 30;

  const blendedEfficiency =
    input.car.mileageCity * cityRatio + input.car.mileageHighway * highwayRatio;

  // For EVs, this value is interpreted as cost-per-km equivalent supplied by caller.
  const fuelMonthly =
    input.car.fuelType === "Electric"
      ? monthlyDistanceKm * input.fuelPricePerLitre
      : (monthlyDistanceKm / Math.max(blendedEfficiency, 1)) * input.fuelPricePerLitre;

  const serviceMonthly = input.car.monthlyService;
  const insuranceMonthly = input.car.insuranceYear1 / 12;
  const totalMonthly = fuelMonthly + serviceMonthly + insuranceMonthly;

  return {
    fuelMonthly: Number(fuelMonthly.toFixed(2)),
    serviceMonthly: Number(serviceMonthly.toFixed(2)),
    insuranceMonthly: Number(insuranceMonthly.toFixed(2)),
    totalMonthly: Number(totalMonthly.toFixed(2)),
    totalAnnual: Number((totalMonthly * 12).toFixed(2))
  };
}
