export type CarType = "SUV" | "Sedan" | "Hatchback" | "MUV" | "Crossover";
export type FuelType = "Petrol" | "Diesel" | "CNG" | "Electric" | "Hybrid";
export type Transmission = "Manual" | "Automatic";

export interface SavedCar {
  id: string;
  userId: string;
  carId: string;
  createdAt: Date;
}

export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: CarType;
  fuelType: FuelType;
  transmission: Transmission;
  engineCC: number | null;
  powerBhp: number;
  torqueNm: number;
  mileageCity: number;
  mileageHighway: number;
  seatingCapacity: number;
  bootLitres: number | null;
  groundClearance: number;
  priceMin: number;
  priceMax: number;
  monthlyService: number;
  insuranceYear1: number;
  safetyRating: number | null;
  depRate1Yr: number;
  depRate3Yr: number;
  depRate5Yr: number;
  imageUrl: string;
  pros: string[];
  cons: string[];
  tags: string[];
  createdAt: Date;
  savedBy: SavedCar[];
}

export interface User {
  id: string;
  email: string;
  name: string | null;
  preferences: QuizAnswers | null;
}

export interface QuizAnswers {
  familySize: number;
  dailyKm: number;
  roadType: "city" | "highway" | "rough" | "mixed";
  budget: number;
  fuelType: string | null;
  hasDriver: boolean;
}

export interface CarWithScore extends Car {
  matchScore: number;
  matchReasons: string[];
}

export interface RunningCost {
  fuelMonthly: number;
  serviceMonthly: number;
  insuranceMonthly: number;
  totalMonthly: number;
  totalAnnual: number;
}

export interface DepreciationPoint {
  year: number;
  value: number;
  percentRetained: number;
}

export type CompareSelection = [string] | [string, string] | [string, string, string];
