import type { Car, QuizAnswers } from "@/types";

interface ScoreResult {
  score: number;
  reasons: string[];
}

export function scoreCarForLifestyle(car: Car, quiz: QuizAnswers): ScoreResult {
  let score = 0;
  const reasons: string[] = [];

  // 1. SEATING & FAMILY (Max 25 pts)
  if (car.seatingCapacity === quiz.familySize) {
    score += 25;
    reasons.push("Perfect seating match for your family size.");
  } else if (car.seatingCapacity > quiz.familySize) {
    score += 20;
    reasons.push("Offers extra space and comfort for your family.");
  }

  // 2. BUDGET ACCURACY (Max 35 pts)
  if (car.priceMax <= quiz.budget) {
    score += 35;
    reasons.push("Even the top variant fits within your budget.");
  } else if (car.priceMin <= quiz.budget) {
    score += 25;
    const overage = ((car.priceMin - quiz.budget) / quiz.budget) * 100;
    if (overage <= 0) {
      reasons.push("Starting price fits perfectly in your budget.");
    }
  } else {
    // Car is slightly over budget (due to 5% buffer in API)
    score += 10;
    reasons.push("Slightly above budget but offers premium value.");
  }

  // 3. ROAD TYPE & PERFORMANCE (Max 20 pts)
  if (quiz.roadType === "rough") {
    if (car.groundClearance >= 190) {
      score += 20;
      reasons.push("Excellent ground clearance for rough terrain.");
    } else if (car.groundClearance >= 180) {
      score += 15;
      reasons.push("Good ground clearance for bad roads.");
    }
  } else if (quiz.roadType === "city") {
    if (car.mileageCity >= 18) {
      score += 20;
      reasons.push("Top-tier fuel efficiency for city traffic.");
    } else if (car.mileageCity >= 15) {
      score += 15;
      reasons.push("Respectable city mileage helps save costs.");
    }
  } else if (quiz.roadType === "highway") {
    if (car.mileageHighway >= 20) {
      score += 20;
      reasons.push("Superior highway efficiency for long trips.");
    } else if (car.mileageHighway >= 17) {
      score += 15;
      reasons.push("Strong high-speed stability and efficiency.");
    }
  }

  // 4. FUEL PREFERENCE (Max 10 pts)
  if (quiz.fuelType && quiz.fuelType.toLowerCase() === car.fuelType.toLowerCase()) {
    score += 10;
    reasons.push(`Matches your ${quiz.fuelType} fuel preference.`);
  }

  // 5. SAFETY BONUS (Max 10 pts)
  if (car.safetyRating !== null) {
    if (car.safetyRating >= 5) {
      score += 10;
      reasons.push("Top-rated 5-star safety for peace of mind.");
    } else if (car.safetyRating >= 4) {
      score += 7;
      reasons.push("Strong 4-star safety foundation.");
    }
  }

  return {
    score: Math.min(Math.round(score), 100),
    reasons
  };
}
