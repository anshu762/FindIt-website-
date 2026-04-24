import type { Car, DepreciationPoint } from "@/types";

export function getDepreciationTimeline(car: Car, purchasePrice: number): DepreciationPoint[] {
  const retentionByYear: Record<number, number> = {
    0: 1,
    1: car.depRate1Yr,
    3: car.depRate3Yr,
    5: car.depRate5Yr
  };

  return [0, 1, 3, 5].map((year) => {
    const percentRetained = retentionByYear[year];
    return {
      year,
      value: Number((purchasePrice * percentRetained).toFixed(2)),
      percentRetained
    };
  });
}
