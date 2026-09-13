import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "tavant",
    role: "Software Engineer",
    company: "Tavant",
    type: "Full-time",
    period: "Dec 2025 — Present",
    duration: "Present",
    location: "Bengaluru, Karnataka, India",
    locationType: "On-site",
    description: "Developing scalable enterprise software solutions, modern web applications",
    accomplishments: [
      "Architecting and delivering high-performance enterprise web applications using Vue.js and React.",
      "Migrated legacy ASP.Net (MVC) + Angularjs code to modern Vue 3 + Vite framework, resulted in 30% improvement in performance and 20% reduction in code complexity.",
      "Worked on SSO authentication workflow end-to-end configuration with all IDP Okta,Azure AD ,Auth0,keycloak,Google IdP etc",
      "Implemented modern authentication flows using OAuth2 and JWT tokens.",
      "Integrated with REST APIs and GraphQL endpoints to fetch and display data.",
      "Optimized application performance by implementing lazy loading and code splitting."
    ],
    skills: ["React", "VueJS", "Javascript", "JQuery", "TypeScript", "Redux", "Pinia", "Vite", "TailwindCSS", "SCSS", "Node.js", "REST APIs", "Git", "OAuth2", "JWT tokens", "GraphQL"],
    current: true
  },
  {
    id: "wipro-assoc",
    role: "Associate Software Engineer",
    company: "Wipro",
    type: "Full-time",
    period: "Nov 2023 — Dec 2025",
    duration: "2 yrs",
    location: "Bengaluru, Karnataka, India",
    locationType: "On-site",
    description: "Full-stack development, feature delivery, bug triaging, and unit testing within enterprise project teams.",
    accomplishments: [
      "Engineering full-stack web applications and robust microservices designed for high availability and enterprise scale.",
      "Collaborating with cross-functional teams to architect clean, maintainable modular codebases with strict test coverage.",
      "Integrating cutting-edge AI and automation toolchains to optimize development velocity and production reliability.",
      "Optimizing client-side rendering pipelines and API payloads to ensure sub-second response times."
    ],
    skills: ["React.js", "NextJS", "GraphQL", "Redux", "JavaScript", "TypeScript", "Node.js", "Express.js", "REST APIs", "Microservices", "CI/CD", "Docker", "AWS", "Git", "HTML5/CSS3", "Jest", "Git", "SDLC", "Agile"]
  },
  {
    id: "indian-servers",
    role: "AI / Machine Learning Intern",
    company: "Indian Servers — Software Development Company",
    type: "Internship",
    period: "Jul 2023 — Sep 2023",
    duration: "3 mos",
    location: "Remote",
    locationType: "Remote",
    description: "Applied research and development in Natural Language Processing (NLP), Large Language Models (LLMs), and computer vision.",
    accomplishments: [
      "Fine-tuned and evaluated open-source LLMs for domain-specific question answering and text summarization.",
      "Implemented and benchmarked NLP pipelines using Python, NumPy, Pandas, and TensorFlow, improving accuracy and inference speed.",
      "Gained hands-on experience deploying YOLOv8 for real-time object detection and OpenCV computer vision pipelines.",
      "Conducted extensive model performance evaluations comparing tokenization techniques and latency benchmarks."
    ],
    skills: ["Python", "LLMs", "AI Agents", "TensorFlow", "NLP", "RAG", "YOLOv8", "OpenCV", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    id: "cognizant",
    role: "SDLC Virtual Intern",
    company: "Cognizant (via Forage)",
    type: "Internship",
    period: "Mar 2023 — Jul 2023",
    duration: "5 mos",
    location: "Remote",
    locationType: "Remote",
    description: "Deep dive into enterprise Software Development Life Cycle (SDLC) architectures and Agile engineering delivery.",
    accomplishments: [
      "Simulated real-world enterprise software project lifecycles from stakeholder requirements gathering to sprint releases.",
      "Analyzed Waterfall vs. Agile delivery frameworks across different business constraints and system complexities.",
      "Drafted comprehensive functional specifications, architectural workflow diagrams, and QA test matrices.",
      "Executed scenario-based client problem assessments, optimizing software release milestones."
    ],
    skills: ["SDLC", "Agile Delivery", "Requirements Analysis", "Workflow Architecture", "QA Testing"]
  },

];
