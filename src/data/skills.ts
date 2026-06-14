import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud (AWS)",
    skills: [
      { name: "EC2", iconName: "logos:aws", level: "expert" },
      { name: "S3", iconName: "logos:aws", level: "expert" },
      { name: "IAM", iconName: "logos:aws", level: "expert" },
      { name: "VPC", iconName: "logos:aws", level: "expert" },
      { name: "CloudFront", iconName: "logos:aws", level: "advanced" },
      { name: "EKS", iconName: "logos:aws", level: "advanced" },
      { name: "ECS", iconName: "logos:aws", level: "advanced" },
      { name: "CloudWatch", iconName: "logos:aws", level: "advanced" },
      { name: "Lambda", iconName: "logos:aws", level: "intermediate" },
      { name: "RDS", iconName: "logos:aws", level: "intermediate" },
    ],
  },
  {
    name: "Containers & Orchestration",
    skills: [
      { name: "Docker", iconName: "logos:docker-icon", level: "expert" },
      { name: "Kubernetes", iconName: "logos:kubernetes", level: "advanced" },
      { name: "Helm", iconName: "logos:helm", level: "advanced" },
      { name: "Docker Compose", iconName: "logos:docker-icon", level: "expert" },
    ],
  },
  {
    name: "CI/CD",
    skills: [
      { name: "GitHub Actions", iconName: "logos:github-actions", level: "expert" },
      { name: "ArgoCD", iconName: "logos:argo-icon", level: "intermediate" },
      { name: "GitLab CI", iconName: "logos:gitlab", level: "familiar" },
    ],
  },
  {
    name: "Infrastructure as Code",
    skills: [
      { name: "Terraform", iconName: "logos:terraform-icon", level: "advanced" },
      { name: "Ansible", iconName: "logos:ansible", level: "intermediate" },
      { name: "CloudFormation", iconName: "logos:aws", level: "intermediate" },
      { name: "Pulumi", iconName: "logos:pulumi-icon", level: "familiar" },
    ],
  },
  {
    name: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", iconName: "logos:prometheus", level: "advanced" },
      { name: "Grafana", iconName: "logos:grafana", level: "advanced" },
      { name: "CloudWatch", iconName: "logos:aws", level: "advanced" },
      { name: "ELK Stack", iconName: "logos:elasticsearch", level: "intermediate" },
    ],
  },
  {
    name: "OS & Scripting",
    skills: [
      { name: "Linux", iconName: "logos:linux-tux", level: "expert" },
      { name: "Bash", iconName: "logos:bash-icon", level: "expert" },
      { name: "Python", iconName: "logos:python", level: "advanced" },
      { name: "Git", iconName: "logos:git-icon", level: "expert" },
    ],
  },
];
