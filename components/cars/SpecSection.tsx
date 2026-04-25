import { Car } from "@/types";
import { CheckCircle2, XCircle } from "lucide-react";

interface SpecSectionProps {
  car: Car;
}

export default function SpecSection({ car }: SpecSectionProps) {
  const specs = [
    { label: "Engine", value: `${car.engineCC} cc` },
    { label: "Power", value: `${car.powerBhp} bhp` },
    { label: "Torque", value: `${car.torqueNm} Nm` },
    { label: "Transmission", value: car.transmission },
    { label: "City Mileage", value: `${car.mileageCity} kmpl` },
    { label: "Highway Mileage", value: `${car.mileageHighway} kmpl` },
    { label: "Boot Space", value: `${car.bootLitres} Litres` },
    { label: "Ground Clearance", value: `${car.groundClearance} mm` }
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b pb-4">Detailed Specifications</h2>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-sm text-slate-500">{spec.label}</span>
              <span className="text-sm font-semibold text-slate-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 rounded-2xl bg-slate-50 p-6 border border-slate-100">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold text-green-700 uppercase tracking-wider mb-4">
            <CheckCircle2 className="h-4 w-4" /> Pros
          </h3>
          <ul className="space-y-3">
            {car.pros.map((pro, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <h3 className="flex items-center gap-2 text-sm font-bold text-red-700 uppercase tracking-wider mb-4">
            <XCircle className="h-4 w-4" /> Cons
          </h3>
          <ul className="space-y-3">
            {car.cons.map((con, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
