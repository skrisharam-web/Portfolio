import { SkillCategory } from "./types";

export const skillsData: SkillCategory[] = [
  {
    category: "Cybersecurity",
    skills: [
      {
        name: "Vulnerability Assessment",
        description:
          "Identifying, assessing, and prioritizing system vulnerabilities and security flaws across infrastructure and software.",
        tier: "Comfortable With",
      },
      {
        name: "Network Security",
        description:
          "Securing network perimeters, analyzing protocol traffic, and implementing defensive access controls.",
        tier: "Comfortable With",
      },
      {
        name: "Cloud Security",
        description:
          "Implementing cloud security best practices, IAM policy evaluation, and asset protection in cloud environments.",
        tier: "Hands-on Experience",
      },
      {
        name: "Web Application Security",
        description:
          "Probing web applications for OWASP Top 10 vulnerabilities, authentication flaws, and access control issues.",
        tier: "Comfortable With",
      },
      {
        name: "Penetration Testing",
        description:
          "Studying ethical hacking methodologies, reconnaissance, lab exploitation, and vulnerability verification.",
        tier: "Currently Learning",
      },
    ],
  },
  {
    category: "Networking",
    skills: [
      {
        name: "Computer Networking",
        description:
          "Understanding network topologies, OSI model layers, packet routing mechanisms, and data transmission principles.",
        tier: "Comfortable With",
      },
      {
        name: "TCP/IP",
        description:
          "Deep understanding of TCP 3-way handshakes, IP packet structures, subnetting, and socket communications.",
        tier: "Comfortable With",
      },
      {
        name: "DNS",
        description:
          "Domain Name System resolution mechanics, record management (A, AAAA, MX, CNAME, TXT), and DNS security fundamentals.",
        tier: "Comfortable With",
      },
      {
        name: "HTTP / HTTPS",
        description:
          "Dissecting HTTP request/response headers, status codes, TLS/SSL handshake encryption, and session handling.",
        tier: "Comfortable With",
      },
      {
        name: "Network Protocols",
        description:
          "Working knowledge of core protocols including SSH, FTP, ARP, ICMP, and DHCP packet interactions.",
        tier: "Comfortable With",
      },
    ],
  },
  {
    category: "Programming",
    skills: [
      {
        name: "Python",
        description:
          "Developing security automation scripts, log parsers, network socket utilities, and data manipulation tools.",
        tier: "Comfortable With",
      },
      {
        name: "SQL",
        description:
          "Querying relational database systems, managing data structures, and auditing SQL injection vectors.",
        tier: "Comfortable With",
      },
    ],
  },
  {
    category: "Cloud",
    skills: [
      {
        name: "AWS",
        description:
          "Hands-on experience with EC2 virtual instances, S3 bucket permissions, IAM security roles, and VPC configuration.",
        tier: "Hands-on Experience",
      },
      {
        name: "Cloud Fundamentals",
        description:
          "Understanding core cloud service models (IaaS, PaaS, SaaS) and shared responsibility security frameworks.",
        tier: "Comfortable With",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        description:
          "Version control workflows, commit history management, branching strategies, and pre-commit security checks.",
        tier: "Comfortable With",
      },
      {
        name: "GitHub",
        description:
          "Collaborative repository management, pull-request reviews, secret detection, and CI/CD workflow automation.",
        tier: "Comfortable With",
      },
      {
        name: "TryHackMe",
        description:
          "Completing practical cybersecurity labs, defensive SOC Analyst pathways, and Capture The Flag (CTF) challenges.",
        tier: "Hands-on Experience",
      },
      {
        name: "Hack The Box",
        description:
          "Solving offensive security challenges, machine enumeration, and privilege escalation labs.",
        tier: "Hands-on Experience",
      },
      {
        name: "PortSwigger Academy",
        description:
          "Practitioner web security lab training covering SQLi, XSS, CSRF, SSRF, and access control testing.",
        tier: "Comfortable With",
      },
    ],
  },
];
