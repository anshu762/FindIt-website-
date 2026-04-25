interface MatchBadgeProps {
  score: number;
}

export default function MatchBadge({ score }: MatchBadgeProps) {
  const normalizedScore = Math.max(0, Math.min(100, Math.round(score)));

  const colorClass =
    normalizedScore >= 80
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : normalizedScore >= 60
        ? "bg-amber-100 text-amber-700 border-amber-200"
        : "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${colorClass}`}>
      {normalizedScore}% match
    </span>
  );
}
