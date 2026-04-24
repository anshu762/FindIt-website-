"use client";

import QuizProgress from "@/components/quiz/QuizProgress";
import QuizStep from "@/components/quiz/QuizStep";
import { QUIZ_STEPS } from "@/constants/quiz";
import type { CarWithScore, QuizAnswers } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { quizSchema } from "@/lib/validations/quiz";

interface RecommendationApiResponse {
  data: CarWithScore[];
}

export default function QuizContainer() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = QUIZ_STEPS.length;
  const step = QUIZ_STEPS[currentStep];

  const {
    watch,
    setValue,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<QuizAnswers>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      familySize: 4,
      dailyKm: 40,
      roadType: "city",
      budget: 1500000,
      fuelType: null,
      hasDriver: false
    }
  });

  const currentValue = watch(step.id);
  const progressWidth = ((currentStep + 1) / totalSteps) * 100;

  const onNext = async () => {
    const validStep = await trigger(step.id);
    if (!validStep) return;
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const onBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);

      const payload: QuizAnswers = {
        ...values,
        fuelType:
          values.fuelType && values.fuelType.toLowerCase() === "none" ? null : values.fuelType
      };

      const response = await fetch("/api/quiz/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const result: RecommendationApiResponse = await response.json();
      sessionStorage.setItem(
        "findit_results",
        JSON.stringify({
          quiz: payload,
          results: result.data
        })
      );

      router.push("/results");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
      <div className="mb-6 space-y-3">
        <div className="h-2 w-full rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-slate-900 transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <QuizProgress currentStep={currentStep} totalSteps={totalSteps} />
          <p className="text-sm font-medium text-slate-600">
            Step {currentStep + 1} of {totalSteps}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-slate-900">{step.title}</h2>
          <p className="mt-1 mb-5 text-slate-600">{step.subtitle}</p>

          <QuizStep
            step={step}
            value={currentValue}
            onChange={(value) => {
              setValue(step.id, value as never, { shouldValidate: true, shouldDirty: true });
            }}
          />

          {errors[step.id] ? (
            <p className="mt-3 text-sm text-rose-600">{errors[step.id]?.message}</p>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={currentStep === 0 || isSubmitting}
          className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Back
        </button>

        {currentStep < totalSteps - 1 ? (
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="rounded-lg bg-slate-900 px-5 py-2 font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2 font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Finding matches...
              </>
            ) : (
              "See Recommendations"
            )}
          </button>
        )}
      </div>
    </div>
  );
}
