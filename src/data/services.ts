import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "ai-automation",
    title: "AI Automation & Workflows",
    badge: "High Demand",
    description: "Automate repetitive operational processes, customer pipelines, and multi-service workflows using n8n, Zapier, and custom API webhooks to slash operating costs.",
    deliverables: [
      "Custom n8n and Zapier multi-step pipeline architectures",
      "Webhook-driven triggers connecting CRMs, databases, and communication channels",
      "Automated document processing, data extraction, and email triage",
      "Self-hosted n8n infrastructure setup and maintenance"
    ],
    technologies: ["n8n", "Zapier", "Webhooks", "REST APIs", "Python", "Node.js"],
    iconName: "Cpu",
    featured: true
  },
  {
    id: "ai-agents-mcp",
    title: "AI Agents & MCP Development",
    badge: "Specialized",
    description: "Build domain-specific autonomous AI agents and Model Context Protocol (MCP) servers that connect LLMs (Claude, OpenAI) safely to enterprise databases and private APIs.",
    deliverables: [
      "Custom Model Context Protocol (MCP) server design and deployment",
      "Autonomous coding & data analysis agent pipelines",
      "RAG (Retrieval-Augmented Generation) search with hallucination guards",
      "Multi-agent task orchestration and shared memory systems"
    ],
    technologies: ["Claude MCP", "Anthropic APIs", "OpenAI APIs", "Vector DBs", "FastAPI", "TypeScript"],
    iconName: "Bot",
    featured: true
  },
  {
    id: "web-development",
    title: "Custom Web & Application Development",
    badge: "Full-Stack",
    description: "End-to-end modern web applications built for speed, exceptional mobile responsiveness, seamless SEO, and long-term maintainability.",
    deliverables: [
      "High-performance Single Page Applications (SPAs) and SSR platforms",
      "Modern portfolio, corporate, and product launch websites",
      "Modular design systems with Tailwind CSS, ShadCN UI, and motion effects",
      "Zero-latency static builds deployed on Vercel, Netlify, or AWS"
    ],
    technologies: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    iconName: "Globe",
    featured: true
  },
  {
    id: "saas-engineering",
    title: "SaaS Platform & MVP Engineering",
    badge: "Startup Ready",
    description: "Transform your startup concept into a production-ready Minimum Viable Product (MVP) with robust auth, billing, database schema, and scalable APIs.",
    deliverables: [
      "Full MVP development from Figma/specs to production deployment in weeks",
      "User authentication, role-based access control (RBAC), and session security",
      "Subscription billing integration (Stripe, Razorpay) and usage meters",
      "Clean RESTful and GraphQL backend architecture with PostgreSQL/MongoDB"
    ],
    technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Supabase", "Docker"],
    iconName: "Rocket",
    featured: false
  },
  {
    id: "api-backend",
    title: "Backend Microservices & Cloud APIs",
    badge: "Scalability",
    description: "Resilient server-side architectures, RESTful/GraphQL APIs, WebSocket streaming servers, and third-party API aggregations.",
    deliverables: [
      "High-throughput REST and WebSocket servers for real-time streaming",
      "Secure third-party API integrations (payment gateways, CRMs, broker APIs)",
      "Database schema optimization, indexing, and data modeling",
      "Containerized microservices with Docker on AWS"
    ],
    technologies: ["Node.js", "Express", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    iconName: "Server",
    featured: false
  },
  {
    id: "frontend-performance",
    title: "UI/UX & Performance Optimization",
    badge: "Core Web Vitals",
    description: "Audit and re-engineer legacy interfaces into sleek, glassmorphic, accessible, 100/100 Lighthouse web experiences.",
    deliverables: [
      "Complete design system overhaul and component library development",
      "Core Web Vitals audit (LCP, INP, CLS) and render speed acceleration",
      "Mobile-first responsive refactoring and accessibility (a11y) compliance",
      "Interactive data visualizations and dashboard analytics widgets"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TanStack Query", "Lighthouse"],
    iconName: "Sparkles",
    featured: false
  }
];
