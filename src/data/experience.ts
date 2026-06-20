export interface ExperienceMetric {
  value: string
  label: string
}

export interface ExperienceRole {
  id: string
  company: string
  companyUrl?: string
  role: string
  level: 'lead' | 'senior' | 'earlier'
  startDate: string
  endDate: string | null
  location: string
  locationType: 'remote' | 'hybrid' | 'onsite'
  summary: string
  highlights: string[]
  metrics: ExperienceMetric[]
  tech: string[]
  defaultExpanded: boolean
  isCurrentRole: boolean
  isCompact?: boolean
}

export const experiences: ExperienceRole[] = [
  {
    id: 'smartfinancial',
    company: 'SmartFinancial',
    companyUrl: 'https://smartfinancial.com',
    role: 'Lead DevOps Engineer',
    level: 'lead',
    startDate: 'Jan 2023',
    endDate: null,
    location: 'USA (Remote)',
    locationType: 'remote',
    summary:
      'Leading platform engineering and cloud infrastructure for a high-growth InsurTech SaaS product serving 50+ insurance carriers. Own the entire DevOps lifecycle — from IaC to production observability.',
    highlights: [
      'Architected and own the multi-account AWS environment (prod, staging, dev, security) using Terraform modules and Landing Zone patterns',
      'Designed the GitOps CI/CD platform on GitHub Actions + ArgoCD — cutting deployment lead time from days to under 15 minutes',
      'Led Kubernetes platform migration (ECS → EKS), enabling self-service deployments for 8 engineering teams with zero-downtime rollouts',
      'Implemented DORA metrics tracking dashboard (Datadog) that drove the team to Elite performer tier within 6 months',
      'Drove 40 % infrastructure cost reduction through Reserved Instance planning, right-sizing automation, and S3 lifecycle policies',
    ],
    metrics: [
      { value: '15 min', label: 'Deployment Lead Time' },
      { value: '99.97%', label: 'Platform Uptime SLA' },
      { value: '40%', label: 'AWS Cost Reduction' },
      { value: '8', label: 'Teams on Self-Service' },
    ],
    tech: [
      'AWS', 'EKS', 'Terraform', 'GitHub Actions', 'ArgoCD',
      'Datadog', 'Helm', 'Docker', 'Python', 'Bash',
    ],
    defaultExpanded: true,
    isCurrentRole: true,
  },
  {
    id: 'bjit',
    company: 'BJIT Limited',
    companyUrl: 'https://bjitgroup.com',
    role: 'Senior DevOps Engineer',
    level: 'senior',
    startDate: 'Mar 2021',
    endDate: 'Dec 2022',
    location: 'Dhaka, Bangladesh',
    locationType: 'hybrid',
    summary:
      'Senior DevOps engineer on a product engineering division serving Japanese enterprise clients. Responsible for cloud infrastructure, containerisation strategy, and CI/CD standardisation across 6 product teams.',
    highlights: [
      'Standardised CI/CD pipelines across 6 teams with reusable GitHub Actions workflow templates, reducing pipeline setup time by 70 %',
      'Containerised 12 legacy Java and Node.js applications using Docker, enabling consistent environments from dev to production',
      'Built Terraform-managed AWS infrastructure (VPC, ECS, RDS, ElastiCache) replacing manual click-ops across all projects',
      'Introduced centralised logging and alerting with ELK Stack, cutting MTTD from hours to under 10 minutes',
      'Mentored 4 junior engineers through internal DevOps guild sessions covering IaC, containers, and SRE practices',
    ],
    metrics: [
      { value: '70%', label: 'Pipeline Setup Reduction' },
      { value: '12', label: 'Apps Containerised' },
      { value: '10 min', label: 'MTTD (from hours)' },
      { value: '4', label: 'Engineers Mentored' },
    ],
    tech: [
      'AWS', 'ECS', 'Terraform', 'GitHub Actions', 'Docker',
      'ELK Stack', 'RDS', 'Jenkins', 'Ansible', 'Bash',
    ],
    defaultExpanded: false,
    isCurrentRole: false,
  },
  {
    id: 'gigalogy',
    company: 'Gigalogy',
    companyUrl: 'https://gigalogy.com',
    role: 'Senior Cloud Engineer',
    level: 'senior',
    startDate: 'Jun 2019',
    endDate: 'Feb 2021',
    location: 'Tokyo, Japan (Remote)',
    locationType: 'remote',
    summary:
      'Cloud infrastructure and platform engineering for an AI/ML startup building personalisation products for e-commerce. Owned GCP and AWS environments and introduced the team\'s first production-grade Kubernetes workloads.',
    highlights: [
      'Designed the GCP-native ML model serving infrastructure using GKE, Cloud Run, and Vertex AI pipelines',
      'Built multi-cloud observability stack (Prometheus + Grafana) covering GCP and AWS workloads in a single pane',
      'Reduced ML model deployment cycle from 2 weeks to 2 days by automating model packaging, versioning, and rollout with CI/CD',
      'Implemented Kubernetes HPA and KEDA-based autoscaling, handling 10× traffic spikes during peak e-commerce seasons without incidents',
      'Introduced security hardening: RBAC, Pod Security Policies, secret management via GCP Secret Manager and AWS SSM Parameter Store',
    ],
    metrics: [
      { value: '2 days', label: 'Model Deploy Cycle (from 2 wks)' },
      { value: '10×', label: 'Traffic Spike Handled' },
      { value: '99.9%', label: 'API Gateway Uptime' },
      { value: '30%', label: 'Cloud Spend Optimised' },
    ],
    tech: [
      'GCP', 'GKE', 'AWS', 'Kubernetes', 'Cloud Run',
      'Terraform', 'Prometheus', 'Grafana', 'Python', 'Docker',
    ],
    defaultExpanded: false,
    isCurrentRole: false,
  },
  {
    id: 'earlier',
    company: 'Various Companies',
    role: 'Systems & Infrastructure Engineer',
    level: 'earlier',
    startDate: '2013',
    endDate: '2019',
    location: 'Bangladesh · Japan',
    locationType: 'onsite',
    summary:
      'Six years across IT infrastructure, Linux systems administration, and early cloud adoption roles. Built the foundations in networking, virtualisation, and on-prem-to-cloud migration that underpin my current cloud-native expertise.',
    highlights: [
      'Linux systems administration (RHEL, Ubuntu) across 100+ server fleets for enterprise and ISP clients',
      'VMware vSphere virtualisation — capacity planning, HA clustering, and live migration workflows',
      'Early AWS adoption: migrated legacy on-prem workloads to EC2 + S3 for a Japanese manufacturing client',
      'Scripted operational automation in Bash and Python (cron monitoring, log rotation, automated backups)',
    ],
    metrics: [],
    tech: [
      'Linux', 'VMware', 'AWS EC2', 'Bash', 'Python',
      'Nagios', 'Nginx', 'MySQL', 'Networking',
    ],
    defaultExpanded: false,
    isCurrentRole: false,
    isCompact: true,
  },
]
