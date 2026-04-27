import { getCarBySlug } from "@/lib/api/cars";
import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: RouteParams): Promise<NextResponse> {
  try {
    const { id } = await params;
    const car = await getCarBySlug(id);

    if (!car) {
      return NextResponse.json({ error: "Car not found." }, { status: 404 });
    }

    return NextResponse.json({ data: car }, { status: 200 });
  } catch (error) {
    console.error("GET /api/cars/[id] failed:", error);
    return NextResponse.json({ error: "Failed to fetch car." }, { status: 500 });
  }
}
