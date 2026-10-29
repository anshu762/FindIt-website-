export interface CarVariant {
  name: string;
  fuel: "Petrol" | "CNG" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic";
  transmissionDetail?: string; // e.g. "MT", "AMT", "AT", "e-CVT"
  price: string;
  priceNumeric: number;
}

export const CAR_VARIANTS_MAP: Record<string, CarVariant[]> = {
  "maruti-alto-k10": [
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹4.25 Lakh", priceNumeric: 425000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.00 Lakh", priceNumeric: 500000 },
    { name: "VXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹5.55 Lakh", priceNumeric: 555000 },
    { name: "VXI+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.35 Lakh", priceNumeric: 535000 },
    { name: "VXI+ AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹5.80 Lakh", priceNumeric: 580000 },
    { name: "LXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹5.70 Lakh", priceNumeric: 570000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹6.10 Lakh", priceNumeric: 610000 }
  ],
  "maruti-s-presso": [
    { name: "STD", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹4.30 Lakh", priceNumeric: 430000 },
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.05 Lakh", priceNumeric: 505000 },
    { name: "LXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹5.55 Lakh", priceNumeric: 555000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.45 Lakh", priceNumeric: 545000 },
    { name: "VXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹5.95 Lakh", priceNumeric: 595000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹6.25 Lakh", priceNumeric: 625000 }
  ],
  "maruti-celerio": [
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.65 Lakh", priceNumeric: 565000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.05 Lakh", priceNumeric: 605000 },
    { name: "VXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹6.55 Lakh", priceNumeric: 655000 },
    { name: "ZXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.45 Lakh", priceNumeric: 645000 },
    { name: "ZXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹6.95 Lakh", priceNumeric: 695000 },
    { name: "ZXI+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.90 Lakh", priceNumeric: 690000 },
    { name: "ZXI+ AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.35 Lakh", priceNumeric: 735000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹6.90 Lakh", priceNumeric: 690000 },
    { name: "ZXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.35 Lakh", priceNumeric: 735000 }
  ],
  "maruti-wagon-r": [
    { name: "LXI 1.0", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.70 Lakh", priceNumeric: 570000 },
    { name: "VXI 1.0", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.15 Lakh", priceNumeric: 615000 },
    { name: "VXI 1.0 AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹6.65 Lakh", priceNumeric: 665000 },
    { name: "ZXI 1.2", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.55 Lakh", priceNumeric: 655000 },
    { name: "ZXI 1.2 AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.05 Lakh", priceNumeric: 705000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹6.95 Lakh", priceNumeric: 695000 },
    { name: "ZXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.35 Lakh", priceNumeric: 735000 }
  ],
  "maruti-swift": [
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.50 Lakh", priceNumeric: 650000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.20 Lakh", priceNumeric: 720000 },
    { name: "VXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "ZXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "ZXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.65 Lakh", priceNumeric: 865000 },
    { name: "ZXI+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.80 Lakh", priceNumeric: 880000 },
    { name: "ZXI+ AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.30 Lakh", priceNumeric: 930000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.15 Lakh", priceNumeric: 815000 },
    { name: "ZXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.70 Lakh", priceNumeric: 870000 },
    { name: "Sport Edition", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "MT/AMT", price: "₹9.50 - 10.00 Lakh", priceNumeric: 1000000 }
  ],
  "maruti-baleno": [
    { name: "Sigma", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.80 Lakh", priceNumeric: 680000 },
    { name: "Delta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.50 Lakh", priceNumeric: 750000 },
    { name: "Delta AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.05 Lakh", priceNumeric: 805000 },
    { name: "Zeta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.35 Lakh", priceNumeric: 835000 },
    { name: "Zeta AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.90 Lakh", priceNumeric: 890000 },
    { name: "Alpha", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "Alpha AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.80 Lakh", priceNumeric: 980000 },
    { name: "Delta CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.45 Lakh", priceNumeric: 845000 },
    { name: "Zeta CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 }
  ],
  "maruti-ignis": [
    { name: "Sigma", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.10 Lakh", priceNumeric: 610000 },
    { name: "Delta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.75 Lakh", priceNumeric: 675000 },
    { name: "Delta AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.25 Lakh", priceNumeric: 725000 },
    { name: "Zeta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.20 Lakh", priceNumeric: 720000 },
    { name: "Zeta AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.70 Lakh", priceNumeric: 770000 },
    { name: "Alpha", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "Alpha AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.20 Lakh", priceNumeric: 820000 }
  ],
  "maruti-fronx": [
    { name: "Sigma 1.2", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.60 Lakh", priceNumeric: 760000 },
    { name: "Delta 1.2", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.30 Lakh", priceNumeric: 830000 },
    { name: "Delta 1.2 AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.90 Lakh", priceNumeric: 890000 },
    { name: "Delta+ 1.2", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "Delta+ 1.2 AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.70 Lakh", priceNumeric: 970000 },
    { name: "Zeta 1.0 Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "Zeta 1.0 Turbo AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹10.70 Lakh", priceNumeric: 1070000 },
    { name: "Alpha 1.0 Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "Alpha 1.0 Turbo AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹11.85 Lakh", priceNumeric: 1185000 },
    { name: "BoosterJet Turbo MT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 - 11.80 Lakh", priceNumeric: 1180000 },
    { name: "BoosterJet Turbo AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹11.50 - 13.20 Lakh", priceNumeric: 1320000 },
    { name: "Delta CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.25 Lakh", priceNumeric: 925000 },
    { name: "Zeta CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.35 Lakh", priceNumeric: 1035000 }
  ],
  "maruti-dzire": [
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.95 Lakh", priceNumeric: 695000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "VXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.30 Lakh", priceNumeric: 830000 },
    { name: "ZXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.65 Lakh", priceNumeric: 865000 },
    { name: "ZXI AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "ZXI+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.55 Lakh", priceNumeric: 955000 },
    { name: "ZXI+ AMT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.75 Lakh", priceNumeric: 875000 },
    { name: "ZXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.55 Lakh", priceNumeric: 955000 }
  ],
  "maruti-brezza": [
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.30 Lakh", priceNumeric: 830000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.40 Lakh", priceNumeric: 940000 },
    { name: "VXI AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "ZXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "ZXI AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹11.75 Lakh", priceNumeric: 1175000 },
    { name: "ZXI+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.60 Lakh", priceNumeric: 1160000 },
    { name: "ZXI+ AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹12.90 Lakh", priceNumeric: 1290000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.25 Lakh", priceNumeric: 1025000 },
    { name: "ZXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹11.40 Lakh", priceNumeric: 1140000 },
    { name: "Smart Hybrid trims", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "MT/AT", price: "₹10.80 - 13.20 Lakh", priceNumeric: 1320000 }
  ],
  "maruti-grand-vitara": [
    { name: "Sigma", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.00 Lakh", priceNumeric: 1100000 },
    { name: "Delta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.30 Lakh", priceNumeric: 1230000 },
    { name: "Delta AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "Zeta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.20 Lakh", priceNumeric: 1420000 },
    { name: "Zeta AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹15.30 Lakh", priceNumeric: 1530000 },
    { name: "Alpha", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "Alpha AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹16.80 Lakh", priceNumeric: 1680000 },
    { name: "Zeta+ Strong Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹18.20 Lakh", priceNumeric: 1820000 },
    { name: "Alpha+ Strong Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹19.80 Lakh", priceNumeric: 1980000 },
    { name: "Delta CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹13.25 Lakh", priceNumeric: 1325000 },
    { name: "Zeta CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹15.00 Lakh", priceNumeric: 1500000 }
  ],
  "maruti-jimny": [
    { name: "Zeta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "5MT", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "Zeta AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "4AT", price: "₹13.90 Lakh", priceNumeric: 1390000 },
    { name: "Alpha", fuel: "Petrol", transmission: "Manual", transmissionDetail: "5MT", price: "₹14.00 Lakh", priceNumeric: 1400000 },
    { name: "Alpha AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "4AT", price: "₹15.10 Lakh", priceNumeric: 1510000 }
  ],
  "maruti-ertiga": [
    { name: "LXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "VXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.20 Lakh", priceNumeric: 1020000 },
    { name: "VXI AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹11.30 Lakh", priceNumeric: 1130000 },
    { name: "ZXI", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.40 Lakh", priceNumeric: 1140000 },
    { name: "ZXI AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹12.40 Lakh", priceNumeric: 1240000 },
    { name: "ZXI+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.30 Lakh", priceNumeric: 1230000 },
    { name: "ZXI+ AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "VXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "ZXI CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹12.40 Lakh", priceNumeric: 1240000 }
  ],
  "maruti-xl6": [
    { name: "Zeta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.30 Lakh", priceNumeric: 1230000 },
    { name: "Zeta AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "Alpha", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.30 Lakh", priceNumeric: 1330000 },
    { name: "Alpha AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹14.40 Lakh", priceNumeric: 1440000 },
    { name: "Alpha+ AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "6AT", price: "₹15.10 Lakh", priceNumeric: 1510000 }
  ],
  "maruti-invicto": [
    { name: "Zeta+ 7-Seater", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹25.50 Lakh", priceNumeric: 2550000 },
    { name: "Alpha+ 7-Seater", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹29.20 Lakh", priceNumeric: 2920000 }
  ],
  "maruti-e-vitara": [
    { name: "Standard Range (49 kWh)", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single Speed", price: "₹15.99 Lakh", priceNumeric: 1599000 },
    { name: "Extended Range (60 kWh)", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single Speed", price: "₹17.49 Lakh", priceNumeric: 1749000 },
    { name: "Long Range + ADAS (60 kWh)", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single Speed", price: "₹19.79 Lakh", priceNumeric: 1979000 }
  ]
};

export function getVariantsBySlug(slug: string): CarVariant[] {
  return CAR_VARIANTS_MAP[slug] || [];
}
