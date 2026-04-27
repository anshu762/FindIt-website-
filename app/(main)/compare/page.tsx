import { Suspense } from "react";
import CompareSelector from "@/components/cars/CompareSelector";
import CompareMatrix from "@/components/cars/CompareMatrix";
import { getAllCars } from "@/lib/api/cars";
import { Skeleton } from "@/components/ui/skeleton";
import BackButton from "@/components/shared/BackButton";

interface ComparePageProps {
  searchParams: Promise<{ ids?: string }>;
}

async function ComparisonSection({ ids }: { ids?: string }) {
  const allCars = await getAllCars();
  const selectedIds = ids?.split(",").filter(Boolean) || [];
  const selectedCars = allCars.filter((c) => selectedIds.includes(c.id));

  if (selectedCars.length === 0) {
    return (
      <div className="mt-12 rounded-3xl border-2 border-dashed border-slate-200 p-12 text-center">
        <h3 className="text-xl font-bold text-slate-900">Start your comparison</h3>
        <p className="mt-2 text-slate-500">Search and add up to 3 cars to see a detailed side-by-side analysis.</p>
      </div>
    );
  }

  return <CompareMatrix cars={selectedCars} />;
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const { ids } = await searchParams;
  const allCars = await getAllCars();

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 space-y-8">
      <BackButton label="Back to Browse" />

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Compare Cars</h1>
        <p className="mt-3 text-lg text-slate-600">
          Make a confident decision by comparing running costs, safety, and resale values.
        </p>
      </div>

      <div className="space-y-12">
        <CompareSelector allCars={allCars} />
        
        <Suspense fallback={
          <div className="mt-8 space-y-4">
            <Skeleton className="h-20 w-full rounded-2xl" />
            <Skeleton className="h-[400px] w-full rounded-3xl" />
          </div>
        }>
          <ComparisonSection ids={ids} />
        </Suspense>
      </div>
    </main>
  );
}
