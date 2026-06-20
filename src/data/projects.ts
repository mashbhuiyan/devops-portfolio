import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "eks-platform",
    title: "Production Kubernetes Platform on AWS EKS",
    subtitle: "Zero-Downtime Migration from Monolith to Microservices",
    problem:
      "Monolithic application causing 3-hour deploy windows with frequent rollback failures, impacting 50,000+ daily active users and blocking the engineering team from shipping features independently.",
    solution: [
      "Designed multi-cluster EKS architecture with dedicated node groups per workload class",
      "Implemented GitOps workflow with ArgoCD for declarative, auditable deployments",
      "Built Helm chart library with environment-specific value overlays and sealed secrets",
      "Configured HPA and Cluster Autoscaler for automatic scaling based on custom metrics",
      "Established blue-green deployment strategy with automated smoke tests and instant rollback",
    ],
    outcomes: [
      "Deployment window reduced from 3 hours to under 5 minutes with zero downtime",
      "99.97% uptime SLA achieved with automated failover across 3 availability zones",
      "Engineering team deploys 15+ times per week vs. once per sprint previously",
      "23% infrastructure cost reduction through right-sizing and Spot instance integration",
    ],
    metrics: [
      { value: "97%", label: "Faster Deploys" },
      { value: "99.97%", label: "Uptime SLA" },
      { value: "90sec", label: "Rollback Time" },
      { value: "23%", label: "Cost Reduction" },
    ],
    techStack: ["Kubernetes", "AWS EKS", "Helm", "ArgoCD", "Terraform", "Nginx", "HPA"],
    category: "kubernetes",
    featured: true,
  },
  {
    id: "cicd-platform",
    title: "Enterprise CI/CD Platform with GitHub Actions",
    subtitle: "From Commit to Production in Under 10 Minutes",
    problem:
      "Developers waiting 40+ minutes for manual QA sign-off before each deployment. No automated security scanning, no environment parity guarantees, and no visibility into deployment health.",
    solution: [
      "Built multi-stage pipeline: lint → test → SAST scan → container build → staging → smoke test → production",
      "Integrated SonarQube for code quality gates and Trivy for container vulnerability scanning",
      "Implemented environment-specific approval gates with Slack notifications and full audit trail",
      "Automated Docker image tagging with semantic versioning tied to Git tags",
      "Deployed to AWS ECS with rolling updates and automatic rollback on health-check failure",
    ],
    outcomes: [
      "Deployment frequency increased from 3 per week to 15+ per week",
      "Lead time from commit to production cut from 4 hours to 47 minutes",
      "Deployment failure rate reduced to under 3% with automated rollback in 12 minutes",
      "Security scanning blocks 100% of known CVEs before code reaches production",
    ],
    metrics: [
      { value: "15×", label: "Deploys/Week" },
      { value: "47min", label: "Lead Time" },
      { value: "3%", label: "Failure Rate" },
      { value: "12min", label: "MTTR" },
    ],
    techStack: ["GitHub Actions", "Docker", "SonarQube", "Trivy", "AWS ECS", "Slack"],
    category: "cicd",
    featured: true,
  },
  {
    id: "iac-aws",
    title: "AWS Infrastructure as Code with Terraform",
    subtitle: "Complete Multi-Environment Cloud Platform",
    problem:
      "Cloud infrastructure managed through clickops — no consistency between environments, manual provisioning taking days, and zero disaster recovery plan. Any team member could make untracked changes.",
    solution: [
      "Authored reusable Terraform module library for VPC, EKS, RDS, S3, and CloudFront",
      "Implemented remote state with S3 backend, DynamoDB locking, and workspace-per-environment",
      "Enforced least-privilege IAM with role-based access and service-linked roles",
      "Integrated policy-as-code with Checkov in CI pipeline to block non-compliant resources",
      "Documented full architecture with auto-generated Terraform docs and ADRs",
    ],
    outcomes: [
      "Full environment provisioning reduced from 2 days to 12 minutes",
      "100% environment parity between dev, staging, and production",
      "RTO reduced to 45 minutes for full environment recreation from scratch",
      "Zero manual infrastructure changes — all tracked in Git with mandatory PR reviews",
    ],
    metrics: [
      { value: "12min", label: "Provisioning" },
      { value: "100%", label: "Env Parity" },
      { value: "45min", label: "RTO" },
      { value: "0", label: "Manual Changes" },
    ],
    techStack: ["Terraform", "AWS VPC", "EKS", "RDS", "S3", "CloudFront", "GitHub Actions"],
    category: "infrastructure",
    featured: true,
  },
  {
    id: "observability-platform",
    title: "Production Observability Platform",
    subtitle: "Full-Stack Monitoring with Prometheus, Grafana & PagerDuty",
    problem:
      "Engineering team operating blind — no unified metrics, logs, or traces. Incidents discovered by users before internal alerts fired, with MTTD exceeding 45 minutes and on-call engineers woken up for noise.",
    solution: [
      "Deployed Prometheus with custom exporters for application, database, and infrastructure metrics",
      "Built Grafana dashboards using RED method (Rate, Errors, Duration) per service",
      "Tuned AlertManager routing with severity levels, silences, and PagerDuty escalation policies",
      "Deployed ELK Stack with structured logging pipeline and 30-day retention policy",
      "Integrated AWS X-Ray for distributed tracing across 12 microservices",
    ],
    outcomes: [
      "Mean time to detect incidents reduced from 45 minutes to under 3 minutes",
      "68% reduction in false-positive alerts — on-call engineers sleep through the night",
      "Replaced 3 paid monitoring tools, saving $2,000/month in SaaS costs",
      "Alert volume reduced from 20+ per night to under 6 actionable alerts per day",
    ],
    metrics: [
      { value: "3min", label: "MTTD" },
      { value: "68%", label: "Fewer Alerts" },
      { value: "$2k/mo", label: "Cost Saved" },
      { value: "6/day", label: "Alert Volume" },
    ],
    techStack: ["Prometheus", "Grafana", "AlertManager", "ELK Stack", "AWS X-Ray", "PagerDuty"],
    category: "monitoring",
    featured: true,
  },
  {
    id: "portfolio",
    title: "DevOps Portfolio Platform",
    subtitle: "Production-Grade Next.js Site with Full AWS CI/CD Pipeline",
    problem:
      "Needed a portfolio that demonstrates real DevOps practices — not just a deployed static site, but a showcase of CI/CD, IaC, security hardening, and cost optimization working together.",
    solution: [
      "Built with Next.js 14 static export for optimal performance and global CDN delivery",
      "Infrastructure provisioned entirely with Terraform — S3, CloudFront, ACM, Route 53",
      "Implemented GitHub Actions OIDC for keyless AWS deployments — zero stored credentials",
      "Configured CloudFront with custom cache behaviors, security headers, and HTTPS enforcement",
      "Automated CloudFront invalidations post-deploy for sub-3-minute live update propagation",
    ],
    outcomes: [
      "Full deployment pipeline from commit to live in under 3 minutes",
      "98 Lighthouse performance score with sub-100ms global TTFB via CloudFront",
      "Infrastructure cost under $0.50/month with S3 + CloudFront pay-per-request pricing",
      "Zero credentials stored in GitHub — OIDC token exchange replaces long-lived keys",
    ],
    metrics: [
      { value: "3min", label: "Deploy Time" },
      { value: "98", label: "Lighthouse" },
      { value: "$0.50", label: "Monthly Cost" },
      { value: "0", label: "Stored Creds" },
    ],
    techStack: ["Next.js", "TypeScript", "AWS S3", "CloudFront", "GitHub Actions OIDC", "Terraform"],
    category: "portfolio",
    featured: false,
  },
];
