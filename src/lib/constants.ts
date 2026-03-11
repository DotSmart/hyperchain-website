// Site-wide constants and content data for Hyperchain Solution

import { image } from "framer-motion/client";

export const SITE = {
  name: "Hyperchain Solutions",
  tagline: "The Supply Chain Data Company",
  description: "Engineering Data, Technology & Supply Chain Intelligence for Global Enterprises",
  email: "outreach@hyperchainsolution.com",
  location: "North Carolina, USA",
  phone: "+1 (919) 555-0124",
  url: "https://hyperchainsolution.com",
};

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const SERVICES = [
  {
    id: "advisory",
    number: "01",
    title: "Supply Chain Advisory",
    description: "Strategic consulting that aligns supply chain operations with business objectives, leveraging decades of domain expertise.",
    offerings: [
      "Supply Chain Strategy & Design",
      "Network Optimization",
      "Process Excellence & Lean Transformation",
      "Digital Maturity Assessment",
      "Change Management & Adoption",
    ],
    icon: "compass",
    color: "#6366f1",
  },
  {
    id: "data-engineering",
    number: "02",
    title: "Data Engineering & Integration",
    description: "Build the data foundation your supply chain needs — from ingestion pipelines to real-time analytics platforms.",
    offerings: [
      "Data Lake & Warehouse Architecture",
      "ETL/ELT Pipeline Development",
      "Real-Time Data Streaming",
      "Master Data Management",
      "Data Quality & Governance",
      "API Integration & Orchestration",
    ],
    icon: "database",
    color: "#22d3ee",
  },
  {
    id: "ai-implementation",
    number: "03",
    title: "AI & Machine Learning",
    description: "Deploy production-grade AI solutions that transform supply chain decision-making from reactive to predictive.",
    offerings: [
      "Demand Forecasting & Sensing",
      "Inventory Optimization",
      "Intelligent Document Processing",
      "Computer Vision for Quality",
      "Generative AI for Operations",
    ],
    partners: ["OpenAI", "Google Vertex AI", "AWS SageMaker", "Anthropic"],
    icon: "brain",
    color: "#34d399",
  },
  {
    id: "sc-implementation",
    number: "04",
    title: "Platform Implementation",
    description: "End-to-end deployment of enterprise supply chain platforms with accelerated time-to-value.",
    offerings: [
      "Platform Selection & Roadmapping",
      "Implementation & Configuration",
      "Migration & Modernization",
      "Integration Architecture",
      "Training & Enablement",
    ],
    partners: ["SAP S/4HANA", "Blue Yonder Luminate", "Kinaxis RapidResponse", "Manhattan Active", "Oracle NetSuite", "John Galt Atlas"],
    icon: "layers",
    color: "#fbbf24",
  },
];

export const SOLUTIONS = [
  {
    title: "AI-Powered Demand Intelligence",
    description:
      "Predict demand with unprecedented accuracy using multi-signal AI models that learn from your entire supply chain ecosystem.",
    impact: "30-45% improvement in forecast accuracy",
    icon: "brain",
    category: "AI Platforms",
    image: "/solutions/ai-powered.png",
  },
  {
    title: "End-to-End Supply Chain Visibility",
    description:
      "Real-time visibility across every node in your supply chain — from raw materials to last-mile delivery.",
    impact: "60% reduction in blind spots",
    icon: "eye",
    category: "Data Platforms",
     image: "/solutions/End-to-End-SupplyChain.jpg",
  },
  {
    title: "Enterprise Data Fabric",
    description:
      "Unified data architecture that connects siloed supply chain systems into a single source of truth.",
    impact: "80% faster data-to-insight cycles",
    icon: "git-branch",
    category: "Data Strategy",
     image: "/solutions/Data-Fabric.png",
  },
  {
    title: "Intelligent Automation Suite",
    description:
      "Automate repetitive supply chain workflows with AI agents that learn, adapt, and optimize autonomously.",
    impact: "50% reduction in manual operations",
    icon: "zap",
    category: "Automation",
     image: "/solutions/Intelligent_Automation_Suite.png",
  },
  {
    title: "Cloud-Native Supply Chain",
    description:
      "Migrate legacy supply chain systems to scalable, resilient cloud-native architectures.",
    impact: "40% reduction in infrastructure costs",
    icon: "cloud",
    category: "Cloud Migration",
    image: "/solutions/Cloud_Native_Supply_Chain.png",
  },
  {
    title: "Digital Twin Operations",
    description:
      "Create virtual replicas of your supply chain to simulate scenarios, test strategies, and optimize performance.",
    impact: "25% improvement in operational efficiency",
    icon: "copy",
    category: "Innovation",
     image: "/solutions/Digital_Twin_Operations.png",
  },
];

export const INDUSTRIES = [
  {
    title: "Food & Beverage",
    description: "Optimize cold chain logistics, demand planning, and compliance across global F&B supply chains.",
    icon: "utensils-crossed",
    stats: "200+ F&B implementations",
  },
  {
    title: "Retail & Consumer",
    description: "Transform omnichannel fulfillment, inventory allocation, and customer experience with AI-driven intelligence.",
    icon: "shopping-bag",
    stats: "150+ retail transformations",
  },
  {
    title: "Logistics & Distribution",
    description: "Modernize transportation management, warehouse operations, and last-mile delivery networks.",
    icon: "truck",
    stats: "100M+ shipments optimized",
  },
  {
    title: "Manufacturing",
    description: "Streamline production planning, quality control, and supplier management with connected intelligence.",
    icon: "factory",
    stats: "50+ factory digitizations",
  },
  {
    title: "Healthcare & Pharma",
    description: "Ensure compliance, traceability, and efficiency across pharmaceutical and medical device supply chains.",
    icon: "heart-pulse",
    stats: "30+ pharma supply chains",
  },
  {
    title: "Oil & Gas",
    description: "Optimize asset management, procurement, and logistics in energy sector supply chains.",
    icon: "flame",
    stats: "15+ energy transformations",
  },
];

export const CASE_STUDIES = [
  {
    client: "Global Food Manufacturer",
    industry: "Food & Beverage",
    challenge: "Fragmented demand planning across 12 regional business units leading to $40M+ in excess inventory and frequent stockouts.",
    solution: "Deployed AI-powered demand sensing platform integrated with SAP S/4HANA, unifying forecasting across all regions with real-time market signals.",
    impact: ["42% reduction in forecast error", "$28M inventory optimization", "99.2% service level achieved", "ROI realized in 8 months"],
    technologies: ["SAP S/4HANA", "Google Vertex AI", "Azure Data Factory"],
    color: "#6366f1",
  },
  {
    client: "Fortune 500 Retailer",
    industry: "Retail",
    challenge: "Legacy supply chain systems causing 72-hour lag in inventory visibility across 2,000+ stores and 8 distribution centers.",
    solution: "Built real-time data fabric connecting all inventory sources with AI-driven allocation engine and predictive replenishment.",
    impact: ["Real-time inventory visibility", "35% reduction in stockouts", "$45M annual savings", "18% improvement in fill rates"],
    technologies: ["Blue Yonder", "AWS SageMaker", "Kinaxis"],
    color: "#22d3ee",
  },
  {
    client: "Multinational Pharma Company",
    industry: "Healthcare",
    challenge: "Complex cold chain compliance requirements across 45 countries with manual tracking processes and frequent regulatory violations.",
    solution: "Implemented end-to-end digital supply chain platform with IoT-enabled cold chain monitoring and automated compliance reporting.",
    impact: ["Zero compliance violations", "60% reduction in waste", "100% batch traceability", "$12M annual savings"],
    technologies: ["Manhattan Active", "OpenAI", "IoT Sensors"],
    color: "#34d399",
  },
  {
    client: "Industrial Conglomerate",
    industry: "Manufacturing",
    challenge: "Siloed ERP systems across 15 acquired companies preventing unified supply chain operations and causing $60M in operational inefficiency.",
    solution: "Architected unified data platform with AI-powered procurement optimization and supplier risk management.",
    impact: ["Single source of truth", "40% procurement savings", "85% faster reporting", "Unified across 15 entities"],
    technologies: ["SAP S/4HANA", "Anthropic AI", "Snowflake"],
    color: "#fbbf24",
  },
];

export const INSIGHTS = [
  {
    type: "Research",
    title: "The State of AI in Supply Chain 2026",
    excerpt: "Our comprehensive analysis of how enterprise supply chains are deploying AI — from pilot to production — and the measurable impact on operations.",
    readTime: "12 min read",
    date: "Feb 2026",
    featured: true,
  },
  {
    type: "Whitepaper",
    title: "Building the Composable Supply Chain",
    excerpt: "How modular, API-first architectures are replacing monolithic supply chain systems for greater agility and resilience.",
    readTime: "18 min read",
    date: "Jan 2026",
    featured: true,
  },
  {
    type: "Blog",
    title: "Why Your Demand Forecast is Wrong",
    excerpt: "The five critical signals most demand planning systems miss — and how AI-powered demand sensing closes the gap.",
    readTime: "6 min read",
    date: "Feb 2026",
    featured: false,
  },
  {
    type: "Blog",
    title: "From Data Lake to Data Mesh",
    excerpt: "Practical lessons from migrating enterprise supply chain data architectures to domain-driven data mesh patterns.",
    readTime: "8 min read",
    date: "Jan 2026",
    featured: false,
  },
  {
    type: "Case Study",
    title: "How a Fortune 500 Retailer Achieved Real-Time Inventory",
    excerpt: "The end-to-end story of transforming fragmented inventory data into real-time, AI-driven visibility across 2,000+ stores.",
    readTime: "10 min read",
    date: "Dec 2025",
    featured: false,
  },
  {
    type: "Research",
    title: "ROI of Supply Chain Digital Twins",
    excerpt: "Quantifying the business impact of digital twin technology across manufacturing, retail, and logistics supply chains.",
    readTime: "15 min read",
    date: "Nov 2025",
    featured: false,
  },
];

export const METRICS = [
  { value: 500, suffix: "+", label: "Enterprise Clients" },
  { value: 25, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Engineers & Consultants" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

export const PARTNERS = [
  "SAP", "Blue Yonder", "Kinaxis", "Manhattan Associates", "Oracle NetSuite",
  "John Galt Solutions", "OpenAI", "Google Cloud", "AWS", "Anthropic",
  "Microsoft Azure", "Snowflake",
];

export const OFFICES = [
  { city: "Raleigh", country: "USA", type: "HQ", lat: 35.78, lng: -78.64 },
  { city: "New York", country: "USA", type: "Office", lat: 40.71, lng: -74.01 },
  { city: "London", country: "UK", type: "Office", lat: 51.51, lng: -0.13 },
  { city: "Singapore", country: "Singapore", type: "Delivery Center", lat: 1.35, lng: 103.82 },
  { city: "Bangalore", country: "India", type: "Delivery Center", lat: 12.97, lng: 77.59 },
  { city: "Sydney", country: "Australia", type: "Office", lat: -33.87, lng: 151.21 },
  { city: "Dubai", country: "UAE", type: "Office", lat: 25.20, lng: 55.27 },
  { city: "São Paulo", country: "Brazil", type: "Office", lat: -23.55, lng: -46.63 },
];

export const TESTIMONIALS = [
  {
    quote: "Hyperchain transformed our supply chain from a cost center into a strategic advantage. Their AI-powered demand sensing alone saved us $28M in the first year.",
    author: "VP Supply Chain",
    company: "Global Food Manufacturer",
    role: "Fortune 500",
  },
  {
    quote: "The depth of supply chain expertise combined with cutting-edge data engineering is unlike anything we've seen in the market. They don't just implement — they transform.",
    author: "Chief Digital Officer",
    company: "Multinational Retailer",
    role: "2,000+ stores",
  },
  {
    quote: "Working with Hyperchain felt like having a world-class internal team. They understood our pharma compliance requirements deeply and delivered ahead of schedule.",
    author: "SVP Operations",
    company: "Top 10 Pharma Company",
    role: "45 countries",
  },
];

export const WHY_HYPERCHAIN = [
  {
    id: 1,
    title: "Contextual Expertise",
    description:
      "Leverage deep process, operational and industry expertise with a data ecosystem view and toolsets to identify the best path to value.",
  },
  {
    id: 2,
    title: "Human-Centric Experience",
    description:
      "Collect and apply insights from people across the ecosystem to design and deliver the best customer, employee and partner experiences.",
  },
  {
    id: 3,
    title: "Integrated Technology & Digital Innovation",
    description:
      "We help organizations realize actual ROI by increasing user adoption and scaling digital platforms effectively.",
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description:
      "Leverage data to sense trends, improve observability, and proactively generate insights that drive measurable outcomes.",
  },
  {
    id: 5,
    title: "AI & Intelligent Automation",
    description:
      "Build quick-win RPA and workflow automation systems to identify and solve capacity bottlenecks in your supply chain.",
  },
];
