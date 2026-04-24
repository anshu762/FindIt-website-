export type QuizStepType = "select" | "slider" | "boolean";

export interface QuizStepOption {
  label: string;
  value: string | number | boolean;
}

export interface QuizStep {
  id: string;
  title: string;
  subtitle: string;
  type: QuizStepType;
  options: QuizStepOption[];
}

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: "familySize",
    title: "Family size",
    subtitle: "How many people usually travel together?",
    type: "select",
    options: [
      { label: "1-2", value: 2 },
      { label: "3-4", value: 4 },
      { label: "5-6", value: 6 },
      { label: "7+", value: 7 }
    ]
  },
  {
    id: "dailyKm",
    title: "Daily driving km",
    subtitle: "How much do you drive in a typical day?",
    type: "select",
    options: [
      { label: "<20", value: 20 },
      { label: "20-50", value: 50 },
      { label: "50-100", value: 100 },
      { label: "100+", value: 120 }
    ]
  },
  {
    id: "roadType",
    title: "Road type",
    subtitle: "What kind of roads do you mostly drive on?",
    type: "select",
    options: [
      { label: "City", value: "city" },
      { label: "Highway", value: "highway" },
      { label: "Rough terrain", value: "rough" },
      { label: "Mixed", value: "mixed" }
    ]
  },
  {
    id: "budget",
    title: "Budget",
    subtitle: "Choose your ex-showroom budget range.",
    type: "slider",
    options: [{ label: "₹5L - ₹50L", value: "500000-5000000" }]
  },
  {
    id: "fuelType",
    title: "Fuel preference",
    subtitle: "Do you have a fuel type preference?",
    type: "select",
    options: [
      { label: "No preference", value: "none" },
      { label: "Petrol", value: "Petrol" },
      { label: "Diesel", value: "Diesel" },
      { label: "CNG", value: "CNG" },
      { label: "Electric", value: "Electric" }
    ]
  },
  {
    id: "hasDriver",
    title: "Do you have a driver?",
    subtitle: "This helps tune comfort vs self-drive suggestions.",
    type: "boolean",
    options: [
      { label: "Yes", value: true },
      { label: "No", value: false }
    ]
  }
];
