import { getRecommendations } from "@/lib/api/cars";
import { quizSchema } from "@/lib/validations/quiz";
import { ZodError } from "zod";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: unknown = await request.json();
    const quiz = quizSchema.parse(body);
    const recommendations = await getRecommendations(quiz);

    return NextResponse.json({ data: recommendations.slice(0, 12) }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid quiz payload.", issues: error.flatten() },
        { status: 400 }
      );
    }

    console.error("POST /api/quiz/recommend failed:", error);
    return NextResponse.json({ error: "Failed to generate recommendations." }, { status: 500 });
  }
}
