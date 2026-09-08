import { Project } from "./types";

export const projectsData: Project[] = [
  {
    slug: "bastion",
    title: "Bastion — Unified Security Visibility & Risk Intelligence Platform",
    oneLiner:
      "Consolidates telemetry across cloud infrastructure, endpoints, and vulnerability scanners into a real-time risk score engine.",
    description:
      "Bastion is an enterprise-grade security visibility platform designed to solve fragmented risk monitoring. It ingests asset inventories, vulnerability scans, and SIEM log streams, synthesizing multi-vector telemetry into unified threat scores and prioritized remediation workflows.",
    whyItMatters:
      "Security teams are drowning in alerts from disjointed tools. Bastion aggregates heterogeneous telemetry to calculate contextual risk vectors, allowing analysts to prioritize high-impact vulnerabilities before exploitation occurs.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Tailwind CSS",
    ],
    contribution:
      "Designed and implemented the core ingestion pipeline, risk-scoring matrix algorithm, and dynamic dashboard UI with real-time WebSocket telemetry updates.",
    architecture:
      "Distributed micro-services architecture featuring a high-throughput Go ingestion proxy, Redis message queues for event stream normalization, and PostgreSQL for persistent telemetry relationships. Frontend built with Next.js App Router and real-time state sync.",
    keyFeatures: [
      "Real-time Threat & Asset Ingestion via Webhooks and REST API connectors",
      "Contextual Risk Scoring Engine based on CVSS 3.1 + asset criticality weighting",
      "Interactive Attack Surface Graph Visualizer showing exposure paths",
      "Automated Incident Remediation Triggers for Webhook dispatching",
      "Role-Based Access Control (RBAC) with granular tenant isolation",
    ],
    images: [
      {
        src: "/images/projects/bastion-dashboard.jpg",
        alt: "Bastion Unified Security Risk Intelligence Dashboard Overview",
        isPlaceholder: true,
      },
      {
        src: "/images/projects/bastion-architecture.jpg",
        alt: "Bastion System Architecture Diagram",
        isPlaceholder: true,
      },
    ],
    demoUrl: "https://demo.bastion-sec.example.com",
    githubUrl: "https://github.com/example/bastion-security",
    challenges:
      "Normalizing disparate data payloads from varying scanner formats (Nessus, Trivy, AWS GuardDuty) into a unified schema without sacrificing pipeline throughput under heavy event load.",
    outcome:
      "Achieved sub-100ms event processing latency and reduced alert noise by 64% in simulated enterprise SOC stress tests.",
    featured: true,
  },
];
