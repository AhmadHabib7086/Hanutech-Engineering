export const siteConfig = {
  name: "Hanutech Engineering",
  brand: "HANUTECH",
  tagline: "Feel the Engineering",
   logo: "/videos/catalog-icon-final.jpg", // 👈 Image ka path
  description:
    "Total Engineering Solutions for Pumps, Pipelines, Industrial Automation and Plant Engineering.",
  address:
    "Plot No: 13, Udyog Vihar, Sector-Ecotech II, Greater Noida, Gautam Buddha Nagar - 201306 (UP), India",
  phones: ["+91 9999417820", "+91 8267824121"],
  emails: ["hanutechenggsol@gmail.com", "info@hanutechengg.com"],
  whatsapp: "+91 9999417820",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Product", href: "/products" },
  { label: "Project", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export const stats = [
  { value: "99.9%", label: "Efficiency" },
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Experience" },
  { value: "25+", label: "Global Clients" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "pump-installation",
    title: "Pump Installation & Maintenance",
    short:
      "Expert installation and comprehensive maintenance for AODD, EODD, and Gear Pumps ensuring maximum uptime.",
    description:
      "We provide end-to-end pump installation, commissioning and preventive maintenance for Air Operated Double Diaphragm (AODD), Electric Operated Double Diaphragm (EODD) and Gear Pumps. Our engineered approach minimizes downtime and extends equipment life across demanding industrial environments.",
    features: [
      "AODD, EODD & Gear Pump installation",
      "Preventive & breakdown maintenance",
      "Performance auditing & optimization",
      "Spare management & AMC support",
    ],
    image: "/image_s/Pumping-Equipment-setup.webp",
  },
  {
    slug: "pipeline-engineering",
    title: "Pipeline Engineering",
    short:
      "End-to-end pipeline design, fabrication, and installation for chemical and industrial fluid handling.",
    description:
      "From conceptual design to fabrication and installation, we deliver robust pipeline networks for chemical transfer, process fluids and utility services. Our solutions prioritize safety, corrosion resistance and long-term reliability.",
    features: [
      "Process & utility pipeline design",
      "MS/SS/PP/PVDF fabrication",
      "Leak-proof jointing & testing",
      "ASME & ISO compliant execution",
    ],
    image: "/image_s/line.avif",
  },
  {
    slug: "plant-automation",
    title: "Plant Automation",
    short:
      "Smart automation solutions with PLC integration, IoT monitoring, and robotic control systems.",
    description:
      "We modernize plants with PLC/SCADA based control, IoT enabled monitoring and robotic material handling. Our automation stack improves productivity, traceability and energy efficiency.",
    features: [
      "PLC & SCADA integration",
      "IoT based remote monitoring",
      "Robotic & automated control",
      "Data analytics & dashboards",
    ],
    image: "/image_s/plant_auto.avif",
  },
  {
    slug: "instrumentation",
    title: "Instrumentation",
    short:
      "Precision instrumentation for accurate measurement, control and safety of industrial processes.",
    description:
      "Our instrumentation services cover flow, level, pressure and temperature measurement with calibrated control loops, ensuring process accuracy, safety and compliance.",
    features: [
      "Flow, level & pressure instruments",
      "Calibration & validation",
      "Control loop tuning",
      "Safety & alarm systems",
    ],
    image: "/image_s/instrumentation.jpg",
  },
  {
    slug: "industrial-fabrication",
    title: "Industrial Fabrication",
    short:
      "Custom fabrication of robust industrial structures, tanks, and operational frameworks built to spec.",
    description:
      "We fabricate tanks, skids, structures and process frameworks to exact specifications using certified welding and QA processes, delivering durable assets for continuous operation.",
    features: [
      "Storage tanks & vessels",
      "Structural & skid fabrication",
      "Certified welding (ASME)",
      "Surface treatment & painting",
    ],
    image: "/videos/manufacturinng.jfif",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Industry = {
  slug: string;
  title: string;
  image: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "paint-industry",
    title: "Paint Industry",
    image: "/videos/paint.jfif",
    description:
      "Resin, emulsion and paint plant engineering with precision dosing, mixing and filling systems.",
  },
  {
    slug: "chemical-paints",
    title: "Chemical Paints",
    image: "/videos/chemical.jfif",
    description:
      "Specialty chemical and coating process lines engineered for safety and throughput.",
  },
  {
    slug: "water-treatment",
    title: "Water Treatment",
    image: "/videos/water.jpg",
    description:
      "Pumping and pipeline solutions for raw, process and effluent water treatment plants.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: "/videos/manufacturinng.jfif",
    description:
      "Plant-wide utility and automation engineering for discrete and process manufacturing.",
  },
  {
    slug: "ceramic-industry",
    title: "Ceramic Industry",
    image: "/videos/ceramic-industry.jpg",
    description:
      "Slip, glaze and kiln utility systems engineered for the ceramic manufacturing sector.",
  },
  {
    slug: "food-and-beverage",
    title: "Food & Beverage",
    image: "/videos/food-and-beverage.jpg",
    description:
      "Hygienic pumping and automation for food, beverage and packaged goods production.",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "birla-white-plant",
    title: "Birla White Plant Expansion",
    category: "Manufacturing",
    image: "/images_p/birla-white-plant.webp",
    summary:
      "Greenfield plant expansion delivering integrated pumping and pipeline infrastructure.",
    description:
      "A large-scale plant expansion for a leading white cement manufacturer, covering pump houses, process pipelines and utility distribution with strict quality and safety standards.",
    highlights: [
      "Integrated pump house design",
      "Process & utility piping",
      "On-time commissioning",
      "Zero-incident execution",
    ],
  },
  {
    slug: "liquid-primer-plant",
    title: "Liquid Primer Plant setup",
    category: "Paint Industry",
    image: "/images_p/liquid-primer-plant.jpg",
    summary:
      "Turnkey liquid primer production line with automated dosing and filling.",
    description:
      "Complete setup of a liquid primer manufacturing line including reactors, transfer pumps, pipelines and filling automation for consistent product quality.",
    highlights: [
      "Reactor & vessel installation",
      "Automated dosing systems",
      "Filling & packaging automation",
      "Process optimization",
    ],
  },
  {
    slug: "centralized-pump-room",
    title: "Modernized Municipal Pump Room",
    category: "Fluid Dynamics",
    image: "/images_p/Modernized Municipal Pump Room.jpg",
    summary:
      "Centralized, instrumented pump room modernizing municipal water distribution.",
    description:
      "Modernization of a municipal pump room with centralized control, instrumentation and monitoring to improve reliability and reduce energy consumption.",
    highlights: [
      "Centralized control panel",
      "Instrumentation & SCADA",
      "Energy optimization",
      "Remote monitoring",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const clients = [
  "Normet",
  "Sorbo",
  "Coca-Cola",
  "AVL",
  "Adani",
  "Crystal",
  "Patanjali",
  "Jubilant",
  "Toyolink",
  "Berger",
  "Sirca",
  "Sakata Inx",
  "Kansai Nerolac",
  "Amcor",
  "Cico",
  "Uflex",
  "Huhtamaki",
];

export const partners = ["Sandpiper", "Cognito", "Viking", "Pulsafeeder"];

export type Product = {
  slug: string;
  name: string;
  category: "pumps" | "automation" | "instrumentation" | "fabrication";
  brand?: string;
  short: string;
  description: string;
  features: string[];
  specs: string[];
  image: string;
};

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "pumps", label: "Pumps & Fluid Transfer" },
  { id: "automation", label: "Automation & Control" },
  { id: "instrumentation", label: "Instrumentation" },
  { id: "fabrication", label: "Fabrication & Storage" },
] as const;

export const products: Product[] = [
  {
    slug: "aodd-pumps",
    name: "AODD Pumps",
    category: "pumps",
    brand: "Sandpiper",
    short: "Air-operated double diaphragm pumps for abrasive, viscous and shear-sensitive fluids.",
    description:
      "Sandpiper AODD pumps deliver reliable, leak-free fluid transfer across chemical, paint, food and wastewater applications. Self-priming design handles solids and slurries without damage to the pumped medium.",
    features: [
      "Self-priming & dry-run capable",
      "Handles solids up to 6 mm",
      "Bolted construction for easy maintenance",
      "ATEX & FDA compliant options",
    ],
    specs: ["Flow: up to 1,000 LPM", "Pressure: up to 8.3 bar", "Sizes: 1/4\" to 3\""],
    image: "/images_p/aod.jpg",
  },
  {
    slug: "eodd-pumps",
    name: "EODD Pumps",
    category: "pumps",
    brand: "Sandpiper",
    short: "Electric double diaphragm pumps with energy-efficient, precision-controlled operation.",
    description:
      "Electric Operated Double Diaphragm pumps combine the versatility of diaphragm technology with precise electric drive. Ideal for batch dosing, transfer and recirculation in automated process lines.",
    features: [
      "Energy-efficient electric drive",
      "Precise flow control",
      "Low pulsation output",
      "Suitable for hazardous areas",
    ],
    specs: ["Flow: up to 400 LPM", "Pressure: up to 6 bar", "Power: 0.37–2.2 kW"],
    image: "/images_p/EODD pumps.webp",
  },
  {
    slug: "gear-pumps",
    name: "Gear Pumps",
    category: "pumps",
    brand: "Viking",
    short: "Positive displacement gear pumps engineered for high-viscosity industrial media.",
    description:
      "Viking gear pumps provide consistent, pulse-free flow for oils, resins, adhesives and polymer melts. Rugged cast-iron and stainless steel construction ensures decades of dependable service.",
    features: [
      "Handles viscosities up to 1,000,000 cP",
      "Pulse-free, metered flow",
      "Reversible operation",
      "Jacketed options for heated media",
    ],
    specs: ["Flow: 0.5–500 GPM", "Pressure: up to 200 PSI", "Materials: CI, SS, Alloy"],
    image: "/images_p/Gear pumps.jpg",
  },
  {
    slug: "dosing-pumps",
    name: "Dosing Pumps",
    category: "pumps",
    brand: "Pulsafeeder",
    short: "Precision metering pumps for chemical injection and water treatment dosing.",
    description:
      "Pulsafeeder dosing pumps deliver accurate chemical injection for water treatment, boiler feed and process dosing. Available in diaphragm and piston configurations with full stroke adjustment.",
    features: [
      "Turndown ratio up to 100:1",
      "Manual & automatic stroke control",
      "PVDF & SS wetted parts",
      "Integrated relief valve",
    ],
    specs: ["Flow: 0.1–1,000 LPH", "Pressure: up to 20 bar", "Accuracy: ±1%"],
    image: "/images_p/Dosing Pumps.jpg",
  },
  {
    slug: "centrifugal-pumps",
    name: "Centrifugal Pumps",
    category: "pumps",
    short: "High-efficiency centrifugal pumps for clean and process fluid transfer.",
    description:
      "End-suction and inline centrifugal pumps for water, chemicals and light slurries. Engineered for continuous duty in utility, cooling and process transfer applications with minimal maintenance.",
    features: [
      "High hydraulic efficiency",
      "Back-pull-out design",
      "Mechanical seal & packing options",
      "CI, SS & PP construction",
    ],
    specs: ["Flow: up to 500 m³/hr", "Head: up to 80 m", "Temperature: up to 120°C"],
    image: "/images_p/Centrifugal Pumps.webp",
  },
  {
    slug: "submersible-pumps",
    name: "Submersible Pumps",
    category: "pumps",
    short: "Heavy-duty submersible pumps for sump, effluent and dewatering applications.",
    description:
      "Robust submersible pumps designed for industrial sump pits, effluent transfer and construction dewatering. Corrosion-resistant construction with thermal overload protection.",
    features: [
      "Fully submersible IP68 rated",
      "Thermal overload protection",
      "Cast iron & SS variants",
      "Auto float-switch compatible",
    ],
    specs: ["Flow: up to 200 m³/hr", "Head: up to 40 m", "Solids handling: up to 50 mm"],
    image: "/images_p/Submersible Pumps.png",
  },
  {
    slug: "plc-control-panels",
    name: "PLC Control Panels",
    category: "automation",
    brand: "Cognito",
    short: "Custom-built PLC panels for process automation, interlocking and sequence control.",
    description:
      "Engineered PLC control panels integrate Siemens, Allen-Bradley and Schneider platforms. Designed, wired and tested in-house with full documentation, IO lists and FAT certification.",
    features: [
      "Siemens / Allen-Bradley / Schneider PLCs",
      "Custom HMI integration",
      "Full FAT & documentation",
      "IP54 / IP65 enclosure options",
    ],
    specs: ["IO: 16–512 points", "Enclosure: IP54/IP65", "Voltage: 415V 3-phase"],
    image: "/images_p/PLC Control Panels.webp",
  },
  {
    slug: "scada-systems",
    name: "SCADA Systems",
    category: "automation",
    short: "Supervisory control and data acquisition for real-time plant monitoring.",
    description:
      "Complete SCADA solutions with real-time dashboards, alarm management, historical trending and remote access. Integrates with PLCs, RTUs and IoT sensors for unified plant visibility.",
    features: [
      "Real-time dashboards & trending",
      "Alarm & event management",
      "Remote web/mobile access",
      "Historian & reporting",
    ],
    specs: ["Tags: up to 10,000", "Protocols: Modbus, OPC-UA", "Uptime: 99.9%"],
    image: "/images_p/SCADA Systems.jpg",
  },
  {
    slug: "iot-monitoring",
    name: "IoT Monitoring Units",
    category: "automation",
    short: "Wireless IoT sensors and gateways for remote equipment health monitoring.",
    description:
      "IoT-enabled monitoring packages for vibration, temperature, pressure and flow. Cloud-connected dashboards provide predictive maintenance alerts and energy consumption analytics.",
    features: [
      "Wireless sensor networks",
      "Cloud dashboard access",
      "Predictive maintenance alerts",
      "Energy analytics",
    ],
    specs: ["Range: up to 500 m", "Battery life: 2–5 years", "Cloud: AWS / Azure"],
    image: "/images_p/IoT Monitoring Units.avif",
  },
  {
    slug: "motor-control-centers",
    name: "Motor Control Centers",
    category: "automation",
    short: "Modular MCC panels for motor starting, protection and distribution.",
    description:
      "Custom motor control centers with DOL, star-delta, VFD and soft-starter configurations. Compliant with IEC 61439 standards with comprehensive protection and indication.",
    features: [
      "DOL / Star-Delta / VFD starters",
      "Short-circuit & overload protection",
      "Modular withdrawable design",
      "IEC 61439 compliant",
    ],
    specs: ["Rating: up to 630A", "Voltage: 415V", "Enclosure: Form 2B/4B"],
    image: "/videos/manufacturinng.jfif",
  },
  {
    slug: "flow-meters",
    name: "Flow Meters",
    category: "instrumentation",
    short: "Electromagnetic, ultrasonic and turbine flow meters for accurate measurement.",
    description:
      "Precision flow measurement instruments for water, chemicals and slurries. Electromagnetic, ultrasonic clamp-on and turbine types with 4–20 mA output and digital display.",
    features: [
      "Electromagnetic & ultrasonic types",
      "4–20 mA & HART output",
      "Battery & mains powered",
      "IP67 enclosure rating",
    ],
    specs: ["Accuracy: ±0.5%", "Sizes: DN15–DN600", "Output: 4–20 mA / RS485"],
    image: "/images_p/Flow Meters.jpg",
  },
  {
    slug: "level-transmitters",
    name: "Level Transmitters",
    category: "instrumentation",
    short: "Radar, ultrasonic and capacitance level transmitters for tanks and vessels.",
    description:
      "Non-contact and guided-wave level transmitters for storage tanks, silos and process vessels. Suitable for aggressive chemicals, high temperatures and foamy media.",
    features: [
      "Radar / ultrasonic / capacitance",
      "Non-contact measurement",
      "HART & Foundation Fieldbus",
      "Explosion-proof options",
    ],
    specs: ["Range: up to 30 m", "Accuracy: ±3 mm", "Process temp: up to 200°C"],
    image: "/images_p/Level Transmitters.jpg",
  },
  {
    slug: "pressure-instruments",
    name: "Pressure Instruments",
    category: "instrumentation",
    short: "Pressure gauges, transmitters and switches for process and safety monitoring.",
    description:
      "Industrial pressure gauges, differential transmitters and pressure switches for pipeline and vessel monitoring. SS diaphragm seals for corrosive and high-temperature service.",
    features: [
      "Gauges, transmitters & switches",
      "Diaphragm seal options",
      "SIL-rated safety switches",
      "Calibration certificates included",
    ],
    specs: ["Range: 0–600 bar", "Accuracy: ±0.25%", "Output: 4–20 mA"],
    image: "/videos/paint.jfif",
  },
  {
    slug: "temperature-sensors",
    name: "Temperature Sensors",
    category: "instrumentation",
    short: "RTD, thermocouple and infrared sensors for process temperature control.",
    description:
      "Precision temperature measurement with RTD Pt100, Type K thermocouples and infrared pyrometers. Thermowells, transmitters and local indicators for complete temperature loops.",
    features: [
      "RTD Pt100 & thermocouples",
      "Infrared non-contact types",
      "Thermowell protection",
      "Head-mounted transmitters",
    ],
    specs: ["Range: -200°C to 1,600°C", "Accuracy: ±0.1°C", "Output: 4–20 mA"],
    image: "/videos/manufacturinng.jfif",
  },
  {
    slug: "storage-tanks",
    name: "MS/SS Storage Tanks",
    category: "fabrication",
    short: "Custom-fabricated mild steel and stainless steel storage tanks to ASME standards.",
    description:
      "Engineered storage tanks for chemicals, water, oils and process fluids. Horizontal and vertical configurations with dished ends, manholes, nozzles and internal coatings.",
    features: [
      "MS, SS 304/316 construction",
      "ASME & API compliant",
      "Internal epoxy/FRP lining",
      "Hydro test certified",
    ],
    specs: ["Capacity: 500 L–50,000 L", "Pressure: atmospheric", "Material: MS / SS"],
    image: "/videos/manufacturinng.jfif",
  },
  {
    slug: "process-vessels",
    name: "Process Vessels & Reactors",
    category: "fabrication",
    short: "Jacketed reactors, mixing vessels and pressure vessels for chemical processing.",
    description:
      "Custom process vessels with agitators, jackets, coils and insulation for chemical, paint and pharmaceutical production. Designed to ASME Section VIII with full NDT testing.",
    features: [
      "Jacketed & coil heating",
      "Agitator & baffle integration",
      "ASME Section VIII design",
      "Full NDT & hydro testing",
    ],
    specs: ["Volume: 100 L–20,000 L", "Pressure: up to 10 bar", "Material: SS 316L"],
    image: "/videos/chemical.jfif",
  },
  {
    slug: "custom-skids",
    name: "Custom Skids & Frames",
    category: "fabrication",
    short: "Modular pump skids, dosing packages and equipment frames built to specification.",
    description:
      "Pre-assembled modular skids integrating pumps, piping, instrumentation and control panels on structural steel frames. Factory-tested and ready for plug-and-play site installation.",
    features: [
      "Pump & dosing skid packages",
      "Pre-wired & pre-piped",
      "Factory acceptance tested",
      "Plug-and-play installation",
    ],
    specs: ["Frame: ISMC / SHS steel", "Finish: epoxy painted", "Testing: FAT included"],
    image: "/videos/paint.jfif",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
