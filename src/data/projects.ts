import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "eks-microservices",
    title: "Kubernetes Microservices Platform",
    description:
      "Deployed a multi-service application on Amazon EKS with Helm charts, horizontal pod autoscaling, and an NGINX ingress controller. Includes full observability stack.",
    techStack: ["Kubernetes", "Docker", "Helm", "AWS EKS", "Terraform", "Prometheus"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline Automation",
    description:
      "Built a full GitHub Actions pipeline with staging and production environments, automated testing, Docker image builds, and ArgoCD GitOps deployments.",
    techStack: ["GitHub Actions", "Docker", "AWS", "ArgoCD", "Bash"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: "iac-aws",
    title: "Infrastructure as Code — AWS",
    description:
      "Complete AWS infrastructure provisioned with Terraform modules: VPC, EC2 Auto Scaling, RDS, S3, CloudFront CDN, and IAM roles following least-privilege principles.",
    techStack: ["Terraform", "AWS", "VPC", "EC2", "RDS", "S3"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: "monitoring-stack",
    title: "Monitoring & Alerting Stack",
    description:
      "Deployed Prometheus, Grafana, and Alertmanager on Docker Compose with custom dashboards for infrastructure and application metrics and PagerDuty alerting.",
    techStack: ["Prometheus", "Grafana", "Docker Compose", "Linux", "Alertmanager"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    id: "portfolio",
    title: "This Portfolio Website",
    description:
      "Built with Next.js and deployed via GitHub Actions to AWS S3 + CloudFront. Infrastructure provisioned with Terraform. Achieves 95+ Lighthouse score.",
    techStack: ["Next.js", "Terraform", "GitHub Actions", "AWS S3", "CloudFront"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
];
