export const siteConfig = {
  name: "Hanutech Engineering",
  brand: "HANUTECH",
  tagline: "Feel the Engineering",
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
    image: "/images/pump-room.jpeg",
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
    image: "/images/liquid-primer-plant.jpeg",
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
    image: "/images/hanutech-robotics.jpeg",
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
    image: "/images/centralized-pump-room.jpeg",
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
    image: "/images/birla-white-plant.jpeg",
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
    image: "/images/paint-industry.png",
    description:
      "Resin, emulsion and paint plant engineering with precision dosing, mixing and filling systems.",
  },
  {
    slug: "chemical-paints",
    title: "Chemical Paints",
    image: "/images/industries/chemical-paints.png",
    description:
      "Specialty chemical and coating process lines engineered for safety and throughput.",
  },
  {
    slug: "water-treatment",
    title: "Water Treatment",
    image: "/images/water-treatment.png",
    description:
      "Pumping and pipeline solutions for raw, process and effluent water treatment plants.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: "/images/manufacturing.png",
    description:
      "Plant-wide utility and automation engineering for discrete and process manufacturing.",
  },
  {
    slug: "ceramic-industry",
    title: "Ceramic Industry",
    image: "/images/ceramic-industry.jpg",
    description:
      "Slip, glaze and kiln utility systems engineered for the ceramic manufacturing sector.",
  },
  {
    slug: "food-and-beverage",
    title: "Food & Beverage",
    image: "/images/hanutech-robotics.jpeg",
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
    image: "/images/birla-white-plant.jpeg",
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
    image: "/images/liquid-primer-plant.jpeg",
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
    image: "/images/pump-room.jpeg",
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

export const products = [
  {
    name: "AODD Pumps",
    desc: "Air operated double diaphragm pumps for versatile fluid transfer.",
  },
  {
    name: "EODD Pumps",
    desc: "Electric operated double diaphragm pumps with higher efficiency.",
  },
  {
    name: "Gear Pumps",
    desc: "Positive displacement gear pumps for viscous media.",
  },
  {
    name: "Control Panels",
    desc: "PLC/SCADA based control panels for plant automation.",
  },
  {
    name: "Instrumentation Kits",
    desc: "Flow, level, pressure & temperature measurement packages.",
  },
  {
    name: "Fabricated Tanks",
    desc: "Custom MS/SS storage tanks and process vessels.",
  },
];
