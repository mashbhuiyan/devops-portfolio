export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface Achievement {
  id: string;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  metric: string;
  metricColor: string;
}

export const stats: Stat[] = [
  { id: "experience", value: "10+",   label: "Years Experience",     icon: "mdi:calendar-star" },
  { id: "systems",    value: "50+",   label: "Production Systems",   icon: "mdi:server-network" },
  { id: "uptime",     value: "99.9%", label: "Uptime Delivered",     icon: "mdi:chart-timeline-variant" },
  { id: "cost",       value: "40%",   label: "Avg Cloud Cost Saved", icon: "mdi:trending-down" },
  { id: "deploys",    value: "15x",   label: "Deploy Frequency",     icon: "mdi:rocket-launch" },
  { id: "certified",  value: "1",     label: "AWS Certification",    icon: "skill-icons:aws-dark" },
];

export const achievements: Achievement[] = [
  {
    id: "infrastructure",
    icon: "mdi:layers-triple",
    iconColor: "text-cyan-400",
    title: "Infrastructure at Scale",
    description:
      "Designed and operated AWS infrastructure serving production workloads across " +
      "multi-AZ, multi-region environments. Delivered consistent 99.9%+ uptime with " +
      "zero unplanned maintenance windows through proactive monitoring and automated " +
      "self-healing systems.",
    metric: "50+ Systems Managed",
    metricColor: "text-cyan-400 border-cyan-500/30",
  },
  {
    id: "pipeline",
    icon: "mdi:pipe",
    iconColor: "text-blue-400",
    title: "Pipeline Engineering",
    description:
      "Built enterprise-grade CI/CD pipelines achieving DORA Elite performer metrics. " +
      "Reduced deployment lead time from days to under 1 hour, increased deployment " +
      "frequency to 15x per week, and cut change failure rates from 23% to under 3% " +
      "across multiple engineering teams.",
    metric: "97% Faster Deployments",
    metricColor: "text-blue-400 border-blue-500/30",
  },
  {
    id: "finops",
    icon: "mdi:currency-usd",
    iconColor: "text-emerald-400",
    title: "Cloud Cost Optimization",
    description:
      "Delivered sustained FinOps impact through right-sizing EC2 workloads, Reserved " +
      "Instance planning, Spot Instance adoption for non-critical workloads, and " +
      "eliminating unused resources via automated cleanup policies. Cost savings achieved " +
      "without performance or reliability impact.",
    metric: "40% Cost Reduction",
    metricColor: "text-emerald-400 border-emerald-500/30",
  },
  {
    id: "security",
    icon: "mdi:shield-check",
    iconColor: "text-purple-400",
    title: "Security & Compliance",
    description:
      "Embedded DevSecOps practices across delivery pipelines — automated SAST/DAST " +
      "scanning, Trivy container vulnerability checks, HashiCorp Vault for secrets " +
      "management, and IAM least-privilege enforcement. Security shifted left, not " +
      "bolted on after deployment.",
    metric: "Zero Security Incidents",
    metricColor: "text-purple-400 border-purple-500/30",
  },
];
