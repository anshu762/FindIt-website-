import { getCarById } from "@/lib/api/cars";
import { calculateRunningCost } from "@/lib/api/costs";
import { NextResponse } from "next/server";
import { z } from "zod";

const runningCostSchema = z.object({
  carId: z.string().min(1),
  dailyKm: z.number().min(1).max(500),
  highwayPercent: z.number().min(0).max(100),
  fuelPricePerLitre: z.number().positive()
});

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: unknown = await request.json();
    const parsed = runningCostSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid running cost payload.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const car = await getCarById(parsed.data.carId);

    if (!car) {
      return NextResponse.json({ error: "Car not found." }, { status: 404 });
    }

    const runningCost = calculateRunningCost({
      car,
      dailyKm: parsed.data.dailyKm,
      highwayPercent: parsed.data.highwayPercent,
      fuelPricePerLitre: parsed.data.fuelPricePerLitre
    });

    return NextResponse.json({ data: runningCost }, { status: 200 });
  } catch (error) {
    console.error("POST /api/costs/calculate failed:", error);
    return NextResponse.json({ error: "Failed to calculate running cost." }, { status: 500 });
  }
}
