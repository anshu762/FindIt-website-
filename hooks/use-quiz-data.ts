"use client";

import { useState, useEffect } from "react";
import { QuizAnswers } from "@/types";

export function useQuizData() {
  const [quizData, setQuizData] = useState<QuizAnswers | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("findit_results");
    if (saved) {
      try {
        const { quiz } = JSON.parse(saved);
        setQuizData(quiz);
      } catch (e) {
        console.error("Failed to parse quiz results", e);
      }
    }
    setIsLoading(false);
  }, []);

  return { quizData, isLoading };
}
