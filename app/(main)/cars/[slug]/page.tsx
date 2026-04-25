import { getCarBySlug } from "@/lib/api/cars";
import { notFound } from "next/navigation";
import CarHero from "@/components/cars/CarHero";
import RunningCostCalculator from "@/components/cars/RunningCostCalculator";
import DepreciationChart from "@/components/cars/DepreciationChart";
import SpecSection from "@/components/cars/SpecSection";

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
      <CarHero car={car} />
      
      <div className="grid gap-8 lg:grid-cols-2">
        <RunningCostCalculator car={car} />
        <DepreciationChart car={car} />
      </div>

      <SpecSection car={car} />
    </main>
  );
}
