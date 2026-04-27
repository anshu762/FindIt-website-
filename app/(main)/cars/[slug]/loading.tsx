import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 space-y-12 animate-in fade-in duration-500">
      {/* Back Button Skeleton */}
      <Skeleton className="h-6 w-32 rounded-lg" />

      {/* Car Hero Skeleton */}
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <Skeleton className="aspect-video w-full rounded-3xl" />
        <div className="space-y-6">
          <div className="space-y-2">
             <Skeleton className="h-4 w-24 rounded-full" />
             <Skeleton className="h-12 w-3/4 rounded-xl" />
             <Skeleton className="h-6 w-1/2 rounded-lg" />
          </div>
          <div className="flex gap-4">
             <Skeleton className="h-10 w-32 rounded-2xl" />
             <Skeleton className="h-10 w-32 rounded-2xl" />
          </div>
          <div className="grid grid-cols-3 gap-4">
             {[1, 2, 3].map(i => (
               <Skeleton key={i} className="h-24 rounded-2xl" />
             ))}
          </div>
        </div>
      </div>

      {/* Grid: Calculator & Chart Skeleton */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 p-6 space-y-6">
           <Skeleton className="h-8 w-48 rounded-lg" />
           <div className="space-y-4">
              <Skeleton className="h-12 w-full rounded-xl" />
              <div className="grid grid-cols-2 gap-4">
                 <Skeleton className="h-20 rounded-xl" />
                 <Skeleton className="h-20 rounded-xl" />
              </div>
              <Skeleton className="h-32 w-full rounded-xl" />
           </div>
        </div>
        <div className="rounded-2xl border border-slate-100 p-6 space-y-6">
           <Skeleton className="h-8 w-48 rounded-lg" />
           <Skeleton className="h-[300px] w-full rounded-xl" />
           <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-12 rounded-lg" />)}
           </div>
        </div>
      </div>

      {/* Specs Section Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-64 rounded-lg" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Skeleton key={i} className="h-16 rounded-xl" />
          ))}
        </div>
      </div>
    </main>
  );
}
