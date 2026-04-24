import type { Car, QuizAnswers } from "@/types";

interface ScoreResult {
  score: number;
  reasons: string[];
}

export function scoreCarForLifestyle(car: Car, quiz: QuizAnswers): ScoreResult {
  let score = 0;
  const reasons: string[] = [];

  if (quiz.familySize <= 4 && car.seatingCapacity >= 5) {
    score += 20;
    reasons.push("Comfortably seats a small family.");
  } else if (quiz.familySize >= 5 && car.seatingCapacity >= 7) {
    score += 25;
    reasons.push("Suitable for larger family seating needs.");
  }

  if (quiz.roadType === "rough" && car.groundClearance >= 185) {
    score += 20;
    reasons.push("High ground clearance helps on rough roads.");
  } else if (quiz.roadType === "city" && car.mileageCity >= 16) {
    score += 15;
    reasons.push("Efficient mileage for city commutes.");
  } else if (quiz.roadType === "highway" && car.mileageHighway >= 18) {
    score += 15;
    reasons.push("Strong highway efficiency for long drives.");
  }

  if (car.priceMin <= quiz.budget) {
    score += 20;
    reasons.push("Starting price fits your budget.");
  }

  if (car.priceMax <= quiz.budget * 1.05) {
    score += 10;
    reasons.push("Top variants remain close to your budget.");
  }

  if (quiz.fuelType && quiz.fuelType.toLowerCase() === car.fuelType.toLowerCase()) {
    score += 15;
    reasons.push(`Matches your ${quiz.fuelType} fuel preference.`);
  }

  if (car.safetyRating !== null && car.safetyRating >= 4) {
    score += 10;
    reasons.push("Strong safety rating for added confidence.");
  }

  return {
    score: Math.min(score, 100),
    reasons
  };
}
