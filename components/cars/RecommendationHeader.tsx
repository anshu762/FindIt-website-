"use client";

import { useRouter } from "next/navigation";

interface RecommendationHeaderProps {
  count: number;
  quizSummary: string;
}

export default function RecommendationHeader({ count, quizSummary }: RecommendationHeaderProps) {
  const router = useRouter();
  const chips = quizSummary.split(" · ").filter(Boolean);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">🎯 {count} cars match your lifestyle</h2>
        <button
          type="button"
          onClick={() => router.push("/quiz")}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Retake Quiz
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
