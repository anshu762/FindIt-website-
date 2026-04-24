"use client";

import { Check } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: Array<string | false | null | undefined>) => twMerge(clsx(inputs));

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isCurrent = index === currentStep;
        const isCompleted = index < currentStep;
        return (
          <div
            key={`quiz-step-${index + 1}`}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition-all",
              isCurrent && "border-slate-900 bg-slate-900 text-white",
              isCompleted && "border-emerald-600 bg-emerald-600 text-white",
              !isCurrent && !isCompleted && "border-slate-300 bg-white text-slate-600"
            )}
          >
            {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
          </div>
        );
      })}
    </div>
  );
}
