"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
  label?: string;
}

export default function BackButton({ className, label = "Back" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer",
        className
      )}
    >
      <ChevronLeft className="h-4 w-4" />
      {label}
    </button>
  );
}
