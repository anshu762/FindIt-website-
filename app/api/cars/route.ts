import { getAllCars } from "@/lib/api/cars";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") ?? undefined;
    const fuelType = searchParams.get("fuelType") ?? undefined;
    const brand = searchParams.get("brand") ?? undefined;
    const budgetMaxParam = searchParams.get("budgetMax");
    const budgetMax = budgetMaxParam ? Number(budgetMaxParam) : undefined;

    if (budgetMaxParam && Number.isNaN(budgetMax)) {
      return NextResponse.json(
        { error: "Invalid budgetMax query parameter." },
        { status: 400 }
      );
    }

    const cars = await getAllCars({ type, fuelType, brand, budgetMax });
    return NextResponse.json({ data: cars }, { status: 200 });
  } catch (error) {
    console.error("GET /api/cars failed:", error);
    return NextResponse.json({ error: "Failed to fetch cars." }, { status: 500 });
  }
}
