const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0
});

export function formatPrice(n: number): string {
  if (n >= 10000000) {
    const crores = n / 10000000;
    const value = crores >= 10 ? crores.toFixed(0) : crores.toFixed(1);
    return `₹${value} Cr`;
  }

  const lakhs = n / 100000;
  return `₹${lakhs.toFixed(2)} L`;
}

export function formatKm(n: number): string {
  return `${n} km/day`;
}

export function formatMileage(n: number): string {
  return `${n.toFixed(1)} kmpl`;
}

export function formatMonthly(n: number): string {
  return `₹${rupeeFormatter.format(Math.round(n))}/mo`;
}
