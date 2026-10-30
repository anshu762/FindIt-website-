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
  ]
};

export function getVariantsBySlug(slug: string): CarVariant[] {
  return CAR_VARIANTS_MAP[slug] || [];
}

