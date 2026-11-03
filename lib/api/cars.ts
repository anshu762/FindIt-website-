import prisma from "@/lib/db/prisma";
import { scoreCarForLifestyle } from "@/lib/utils/recommend";
import type { Car, CarWithScore, QuizAnswers } from "@/types";
import { Prisma } from "@prisma/client";

export interface CarFilters {
  type?: string | string[];
  fuelType?: string | string[];
  brand?: string | string[];
  budgetMin?: number;
  budgetMax?: number;
  seatingCapacity?: number | number[];
  minMileage?: number;
  transmission?: string | string[];
}

const carSelect = Prisma.validator<Prisma.CarSelect>()({
  id: true,
  slug: true,
  name: true,
  brand: true,
  model: true,
  year: true,
  type: true,
  fuelType: true,
  transmission: true,
  engineCC: true,
  powerBhp: true,
  torqueNm: true,
  mileageCity: true,
  mileageHighway: true,
  seatingCapacity: true,
  bootLitres: true,
  groundClearance: true,
  priceMin: true,
  priceMax: true,
  monthlyService: true,
  insuranceYear1: true,
  safetyRating: true,
  depRate1Yr: true,
  depRate3Yr: true,
  depRate5Yr: true,
  imageUrl: true,
  pros: true,
  cons: true,
  tags: true,
  createdAt: true,
  savedBy: {
    select: {
      id: true,
      userId: true,
      carId: true,
      createdAt: true
    }
  }
});

function buildWhere(filters: CarFilters): Prisma.CarWhereInput {
  const types = Array.isArray(filters.type) ? filters.type : filters.type ? [filters.type] : [];
  const fuelTypes = Array.isArray(filters.fuelType)
    ? filters.fuelType
    : filters.fuelType
      ? [filters.fuelType]
      : [];
  const brands = Array.isArray(filters.brand) ? filters.brand : filters.brand ? [filters.brand] : [];
  const brandAliases: Record<string, string[]> = {
    maruti: ["Maruti", "Maruti Suzuki"],
    tata: ["Tata", "Tata Motors"],
    hyundai: ["Hyundai", "Hyundai Motor", "Hyundai Motor India"],
    mahindra: ["Mahindra", "Mahindra & Mahindra"],
    kia: ["Kia", "Kia India", "Kia Motors"],
    honda: ["Honda", "Honda Cars", "Honda Cars India"],
    toyota: ["Toyota", "Toyota Kirloskar", "Toyota Kirloskar Motor"],
    renault: ["Renault", "Renault India"],
    nissan: ["Nissan", "Nissan Motor", "Nissan Motor India"],
    volkswagen: ["Volkswagen", "Volkswagen India", "VW"],
    skoda: ["Skoda", "Škoda", "Škoda Auto", "Škoda Auto India"],
    mg: ["MG", "MG Motor", "MG Motor India", "Morris Garages"],
    citroen: ["Citroen", "Citroën", "Citroën India"],
    jeep: ["Jeep", "Jeep India"],
    bmw: ["BMW", "BMW India"],
    "mercedes-benz": ["Mercedes-Benz", "Mercedes", "Mercedes-Benz India"],
    mercedes: ["Mercedes-Benz", "Mercedes", "Mercedes-Benz India"],
    audi: ["Audi", "Audi India"],
    volvo: ["Volvo", "Volvo India", "Volvo Auto India"],
    porsche: ["Porsche", "Porsche India"],
    byd: ["BYD", "BYD India"],
    jaguar: ["Jaguar", "Jaguar Land Rover", "JLR"],
    "land-rover": ["Land Rover", "Range Rover", "Jaguar Land Rover", "JLR"],
    lamborghini: ["Lamborghini", "Lamborghini India"],
    ferrari: ["Ferrari", "Ferrari India"],
    "rolls-royce": ["Rolls-Royce", "Rolls Royce", "Rolls", "Rolls-Royce Motor Cars"],
    bentley: ["Bentley", "Bentley Motors"],
    "aston-martin": ["Aston Martin", "Aston"],
    maserati: ["Maserati", "Maserati India"],
    lotus: ["Lotus", "Lotus Cars"],
    bugatti: ["Bugatti", "Bugatti Automobiles"],
    pagani: ["Pagani", "Pagani Automobili"],
    rimac: ["Rimac", "Rimac Automobili"],
    koenigsegg: ["Koenigsegg"]
  };
  const expandedBrands = brands.flatMap((b) => brandAliases[b.toLowerCase()] || [b]);
  const seats = Array.isArray(filters.seatingCapacity)
    ? filters.seatingCapacity
    : filters.seatingCapacity
      ? [filters.seatingCapacity]
      : [];
  const transmissions = Array.isArray(filters.transmission)
    ? filters.transmission
    : filters.transmission
      ? [filters.transmission]
      : [];

  const andClauses: Prisma.CarWhereInput[] = [];

  if (types.length > 0) {
    const validCarTypes = types.filter((t) =>
      ["SUV", "Sedan", "Hatchback", "MUV", "Crossover"].includes(t)
    );
    andClauses.push({
      OR: [
        ...(validCarTypes.length > 0 ? [{ type: { in: validCarTypes as Car["type"][] } }] : []),
        { tags: { hasSome: types } }
      ]
    });
  }

  if (fuelTypes.length > 0) {
    andClauses.push({
      OR: [
        { fuelType: { in: fuelTypes as Car["fuelType"][] } },
        { tags: { hasSome: fuelTypes as string[] } }
      ]
    });
  }

  if (expandedBrands.length > 0) {
    andClauses.push({ brand: { in: expandedBrands, mode: "insensitive" } });
  }

  if (seats.length > 0) {
    andClauses.push({ seatingCapacity: { in: seats } });
  }

  if (transmissions.length > 0) {
    andClauses.push({
      OR: [
        { transmission: { in: transmissions as Car["transmission"][] } },
        { tags: { hasSome: transmissions as string[] } }
      ]
    });
  }

  if (filters.minMileage) {
    andClauses.push({ mileageHighway: { gte: filters.minMileage } });
  }

  if (filters.budgetMin || filters.budgetMax) {
    andClauses.push({
      AND: [
        ...(filters.budgetMax ? [{ priceMin: { lte: filters.budgetMax } }] : []),
        ...(filters.budgetMin ? [{ priceMax: { gte: filters.budgetMin } }] : [])
      ]
    });
  }

  return andClauses.length > 0 ? { AND: andClauses } : {};
}

export async function getAllCars(filters: CarFilters = {}): Promise<Car[]> {
  const cars = await prisma.car.findMany({
    where: buildWhere(filters),
    select: carSelect,
    orderBy: [{ priceMin: "asc" }, { name: "asc" }]
  });

  return cars as Car[];
}

export async function getCarBySlug(slug: string): Promise<Car | null> {
  const car = await prisma.car.findUnique({
    where: { slug },
    select: carSelect
  });

  return (car as Car | null) ?? null;
}

export async function getCarByName(name: string): Promise<Car | null> {
  const tokens = name.trim().split(/\s+/).filter(Boolean);
  const car = await prisma.car.findFirst({
    where: {
      OR: [
        { name: { equals: name, mode: "insensitive" } },
        { name: { contains: name, mode: "insensitive" } },
        { model: { equals: name, mode: "insensitive" } },
        ...(tokens.length > 1
          ? [
              {
                AND: tokens.map((token) => ({
                  name: { contains: token, mode: "insensitive" as const }
                }))
              }
            ]
          : [])
      ]
    },
    select: carSelect
  });

  return (car as Car | null) ?? null;
}

export async function getCarById(id: string): Promise<Car | null> {
  const car = await prisma.car.findUnique({
    where: { id },
    select: carSelect
  });

  return (car as Car | null) ?? null;
}

export async function getRecommendations(quiz: QuizAnswers): Promise<CarWithScore[]> {
  const cars = await prisma.car.findMany({
    where: {
      priceMin: { lte: quiz.budget * 1.05 },
      seatingCapacity: { gte: quiz.familySize },
      ...(quiz.fuelType ? { fuelType: { equals: quiz.fuelType as any } } : {})
    },
    select: carSelect
  });

  const scored = (cars as Car[]).map((car) => {
    const score = scoreCarForLifestyle(car, quiz);
    return {
      ...car,
      matchScore: score.score,
      matchReasons: score.reasons
    };
  });

  return scored.sort((a, b) => b.matchScore - a.matchScore);
}
