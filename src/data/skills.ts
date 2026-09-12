import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "AI & LLM Engineering",
    description: "Production LLM applications, model context protocol development, and multi-agent coordination.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Claude Code", level: "Expert", featured: true, tag: "Anthropic" },
      { name: "Model Context Protocol (MCP)", level: "Expert", featured: true, tag: "Core" },
      { name: "Anthropic Claude APIs", level: "Expert", featured: true, tag: "LLMs" },
      { name: "OpenAI APIs & Assistants", level: "Expert", featured: true, tag: "LLMs" },
      { name: "Multi-Agent Orchestration", level: "Advanced", featured: true, tag: "Architecture" },
      { name: "RAG & Vector Search", level: "Advanced", featured: true, tag: "Retrieval" },
      { name: "Prompt Engineering & Guardrails", level: "Expert", featured: false },
      { name: "NLP & Tokenization", level: "Advanced", featured: false }
    ]
  },
  {
    category: "AI Automation & Workflows",
    description: "End-to-end operational automation, webhook routing, and no-code/low-code integration engines.",
    iconName: "Workflow",
    skills: [
      { name: "n8n Self-Hosted & Cloud", level: "Expert", featured: true, tag: "Automation" },
      { name: "Zapier Enterprise Workflows", level: "Advanced", featured: true },
      { name: "Custom Webhook Integrations", level: "Expert", featured: true, tag: "Core" },
      { name: "API Automation & ETL", level: "Expert", featured: true },
      { name: "Autonomous AI Agents", level: "Advanced", featured: true },
      { name: "Business Process Automation", level: "Advanced", featured: false }
    ]
  },
  {
    category: "Frontend Development",
    description: "High-performance reactive user interfaces, component design systems, and responsive web apps.",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Expert", featured: true, tag: "Certified" },
      { name: "Next.js", level: "Advanced", featured: true, tag: "SSR/SSG" },
      { name: "TypeScript", level: "Expert", featured: true, tag: "Standard" },
      { name: "Tailwind CSS", level: "Expert", featured: true, tag: "Styling" },
      { name: "Redux Toolkit & Zustand", level: "Expert", featured: false },
      { name: "Vue.js & Pinia", level: "Proficient", featured: false },
      { name: "TanStack Query", level: "Advanced", featured: false },
      { name: "ShadCN UI & Framer Motion", level: "Advanced", featured: false },
      { name: "Responsive Web Design", level: "Expert", featured: true, tag: "Certified" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Scalable REST APIs, real-time WebSocket communication, microservices, and database layers.",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Expert", featured: true, tag: "Runtime" },
      { name: "Express.js", level: "Expert", featured: true, tag: "APIs" },
      { name: "RESTful API Architecture", level: "Expert", featured: true },
      { name: "WebSockets & Streaming", level: "Advanced", featured: true },
      { name: "Django & Python APIs", level: "Advanced", featured: false },
      { name: "GraphQL", level: "Proficient", featured: false },
      { name: "Supabase & Serverless", level: "Advanced", featured: false },
      { name: "Microservices Architecture", level: "Advanced", featured: false }
    ]
  },
  {
    category: "Languages",
    description: "Core programming languages for web platforms, system scripts, data crunching, and ML.",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ESNext)", level: "Expert", featured: true, tag: "Certified" },
      { name: "TypeScript", level: "Expert", featured: true, tag: "Preferred" },
      { name: "Python", level: "Expert", featured: true, tag: "ML/Backend" },
      { name: "Go (Golang)", level: "Proficient", featured: false },
      { name: "SQL (PostgreSQL/MySQL)", level: "Advanced", featured: false },
      { name: "R", level: "Proficient", featured: false },
      { name: "HTML5 / Modern CSS3", level: "Expert", featured: true, tag: "Certified" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational persistence, document storage, caching, and cloud vector embeddings.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", featured: true },
      { name: "MongoDB", level: "Advanced", featured: true },
      { name: "MySQL", level: "Advanced", featured: false },
      { name: "Redis Caching", level: "Advanced", featured: false },
      { name: "Vector Databases", level: "Advanced", featured: true, tag: "AI" },
      { name: "SAP GRN Logistics", level: "Proficient", featured: false, tag: "Enterprise" }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    description: "Continuous deployment, containerization, cloud infrastructure, and developer toolchains.",
    iconName: "Cloud",
    skills: [
      { name: "AWS (EC2, S3)", level: "Advanced", featured: true },
      { name: "Docker Containerization", level: "Advanced", featured: true },
      { name: "Vercel Platform", level: "Expert", featured: true, tag: "Deploy" },
      { name: "Git & GitHub / GitLab", level: "Expert", featured: true },
      { name: "Postman & API Testing", level: "Expert", featured: false },
      { name: "Linux / Shell Scripting", level: "Advanced", featured: false }
    ]
  },
  {
    category: "Testing & Quality",
    description: "Automated test suites, end-to-end browser verification, and performance profiling.",
    iconName: "ShieldCheck",
    skills: [
      { name: "Jest", level: "Expert", featured: true },
      { name: "React Testing Library (RTL)", level: "Expert", featured: true },
      { name: "Vitest", level: "Advanced", featured: false },
      { name: "Playwright", level: "Advanced", featured: true },
      { name: "Cypress", level: "Advanced", featured: false },
      { name: "Agile & SDLC", level: "Expert", featured: false, tag: "Certified" }
    ]
  }
];
