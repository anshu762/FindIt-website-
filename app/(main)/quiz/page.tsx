"use client";

import QuizContainer from "@/components/quiz/QuizContainer";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function QuizPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Back Button */}
        <div className="w-full mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Back to Explore</span>
          </Button>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Find your perfect car</h1>
          <p className="mt-3 text-lg font-medium text-slate-500 italic">
            Complete this quick lifestyle quiz to get curated recommendations.
          </p>
        </div>
        <QuizContainer />
      </div>
    </main>
  );
}
