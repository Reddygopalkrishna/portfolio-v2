import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "defect-spotter",
    title: "DefectSpotter",
    subtitle: "AI-Powered Property Damage Detection & Inspection Reporting",
    category: "AI & LLMs",
    description:
      "A browser-based visual inspection platform that analyzes live camera, screen, file, and video inputs with Google Gemini to identify property defects, classify severity, and create documented inspection reports.",
    architecture:
      "Camera / Screen / Video Input ──> React + TypeScript Client ──> Gemini Live API ──> Detection Processing ──> Zustand Store ──> PDF Inspection Report",
    highlights: [
      "Detects visible structural, water, mold, electrical, surface, and fixture-related damage with bounding boxes, confidence scores, and severity classifications.",
      "Uses temporal detection tracking, duplicate filtering, and non-maximum suppression to reduce repeated visual findings.",
      "Generates downloadable PDF inspection reports with risk level, repair recommendations, estimated cost ranges, and defect details.",
      "Includes a forensic-investigation mode for evidence logging, authenticity alerts, and chain-of-custody records."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Google Gemini Live API",
      "WebSocket",
      "jsPDF"
    ],
    metrics: "Configurable live-frame analysis workflow with 2 FPS capture",
    githubUrl: "https://github.com/Reddygopalkrishna/defect_spotter",
    featured: true
  },
  {
    id: "nodetalk-chat-app",
    title: "NodeTalk",
    subtitle: "Full-Stack Real-Time Chat Application",
    category: "Full-Stack & Systems",
    description:
      "A responsive MERN chat application that supports authenticated one-to-one messaging, real-time online presence, profile management, and image sharing.",
    architecture:
      "React + Zustand Client ──(REST / Socket.io)──> Express & Node.js API ──> MongoDB ──> Cloudinary Image Storage",
    highlights: [
      "Delivers real-time incoming messages and online-user presence through Socket.io.",
      "Implements sign-up, login, logout, and protected routes using JWT authentication, HTTP-only cookies, and bcrypt password hashing.",
      "Supports image attachments in messages and profile-photo uploads through Cloudinary.",
      "Provides responsive chat, contact filtering, loading states, theme settings, and toast-based error feedback."
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Zustand",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
      "DaisyUI",
      "Vite"
    ],
    metrics: "Real-time one-to-one message delivery and online-presence updates",
    githubUrl: "https://github.com/Reddygopalkrishna/NodeTalk-Chat-App",
    liveUrl: "https://nodetalk-chat-app.onrender.com/login",
    featured: true
  }
];