import Link from "next/link";

export const metadata = {
  title: "About DiscoverMyCar",
  description:
    "Learn how DiscoverMyCar helps Indian car buyers discover vehicles suited to their lifestyle, budget, and everyday needs.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            About DiscoverMyCar
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Discover a car that fits your life.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            DiscoverMyCar helps you make a more confident car-buying decision
            by connecting your lifestyle, priorities, and budget with the cars
            that suit you best.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3">
        {[
          {
            title: "Lifestyle-first discovery",
            text: "We focus on how you actually use a car, from daily commuting and family travel to weekend trips.",
          },
          {
            title: "Simple comparison",
            text: "Explore important differences between cars without getting lost in unnecessary technical details.",
          },
          {
            title: "Confident decisions",
            text: "Use guided recommendations and practical information to shortlist vehicles that match your needs.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl font-black text-slate-950">{item.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-black">Ready to explore?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-blue-100">
            Start with our car browser or take the quiz to receive a more
            personalised starting point.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cars"
              className="rounded-full bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Browse Cars
            </Link>

            <Link
              href="/quiz"
              className="rounded-full border border-blue-300 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}