import { CybersecurityFocus } from "./types";

export const cybersecurityData: CybersecurityFocus[] = [
  {
    area: "Web Application Penetration Testing",
    tier: "Hands-on Experience",
    platform: "PortSwigger Web Security Academy",
    note: "Completed labs on SQLi, XSS, CSRF, Authentication Bypass, and CORS misconfigurations.",
  },
  {
    area: "Defensive Network Monitoring & Incident Response",
    tier: "Hands-on Experience",
    platform: "TryHackMe",
    note: "SOC Level 1 path covering packet analysis, Snort rules, and Splunk log parsing.",
  },
  {
    area: "Vulnerability Assessment & Risk Scoring",
    tier: "Comfortable With",
    platform: "Internal Labs & Bastion Platform",
    note: "Mapping CVSS metrics to asset criticality to prioritize patch cycles.",
  },
  {
    area: "Secure Code Audit & SAST Integration",
    tier: "Comfortable With",
    platform: "Semgrep & GitHub Security",
    note: "Building custom static analysis rules for secret detection and unsafe inputs.",
  },
  {
    area: "Cloud Security Posture Management (AWS)",
    tier: "Currently Learning",
    platform: "AWS Skill Builder",
    note: "Focusing on S3 bucket permissions, IAM policy evaluation, and CloudTrail audit logs.",
  },
  {
    area: "Exploit Development & Buffer Overflows",
    tier: "Exploring",
    platform: "TryHackMe / Offensive Security",
    note: "Studying stack frame layouts, EIP overwrite basics, and NOP sled concepts.",
  },
];
