export const INITIAL_PRODUCTS = [
  {
    id: "prod-101",
    name: "QuantumCore Ultra X1 Processor",
    category: "Hardware",
    price: 649.99,
    rating: 4.8,
    stock: 42,
    sku: "QC-9900X",
    description: "Next-generation 16-core workstation microprocessor engineered for extreme multithreaded AI training and compilation workloads.",
    specs: {
      cores: "16 Cores / 32 Threads",
      baseClock: "4.2 GHz",
      boostClock: "5.7 GHz",
      tdp: "170W",
      socket: "AM5"
    },
    warehouse: [
      { location: "US-West (Oregon)", quantity: 24, rack: "A12-04" },
      { location: "EU-Central (Frankfurt)", quantity: 12, rack: "B04-11" },
      { location: "AP-East (Tokyo)", quantity: 6, rack: "C08-02" }
    ],
    reviews: [
      { id: "rev-1", author: "DevOps_Architect", rating: 5, date: "2026-09-15", comment: "Slashed our Docker build and cargo compile times by 62%. Unbelievable throughput." },
      { id: "rev-2", author: "HardwareJunkie", rating: 4, date: "2026-09-28", comment: "Runs a bit hot under full synthetic AVX-512 load, but a 360mm AIO keeps it stable under 78C." }
    ]
  },
  {
    id: "prod-102",
    name: "AeroGlide Mechanical Pro Keyboard",
    category: "Peripherals",
    price: 189.50,
    rating: 4.9,
    stock: 120,
    sku: "AG-MECH-87",
    description: "Tenkeyless gasket-mounted wireless mechanical keyboard with hot-swappable lubed linear switches and CNC anodized aluminum case.",
    specs: {
      switches: "Gateron Oil King (Factory Lubed)",
      layout: "TKL 80% (87 keys)",
      connectivity: "2.4GHz / BT 5.3 / USB-C",
      battery: "4000mAh (240h battery life)",
      weight: "1.45 kg"
    },
    warehouse: [
      { location: "US-West (Oregon)", quantity: 65, rack: "D02-14" },
      { location: "EU-Central (Frankfurt)", quantity: 40, rack: "D05-08" },
      { location: "AP-East (Tokyo)", quantity: 15, rack: "E01-09" }
    ],
    reviews: [
      { id: "rev-3", author: "KeybEnthusiast", rating: 5, date: "2026-08-10", comment: "The sound profile straight out of the box is incredible deep thock. Zero ping." }
    ]
  },
  {
    id: "prod-103",
    name: "SpectraView OLED 34\" Ultrawide",
    category: "Displays",
    price: 1199.00,
    rating: 4.7,
    stock: 18,
    sku: "SV-34-OLED",
    description: "Curved 3440x1440 QD-OLED professional monitor with 240Hz refresh rate, 0.03ms response time, and 99.3% DCI-P3 color gamut.",
    specs: {
      panel: "Quantum Dot OLED (1800R Curve)",
      resolution: "3440 x 1440 (21:9 UWQHD)",
      refreshRate: "240Hz",
      hdr: "DisplayHDR True Black 400",
      ports: "2x DP 1.4, 1x HDMI 2.1, 90W USB-C PD"
    },
    warehouse: [
      { location: "US-West (Oregon)", quantity: 10, rack: "W01-01" },
      { location: "EU-Central (Frankfurt)", quantity: 5, rack: "W02-03" },
      { location: "AP-East (Tokyo)", quantity: 3, rack: "W03-01" }
    ],
    reviews: [
      { id: "rev-4", author: "FrontendVanguard", rating: 5, date: "2026-10-01", comment: "Text clarity is razor sharp on newer subpixel layouts and infinite contrast makes code editors pop." }
    ]
  },
  {
    id: "prod-104",
    name: "Synapse Precision Spatial Audio Headset",
    category: "Audio",
    price: 279.00,
    rating: 4.6,
    stock: 55,
    sku: "SYN-AU-400",
    description: "Studio-grade planar magnetic closed-back headset with low-latency lossless wireless and integrated broadcast condenser microphone.",
    specs: {
      transducer: "90mm Planar Magnetic",
      frequencyResponse: "10Hz - 50,000Hz",
      wireless: "Ultra-low latency 2.4GHz Dongle",
      mic: "Detachable 24-bit/96kHz supercardioid"
    },
    warehouse: [
      { location: "US-West (Oregon)", quantity: 30, rack: "A08-12" },
      { location: "EU-Central (Frankfurt)", quantity: 18, rack: "B12-05" },
      { location: "AP-East (Tokyo)", quantity: 7, rack: "C03-14" }
    ],
    reviews: [
      { id: "rev-5", author: "SoundEngineer99", rating: 4, date: "2026-09-12", comment: "Remarkable frequency linearity across mids and highs. Mic background cancellation is very effective." }
    ]
  },
  {
    id: "prod-105",
    name: "TitanVault 4TB Gen5 NVMe SSD",
    category: "Hardware",
    price: 389.99,
    rating: 4.9,
    stock: 84,
    sku: "TV-NVME-G5-4T",
    description: "PCIe 5.0 x4 M.2 SSD delivering sequential read speeds up to 14,500 MB/s and write speeds up to 12,000 MB/s with active finned heatsink.",
    specs: {
      interface: "PCIe 5.0 x4, NVMe 2.0",
      seqRead: "14,500 MB/s",
      seqWrite: "12,000 MB/s",
      tbw: "3,000 TBW",
      dram: "8GB LPDDR4 Cache"
    },
    warehouse: [
      { location: "US-West (Oregon)", quantity: 50, rack: "M01-05" },
      { location: "EU-Central (Frankfurt)", quantity: 24, rack: "M02-12" },
      { location: "AP-East (Tokyo)", quantity: 10, rack: "M03-08" }
    ],
    reviews: [
      { id: "rev-6", author: "DBA_Admin", rating: 5, date: "2026-09-02", comment: "Postgres database checkpoint flushes take fractions of a second now. Top tier endurance." }
    ]
  }
];

export const MOCK_ANALYTICS = {
  monthlyRevenue: 142850,
  activeCatalogItems: 104,
  warehouseFulfillmentRate: 99.4,
  averageOrderValue: 428.10,
  trafficTrend: [
    { month: "May", views: 18200, orders: 1240 },
    { month: "Jun", views: 22400, orders: 1560 },
    { month: "Jul", views: 26100, orders: 1890 },
    { month: "Aug", views: 31500, orders: 2310 },
    { month: "Sep", views: 38900, orders: 2980 },
    { month: "Oct", views: 44200, orders: 3450 }
  ]
};
