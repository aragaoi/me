export interface FallbackProject {
  id: string;
  title: string;
  description: string;
  problem: string;
  actions: string[];
  outcomes: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const fallbackProjects: FallbackProject[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js and Chakra UI",
    problem: "Needed a professional online presence that showcases skills and projects effectively",
    actions: [
      "Designed responsive UI with mobile-first approach",
      "Implemented internationalization (i18n) for global reach",
      "Integrated dynamic GitHub projects fetching",
      "Added smooth animations and modern design patterns"
    ],
    outcomes: [
      "Professional online presence established",
      "Improved accessibility with WCAG 2.2 AA compliance",
      "Fast loading times with optimized build process",
      "Cross-language support for broader audience"
    ],
    technologies: ["Next.js", "TypeScript", "Chakra UI", "i18n", "GitHub API"],
    githubUrl: "https://github.com/aragaoi/me",
    featured: true
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    problem: "Client needed a scalable online store with secure payment processing",
    actions: [
      "Architected microservices-based backend",
      "Implemented secure payment gateway integration",
      "Built responsive admin dashboard",
      "Added inventory management system"
    ],
    outcomes: [
      "30% increase in conversion rates",
      "99.9% uptime achieved",
      "Reduced checkout abandonment by 25%",
      "Scalable architecture supporting 10k+ users"
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Stripe", "Docker"],
    featured: true
  },
  {
    id: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    description: "Real-time business intelligence platform for data-driven decisions",
    problem: "Company needed insights from multiple data sources in real-time",
    actions: [
      "Integrated multiple data sources (APIs, databases, files)",
      "Built real-time data processing pipeline",
      "Created interactive visualizations and charts",
      "Implemented role-based access control"
    ],
    outcomes: [
      "Real-time data insights available",
      "50% faster decision-making process",
      "Reduced manual reporting by 80%",
      "Improved data accuracy by 95%"
    ],
    technologies: ["Python", "React", "D3.js", "Apache Kafka", "Redis"],
    featured: true
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    description: "React Native app for task management and team collaboration",
    problem: "Teams needed a unified mobile solution for project management",
    actions: [
      "Built cross-platform mobile app with React Native",
      "Implemented real-time collaboration features",
      "Added offline functionality and sync",
      "Integrated push notifications and reminders"
    ],
    outcomes: [
      "Unified mobile experience across platforms",
      "40% improvement in team productivity",
      "Reduced meeting time by 30%",
      "99% user satisfaction rating"
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Jest"],
    featured: true
  },
  {
    id: "api-gateway",
    title: "API Gateway & Microservices",
    description: "Scalable API infrastructure for enterprise applications",
    problem: "Legacy monolithic system couldn't handle growing user demand",
    actions: [
      "Designed microservices architecture",
      "Built API gateway with rate limiting",
      "Implemented service discovery and load balancing",
      "Added comprehensive monitoring and logging"
    ],
    outcomes: [
      "10x improvement in system performance",
      "Horizontal scaling capability achieved",
      "99.99% availability maintained",
      "Reduced deployment time by 90%"
    ],
    technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "Prometheus"],
    featured: true
  }
];
