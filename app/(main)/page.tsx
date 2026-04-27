import { getCarByName } from "@/lib/api/cars";
import CarCard from "@/components/cars/CarCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator, Car, User, CheckCircle2 } from "lucide-react";

// Use dynamic import or a client component wrapper for animations if needed
// For simplicity and quality, I'll use a client-side layout for sections that need motion

import LandingClient from "@/components/landing/LandingClient";

export default async function LandingPage() {
  // Fetch featured cars
  const featuredCarNames = ["Tata Nexon", "Hyundai Creta", "Maruti Swift"];
  const featuredCars = await Promise.all(
    featuredCarNames.map(name => getCarByName(name))
  );

  const cleanFeaturedCars = featuredCars.filter(Boolean);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <LandingClient featuredCars={cleanFeaturedCars as any} />
    </div>
  );
}
