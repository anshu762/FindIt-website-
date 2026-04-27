"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Car } from "@/types";

interface CompareContextType {
  selectedCars: Car[];
  addToCompare: (car: Car) => void;
  removeFromCompare: (carId: string) => void;
  clearCompare: () => void;
  isCompareFull: boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const addToCompare = (car: Car) => {
    setSelectedCars((prev) => {
      if (prev.find((c) => c.id === car.id)) return prev;
      if (prev.length >= 3) return prev;
      return [...prev, car];
    });
  };

  const removeFromCompare = (carId: string) => {
    setSelectedCars((prev) => prev.filter((c) => c.id !== carId));
  };

  const clearCompare = () => setSelectedCars([]);

  const isCompareFull = selectedCars.length >= 3;

  return (
    <CompareContext.Provider
      value={{
        selectedCars,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isCompareFull,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
