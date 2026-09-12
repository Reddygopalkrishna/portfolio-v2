import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "zerodha-kite-mcp",
    title: "Zerodha Kite MCP Server for Claude",
    subtitle: "Real-time Stock Trading & Portfolio Intelligence via Model Context Protocol",
    category: "Automation & MCP",
    description: "An enterprise-grade Model Context Protocol (MCP) server bridging Anthropic's Claude Desktop and Claude Code with Zerodha's Kite Connect API, enabling conversational portfolio analysis and risk management without external credential leakage.",
    architecture: "Claude Desktop / Code ──(MCP Protocol / JSON-RPC)──> Kite MCP Server ──(HTTPS / HMAC)──> Zerodha Kite API",
    highlights: [
      "Enables Claude to securely query real-time stock holdings, live LTP, margins, P&L calculations, and open orders.",
      "Strict zero-data-retention security model: API secrets stay in local environment variables with zero telemetry.",
      "Implements dynamic tool throttling, automatic session token caching, and automated error recovery."
    ],
    technologies: ["Anthropic MCP", "TypeScript", "Node.js", "Kite Connect API", "JSON-RPC", "OAuth2"],
    metrics: "Sub-200ms latency on portfolio queries",
    githubUrl: "https://github.com/Reddygopalkrishna",
    liveUrl: "https://www.linkedin.com/in/reddy-gopal-krishna-55242022b/",
    featured: true
  },
  {
    id: "rag-evaluation-harness",
    title: "Transparent RAG Pipeline & Evaluation Harness",
    subtitle: "Enterprise Knowledge Base with Similarity Thresholding & Chunk Benchmarking",
    category: "AI & LLMs",
    description: "A 4-stage transparent Retrieval-Augmented Generation (RAG) pipeline built to index complex enterprise documentation, eliminate LLM hallucinations, and benchmark optimal chunking configurations across heterogeneous document corpora.",
    architecture: "Query ──> [Query Embedding] ──> [Cosine Vector Search] ──> [Similarity Threshold Gate] ──> [Context Assembler] ──> [LLM Generation]",
    highlights: [
      "Rigid similarity threshold gating: answers are gracefully rejected or flagged when vector retrieval similarity falls below confidence bounds.",
      "Automated evaluation benchmark comparing fixed vs. semantic chunking strategies across token densities.",
      "Built with an Express.js backend and vector embeddings cache to guarantee sub-second semantic retrieval."
    ],
    technologies: ["OpenAI Embeddings", "Express.js", "Vector DB", "TypeScript", "Python", "Cosine Similarity"],
    metrics: "Zero hallucination rate on out-of-domain queries",
    githubUrl: "https://github.com/Reddygopalkrishna",
    featured: true
  },
  {
    id: "realtime-voice-assistant",
    title: "Sub-Second Real-Time Voice Assistant Pipeline",
    subtitle: "Multi-Stage Audio Pipeline over WebSockets with VAD & Ultra-Low Latency",
    category: "AI & LLMs",
    description: "An open-source, 4-stage streaming voice intelligence pipeline integrating Voice Activity Detection (VAD), speech recognition, LLM reasoning, and neural text-to-speech with natural conversational interruptions.",
    architecture: "Mic Audio ──(VAD Filter)──> STT (NVIDIA Parakeet TDT) ──> LLM Stream ──> TTS (Qwen3-TTS) ──> Audio Out",
    highlights: [
      "End-to-end full duplex streaming over WebSockets implementing the OpenAI Realtime protocol specification.",
      "Barge-in capability: instantly cuts synthesized speech playback the moment user voice activity is detected by Silero VAD.",
      "Engineered for sub-800ms speech-to-speech turnaround times."
    ],
    technologies: ["WebSockets", "NVIDIA Parakeet", "Qwen3-TTS", "Silero VAD", "Python", "FastAPI", "WebRTC"],
    metrics: "<800ms End-to-End Voice Latency",
    githubUrl: "https://github.com/Reddygopalkrishna",
    featured: true
  },
  {
    id: "ai-coding-agent-platform",
    title: "AI Coding Agent Collaboration Platform",
    subtitle: "Self-Hosted Multi-Agent Orchestration with Shared Memory & SOP Generation",
    category: "Automation & MCP",
    description: "A collaborative multi-agent development environment combining Alook orchestration and Claude Code to autonomously execute end-to-end coding tasks with verification feedback loops.",
    architecture: "Task Dispatcher ──> Planner Agent ──> Code Writer Agent ──> Test Runner Agent ──> Shared Vector Memory",
    highlights: [
      "Autonomous delegation between architect, coder, and test executor subagents with strict exit criteria.",
      "Shared persistent memory layer preventing duplicate research steps across long-running developer sessions.",
      "Auto-generates self-learning Standard Operating Procedures (SOPs) based on resolved build and test failures."
    ],
    technologies: ["Claude Code", "Multi-Agent Systems", "Python", "TypeScript", "SQLite", "Git Automation"],
    metrics: "4x Acceleration in automated bug refactoring",
    githubUrl: "https://github.com/Reddygopalkrishna",
    featured: false
  },
  {
    id: "code-review-graph",
    title: "code-review-graph: Tree-Sitter Blast Radius Analyzer",
    subtitle: "Knowledge-Graph Developer Tool for AI Review Agents across 23 Languages",
    category: "Developer Tools",
    description: "A developer tool that parses codebase ASTs using Tree-Sitter into an in-memory knowledge graph. It calculates the exact blast radius of git diffs to supply AI code reviewers with only the impacted call graphs, slashing token consumption dramatically.",
    architecture: "Git Diff ──> Tree-Sitter AST ──> Graph Dependency Engine ──> Pruned Context ──> AI Review Agent",
    highlights: [
      "Reduces AI code review token consumption by 6.8x to 49x by feeding targeted symbol graphs instead of whole files.",
      "Full multilingual support for 23 programming languages including TypeScript, Python, Go, and Rust.",
      "Seamlessly integrates into CI/CD pipelines as a pre-commit check or GitHub Action."
    ],
    technologies: ["Tree-Sitter", "Knowledge Graphs", "Rust", "TypeScript", "GitHub Actions", "AST Parsing"],
    metrics: "Up to 49x Token Reduction per PR",
    githubUrl: "https://github.com/Reddygopalkrishna",
    featured: true
  },
  {
    id: "loop-engineering-architecture",
    title: "Loop Engineering Architecture",
    subtitle: "State-Memory Autonomous Systems Replacing Raw Prompt Engineering",
    category: "Full-Stack & Systems",
    description: "An autonomous execution framework that shifts software engineering with AI from fragile single-shot prompts to durable state machines, priority scheduler queues, and dual-pass independent verification gates.",
    architecture: "Trigger ──> State Machine Scheduler ──> Execution Worker ──> Independent Verifier ──> Final Commit",
    highlights: [
      "Durable state persistence allowing complex multi-hour jobs to resume cleanly after system interruptions.",
      "Dual-pass verification: independent validator agents check ASTs and unit test passes before state commits.",
      "Significantly outperforms traditional single-agent chain-of-thought on complex refactoring benchmarks."
    ],
    technologies: ["State Machines", "TypeScript", "Node.js", "Redis Queues", "Jest", "Microservices"],
    metrics: "99.2% Task Completion Reliability",
    githubUrl: "https://github.com/Reddygopalkrishna",
    featured: false
  }
];
