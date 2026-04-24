"use client";

import CarGrid from "@/components/cars/CarGrid";
import RecommendationHeader from "@/components/cars/RecommendationHeader";
import type { CarWithScore, QuizAnswers } from "@/types";
import { formatKm, formatPrice } from "@/lib/utils/formatters";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface StoredResults {
  quiz: QuizAnswers;
  results: CarWithScore[];
}

export default function ResultsPage() {
  const router = useRouter();
  const [payload, setPayload] = useState<StoredResults | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("findit_results");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as StoredResults;
      if (Array.isArray(parsed.results) && parsed.quiz) {
        setPayload(parsed);
      }
    } catch {
      setPayload(null);
    }
  }, []);

  const quizSummary = useMemo(() => {
    if (!payload) return "";
    return `Family of ${payload.quiz.familySize} · ${formatKm(payload.quiz.dailyKm)} · ${payload.quiz.roadType[0].toUpperCase()}${payload.quiz.roadType.slice(1)} · ${formatPrice(payload.quiz.budget)} budget`;
  }, [payload]);

  if (!payload) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">No results found</h1>
        <p className="mt-2 text-slate-600">Take the quiz to see your best car matches.</p>
        <button
          type="button"
          onClick={() => router.push("/quiz")}
          className="mt-6 rounded-lg bg-slate-900 px-5 py-2 font-medium text-white hover:bg-slate-800"
        >
          Retake Quiz
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl space-y-6 px-4 py-8">
      <RecommendationHeader count={payload.results.length} quizSummary={quizSummary} />
      <p className="text-sm text-slate-600">
        We found {payload.results.length} cars matching your lifestyle.
      </p>
      <CarGrid cars={payload.results} animate />
    </main>
  );
}
