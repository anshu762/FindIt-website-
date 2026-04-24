import QuizContainer from "@/components/quiz/QuizContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifestyle Quiz | FindIt",
  description: "Answer a few questions and get personalized car recommendations for India."
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Find your perfect car</h1>
          <p className="mt-2 text-slate-600">
            Complete this quick lifestyle quiz to get curated recommendations.
          </p>
        </div>
        <QuizContainer />
      </div>
    </main>
  );
}
