import Link from "next/link";

export const metadata = {
  title: "Maintenance Tips",
  description:
    "Practical car maintenance tips for safer, smoother, and more reliable everyday driving in India.",
};

const tips = [
  {
    number: "01",
    title: "Follow the service schedule",
    text: "Check your owner’s manual and complete scheduled servicing on time. Regular service helps identify small problems before they become expensive repairs.",
  },
  {
    number: "02",
    title: "Check tyre pressure",
    text: "Inspect tyre pressure regularly, especially before long journeys. Correct pressure improves handling, comfort, tyre life, and fuel efficiency.",
  },
  {
    number: "03",
    title: "Monitor warning lights",
    text: "Never ignore dashboard warning lights. If a warning remains after restarting the car, arrange a professional inspection.",
  },
  {
    number: "04",
    title: "Replace fluids and filters",
    text: "Engine oil, coolant, brake fluid, air filters, and cabin filters all need attention according to the manufacturer’s recommended intervals.",
  },
  {
    number: "05",
    title: "Keep the car clean",
    text: "Regular exterior cleaning protects the paint, while cleaning the interior helps prevent dust, odour, and premature wear.",
  },
  {
    number: "06",
    title: "Inspect before road trips",
    text: "Before a long journey, check tyres, lights, brakes, wipers, fluids, spare wheel, and emergency equipment.",
  },
];

export default function MaintenanceTipsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
            Car care guide
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Small habits. Better ownership.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Use these practical reminders to keep your car dependable,
            comfortable, and ready for everyday Indian roads.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <article
            key={tip.number}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-sm font-black text-blue-600">{tip.number}</span>
            <h2 className="mt-5 text-xl font-black text-slate-950">
              {tip.title}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{tip.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
          <p className="text-sm leading-7">
            These tips are general information, not a replacement for the
            vehicle owner&apos;s manual or advice from a qualified mechanic.
          </p>
        </div>

        <Link
          href="/cars"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-blue-600"
        >
          Continue browsing cars
        </Link>
      </section>
    </main>
  );
}