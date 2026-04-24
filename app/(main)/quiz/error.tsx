"use client";

interface QuizErrorProps {
  error: Error;
  reset: () => void;
}

export default function QuizError({ error, reset }: QuizErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-xl border border-rose-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rose-700">Something went wrong in quiz</h2>
        <p className="mt-2 text-sm text-slate-600">{error.message || "Please try again."}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
