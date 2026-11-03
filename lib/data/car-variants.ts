export interface CarVariant {
  name: string;
  fuel: "Petrol" | "CNG" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic";
  transmissionDetail?: string; // e.g. "MT", "AMT", "AT", "e-CVT"
  price: string;
  priceNumeric: number;
}

export const CAR_VARIANTS_MAP: Record<string, CarVariant[]> = {
  "honda-jazz": [
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "5-speed MT", price: "₹8.21 Lakh", priceNumeric: 821000 },
    { name: "VX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "5-speed MT", price: "₹8.80 Lakh", priceNumeric: 880000 },
    { name: "ZX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "5-speed MT", price: "₹9.89 Lakh", priceNumeric: 989000 }
  ],
  "force-gurkha-2-6-diesel-3-door": [
    { name: "3-Door 4x4", fuel: "Diesel", transmission: "Manual", transmissionDetail: "5-speed MT", price: "₹16.75 Lakh", priceNumeric: 1675000 }
  ],
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
  ],
  "hyundai-grand-i10-nios": [
    { name: "Era", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.95 Lakh", priceNumeric: 595000 },
    { name: "Era CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.05 Lakh", priceNumeric: 705000 },
    { name: "Magna", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.65 Lakh", priceNumeric: 665000 },
    { name: "Magna", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.20 Lakh", priceNumeric: 720000 },
    { name: "Magna CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.65 Lakh", priceNumeric: 765000 },
    { name: "Sportz", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.35 Lakh", priceNumeric: 735000 },
    { name: "Sportz", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.95 Lakh", priceNumeric: 795000 },
    { name: "Sportz CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.15 Lakh", priceNumeric: 815000 },
    { name: "Asta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "Asta", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.70 Lakh", priceNumeric: 870000 }
  ],
  "hyundai-i20": [
    { name: "Magna", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.45 Lakh", priceNumeric: 745000 },
    { name: "Magna", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹8.35 Lakh", priceNumeric: 835000 },
    { name: "Sportz", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "Sportz", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "Asta", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.25 Lakh", priceNumeric: 925000 },
    { name: "Asta", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹10.20 Lakh", priceNumeric: 1020000 },
    { name: "Asta (O)", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "Asta (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹11.15 Lakh", priceNumeric: 1115000 },
    { name: "N Line", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "N Line", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹12.40 Lakh", priceNumeric: 1240000 }
  ],
  "hyundai-exter": [
    { name: "EX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.20 Lakh", priceNumeric: 620000 },
    { name: "EX CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.40 Lakh", priceNumeric: 740000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.10 Lakh", priceNumeric: 710000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "S CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.05 Lakh", priceNumeric: 805000 },
    { name: "SX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.15 Lakh", priceNumeric: 815000 },
    { name: "SX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "SX CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.05 Lakh", priceNumeric: 905000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.95 Lakh", priceNumeric: 895000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.65 Lakh", priceNumeric: 965000 },
    { name: "SX (O) CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.80 Lakh", priceNumeric: 980000 }
  ],
  "hyundai-aura": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.60 Lakh", priceNumeric: 660000 },
    { name: "E CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.35 Lakh", priceNumeric: 735000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.95 Lakh", priceNumeric: 795000 },
    { name: "S CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.30 Lakh", priceNumeric: 830000 },
    { name: "SX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.15 Lakh", priceNumeric: 815000 },
    { name: "SX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "SX CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.05 Lakh", priceNumeric: 905000 },
    { name: "SX+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.95 Lakh", priceNumeric: 895000 },
    { name: "SX+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.60 Lakh", priceNumeric: 960000 }
  ],
  "hyundai-verna": [
    { name: "EX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.10 Lakh", priceNumeric: 1210000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹13.25 Lakh", priceNumeric: 1325000 },
    { name: "SX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "SX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹14.60 Lakh", priceNumeric: 1460000 },
    { name: "SX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹15.80 Lakh", priceNumeric: 1580000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.80 Lakh", priceNumeric: 1480000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹15.95 Lakh", priceNumeric: 1595000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹17.40 Lakh", priceNumeric: 1740000 },
    { name: "Turbo 1.5T", fuel: "Petrol", transmission: "Manual", transmissionDetail: "6MT", price: "₹16.10 Lakh", priceNumeric: 1610000 },
    { name: "Turbo 1.5T", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7DCT", price: "₹17.80 Lakh", priceNumeric: 1780000 }
  ],
  "hyundai-venue": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.95 Lakh", priceNumeric: 795000 },
    { name: "E", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹9.40 Lakh", priceNumeric: 940000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.45 Lakh", priceNumeric: 945000 },
    { name: "S", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "S+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.60 Lakh", priceNumeric: 960000 },
    { name: "S+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹10.80 Lakh", priceNumeric: 1080000 },
    { name: "SX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.90 Lakh", priceNumeric: 1090000 },
    { name: "SX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹12.10 Lakh", priceNumeric: 1210000 },
    { name: "SX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "SX (O)", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.60 Lakh", priceNumeric: 1360000 },
    { name: "N Line", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "N Line", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹14.80 Lakh", priceNumeric: 1480000 }
  ],
  "hyundai-creta": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "E", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.10 Lakh", priceNumeric: 1310000 },
    { name: "EX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.50 Lakh", priceNumeric: 1250000 },
    { name: "EX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.80 Lakh", priceNumeric: 1380000 },
    { name: "EX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "EX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.30 Lakh", priceNumeric: 1530000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.45 Lakh", priceNumeric: 1345000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹14.75 Lakh", priceNumeric: 1475000 },
    { name: "S", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.10 Lakh", priceNumeric: 1510000 },
    { name: "S", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.50 Lakh", priceNumeric: 1650000 },
    { name: "SX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.20 Lakh", priceNumeric: 1520000 },
    { name: "SX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹16.50 Lakh", priceNumeric: 1650000 },
    { name: "SX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹17.90 Lakh", priceNumeric: 1790000 },
    { name: "SX Tech", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹17.20 Lakh", priceNumeric: 1720000 },
    { name: "SX Tech", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.40 Lakh", priceNumeric: 1840000 },
    { name: "SX (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "IVT", price: "₹18.30 Lakh", priceNumeric: 1830000 },
    { name: "SX (O)", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.60 Lakh", priceNumeric: 1960000 },
    { name: "N Line", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹20.20 Lakh", priceNumeric: 2020000 }
  ],
  "hyundai-creta-electric": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹17.50 Lakh", priceNumeric: 1750000 },
    { name: "Extended Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹20.20 Lakh", priceNumeric: 2020000 },
    { name: "Long Range + ADAS", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹23.50 Lakh", priceNumeric: 2350000 }
  ],
  "hyundai-alcazar": [
    { name: "Prestige", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹16.80 Lakh", priceNumeric: 1680000 },
    { name: "Prestige", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹18.20 Lakh", priceNumeric: 1820000 },
    { name: "Prestige", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.50 Lakh", priceNumeric: 1950000 },
    { name: "Platinum", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹18.50 Lakh", priceNumeric: 1850000 },
    { name: "Platinum", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.80 Lakh", priceNumeric: 1980000 },
    { name: "Platinum", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.90 Lakh", priceNumeric: 2090000 },
    { name: "Platinum (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.60 Lakh", priceNumeric: 2060000 },
    { name: "Platinum (O)", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹21.80 Lakh", priceNumeric: 2180000 },
    { name: "Signature", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹21.50 Lakh", priceNumeric: 2150000 },
    { name: "Signature", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹22.80 Lakh", priceNumeric: 2280000 }
  ],
  "hyundai-tucson": [
    { name: "Platinum", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹30.50 Lakh", priceNumeric: 3050000 },
    { name: "Signature", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹35.20 Lakh", priceNumeric: 3520000 },
    { name: "Signature AWD", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹37.50 Lakh", priceNumeric: 3750000 }
  ],
  "hyundai-ioniq-5": [
    { name: "RWD Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹44.50 Lakh", priceNumeric: 4450000 },
    { name: "RWD Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹48.90 Lakh", priceNumeric: 4890000 },
    { name: "Tech Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹52.00 Lakh", priceNumeric: 5200000 }
  ],
  "tata-tiago": [
    { name: "XE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.75 Lakh", priceNumeric: 575000 },
    { name: "XE CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹6.80 Lakh", priceNumeric: 680000 },
    { name: "XM", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.30 Lakh", priceNumeric: 630000 },
    { name: "XM", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹6.85 Lakh", priceNumeric: 685000 },
    { name: "XM CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.25 Lakh", priceNumeric: 725000 },
    { name: "XT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.85 Lakh", priceNumeric: 685000 },
    { name: "XT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.45 Lakh", priceNumeric: 745000 },
    { name: "XT CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "XZ", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.30 Lakh", priceNumeric: 730000 },
    { name: "XZ", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.95 Lakh", priceNumeric: 795000 },
    { name: "XZ CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "XZ+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.85 Lakh", priceNumeric: 785000 },
    { name: "XZ+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.45 Lakh", priceNumeric: 845000 },
    { name: "XZ+ CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.65 Lakh", priceNumeric: 865000 }
  ],
  "tata-tiago-ev": [
    { name: "XE MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹8.80 Lakh", priceNumeric: 880000 },
    { name: "XT MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹9.60 Lakh", priceNumeric: 960000 },
    { name: "XZ+ MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹10.40 Lakh", priceNumeric: 1040000 },
    { name: "XT LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹11.10 Lakh", priceNumeric: 1110000 },
    { name: "XZ+ LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹12.30 Lakh", priceNumeric: 1230000 },
    { name: "Tech Pack Fast Charge", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹13.00 Lakh", priceNumeric: 1300000 }
  ],
  "tata-altroz": [
    { name: "XE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.95 Lakh", priceNumeric: 695000 },
    { name: "XE", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹8.45 Lakh", priceNumeric: 845000 },
    { name: "XE", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.90 Lakh", priceNumeric: 790000 },
    { name: "XM", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.55 Lakh", priceNumeric: 755000 },
    { name: "XM", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.30 Lakh", priceNumeric: 830000 },
    { name: "XT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "XT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "XT", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "XZ", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "XZ", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹9.95 Lakh", priceNumeric: 995000 },
    { name: "XZ", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.45 Lakh", priceNumeric: 945000 },
    { name: "XZ+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.45 Lakh", priceNumeric: 945000 },
    { name: "XZ+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹10.60 Lakh", priceNumeric: 1060000 },
    { name: "XZ+", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "Racer Edition", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.50 Lakh", priceNumeric: 1250000 }
  ],
  "tata-altroz-ev": [
    { name: "Base EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹12.50 Lakh", priceNumeric: 1250000 },
    { name: "Mid EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹14.20 Lakh", priceNumeric: 1420000 },
    { name: "Long Range EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹16.10 Lakh", priceNumeric: 1610000 }
  ],
  "tata-tigor": [
    { name: "XE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.40 Lakh", priceNumeric: 640000 },
    { name: "XE", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.45 Lakh", priceNumeric: 745000 },
    { name: "XM", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.05 Lakh", priceNumeric: 705000 },
    { name: "XM", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.60 Lakh", priceNumeric: 760000 },
    { name: "XM", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.90 Lakh", priceNumeric: 790000 },
    { name: "XT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.55 Lakh", priceNumeric: 755000 },
    { name: "XT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "XT", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.35 Lakh", priceNumeric: 835000 },
    { name: "XZ", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.05 Lakh", priceNumeric: 805000 },
    { name: "XZ", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.65 Lakh", priceNumeric: 865000 },
    { name: "XZ", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "XZ+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.55 Lakh", priceNumeric: 855000 },
    { name: "XZ+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "XZ+", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.35 Lakh", priceNumeric: 935000 }
  ],
  "tata-tigor-ev": [
    { name: "XE MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹12.60 Lakh", priceNumeric: 1260000 },
    { name: "XT MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹13.50 Lakh", priceNumeric: 1350000 },
    { name: "XZ+ MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹14.30 Lakh", priceNumeric: 1430000 },
    { name: "XT LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹15.10 Lakh", priceNumeric: 1510000 },
    { name: "XZ+ LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹16.20 Lakh", priceNumeric: 1620000 }
  ],
  "tata-punch": [
    { name: "Pure", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.40 Lakh", priceNumeric: 640000 },
    { name: "Pure", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹7.45 Lakh", priceNumeric: 745000 },
    { name: "Adventure", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.25 Lakh", priceNumeric: 725000 },
    { name: "Adventure", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.85 Lakh", priceNumeric: 785000 },
    { name: "Adventure", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.15 Lakh", priceNumeric: 815000 },
    { name: "Accomplished", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.20 Lakh", priceNumeric: 820000 },
    { name: "Accomplished", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.90 Lakh", priceNumeric: 890000 },
    { name: "Accomplished", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.05 Lakh", priceNumeric: 905000 },
    { name: "Creative", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "Creative", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.80 Lakh", priceNumeric: 980000 },
    { name: "Creative", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 }
  ],
  "tata-punch-ev": [
    { name: "Adventure MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹10.80 Lakh", priceNumeric: 1080000 },
    { name: "Adventure LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹12.10 Lakh", priceNumeric: 1210000 },
    { name: "Empowered MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹12.40 Lakh", priceNumeric: 1240000 },
    { name: "Empowered+ LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹13.90 Lakh", priceNumeric: 1390000 },
    { name: "Tech Luxe", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹15.20 Lakh", priceNumeric: 1520000 }
  ],
  "tata-nexon": [
    { name: "Smart", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.50 Lakh", priceNumeric: 850000 },
    { name: "Smart", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "Smart", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.30 Lakh", priceNumeric: 930000 },
    { name: "Pure", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "Pure", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.95 Lakh", priceNumeric: 995000 },
    { name: "Pure", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.95 Lakh", priceNumeric: 1095000 },
    { name: "Pure", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AMT", price: "₹11.80 Lakh", priceNumeric: 1180000 },
    { name: "Pure", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "Creative", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.40 Lakh", priceNumeric: 1040000 },
    { name: "Creative", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹11.60 Lakh", priceNumeric: 1160000 },
    { name: "Creative", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "Fearless", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.80 Lakh", priceNumeric: 1180000 },
    { name: "Fearless", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹13.10 Lakh", priceNumeric: 1310000 },
    { name: "Fearless", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.20 Lakh", priceNumeric: 1420000 },
    { name: "Fearless+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "Fearless+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.30 Lakh", priceNumeric: 1530000 }
  ],
  "tata-nexon-ev": [
    { name: "MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹15.10 Lakh", priceNumeric: 1510000 },
    { name: "Empowered MR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹16.20 Lakh", priceNumeric: 1620000 },
    { name: "Empowered+ LR", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹18.40 Lakh", priceNumeric: 1840000 },
    { name: "Dark Edition", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹19.10 Lakh", priceNumeric: 1910000 }
  ],
  "tata-curvv": [
    { name: "Smart", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "Smart", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "Pure", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "Pure", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹13.60 Lakh", priceNumeric: 1360000 },
    { name: "Pure", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.90 Lakh", priceNumeric: 1390000 },
    { name: "Creative", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹14.90 Lakh", priceNumeric: 1490000 },
    { name: "Creative", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "DCT", price: "₹15.80 Lakh", priceNumeric: 1580000 },
    { name: "Fearless", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹16.40 Lakh", priceNumeric: 1640000 },
    { name: "Fearless+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹17.60 Lakh", priceNumeric: 1760000 }
  ],
  "tata-curvv-ev": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹17.50 Lakh", priceNumeric: 1750000 },
    { name: "Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹20.20 Lakh", priceNumeric: 2020000 },
    { name: "Fearless Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹21.50 Lakh", priceNumeric: 2150000 },
    { name: "Empowered Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹23.10 Lakh", priceNumeric: 2310000 },
    { name: "Tech Luxe Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹24.80 Lakh", priceNumeric: 2480000 }
  ],
  "tata-harrier": [
    { name: "Smart", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "Pure", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹17.20 Lakh", priceNumeric: 1720000 },
    { name: "Pure", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.50 Lakh", priceNumeric: 1850000 },
    { name: "Adventure", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹19.10 Lakh", priceNumeric: 1910000 },
    { name: "Adventure", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.40 Lakh", priceNumeric: 2040000 },
    { name: "Fearless", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹21.20 Lakh", priceNumeric: 2120000 },
    { name: "Fearless", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹22.60 Lakh", priceNumeric: 2260000 },
    { name: "Fearless+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹24.20 Lakh", priceNumeric: 2420000 }
  ],
  "tata-harrier-ev": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹24.50 Lakh", priceNumeric: 2450000 },
    { name: "Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹27.80 Lakh", priceNumeric: 2780000 },
    { name: "Adventure", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹29.10 Lakh", priceNumeric: 2910000 },
    { name: "Fearless", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹31.40 Lakh", priceNumeric: 3140000 },
    { name: "Empowered AWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹34.80 Lakh", priceNumeric: 3480000 }
  ],
  "tata-safari": [
    { name: "Smart", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹16.50 Lakh", priceNumeric: 1650000 },
    { name: "Pure", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹18.10 Lakh", priceNumeric: 1810000 },
    { name: "Pure", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.40 Lakh", priceNumeric: 1940000 },
    { name: "Adventure", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹20.10 Lakh", priceNumeric: 2010000 },
    { name: "Adventure", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹21.50 Lakh", priceNumeric: 2150000 },
    { name: "Fearless", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹22.40 Lakh", priceNumeric: 2240000 },
    { name: "Fearless", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹23.80 Lakh", priceNumeric: 2380000 },
    { name: "Accomplished", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹25.60 Lakh", priceNumeric: 2560000 }
  ],
  "tata-sierra": [
    { name: "Base Petrol", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.50 Lakh", priceNumeric: 1250000 },
    { name: "Mid Petrol", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹14.80 Lakh", priceNumeric: 1480000 },
    { name: "Diesel Mid", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "Diesel Top", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.20 Lakh", priceNumeric: 1820000 }
  ],
  "tata-sierra-ev": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹22.50 Lakh", priceNumeric: 2250000 },
    { name: "Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹25.80 Lakh", priceNumeric: 2580000 },
    { name: "Premium Tech Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹29.50 Lakh", priceNumeric: 2950000 }
  ],
  "mahindra-bolero": [
    { name: "B4", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹9.90 Lakh", priceNumeric: 990000 },
    { name: "B6", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.80 Lakh", priceNumeric: 1080000 },
    { name: "B6 (O)", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹11.30 Lakh", priceNumeric: 1130000 },
    { name: "B6 Plus", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.10 Lakh", priceNumeric: 1210000 },
    { name: "B6 Plus (O)", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.70 Lakh", priceNumeric: 1270000 }
  ],
  "mahindra-bolero-neo": [
    { name: "N4", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "N8", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹11.80 Lakh", priceNumeric: 1180000 },
    { name: "N10", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "N10 (O)", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.50 Lakh", priceNumeric: 1350000 }
  ],
  "mahindra-xuv-3xo": [
    { name: "MX1", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.90 Lakh", priceNumeric: 790000 },
    { name: "MX1", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "MX2", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.70 Lakh", priceNumeric: 870000 },
    { name: "MX2", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "MX2 Pro", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "MX2 Pro", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.60 Lakh", priceNumeric: 1060000 },
    { name: "MX3", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.90 Lakh", priceNumeric: 990000 },
    { name: "MX3", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "MX3", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹11.10 Lakh", priceNumeric: 1110000 },
    { name: "AX5", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "AX5", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹12.50 Lakh", priceNumeric: 1250000 },
    { name: "AX5", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.40 Lakh", priceNumeric: 1240000 },
    { name: "AX5 L", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "AX7", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.60 Lakh", priceNumeric: 1460000 },
    { name: "AX7", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "AX7 L", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.20 Lakh", priceNumeric: 1620000 },
    { name: "AX7 L", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹17.10 Lakh", priceNumeric: 1710000 }
  ],
  "mahindra-xuv-3xo-ev": [
    { name: "Base EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹14.50 Lakh", priceNumeric: 1450000 },
    { name: "Mid EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹16.80 Lakh", priceNumeric: 1680000 },
    { name: "Long Range EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹19.40 Lakh", priceNumeric: 1940000 },
    { name: "Tech Pack EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹21.20 Lakh", priceNumeric: 2120000 }
  ],
  "mahindra-scorpio-classic": [
    { name: "S", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.60 Lakh", priceNumeric: 1360000 },
    { name: "S11", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹17.20 Lakh", priceNumeric: 1720000 }
  ],
  "mahindra-scorpio-n": [
    { name: "Z2", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.20 Lakh", priceNumeric: 1420000 },
    { name: "Z2", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.40 Lakh", priceNumeric: 1540000 },
    { name: "Z4", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.60 Lakh", priceNumeric: 1560000 },
    { name: "Z4", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹16.90 Lakh", priceNumeric: 1690000 },
    { name: "Z6", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹17.10 Lakh", priceNumeric: 1710000 },
    { name: "Z6", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.50 Lakh", priceNumeric: 1850000 },
    { name: "Z6", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹18.40 Lakh", priceNumeric: 1840000 },
    { name: "Z6", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.80 Lakh", priceNumeric: 1980000 },
    { name: "Z8", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹19.20 Lakh", priceNumeric: 1920000 },
    { name: "Z8", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.90 Lakh", priceNumeric: 2090000 },
    { name: "Z8", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹20.40 Lakh", priceNumeric: 2040000 },
    { name: "Z8", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹22.10 Lakh", priceNumeric: 2210000 },
    { name: "Z8 L", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹23.20 Lakh", priceNumeric: 2320000 },
    { name: "Z8 L", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹24.50 Lakh", priceNumeric: 2450000 },
    { name: "Z8 L 4WD", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹26.20 Lakh", priceNumeric: 2620000 }
  ],
  "mahindra-xuv700": [
    { name: "MX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.50 Lakh", priceNumeric: 1450000 },
    { name: "MX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.90 Lakh", priceNumeric: 1590000 },
    { name: "AX3", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹16.10 Lakh", priceNumeric: 1610000 },
    { name: "AX3", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹17.50 Lakh", priceNumeric: 1750000 },
    { name: "AX5", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹17.80 Lakh", priceNumeric: 1780000 },
    { name: "AX5", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.30 Lakh", priceNumeric: 1930000 },
    { name: "AX5", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹19.10 Lakh", priceNumeric: 1910000 },
    { name: "AX5", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.60 Lakh", priceNumeric: 2060000 },
    { name: "AX5 S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.20 Lakh", priceNumeric: 2020000 },
    { name: "AX7", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹22.40 Lakh", priceNumeric: 2240000 },
    { name: "AX7", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹23.90 Lakh", priceNumeric: 2390000 },
    { name: "AX7 AWD", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹25.20 Lakh", priceNumeric: 2520000 },
    { name: "AX7 L", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹24.10 Lakh", priceNumeric: 2410000 },
    { name: "AX7 L", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹25.60 Lakh", priceNumeric: 2560000 },
    { name: "AX7 L AWD", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹27.20 Lakh", priceNumeric: 2720000 }
  ],
  "mahindra-xev-9s": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹24.50 Lakh", priceNumeric: 2450000 },
    { name: "Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹28.20 Lakh", priceNumeric: 2820000 },
    { name: "AWD Dual Motor", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹31.80 Lakh", priceNumeric: 3180000 },
    { name: "Luxury Tech Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹34.50 Lakh", priceNumeric: 3450000 },
    { name: "ADAS Level 2+", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹36.20 Lakh", priceNumeric: 3620000 },
    { name: "Base EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹34.50 Lakh", priceNumeric: 3450000 },
    { name: "Mid EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹38.20 Lakh", priceNumeric: 3820000 },
    { name: "Long Range EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹42.80 Lakh", priceNumeric: 4280000 },
    { name: "Premium AWD", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹46.50 Lakh", priceNumeric: 4650000 }
  ],
  "mahindra-thar": [
    { name: "AX Hard Top", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.80 Lakh", priceNumeric: 1180000 },
    { name: "AX Hard Top", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.60 Lakh", priceNumeric: 1260000 },
    { name: "LX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.50 Lakh", priceNumeric: 1350000 },
    { name: "LX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.10 Lakh", priceNumeric: 1510000 },
    { name: "LX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹14.40 Lakh", priceNumeric: 1440000 },
    { name: "LX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.20 Lakh", priceNumeric: 1620000 },
    { name: "LX Convertible", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.80 Lakh", priceNumeric: 1680000 },
    { name: "LX Convertible", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹17.50 Lakh", priceNumeric: 1750000 },
    { name: "RWD Diesel", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.80 Lakh", priceNumeric: 1380000 },
    { name: "4WD Diesel", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.50 Lakh", priceNumeric: 1850000 }
  ],
  "mahindra-thar-roxx": [
    { name: "MX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.80 Lakh", priceNumeric: 1480000 },
    { name: "MX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.90 Lakh", priceNumeric: 1590000 },
    { name: "AX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹16.40 Lakh", priceNumeric: 1640000 },
    { name: "AX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹17.60 Lakh", priceNumeric: 1760000 },
    { name: "LX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.20 Lakh", priceNumeric: 1920000 },
    { name: "LX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.80 Lakh", priceNumeric: 2080000 },
    { name: "LX (O)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹21.40 Lakh", priceNumeric: 2140000 },
    { name: "LX (O)", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹22.80 Lakh", priceNumeric: 2280000 },
    { name: "LX 4WD", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹24.50 Lakh", priceNumeric: 2450000 }
  ],
  "mahindra-be-6": [
    { name: "Base EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹18.90 Lakh", priceNumeric: 1890000 },
    { name: "Mid EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹21.50 Lakh", priceNumeric: 2150000 },
    { name: "Long Range EV", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹24.80 Lakh", priceNumeric: 2480000 },
    { name: "AWD Dual Motor", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹27.60 Lakh", priceNumeric: 2760000 },
    { name: "Performance Pack", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹29.20 Lakh", priceNumeric: 2920000 },
    { name: "Tech Luxe + ADAS", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹31.80 Lakh", priceNumeric: 3180000 }
  ],
  "mahindra-xev-9e": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹26.50 Lakh", priceNumeric: 2650000 },
    { name: "Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹30.20 Lakh", priceNumeric: 3020000 },
    { name: "AWD Dual Motor", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹33.80 Lakh", priceNumeric: 3380000 },
    { name: "Luxury Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹36.50 Lakh", priceNumeric: 3650000 },
    { name: "ADAS Tech Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹38.20 Lakh", priceNumeric: 3820000 }
  ],
  "mahindra-marazzo": [
    { name: "M2", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "M4", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹15.40 Lakh", priceNumeric: 1540000 },
    { name: "M6", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹16.80 Lakh", priceNumeric: 1680000 }
  ],
  "kia-sonet": [
    { name: "HTE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.20 Lakh", priceNumeric: 820000 },
    { name: "HTE", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹9.70 Lakh", priceNumeric: 970000 },
    { name: "HTK", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "HTK", fuel: "Petrol", transmission: "Manual", transmissionDetail: "iMT", price: "₹9.80 Lakh", priceNumeric: 980000 },
    { name: "HTK", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹10.60 Lakh", priceNumeric: 1060000 },
    { name: "HTK+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "HTK+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "HTK+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "HTX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.40 Lakh", priceNumeric: 1140000 },
    { name: "HTX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "HTX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.70 Lakh", priceNumeric: 1270000 },
    { name: "HTX+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹13.90 Lakh", priceNumeric: 1390000 },
    { name: "HTX+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.80 Lakh", priceNumeric: 1480000 },
    { name: "GTX+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "GTX+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.20 Lakh", priceNumeric: 1620000 },
    { name: "X-Line", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.90 Lakh", priceNumeric: 1690000 }
  ],
  "kia-syros": [
    { name: "Base", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.80 Lakh", priceNumeric: 980000 },
    { name: "Mid", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.80 Lakh", priceNumeric: 1080000 },
    { name: "Mid", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹11.90 Lakh", priceNumeric: 1190000 },
    { name: "Upper Mid", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.40 Lakh", priceNumeric: 1240000 },
    { name: "Upper Mid", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.50 Lakh", priceNumeric: 1350000 },
    { name: "Top", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.20 Lakh", priceNumeric: 1520000 },
    { name: "Tech Pack", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.40 Lakh", priceNumeric: 1640000 }
  ],
  "kia-seltos": [
    { name: "HTE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "HTE", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹12.90 Lakh", priceNumeric: 1290000 },
    { name: "HTK", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.40 Lakh", priceNumeric: 1240000 },
    { name: "HTK", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "HTK+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "HTK+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹14.90 Lakh", priceNumeric: 1490000 },
    { name: "HTK+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.80 Lakh", priceNumeric: 1580000 },
    { name: "HTX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.10 Lakh", priceNumeric: 1510000 },
    { name: "HTX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹16.40 Lakh", priceNumeric: 1640000 },
    { name: "HTX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹17.30 Lakh", priceNumeric: 1730000 },
    { name: "HTX+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹17.60 Lakh", priceNumeric: 1760000 },
    { name: "HTX+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.40 Lakh", priceNumeric: 1840000 },
    { name: "GTX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹18.90 Lakh", priceNumeric: 1890000 },
    { name: "GTX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.50 Lakh", priceNumeric: 1950000 },
    { name: "GTX+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹20.40 Lakh", priceNumeric: 2040000 },
    { name: "GTX+", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹21.10 Lakh", priceNumeric: 2110000 },
    { name: "X-Line", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹22.20 Lakh", priceNumeric: 2220000 }
  ],
  "kia-carens": [
    { name: "Premium", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.80 Lakh", priceNumeric: 1180000 },
    { name: "Premium", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "Prestige", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "Prestige", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹14.60 Lakh", priceNumeric: 1460000 },
    { name: "Prestige", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "Prestige Plus", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹15.80 Lakh", priceNumeric: 1580000 },
    { name: "Prestige Plus", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.80 Lakh", priceNumeric: 1680000 },
    { name: "Luxury", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹17.20 Lakh", priceNumeric: 1720000 },
    { name: "Luxury", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹18.40 Lakh", priceNumeric: 1840000 },
    { name: "Luxury Plus", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹19.10 Lakh", priceNumeric: 1910000 },
    { name: "Luxury Plus", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹20.20 Lakh", priceNumeric: 2020000 }
  ],
  "kia-carens-clavis": [
    { name: "Base", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.50 Lakh", priceNumeric: 1350000 },
    { name: "Mid", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹15.20 Lakh", priceNumeric: 1520000 },
    { name: "Mid", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.40 Lakh", priceNumeric: 1640000 },
    { name: "Top", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹18.10 Lakh", priceNumeric: 1810000 },
    { name: "Top", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹19.40 Lakh", priceNumeric: 1940000 },
    { name: "Tech Pack", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DCT", price: "₹20.20 Lakh", priceNumeric: 2020000 }
  ],
  "kia-carnival": [
    { name: "Limousine", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹42.50 Lakh", priceNumeric: 4250000 },
    { name: "Prestige", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹47.80 Lakh", priceNumeric: 4780000 },
    { name: "Limousine Plus", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹53.20 Lakh", priceNumeric: 5320000 }
  ],
  "kia-ev6": [
    { name: "RWD Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹58.50 Lakh", priceNumeric: 5850000 },
    { name: "RWD Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹64.20 Lakh", priceNumeric: 6420000 },
    { name: "AWD Dual Motor GT Line", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹71.50 Lakh", priceNumeric: 7150000 },
    { name: "GT AWD Performance", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹82.00 Lakh", priceNumeric: 8200000 }
  ],
  "kia-ev9": [
    { name: "Standard Range RWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹82.00 Lakh", priceNumeric: 8200000 },
    { name: "Long Range RWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹89.50 Lakh", priceNumeric: 8950000 },
    { name: "AWD Dual Motor", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹96.80 Lakh", priceNumeric: 9680000 },
    { name: "GT Line AWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Automatic", price: "₹1.08 Cr", priceNumeric: 10800000 }
  ],
  "honda-amaze": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.80 Lakh", priceNumeric: 780000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.70 Lakh", priceNumeric: 870000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹9.80 Lakh", priceNumeric: 980000 },
    { name: "VX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.60 Lakh", priceNumeric: 960000 },
    { name: "VX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹10.70 Lakh", priceNumeric: 1070000 },
    { name: "ZX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.40 Lakh", priceNumeric: 1040000 },
    { name: "ZX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "S CNG*", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.40 Lakh", priceNumeric: 940000 },
    { name: "VX CNG*", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.30 Lakh", priceNumeric: 1030000 }
  ],
  "honda-city": [
    { name: "SV", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.10 Lakh", priceNumeric: 1310000 },
    { name: "V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.40 Lakh", priceNumeric: 1440000 },
    { name: "VX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.30 Lakh", priceNumeric: 1430000 },
    { name: "VX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹15.60 Lakh", priceNumeric: 1560000 },
    { name: "ZX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.40 Lakh", priceNumeric: 1540000 },
    { name: "ZX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹16.80 Lakh", priceNumeric: 1680000 }
  ],
  "honda-city-ehev": [
    { name: "ZX Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹20.80 Lakh", priceNumeric: 2080000 }
  ],
  "honda-elevate": [
    { name: "SV", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.60 Lakh", priceNumeric: 1160000 },
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.90 Lakh", priceNumeric: 1290000 },
    { name: "V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.20 Lakh", priceNumeric: 1420000 },
    { name: "VX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.40 Lakh", priceNumeric: 1440000 },
    { name: "VX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹15.80 Lakh", priceNumeric: 1580000 },
    { name: "ZX", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.90 Lakh", priceNumeric: 1590000 },
    { name: "ZX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹17.20 Lakh", priceNumeric: 1720000 }
  ],
  "toyota-glanza": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.60 Lakh", priceNumeric: 660000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.45 Lakh", priceNumeric: 745000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.00 Lakh", priceNumeric: 800000 },
    { name: "G", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.35 Lakh", priceNumeric: 835000 },
    { name: "G", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.90 Lakh", priceNumeric: 890000 },
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.65 Lakh", priceNumeric: 965000 },
    { name: "S CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹8.45 Lakh", priceNumeric: 845000 },
    { name: "G CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.35 Lakh", priceNumeric: 935000 }
  ],
  "toyota-urban-cruiser-taisor": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.80 Lakh", priceNumeric: 780000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.70 Lakh", priceNumeric: 870000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.25 Lakh", priceNumeric: 925000 },
    { name: "G", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.10 Lakh", priceNumeric: 1010000 },
    { name: "G", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹10.85 Lakh", priceNumeric: 1085000 },
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.10 Lakh", priceNumeric: 1110000 },
    { name: "V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹11.90 Lakh", priceNumeric: 1190000 },
    { name: "Turbo G", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.40 Lakh", priceNumeric: 1140000 },
    { name: "Turbo V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹12.60 Lakh", priceNumeric: 1260000 },
    { name: "S CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹9.60 Lakh", priceNumeric: 960000 },
    { name: "G CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 Lakh", priceNumeric: 1050000 }
  ],
  "toyota-rumion": [
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.60 Lakh", priceNumeric: 1060000 },
    { name: "G", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.80 Lakh", priceNumeric: 1180000 },
    { name: "G", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.10 Lakh", priceNumeric: 1310000 },
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.60 Lakh", priceNumeric: 1260000 },
    { name: "V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.90 Lakh", priceNumeric: 1390000 },
    { name: "S CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹11.70 Lakh", priceNumeric: 1170000 },
    { name: "G CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹12.60 Lakh", priceNumeric: 1260000 }
  ],
  "toyota-urban-cruiser-hyryder": [
    { name: "E", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.99 Lakh", priceNumeric: 1099000 },
    { name: "S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.55 Lakh", priceNumeric: 1255000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.80 Lakh", priceNumeric: 1380000 },
    { name: "S CNG", fuel: "CNG", transmission: "Manual", transmissionDetail: "MT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "G", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.30 Lakh", priceNumeric: 1430000 },
    { name: "G", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.40 Lakh", priceNumeric: 1540000 },
    { name: "G Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹18.70 Lakh", priceNumeric: 1870000 },
    { name: "V", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹16.00 Lakh", priceNumeric: 1600000 },
    { name: "V", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹17.20 Lakh", priceNumeric: 1720000 },
    { name: "V AWD", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹17.60 Lakh", priceNumeric: 1760000 },
    { name: "V Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹20.00 Lakh", priceNumeric: 2000000 }
  ],
  "toyota-fortuner": [
    { name: "4x2 MT", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹35.00 Lakh", priceNumeric: 3500000 },
    { name: "4x2 AT", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹37.60 Lakh", priceNumeric: 3760000 },
    { name: "4x4 MT", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹40.20 Lakh", priceNumeric: 4020000 },
    { name: "4x4 AT", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹42.80 Lakh", priceNumeric: 4280000 },
    { name: "Petrol MT*", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹34.50 Lakh", priceNumeric: 3450000 },
    { name: "Petrol AT*", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹36.90 Lakh", priceNumeric: 3690000 }
  ],
  "toyota-fortuner-legender": [
    { name: "4x2 AT", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹44.20 Lakh", priceNumeric: 4420000 },
    { name: "4x4 AT", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹48.20 Lakh", priceNumeric: 4820000 }
  ],
  "toyota-hilux": [
    { name: "STD", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹30.40 Lakh", priceNumeric: 3040000 },
    { name: "High", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹35.20 Lakh", priceNumeric: 3520000 },
    { name: "High", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹37.80 Lakh", priceNumeric: 3780000 }
  ],
  "toyota-innova-crysta": [
    { name: "GX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹19.20 Lakh", priceNumeric: 1920000 },
    { name: "GX+", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹20.30 Lakh", priceNumeric: 2030000 },
    { name: "VX", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹24.20 Lakh", priceNumeric: 2420000 },
    { name: "VX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹25.20 Lakh", priceNumeric: 2520000 },
    { name: "ZX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹26.10 Lakh", priceNumeric: 2610000 }
  ],
  "toyota-innova-hycross": [
    { name: "GX", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹19.40 Lakh", priceNumeric: 1940000 },
    { name: "GX (O)", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹20.50 Lakh", priceNumeric: 2050000 },
    { name: "VX", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹24.80 Lakh", priceNumeric: 2480000 },
    { name: "VX (O)", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹26.20 Lakh", priceNumeric: 2620000 },
    { name: "ZX", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹30.20 Lakh", priceNumeric: 3020000 },
    { name: "ZX (O)", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹31.80 Lakh", priceNumeric: 3180000 }
  ],
  "toyota-camry": [
    { name: "Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹48.50 Lakh", priceNumeric: 4850000 }
  ],
  "toyota-vellfire": [
    { name: "Hi Grade", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹1.22 Cr", priceNumeric: 12200000 },
    { name: "VIP Grade", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "e-CVT", price: "₹1.35 Cr", priceNumeric: 13500000 }
  ],
  "toyota-land-cruiser-300": [
    { name: "ZX", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹2.16 Cr", priceNumeric: 21600000 },
    { name: "ZX GR-S", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹2.32 Cr", priceNumeric: 23200000 }
  ],
  "renault-kwid": [
    { name: "RXE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹4.90 Lakh", priceNumeric: 490000 },
    { name: "RXL", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.45 Lakh", priceNumeric: 545000 },
    { name: "RXL", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹5.95 Lakh", priceNumeric: 595000 },
    { name: "RXT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.10 Lakh", priceNumeric: 610000 },
    { name: "RXT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹6.60 Lakh", priceNumeric: 660000 },
    { name: "Climber Edition", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.70 Lakh", priceNumeric: 670000 },
    { name: "Climber Edition", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.15 Lakh", priceNumeric: 715000 }
  ],
  "renault-triber": [
    { name: "RXE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.80 Lakh", priceNumeric: 680000 },
    { name: "RXL", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.50 Lakh", priceNumeric: 750000 },
    { name: "RXT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.20 Lakh", priceNumeric: 820000 },
    { name: "RXT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.85 Lakh", priceNumeric: 885000 },
    { name: "RXZ", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.10 Lakh", priceNumeric: 910000 },
    { name: "RXZ", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.75 Lakh", priceNumeric: 975000 }
  ],
  "renault-kiger": [
    { name: "RXE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.70 Lakh", priceNumeric: 670000 },
    { name: "RXL", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.60 Lakh", priceNumeric: 760000 },
    { name: "RXL", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.30 Lakh", priceNumeric: 830000 },
    { name: "RXT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.50 Lakh", priceNumeric: 850000 },
    { name: "RXT Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.40 Lakh", priceNumeric: 940000 },
    { name: "RXT Turbo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "RXZ", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.70 Lakh", priceNumeric: 970000 },
    { name: "RXZ Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.60 Lakh", priceNumeric: 1060000 },
    { name: "RXZ Turbo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹11.70 Lakh", priceNumeric: 1170000 }
  ],
  "renault-duster": [
    { name: "RXE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "RXL", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.90 Lakh", priceNumeric: 1190000 },
    { name: "RXL", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "RXL Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.80 Lakh", priceNumeric: 1480000 },
    { name: "RXT", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "RXT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.70 Lakh", priceNumeric: 1470000 },
    { name: "RXT Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹16.20 Lakh", priceNumeric: 1620000 },
    { name: "RXZ", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹16.40 Lakh", priceNumeric: 1640000 },
    { name: "RXZ Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹18.20 Lakh", priceNumeric: 1820000 },
    { name: "RXZ AWD", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹19.40 Lakh", priceNumeric: 1940000 }
  ],
  "nissan-magnite": [
    { name: "XE", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.20 Lakh", priceNumeric: 620000 },
    { name: "XL", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.10 Lakh", priceNumeric: 710000 },
    { name: "XL", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹7.75 Lakh", priceNumeric: 775000 },
    { name: "XV", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.10 Lakh", priceNumeric: 810000 },
    { name: "XV", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹8.80 Lakh", priceNumeric: 880000 },
    { name: "XV Premium", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "XV Premium", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMT", price: "₹9.90 Lakh", priceNumeric: 990000 },
    { name: "XV Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.70 Lakh", priceNumeric: 970000 },
    { name: "XV Turbo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹10.80 Lakh", priceNumeric: 1080000 },
    { name: "XV Premium Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "XV Premium Turbo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹11.70 Lakh", priceNumeric: 1170000 },
    { name: "Kuro Edition Turbo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "XL Turbo", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.70 Lakh", priceNumeric: 870000 }
  ],
  "nissan-x-trail": [
    { name: "Visia", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹38.00 Lakh", priceNumeric: 3800000 },
    { name: "Acenta", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹42.50 Lakh", priceNumeric: 4250000 },
    { name: "N-Connecta", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹47.20 Lakh", priceNumeric: 4720000 },
    { name: "Tekna", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "CVT", price: "₹52.80 Lakh", priceNumeric: 5280000 }
  ],
  "nissan-gravite": [
    { name: "Base", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "Mid", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "Mid", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "Top", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹15.80 Lakh", priceNumeric: 1580000 },
    { name: "Turbo Top", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹17.20 Lakh", priceNumeric: 1720000 }
  ],
  "volkswagen-virtus": [
    { name: "Comfortline", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.70 Lakh", priceNumeric: 1170000 },
    { name: "Highline", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.10 Lakh", priceNumeric: 1310000 },
    { name: "Highline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.40 Lakh", priceNumeric: 1440000 },
    { name: "Topline", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.30 Lakh", priceNumeric: 1430000 },
    { name: "Topline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.50 Lakh", priceNumeric: 1550000 },
    { name: "GT Line", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.20 Lakh", priceNumeric: 1520000 },
    { name: "GT Line", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹16.80 Lakh", priceNumeric: 1680000 },
    { name: "GT Plus Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹18.20 Lakh", priceNumeric: 1820000 }
  ],
  "volkswagen-taigun": [
    { name: "Comfortline", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.90 Lakh", priceNumeric: 1190000 },
    { name: "Highline", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "Highline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.70 Lakh", priceNumeric: 1470000 },
    { name: "Topline", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.60 Lakh", priceNumeric: 1460000 },
    { name: "Topline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.90 Lakh", priceNumeric: 1590000 },
    { name: "GT Line", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.40 Lakh", priceNumeric: 1540000 },
    { name: "GT Line", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹17.20 Lakh", priceNumeric: 1720000 },
    { name: "GT Plus Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹18.80 Lakh", priceNumeric: 1880000 }
  ],
  "volkswagen-tiguan-r-line": [
    { name: "R-Line", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG AWD", price: "₹48.50 Lakh", priceNumeric: 4850000 }
  ],
  "volkswagen-golf-gti": [
    { name: "GTI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹52.00 Lakh", priceNumeric: 5200000 }
  ],
  "volkswagen-tayron": [
    { name: "Base", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹38.00 Lakh", priceNumeric: 3800000 },
    { name: "Mid", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹42.50 Lakh", priceNumeric: 4250000 },
    { name: "Top", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG AWD", price: "₹47.80 Lakh", priceNumeric: 4780000 }
  ],
  "skoda-kylaq": [
    { name: "Classic", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.90 Lakh", priceNumeric: 890000 },
    { name: "Signature", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.20 Lakh", priceNumeric: 1020000 },
    { name: "Signature", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "Signature+", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "Signature+", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "Prestige", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "Prestige", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.40 Lakh", priceNumeric: 1540000 }
  ],
  "skoda-kushaq": [
    { name: "Active", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "Ambition", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "Ambition", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.50 Lakh", priceNumeric: 1450000 },
    { name: "Style", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹15.10 Lakh", priceNumeric: 1510000 },
    { name: "Style", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹16.40 Lakh", priceNumeric: 1640000 },
    { name: "Monte Carlo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹18.20 Lakh", priceNumeric: 1820000 },
    { name: "Sportline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹18.80 Lakh", priceNumeric: 1880000 }
  ],
  "skoda-slavia": [
    { name: "Active", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "Ambition", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "Ambition", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.10 Lakh", priceNumeric: 1410000 },
    { name: "Style", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.60 Lakh", priceNumeric: 1460000 },
    { name: "Style", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹15.90 Lakh", priceNumeric: 1590000 },
    { name: "Monte Carlo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹17.80 Lakh", priceNumeric: 1780000 }
  ],
  "skoda-superb": [
    { name: "Sportline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹55.00 Lakh", priceNumeric: 5500000 },
    { name: "Laurin & Klement (L&K)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG", price: "₹60.50 Lakh", priceNumeric: 6050000 }
  ],
  "skoda-kodiaq": [
    { name: "Sportline", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG AWD", price: "₹44.90 Lakh", priceNumeric: 4490000 },
    { name: "Laurin & Klement (L&K)", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "DSG AWD", price: "₹49.80 Lakh", priceNumeric: 4980000 }
  ],
  "mg-comet-ev": [
    { name: "Executive", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹7.50 Lakh", priceNumeric: 750000 },
    { name: "Excite", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹8.20 Lakh", priceNumeric: 820000 },
    { name: "Excite FC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹8.70 Lakh", priceNumeric: 870000 },
    { name: "Exclusive", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹9.20 Lakh", priceNumeric: 920000 },
    { name: "Exclusive FC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹9.56 Lakh", priceNumeric: 956000 }
  ],
  "mg-astor": [
    { name: "Style", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.79 Lakh", priceNumeric: 979000 },
    { name: "Super", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.80 Lakh", priceNumeric: 1080000 },
    { name: "Super", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹11.90 Lakh", priceNumeric: 1190000 },
    { name: "Smart", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.30 Lakh", priceNumeric: 1230000 },
    { name: "Smart", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹13.50 Lakh", priceNumeric: 1350000 },
    { name: "Sharp", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.60 Lakh", priceNumeric: 1460000 },
    { name: "Savvy", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹15.50 Lakh", priceNumeric: 1550000 }
  ],
  "mg-windsor-ev": [
    { name: "Base", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹13.99 Lakh", priceNumeric: 1399000 },
    { name: "Exclusive", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹15.52 Lakh", priceNumeric: 1552000 },
    { name: "Essence", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹16.52 Lakh", priceNumeric: 1652000 }
  ],
  "mg-hector": [
    { name: "Style", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.99 Lakh", priceNumeric: 1199000 },
    { name: "Smart", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹13.20 Lakh", priceNumeric: 1320000 },
    { name: "Smart", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹14.50 Lakh", priceNumeric: 1450000 },
    { name: "Smart Pro", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹15.20 Lakh", priceNumeric: 1520000 },
    { name: "Sharp", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹16.50 Lakh", priceNumeric: 1650000 },
    { name: "Sharp Pro", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹17.80 Lakh", priceNumeric: 1780000 },
    { name: "Savvy", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹18.99 Lakh", priceNumeric: 1899000 }
  ],
  "mg-hector-plus": [
    { name: "Style", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹17.29 Lakh", priceNumeric: 1729000 },
    { name: "Smart", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹18.10 Lakh", priceNumeric: 1810000 },
    { name: "Smart", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹18.90 Lakh", priceNumeric: 1890000 },
    { name: "Sharp", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "CVT", price: "₹19.69 Lakh", priceNumeric: 1969000 }
  ],
  "mg-gloster": [
    { name: "Super", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹38.33 Lakh", priceNumeric: 3833000 },
    { name: "Smart", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹40.50 Lakh", priceNumeric: 4050000 },
    { name: "Sharp", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹41.80 Lakh", priceNumeric: 4180000 },
    { name: "Savvy", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹43.16 Lakh", priceNumeric: 4316000 },
    { name: "Savvy 6/7", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹44.20 Lakh", priceNumeric: 4420000 }
  ],
  "mg-zs-ev": [
    { name: "Executive", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹17.99 Lakh", priceNumeric: 1799000 },
    { name: "Excite", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹18.80 Lakh", priceNumeric: 1880000 },
    { name: "Exclusive", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹19.60 Lakh", priceNumeric: 1960000 },
    { name: "Essence", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹20.50 Lakh", priceNumeric: 2050000 }
  ],
  "mg-cyberster": [
    { name: "GT Performance", fuel: "Electric", transmission: "Automatic", transmissionDetail: "AWD", price: "₹75.00 Lakh", priceNumeric: 7500000 }
  ],
  "mg-m9": [
    { name: "Executive Lounge", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹70.90 Lakh", priceNumeric: 7090000 }
  ],
  "mg-majestor": [
    { name: "Base", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹39.00 Lakh", priceNumeric: 3900000 },
    { name: "Mid", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹42.00 Lakh", priceNumeric: 4200000 },
    { name: "Top", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹45.00 Lakh", priceNumeric: 4500000 }
  ],
  "citroen-c3": [
    { name: "Live", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹4.95 Lakh", priceNumeric: 495000 },
    { name: "Live (O)", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹5.49 Lakh", priceNumeric: 549000 },
    { name: "Feel", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.20 Lakh", priceNumeric: 620000 },
    { name: "Feel (O)", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹6.80 Lakh", priceNumeric: 680000 },
    { name: "Shine", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹7.90 Lakh", priceNumeric: 790000 }
  ],
  "citroen-e-c3": [
    { name: "Live", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "Feel", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹12.20 Lakh", priceNumeric: 1220000 },
    { name: "Feel Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹12.80 Lakh", priceNumeric: 1280000 },
    { name: "Shine", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹12.90 Lakh", priceNumeric: 1290000 }
  ],
  "citroen-c3-aircross": [
    { name: "Live", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.49 Lakh", priceNumeric: 849000 },
    { name: "Feel", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.80 Lakh", priceNumeric: 980000 },
    { name: "Feel (O)", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹10.50 Lakh", priceNumeric: 1050000 },
    { name: "Shine", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.50 Lakh", priceNumeric: 1150000 },
    { name: "Turbo Max 5S", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.41 Lakh", priceNumeric: 1241000 },
    { name: "Turbo Max 5S AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.99 Lakh", priceNumeric: 1399000 },
    { name: "7S Max Turbo AT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹14.14 Lakh", priceNumeric: 1414000 }
  ],
  "citroen-basalt": [
    { name: "You", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹8.55 Lakh", priceNumeric: 855000 },
    { name: "Plus", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹9.90 Lakh", priceNumeric: 990000 },
    { name: "Turbo Plus", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹11.20 Lakh", priceNumeric: 1120000 },
    { name: "Turbo Max", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.50 Lakh", priceNumeric: 1250000 },
    { name: "Turbo AT Plus", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.40 Lakh", priceNumeric: 1340000 },
    { name: "Turbo AT Max", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹13.74 Lakh", priceNumeric: 1374000 }
  ],
  "citroen-c5-aircross": [
    { name: "Shine", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹37.32 Lakh", priceNumeric: 3732000 }
  ],
  "jeep-compass": [
    { name: "Sport", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹17.99 Lakh", priceNumeric: 1799000 },
    { name: "Longitude", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹20.49 Lakh", priceNumeric: 2049000 },
    { name: "Longitude Plus", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹21.90 Lakh", priceNumeric: 2190000 },
    { name: "Limited", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹23.40 Lakh", priceNumeric: 2340000 },
    { name: "Limited (O)", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹25.10 Lakh", priceNumeric: 2510000 },
    { name: "Model S", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹28.50 Lakh", priceNumeric: 2850000 },
    { name: "Track Edition", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹26.78 Lakh", priceNumeric: 2678000 },
    { name: "Track Edition 4x4", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹30.58 Lakh", priceNumeric: 3058000 }
  ],
  "jeep-meridian": [
    { name: "Longitude (Base)", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹23.33 Lakh", priceNumeric: 2333000 },
    { name: "Longitude Plus", fuel: "Diesel", transmission: "Manual", transmissionDetail: "MT", price: "₹25.80 Lakh", priceNumeric: 2580000 },
    { name: "Limited", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "MT/AT", price: "₹27.50 Lakh", priceNumeric: 2750000 },
    { name: "Limited (O)", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹30.01 Lakh", priceNumeric: 3001000 },
    { name: "Overland", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹32.50 Lakh", priceNumeric: 3250000 },
    { name: "Overland 4x4", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹33.80 Lakh", priceNumeric: 3380000 },
    { name: "Track Edition AT", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹35.95 Lakh", priceNumeric: 3595000 },
    { name: "Track Edition AT 4x4", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "AT", price: "₹37.82 Lakh", priceNumeric: 3782000 }
  ],
  "jeep-avenger": [
    { name: "Base", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹12.00 Lakh", priceNumeric: 1200000 },
    { name: "Mid", fuel: "Petrol", transmission: "Manual", transmissionDetail: "MT", price: "₹14.50 Lakh", priceNumeric: 1450000 },
    { name: "Top", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AT", price: "₹17.00 Lakh", priceNumeric: 1700000 },
    { name: "EV Version (if launched)", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Auto", price: "₹22.00 Lakh", priceNumeric: 2200000 }
  ],
  "jeep-wagoneer-s": [
    { name: "Base", fuel: "Electric", transmission: "Automatic", transmissionDetail: "AWD", price: "₹85.00 Lakh", priceNumeric: 8500000 },
    { name: "Dual Motor Performance", fuel: "Electric", transmission: "Automatic", transmissionDetail: "AWD", price: "₹90.00 Lakh", priceNumeric: 9000000 }
  ]
,
  "bmw-2-series-gran-coupe": [
    { name: "218i Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹45.80 Lakh", priceNumeric: 4580000 },
    { name: "220i M Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹47.20 Lakh", priceNumeric: 4720000 }
  ],
  "bmw-3-series-lwb": [
    { name: "320Ld Luxury Line", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹60.50 Lakh", priceNumeric: 6050000 },
    { name: "320Ld M Sport Pro", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹65.00 Lakh", priceNumeric: 6500000 },
    { name: "330Li M Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹75.80 Lakh", priceNumeric: 7580000 }
  ],
  "bmw-4-series-gran-coupe": [
    { name: "420i", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹75.00 Lakh", priceNumeric: 7500000 },
    { name: "430i M Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹85.00 Lakh", priceNumeric: 8500000 },
    { name: "M440i xDrive", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.09 Crore", priceNumeric: 10900000 }
  ],
  "bmw-5-series-lwb": [
    { name: "520d Luxury Line", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹73.30 Lakh", priceNumeric: 7330000 },
    { name: "530Li M Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹75.80 Lakh", priceNumeric: 7580000 }
  ],
  "bmw-7-series": [
    { name: "740i M Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.79 Crore", priceNumeric: 17900000 },
    { name: "740d M Sport", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.82 Crore", priceNumeric: 18200000 },
    { name: "750e M Sport", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹2.05 Crore", priceNumeric: 20500000 },
    { name: "760i xDrive", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹2.58 Crore", priceNumeric: 25800000 }
  ],
  "bmw-x1": [
    { name: "sDrive18i SportX", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹50.90 Lakh", priceNumeric: 5090000 },
    { name: "sDrive18d M Sport", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹52.10 Lakh", priceNumeric: 5210000 },
    { name: "xDrive20i M Sport", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹55.00 Lakh", priceNumeric: 5500000 }
  ],
  "bmw-x3": [
    { name: "xDrive20i", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹72.50 Lakh", priceNumeric: 7250000 },
    { name: "xDrive20d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹73.10 Lakh", priceNumeric: 7310000 },
    { name: "xDrive30 M Sport Pro", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹74.50 Lakh", priceNumeric: 7450000 },
    { name: "M40i", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹95.20 Lakh", priceNumeric: 9520000 }
  ],
  "bmw-x5": [
    { name: "xDrive30d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹95.40 Lakh", priceNumeric: 9540000 },
    { name: "xDrive40i", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.10 Crore", priceNumeric: 11000000 },
    { name: "xDrive50e", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.10 Crore", priceNumeric: 11000000 }
  ],
  "bmw-x7": [
    { name: "xDrive40i", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.28 Crore", priceNumeric: 12800000 },
    { name: "xDrive40d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.30 Crore", priceNumeric: 13000000 },
    { name: "M60i", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Steptronic AT", price: "₹1.32 Crore", priceNumeric: 13200000 }
  ],
  "bmw-m2": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹1.02 Crore", priceNumeric: 10200000 },
    { name: "Carbon Edition", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹1.66 Crore", priceNumeric: 16600000 }
  ],
  "bmw-m3": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹1.52 Crore", priceNumeric: 15200000 },
    { name: "Competition M xDrive", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹1.80 Crore", priceNumeric: 18000000 }
  ],
  "bmw-m4": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹1.55 Crore", priceNumeric: 15500000 },
    { name: "Competition M xDrive", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹1.89 Crore", priceNumeric: 18900000 }
  ],
  "bmw-m5": [
    { name: "M5 Sedan", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹2.05 Crore", priceNumeric: 20500000 }
  ],
  "bmw-m8": [
    { name: "M8 Competition Coupe", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed M Steptronic AT", price: "₹2.38 Crore", priceNumeric: 23800000 }
  ],
  "bmw-i4": [
    { name: "eDrive35", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹72.50 Lakh", priceNumeric: 7250000 },
    { name: "eDrive40", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹75.00 Lakh", priceNumeric: 7500000 },
    { name: "M50", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹85.00 Lakh", priceNumeric: 8500000 }
  ],
  "bmw-ix1": [
    { name: "eDrive20", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹49.90 Lakh", priceNumeric: 4990000 },
    { name: "xDrive30", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹55.00 Lakh", priceNumeric: 5500000 }
  ],
  "bmw-ix": [
    { name: "xDrive40", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.40 Crore", priceNumeric: 14000000 },
    { name: "xDrive50", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.45 Crore", priceNumeric: 14500000 },
    { name: "M60", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.70 Crore", priceNumeric: 17000000 }
  ],
  "bmw-i7": [
    { name: "eDrive50", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.82 Crore", priceNumeric: 18200000 },
    { name: "xDrive60", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹2.05 Crore", priceNumeric: 20500000 },
    { name: "M70 xDrive", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹2.58 Crore", priceNumeric: 25800000 }
  ],
  "mercedes-benz-a-class": [
    { name: "A 200", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7G-DCT", price: "₹45.90 Lakh", priceNumeric: 4590000 },
    { name: "A 200d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7G-DCT", price: "₹46.90 Lakh", priceNumeric: 4690000 },
    { name: "AMG Line A 200", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7G-DCT", price: "₹48.50 Lakh", priceNumeric: 4850000 }
  ],
  "mercedes-benz-c-class": [
    { name: "C 200", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹59.90 Lakh", priceNumeric: 5990000 },
    { name: "C 220d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹61.50 Lakh", priceNumeric: 6150000 },
    { name: "C 300", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹64.30 Lakh", priceNumeric: 6430000 }
  ],
  "mercedes-benz-e-class": [
    { name: "E 200", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹78.50 Lakh", priceNumeric: 7850000 },
    { name: "E 220d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹82.00 Lakh", priceNumeric: 8200000 },
    { name: "E 350d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹91.60 Lakh", priceNumeric: 9160000 }
  ],
  "mercedes-benz-s-class": [
    { name: "S 350d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.78 Crore", priceNumeric: 17800000 },
    { name: "S 450", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.85 Crore", priceNumeric: 18500000 },
    { name: "S 580", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.95 Crore", priceNumeric: 19500000 },
    { name: "AMG S 63 E Performance", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "AMG SPEEDSHIFT MCT", price: "₹3.80 Crore", priceNumeric: 38000000 }
  ],
  "mercedes-benz-gla": [
    { name: "GLA 200", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7G-DCT", price: "₹51.80 Lakh", priceNumeric: 5180000 },
    { name: "GLA 220d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7G-DCT", price: "₹55.00 Lakh", priceNumeric: 5500000 },
    { name: "AMG 35 4MATIC", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMG SPEEDSHIFT", price: "₹75.00 Lakh", priceNumeric: 7500000 }
  ],
  "mercedes-benz-glc": [
    { name: "GLC 300", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹73.90 Lakh", priceNumeric: 7390000 },
    { name: "GLC 220d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹75.00 Lakh", priceNumeric: 7500000 },
    { name: "AMG 43", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMG SPEEDSHIFT", price: "₹99.80 Lakh", priceNumeric: 9980000 }
  ],
  "mercedes-benz-gle": [
    { name: "GLE 300d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.11 Crore", priceNumeric: 11100000 },
    { name: "GLE 450", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.17 Crore", priceNumeric: 11700000 },
    { name: "AMG 53", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMG SPEEDSHIFT", price: "₹1.88 Crore", priceNumeric: 18800000 },
    { name: "AMG 63 S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMG SPEEDSHIFT", price: "₹2.20 Crore", priceNumeric: 22000000 }
  ],
  "mercedes-benz-gls": [
    { name: "GLS 450", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.32 Crore", priceNumeric: 13200000 },
    { name: "GLS 450d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.34 Crore", priceNumeric: 13400000 },
    { name: "GLS 580", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹1.60 Crore", priceNumeric: 16000000 }
  ],
  "mercedes-benz-g-class": [
    { name: "G 400d", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "9G-TRONIC AT", price: "₹2.55 Crore", priceNumeric: 25500000 },
    { name: "G 63 AMG", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "AMG SPEEDSHIFT MCT", price: "₹4.30 Crore", priceNumeric: 43000000 }
  ],
  "mercedes-benz-eqb": [
    { name: "EQB 250+", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹72.00 Lakh", priceNumeric: 7200000 },
    { name: "EQB 350 4MATIC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹78.00 Lakh", priceNumeric: 7800000 }
  ],
  "mercedes-benz-eqe": [
    { name: "EQE 350+", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.40 Crore", priceNumeric: 14000000 },
    { name: "EQE 500 4MATIC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹2.45 Crore", priceNumeric: 24500000 }
  ],
  "mercedes-benz-eqs": [
    { name: "EQS 450+", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.30 Crore", priceNumeric: 13000000 },
    { name: "EQS 580 4MATIC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹2.45 Crore", priceNumeric: 24500000 }
  ],
  "mercedes-benz-eqs-suv": [
    { name: "EQS 450 4MATIC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.33 Crore", priceNumeric: 13300000 },
    { name: "EQS 580 4MATIC", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.70 Crore", priceNumeric: 17000000 }
  ],
  "audi-a3": [
    { name: "Premium 35 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹45.00 Lakh", priceNumeric: 4500000 },
    { name: "Technology 35 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹48.00 Lakh", priceNumeric: 4800000 }
  ],
  "audi-q2": [
    { name: "Premium 35 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹45.90 Lakh", priceNumeric: 4590000 },
    { name: "Technology 35 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹50.00 Lakh", priceNumeric: 5000000 }
  ],
  "audi-a4": [
    { name: "Premium 40 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹58.00 Lakh", priceNumeric: 5800000 },
    { name: "Technology 40 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹62.00 Lakh", priceNumeric: 6200000 },
    { name: "35 TDI Premium", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹60.50 Lakh", priceNumeric: 6050000 }
  ],
  "audi-a6": [
    { name: "Premium 45 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹65.00 Lakh", priceNumeric: 6500000 },
    { name: "Technology 45 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹69.00 Lakh", priceNumeric: 6900000 },
    { name: "45 TDI Technology", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹71.00 Lakh", priceNumeric: 7100000 }
  ],
  "audi-a8-l": [
    { name: "55 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.55 Crore", priceNumeric: 15500000 },
    { name: "60 TFSI e", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.75 Crore", priceNumeric: 17500000 }
  ],
  "audi-q3": [
    { name: "Premium 40 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹55.00 Lakh", priceNumeric: 5500000 },
    { name: "Technology 40 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹59.00 Lakh", priceNumeric: 5900000 },
    { name: "2.0 TDI Premium", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹58.50 Lakh", priceNumeric: 5850000 },
    { name: "Sportback 40 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹61.00 Lakh", priceNumeric: 6100000 }
  ],
  "audi-q5": [
    { name: "Premium Plus 45 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹72.00 Lakh", priceNumeric: 7200000 },
    { name: "Technology 45 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹76.00 Lakh", priceNumeric: 7600000 },
    { name: "45 TDI", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹78.00 Lakh", priceNumeric: 7800000 }
  ],
  "audi-q7": [
    { name: "Premium Plus 45 TDI", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹92.00 Lakh", priceNumeric: 9200000 },
    { name: "Technology 55 TFSI", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.05 Crore", priceNumeric: 10500000 }
  ],
  "audi-q8": [
    { name: "55 TFSI Technology", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.12 Crore", priceNumeric: 11200000 }
  ],
  "audi-q8-e-tron": [
    { name: "50 Quattro", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.15 Crore", priceNumeric: 11500000 },
    { name: "55 Quattro", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.25 Crore", priceNumeric: 12500000 },
    { name: "Sportback 55", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.30 Crore", priceNumeric: 13000000 }
  ],
  "audi-q6-e-tron": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.05 Crore", priceNumeric: 10500000 },
    { name: "Performance Quattro", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.20 Crore", priceNumeric: 12000000 }
  ],
  "audi-e-tron-gt": [
    { name: "e-tron GT Quattro", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.70 Crore", priceNumeric: 17000000 },
    { name: "RS e-tron GT", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹2.05 Crore", priceNumeric: 20500000 }
  ],
  "audi-rs3": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed S tronic", price: "₹1.05 Crore", priceNumeric: 10500000 }
  ],
  "audi-rs5-sportback": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.10 Crore", priceNumeric: 11000000 }
  ],
  "audi-rs6-avant": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.75 Crore", priceNumeric: 17500000 }
  ],
  "audi-rs-q8": [
    { name: "Standard", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹2.25 Crore", priceNumeric: 22500000 }
  ],
  "volvo-xc40-recharge": [
    { name: "Single Motor RWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹55.00 Lakh", priceNumeric: 5500000 },
    { name: "Twin Motor AWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹65.00 Lakh", priceNumeric: 6500000 },
    { name: "Ultimate Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹67.00 Lakh", priceNumeric: 6700000 }
  ],
  "volvo-c40-recharge": [
    { name: "Single Motor RWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹61.00 Lakh", priceNumeric: 6100000 },
    { name: "Twin Motor AWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹70.00 Lakh", priceNumeric: 7000000 },
    { name: "Ultimate Pack", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹72.00 Lakh", priceNumeric: 7200000 }
  ],
  "volvo-xc60": [
    { name: "B5 Mild Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹69.00 Lakh", priceNumeric: 6900000 },
    { name: "B6 Mild Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹71.50 Lakh", priceNumeric: 7150000 }
  ],
  "volvo-xc90": [
    { name: "B5 Mild Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.01 Crore", priceNumeric: 10100000 },
    { name: "B6 Mild Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.05 Crore", priceNumeric: 10500000 }
  ],
  "volvo-s90": [
    { name: "B5 Mild Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹68.00 Lakh", priceNumeric: 6800000 }
  ],
  "porsche-718": [
    { name: "Cayman Base", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹1.40 Crore", priceNumeric: 14000000 },
    { name: "Cayman S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹1.60 Crore", priceNumeric: 16000000 },
    { name: "Cayman GTS", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹1.85 Crore", priceNumeric: 18500000 },
    { name: "GT4 / Spyder", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹2.10 Crore", priceNumeric: 21000000 }
  ],
  "porsche-911": [
    { name: "Carrera", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed PDK", price: "₹1.85 Crore", priceNumeric: 18500000 },
    { name: "Carrera S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed PDK", price: "₹2.10 Crore", priceNumeric: 21000000 },
    { name: "Turbo", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed PDK", price: "₹3.10 Crore", priceNumeric: 31000000 },
    { name: "Turbo S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed PDK", price: "₹4.00 Crore", priceNumeric: 40000000 },
    { name: "GT3", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹3.50 Crore", priceNumeric: 35000000 },
    { name: "GT3 RS", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹4.20 Crore", priceNumeric: 42000000 }
  ],
  "porsche-macan": [
    { name: "Base", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹95.00 Lakh", priceNumeric: 9500000 },
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹1.10 Crore", priceNumeric: 11000000 },
    { name: "GTS", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed PDK", price: "₹1.25 Crore", priceNumeric: 12500000 },
    { name: "Electric Macan", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.22 Crore", priceNumeric: 12200000 },
    { name: "Electric Macan Turbo", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.45 Crore", priceNumeric: 14500000 }
  ],
  "porsche-cayenne": [
    { name: "Base", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.40 Crore", priceNumeric: 14000000 },
    { name: "E-Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹1.55 Crore", priceNumeric: 15500000 },
    { name: "Turbo GT", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed Tiptronic", price: "₹2.60 Crore", priceNumeric: 26000000 }
  ],
  "porsche-taycan": [
    { name: "4S", fuel: "Electric", transmission: "Automatic", transmissionDetail: "2-speed auto", price: "₹1.70 Crore", priceNumeric: 17000000 },
    { name: "Turbo", fuel: "Electric", transmission: "Automatic", transmissionDetail: "2-speed auto", price: "₹2.10 Crore", priceNumeric: 21000000 },
    { name: "Turbo S", fuel: "Electric", transmission: "Automatic", transmissionDetail: "2-speed auto", price: "₹2.60 Crore", priceNumeric: 26000000 }
  ],
  "byd-atto-3": [
    { name: "Dynamic", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹34.50 Lakh", priceNumeric: 3450000 },
    { name: "Premium", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹37.50 Lakh", priceNumeric: 3750000 },
    { name: "Superior", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹39.50 Lakh", priceNumeric: 3950000 }
  ],
  "byd-seal": [
    { name: "Dynamic RWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹45.00 Lakh", priceNumeric: 4500000 },
    { name: "Performance AWD", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹53.00 Lakh", priceNumeric: 5300000 }
  ],
  "byd-sealion-7": [
    { name: "Standard Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹48.00 Lakh", priceNumeric: 4800000 },
    { name: "Long Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹55.00 Lakh", priceNumeric: 5500000 }
  ],
  "byd-e6": [
    { name: "Extended Range", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹30.00 Lakh", priceNumeric: 3000000 }
  ],
  "jaguar-f-pace": [
    { name: "Base", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹72.00 Lakh", priceNumeric: 7200000 },
    { name: "R-Dynamic Diesel", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹78.00 Lakh", priceNumeric: 7800000 },
    { name: "SVR", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.20 Crore", priceNumeric: 12000000 }
  ],
  "jaguar-i-pace": [
    { name: "SE", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.05 Crore", priceNumeric: 10500000 },
    { name: "HSE", fuel: "Electric", transmission: "Automatic", transmissionDetail: "Single-speed", price: "₹1.15 Crore", priceNumeric: 11500000 }
  ],
  "land-rover-defender": [
    { name: "90", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.05 Crore", priceNumeric: 10500000 },
    { name: "110", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.25 Crore", priceNumeric: 12500000 },
    { name: "130", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.45 Crore", priceNumeric: 14500000 },
    { name: "Terrain Pack", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.50 Crore", priceNumeric: 15000000 }
  ],
  "land-rover-range-rover": [
    { name: "SE", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹2.40 Crore", priceNumeric: 24000000 },
    { name: "Autobiography", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹2.80 Crore", priceNumeric: 28000000 },
    { name: "SV", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹4.00 Crore", priceNumeric: 40000000 }
  ],
  "land-rover-range-rover-sport": [
    { name: "SE", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹1.80 Crore", priceNumeric: 18000000 },
    { name: "HSE", fuel: "Diesel", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹2.10 Crore", priceNumeric: 21000000 },
    { name: "SVR", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹2.60 Crore", priceNumeric: 26000000 }
  ],
  "lamborghini-huracan": [
    { name: "EVO", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹3.50 Crore", priceNumeric: 35000000 },
    { name: "Tecnica", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹4.00 Crore", priceNumeric: 40000000 },
    { name: "STO", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "7-speed DCT", price: "₹4.50 Crore", priceNumeric: 45000000 }
  ],
  "lamborghini-revuelto": [
    { name: "Base V12 Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed DCT", price: "₹8.00 Crore", priceNumeric: 80000000 }
  ],
  "lamborghini-urus": [
    { name: "S", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹4.18 Crore", priceNumeric: 41800000 },
    { name: "Performante", fuel: "Petrol", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹4.60 Crore", priceNumeric: 46000000 },
    { name: "SE Hybrid", fuel: "Hybrid", transmission: "Automatic", transmissionDetail: "8-speed AT", price: "₹4.80 Crore", priceNumeric: 48000000 }
  ],
  "ferrari-roma": [
      {
          "name": "Roma Coupe",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.80 Crore",
          "priceNumeric": 38000000
      }
  ],
  "ferrari-296-gtb": [
      {
          "name": "296 GTB",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹5.40 Crore",
          "priceNumeric": 54000000
      },
      {
          "name": "296 GTS",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹5.90 Crore",
          "priceNumeric": 59000000
      },
      {
          "name": "Assetto Fiorano",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹6.20 Crore",
          "priceNumeric": 62000000
      }
  ],
  "ferrari-sf90-stradale": [
      {
          "name": "SF90 Stradale",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹7.50 Crore",
          "priceNumeric": 75000000
      },
      {
          "name": "SF90 Track Pack",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹8.20 Crore",
          "priceNumeric": 82000000
      }
  ],
  "ferrari-purosangue": [
      {
          "name": "V12",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹10.50 Crore",
          "priceNumeric": 105000000
      }
  ],
  "ferrari-812-competizione": [
      {
          "name": "812 Competizione",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹9.50 Crore",
          "priceNumeric": 95000000
      }
  ],
  "rolls-royce-ghost": [
      {
          "name": "Ghost Standard",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹8.50 Crore",
          "priceNumeric": 85000000
      },
      {
          "name": "Ghost Black Badge",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹10.00 Crore",
          "priceNumeric": 100000000
      }
  ],
  "rolls-royce-phantom": [
      {
          "name": "Phantom Extended Wheelbase",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹12.50 Crore",
          "priceNumeric": 125000000
      },
      {
          "name": "Phantom Black Badge",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹14.00 Crore",
          "priceNumeric": 140000000
      }
  ],
  "rolls-royce-cullinan": [
      {
          "name": "Cullinan",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹7.50 Crore",
          "priceNumeric": 75000000
      },
      {
          "name": "Black Badge",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹8.50 Crore",
          "priceNumeric": 85000000
      }
  ],
  "rolls-royce-spectre": [
      {
          "name": "Spectre",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹7.80 Crore",
          "priceNumeric": 78000000
      },
      {
          "name": "Spectre Black Badge",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹9.00 Crore",
          "priceNumeric": 90000000
      }
  ],
  "bentley-continental-gt": [
      {
          "name": "V8",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹5.50 Crore",
          "priceNumeric": 55000000
      },
      {
          "name": "Speed",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹6.50 Crore",
          "priceNumeric": 65000000
      }
  ],
  "bentley-flying-spur": [
      {
          "name": "Hybrid V6",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹5.20 Crore",
          "priceNumeric": 52000000
      },
      {
          "name": "Speed",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹6.00 Crore",
          "priceNumeric": 60000000
      }
  ],
  "bentley-bentayga": [
      {
          "name": "V8",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹5.10 Crore",
          "priceNumeric": 51000000
      },
      {
          "name": "Hybrid",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹5.40 Crore",
          "priceNumeric": 54000000
      },
      {
          "name": "EWB",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹6.20 Crore",
          "priceNumeric": 62000000
      }
  ],
  "aston-martin-vantage": [
      {
          "name": "Base",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.00 Crore",
          "priceNumeric": 30000000
      },
      {
          "name": "F1 Edition",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.40 Crore",
          "priceNumeric": 34000000
      }
  ],
  "aston-martin-db12": [
      {
          "name": "Coupe",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹4.20 Crore",
          "priceNumeric": 42000000
      },
      {
          "name": "Volante",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹4.50 Crore",
          "priceNumeric": 45000000
      }
  ],
  "aston-martin-dbx": [
      {
          "name": "Base",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.80 Crore",
          "priceNumeric": 38000000
      },
      {
          "name": "707",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹4.30 Crore",
          "priceNumeric": 43000000
      }
  ],
  "maserati-ghibli": [
      {
          "name": "Base",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹1.15 Crore",
          "priceNumeric": 11500000
      },
      {
          "name": "Trofeo",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹1.50 Crore",
          "priceNumeric": 15000000
      }
  ],
  "maserati-levante": [
      {
          "name": "Modena",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹1.25 Crore",
          "priceNumeric": 12500000
      },
      {
          "name": "Trofeo",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹1.65 Crore",
          "priceNumeric": 16500000
      }
  ],
  "maserati-grecale": [
      {
          "name": "GT",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹1.05 Crore",
          "priceNumeric": 10500000
      },
      {
          "name": "Trofeo",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹1.35 Crore",
          "priceNumeric": 13500000
      }
  ],
  "maserati-mc20": [
      {
          "name": "Coupe",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.20 Crore",
          "priceNumeric": 32000000
      },
      {
          "name": "Cielo",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.50 Crore",
          "priceNumeric": 35000000
      }
  ],
  "maserati-granturismo-folgore": [
      {
          "name": "Modena",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹2.75 Crore",
          "priceNumeric": 27500000
      },
      {
          "name": "Folgore",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹3.00 Crore",
          "priceNumeric": 30000000
      }
  ],
  "lotus-emira": [
      {
          "name": "Base",
          "fuel": "Petrol",
          "transmission": "Manual",
          "transmissionDetail": "Manual",
          "price": "₹1.80 Crore",
          "priceNumeric": 18000000
      },
      {
          "name": "First Edition",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹2.00 Crore",
          "priceNumeric": 20000000
      }
  ],
  "lotus-eletre": [
      {
          "name": "S",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹2.25 Crore",
          "priceNumeric": 22500000
      },
      {
          "name": "R",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹2.75 Crore",
          "priceNumeric": 27500000
      }
  ],
  "lotus-emeya": [
      {
          "name": "S",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹2.30 Crore",
          "priceNumeric": 23000000
      },
      {
          "name": "R",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹2.85 Crore",
          "priceNumeric": 28500000
      }
  ],
  "bugatti-chiron": [
      {
          "name": "Super Sport",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹22.00 Crore",
          "priceNumeric": 220000000
      }
  ],
  "bugatti-mistral": [
      {
          "name": "Roadster",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹28.00 Crore",
          "priceNumeric": 280000000
      }
  ],
  "bugatti-tourbillon": [
      {
          "name": "Base",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹30.00 Crore",
          "priceNumeric": 300000000
      }
  ],
  "pagani-huayra": [
      {
          "name": "Coupe",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹20.00 Crore",
          "priceNumeric": 200000000
      },
      {
          "name": "BC",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹25.00 Crore",
          "priceNumeric": 250000000
      }
  ],
  "pagani-utopia": [
      {
          "name": "Coupe",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹22.00 Crore",
          "priceNumeric": 220000000
      },
      {
          "name": "Roadster",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹24.00 Crore",
          "priceNumeric": 240000000
      }
  ],
  "rimac-nevera": [
      {
          "name": "Base",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹18.00 Crore",
          "priceNumeric": 180000000
      },
      {
          "name": "R Track Pack",
          "fuel": "Electric",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹21.00 Crore",
          "priceNumeric": 210000000
      }
  ],
  "koenigsegg-jesko": [
      {
          "name": "Jesko Attack",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹25.00 Crore",
          "priceNumeric": 250000000
      },
      {
          "name": "Jesko Absolut",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹32.00 Crore",
          "priceNumeric": 320000000
      }
  ],
  "koenigsegg-regera": [
      {
          "name": "Regera",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹35.00 Crore",
          "priceNumeric": 350000000
      }
  ],
  "koenigsegg-gemera": [
      {
          "name": "Gemera",
          "fuel": "Hybrid",
          "transmission": "Automatic",
          "transmissionDetail": "Automatic",
          "price": "₹18.00 Crore",
          "priceNumeric": 180000000
      }
  ]
};

export function getVariantsBySlug(slug: string): CarVariant[] {
  return CAR_VARIANTS_MAP[slug] || CAR_VARIANTS_MAP[slug.replace(/-\d{4}$/, "")] || [];
}
