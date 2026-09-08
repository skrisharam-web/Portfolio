import { Hackathon } from "./types";

export const hackathonsData: Hackathon[] = [
  {
    id: "hack-1",
    name: "CyberHack Bay Area 2025",
    date: "Feb 2025",
    result: "1st Place — Best Security Tool Track",
    problemStatement:
      "Security analysts lack real-time visibility into secret exposure and API key leakages occurring in developer commits during rapid 48-hour hackathon sprints.",
    solution:
      "Created LogPulse DevSecOps — a lightweight AST-driven Git hook & CLI pipe that scans outgoing commits for high-entropy secrets and misconfigurations before pushing.",
    techStack: ["TypeScript", "Node.js", "Docker", "Git Hooks"],
    role: "Security Lead & Core Developer",
    team: "4 Members (2 Developers, 1 Security Lead, 1 UI Designer)",
    images: [
      {
        src: "/images/hackathons/cyberhack-1st-place.jpg",
        alt: "CyberHack 2025 1st Place Award Photo",
        isPlaceholder: true,
      },
    ],
    certificateUrl: "https://example.com/certificate-cyberhack",
    projectUrl: "https://github.com/example/logpulse-devsecops",
  },
  {
    id: "hack-2",
    name: "CalHacks 11.0",
    date: "Oct 2024",
    result: "Finalist — Top 10 Overall",
    problemStatement:
      "Healthcare platforms require strict HIPAA compliance and zero-trust patient session isolation without introducing friction to emergency room physicians.",
    solution:
      "Developed an adaptive identity gateway with biometric device binding and instant session revocation upon suspicious network migration.",
    techStack: ["Go", "React", "OAuth2 / OIDC", "Redis"],
    role: "Backend & Identity Architect",
    team: "3 Members",
    images: [
      {
        src: "/images/hackathons/calhacks-presentation.jpg",
        alt: "CalHacks 11.0 Presentation Stage",
        isPlaceholder: true,
      },
    ],
    projectUrl: "https://github.com/example/sentinel-auth",
  },
];
