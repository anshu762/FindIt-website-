"use client";

import { formatPrice } from "@/lib/utils/formatters";
import type { QuizStep as QuizStepConfig } from "@/constants/quiz";
import {
  BatteryCharging,
  BookCheck,
  Building2,
  Bus,
  Car,
  CircleHelp,
  Flame,
  Fuel,
  Gauge,
  GitBranch,
  IndianRupee,
  Leaf,
  Map,
  MapPinned,
  Mountain,
  Route,
  UserCheck,
  Users,
  Users2,
  UsersRound,
  Waypoints,
  type LucideIcon
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const iconMap: Record<string, LucideIcon> = {
  BatteryCharging,
  BookCheck,
  Building2,
  Bus,
  Car,
  CircleHelp,
  Flame,
  Fuel,
  Gauge,
  GitBranch,
  IndianRupee,
  Leaf,
  Map,
  MapPinned,
  Mountain,
  Route,
  UserCheck,
  Users,
  Users2,
  UsersRound,
  Waypoints
};

const cn = (...inputs: Array<string | false | null | undefined>) => twMerge(clsx(inputs));

interface QuizStepProps {
  step: QuizStepConfig;
  value: string | number | boolean | null | undefined;
  onChange: (value: string | number | boolean) => void;
}

export default function QuizStep({ step, value, onChange }: QuizStepProps) {
  if (step.type === "slider") {
    const range = String(step.options[0]?.value ?? "500000-5000000").split("-");
    const min = Number(range[0] ?? 500000);
    const max = Number(range[1] ?? 5000000);
    const currentValue = typeof value === "number" ? value : min;

    return (
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white/70 p-5">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Budget</span>
          <span className="font-semibold text-slate-900">{formatPrice(currentValue)}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={50000}
          value={currentValue}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-slate-900"
        />
        <div className="flex justify-between text-xs text-slate-500">
          <span>{formatPrice(min)}</span>
          <span>{formatPrice(max)}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-3",
        step.type === "boolean" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 lg:grid-cols-4"
      )}
    >
      {step.options.map((option) => {
        const Icon = iconMap[option.icon] ?? BookCheck;
        const isSelected = value === option.value;

        return (
          <button
            key={`${step.id}-${String(option.value)}`}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-xl border p-4 text-left transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900",
              step.type === "boolean" ? "min-h-32" : "min-h-28",
              isSelected
                ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
            )}
          >
            <Icon className={cn("mb-3 h-5 w-5", isSelected ? "text-white" : "text-slate-700")} />
            <p className={cn("font-semibold", isSelected ? "text-white" : "text-slate-900")}>
              {option.label}
            </p>
            {option.subtitle ? (
              <p className={cn("mt-1 text-sm", isSelected ? "text-slate-200" : "text-slate-600")}>
                {option.subtitle}
              </p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
