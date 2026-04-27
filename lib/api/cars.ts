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
  const seats = Array.isArray(filters.seatingCapacity)
    ? filters.seatingCapacity
    : filters.seatingCapacity
      ? [filters.seatingCapacity]
      : [];

  return {
    ...(types.length > 0 ? { type: { in: types as Car["type"][] } } : {}),
    ...(fuelTypes.length > 0 ? { fuelType: { in: fuelTypes as Car["fuelType"][] } } : {}),
    ...(brands.length > 0 ? { brand: { in: brands, mode: "insensitive" } } : {}),
    ...(seats.length > 0 ? { seatingCapacity: { in: seats } } : {}),
    ...(filters.minMileage ? { mileageHighway: { gte: filters.minMileage } } : {}),
    ...(filters.budgetMin || filters.budgetMax
      ? {
          priceMin: {
            ...(filters.budgetMin ? { gte: filters.budgetMin } : {}),
            ...(filters.budgetMax ? { lte: filters.budgetMax } : {})
          }
        }
      : {})
  };
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
  const car = await prisma.car.findFirst({
    where: { name },
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
