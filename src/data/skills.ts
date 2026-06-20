export type Proficiency = 'production' | 'proficient' | 'familiar' | 'learning'

export interface Skill {
  name: string
  icon: string
  proficiency: Proficiency
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  borderColor: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: 'mdi:cloud',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    skills: [
      { name: 'AWS EC2', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS EKS', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS ECS', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS Lambda', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'AWS S3', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS VPC', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS IAM', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS RDS', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'CloudFront', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'Route53', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'CloudWatch', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'Linux', icon: 'skill-icons:linux-dark', proficiency: 'production' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    icon: 'mdi:docker',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'Docker', icon: 'skill-icons:docker', proficiency: 'production' },
      { name: 'Kubernetes', icon: 'skill-icons:kubernetes', proficiency: 'production' },
      { name: 'Helm', icon: 'skill-icons:helm-dark', proficiency: 'production' },
      { name: 'ArgoCD', icon: 'skill-icons:ArgoCD-dark', proficiency: 'proficient' },
      { name: 'Amazon EKS', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'Amazon ECS', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'Kustomize', icon: 'skill-icons:kubernetes', proficiency: 'familiar' },
      { name: 'Containerd', icon: 'mdi:docker', proficiency: 'familiar' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & GitOps',
    icon: 'mdi:pipe',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'GitHub Actions', icon: 'skill-icons:githubactions-dark', proficiency: 'production' },
      { name: 'ArgoCD', icon: 'skill-icons:ArgoCD-dark', proficiency: 'proficient' },
      { name: 'GitLab CI', icon: 'skill-icons:gitlab-dark', proficiency: 'proficient' },
      { name: 'Jenkins', icon: 'skill-icons:jenkins-dark', proficiency: 'proficient' },
      { name: 'SonarQube', icon: 'mdi:code-braces', proficiency: 'proficient' },
      { name: 'Flux CD', icon: 'mdi:sync', proficiency: 'familiar' },
      { name: 'Tekton', icon: 'mdi:pipe', proficiency: 'familiar' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    icon: 'mdi:code-braces',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Terraform', icon: 'skill-icons:terraform-dark', proficiency: 'production' },
      { name: 'Terragrunt', icon: 'skill-icons:terraform-dark', proficiency: 'proficient' },
      { name: 'Ansible', icon: 'skill-icons:ansible', proficiency: 'proficient' },
      { name: 'CloudFormation', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'Packer', icon: 'mdi:package-variant', proficiency: 'familiar' },
      { name: 'Pulumi', icon: 'mdi:code-braces', proficiency: 'familiar' },
      { name: 'Crossplane', icon: 'mdi:kubernetes', proficiency: 'learning' },
    ],
  },
  {
    id: 'observability',
    title: 'Observability & Monitoring',
    icon: 'mdi:chart-line',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    skills: [
      { name: 'Prometheus', icon: 'skill-icons:prometheus', proficiency: 'production' },
      { name: 'Grafana', icon: 'skill-icons:grafana-dark', proficiency: 'production' },
      { name: 'ELK Stack', icon: 'skill-icons:elasticsearch-dark', proficiency: 'proficient' },
      { name: 'AlertManager', icon: 'mdi:bell-alert', proficiency: 'production' },
      { name: 'OpenTelemetry', icon: 'mdi:telescope', proficiency: 'proficient' },
      { name: 'Loki', icon: 'skill-icons:grafana-dark', proficiency: 'proficient' },
      { name: 'AWS CloudWatch', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'PagerDuty', icon: 'mdi:bell', proficiency: 'familiar' },
      { name: 'Datadog', icon: 'mdi:dog', proficiency: 'familiar' },
      { name: 'Jaeger', icon: 'mdi:transit-connection', proficiency: 'familiar' },
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    icon: 'mdi:shield-check',
    color: 'text-red-400',
    borderColor: 'border-red-500/30',
    skills: [
      { name: 'Trivy', icon: 'mdi:shield-search', proficiency: 'proficient' },
      { name: 'HashiCorp Vault', icon: 'skill-icons:terraform-dark', proficiency: 'proficient' },
      { name: 'SonarQube', icon: 'mdi:code-braces', proficiency: 'proficient' },
      { name: 'AWS GuardDuty', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'AWS Security Hub', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'OPA / Gatekeeper', icon: 'mdi:gavel', proficiency: 'familiar' },
      { name: 'Falco', icon: 'mdi:bird', proficiency: 'familiar' },
      { name: 'Snyk', icon: 'mdi:shield-bug', proficiency: 'familiar' },
      { name: 'Checkov', icon: 'mdi:checkbox-marked-circle', proficiency: 'familiar' },
      { name: 'AWS Secrets Manager', icon: 'skill-icons:aws-dark', proficiency: 'production' },
    ],
  },
  {
    id: 'finops',
    title: 'FinOps',
    icon: 'mdi:currency-usd',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    skills: [
      { name: 'AWS Cost Explorer', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS Budgets', icon: 'skill-icons:aws-dark', proficiency: 'production' },
      { name: 'AWS Compute Optimizer', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'Spot Instances', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'Savings Plans', icon: 'skill-icons:aws-dark', proficiency: 'proficient' },
      { name: 'Kubecost', icon: 'skill-icons:kubernetes', proficiency: 'familiar' },
      { name: 'Infracost', icon: 'skill-icons:terraform-dark', proficiency: 'familiar' },
    ],
  },
  {
    id: 'aiops',
    title: 'AIOps & AI Tools',
    icon: 'mdi:robot',
    color: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    skills: [
      { name: 'AWS DevOps Guru', icon: 'skill-icons:aws-dark', proficiency: 'familiar' },
      { name: 'GitHub Copilot', icon: 'skill-icons:github-dark', proficiency: 'proficient' },
      { name: 'Claude Code', icon: 'mdi:robot', proficiency: 'proficient' },
      { name: 'Datadog Watchdog', icon: 'mdi:dog', proficiency: 'familiar' },
      { name: 'PagerDuty AIOps', icon: 'mdi:bell', proficiency: 'familiar' },
      { name: 'Grafana ML', icon: 'skill-icons:grafana-dark', proficiency: 'familiar' },
      { name: 'OpenTelemetry AI', icon: 'mdi:telescope', proficiency: 'familiar' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages & Scripting',
    icon: 'mdi:code-tags',
    color: 'text-slate-300',
    borderColor: 'border-slate-500/30',
    skills: [
      { name: 'Bash', icon: 'skill-icons:bash-dark', proficiency: 'production' },
      { name: 'Python', icon: 'skill-icons:python-dark', proficiency: 'proficient' },
      { name: 'YAML', icon: 'mdi:file-code', proficiency: 'production' },
      { name: 'HCL', icon: 'skill-icons:terraform-dark', proficiency: 'production' },
      { name: 'Go', icon: 'skill-icons:golang', proficiency: 'familiar' },
      { name: 'Makefile', icon: 'mdi:hammer-wrench', proficiency: 'proficient' },
    ],
  },
]
