import { getCarBySlug } from "@/lib/api/cars";
import { notFound } from "next/navigation";
import CarHero from "@/components/cars/CarHero";
import RunningCostCalculator from "@/components/cars/RunningCostCalculator";
import DepreciationChart from "@/components/cars/DepreciationChart";
import SpecSection from "@/components/cars/SpecSection";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface CarPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CarDetailsPage({ params }: CarPageProps) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 space-y-12">
      <Link
        href="/cars"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to All Cars
      </Link>

      <CarHero car={car} />
      
      <div className="grid gap-8 lg:grid-cols-2">
        <RunningCostCalculator car={car} />
        <DepreciationChart car={car} />
      </div>

      <SpecSection car={car} />
    </main>
  );
}
