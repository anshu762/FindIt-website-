import CarGrid from "@/components/cars/CarGrid";
import FilterSidebar from "@/components/shared/FilterSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllCars } from "@/lib/api/cars";
import { Suspense } from "react";

type SearchParamsType = {
  type?: string;
  fuelType?: string;
  brand?: string;
  budgetMin?: string;
  budgetMax?: string;
};

interface CarsPageProps {
  searchParams: Promise<SearchParamsType>;
}

function parseCsv(value?: string): string[] | undefined {
  if (!value) return undefined;
  const parsed = value.split(",").map((item) => item.trim()).filter(Boolean);
  return parsed.length > 0 ? parsed : undefined;
}

async function CarsGridSection({ searchParams }: { searchParams: SearchParamsType }) {
  const budgetMax = searchParams?.budgetMax ? Number(searchParams.budgetMax) : undefined;

  const cars = await getAllCars({
    type: parseCsv(searchParams?.type),
    fuelType: parseCsv(searchParams?.fuelType),
    brand: parseCsv(searchParams?.brand),
    budgetMax: Number.isNaN(budgetMax) ? undefined : budgetMax
  });

  const budgetMin = searchParams?.budgetMin ? Number(searchParams.budgetMin) : undefined;
  const filteredCars =
    typeof budgetMin === "number" && !Number.isNaN(budgetMin)
      ? cars.filter((car) => car.priceMax >= budgetMin)
      : cars;

  return <CarGrid cars={filteredCars} />;
}

function GridFallback() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={`car-skeleton-${index}`} className="rounded-xl border border-slate-200 p-4">
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="mt-4 h-5 w-2/3" />
          <Skeleton className="mt-2 h-4 w-1/3" />
          <Skeleton className="mt-4 h-10 w-full" />
        </div>
      ))}
    </div>
  );
}

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const params = await searchParams;
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-900">Browse Cars</h1>
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <FilterSidebar />
        <Suspense fallback={<GridFallback />}>
          <CarsGridSection searchParams={params} />
        </Suspense>
      </div>
    </main>
  );
}
