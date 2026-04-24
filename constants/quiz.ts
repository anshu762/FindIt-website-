export type QuizStepType = "select" | "slider" | "boolean";

export interface QuizStepOption {
  label: string;
  value: string | number | boolean;
  subtitle?: string;
  icon: string;
}

export interface QuizStep {
  id: "familySize" | "dailyKm" | "roadType" | "budget" | "fuelType" | "hasDriver";
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
      { label: "1-2", value: 2, subtitle: "Couple or small family", icon: "Users" },
      { label: "3-4", value: 4, subtitle: "Typical nuclear family", icon: "UsersRound" },
      { label: "5-6", value: 6, subtitle: "Joint family usage", icon: "Users2" },
      { label: "7+", value: 7, subtitle: "Need maximum seating", icon: "Bus" }
    ]
  },
  {
    id: "dailyKm",
    title: "Daily driving km",
    subtitle: "How much do you drive in a typical day?",
    type: "select",
    options: [
      { label: "<20", value: 15, subtitle: "Mostly short commutes", icon: "Gauge" },
      { label: "20-50", value: 40, subtitle: "Daily mixed travel", icon: "Route" },
      { label: "50-100", value: 75, subtitle: "Long regular trips", icon: "Map" },
      { label: "100+", value: 120, subtitle: "Heavy usage", icon: "MapPinned" }
    ]
  },
  {
    id: "roadType",
    title: "Road type",
    subtitle: "What kind of roads do you mostly drive on?",
    type: "select",
    options: [
      { label: "City", value: "city", subtitle: "Traffic and stop-go roads", icon: "Building2" },
      { label: "Highway", value: "highway", subtitle: "Frequent long drives", icon: "Waypoints" },
      { label: "Rough terrain", value: "rough", subtitle: "Bad roads or village routes", icon: "Mountain" },
      { label: "Mixed", value: "mixed", subtitle: "A bit of everything", icon: "GitBranch" }
    ]
  },
  {
    id: "budget",
    title: "Budget",
    subtitle: "Choose your ex-showroom budget range.",
    type: "slider",
    options: [{ label: "₹5L - ₹50L", value: "500000-5000000", icon: "IndianRupee" }]
  },
  {
    id: "fuelType",
    title: "Fuel preference",
    subtitle: "Do you have a fuel type preference?",
    type: "select",
    options: [
      { label: "No preference", value: "none", icon: "CircleHelp" },
      { label: "Petrol", value: "Petrol", icon: "Fuel" },
      { label: "Diesel", value: "Diesel", icon: "Flame" },
      { label: "CNG", value: "CNG", icon: "Leaf" },
      { label: "Electric", value: "Electric", icon: "BatteryCharging" }
    ]
  },
  {
    id: "hasDriver",
    title: "Do you have a driver?",
    subtitle: "This helps tune comfort vs self-drive suggestions.",
    type: "boolean",
    options: [
      { label: "Yes", value: true, subtitle: "Comfort-oriented rear seating", icon: "UserCheck" },
      { label: "No", value: false, subtitle: "Mostly self-driven", icon: "Car" }
    ]
  }
];
