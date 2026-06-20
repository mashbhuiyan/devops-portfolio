export interface ImpactMetric {
  value: string
  label: string
  sublabel?: string
  trend: 'up' | 'down' | 'neutral'
  trendGood: boolean
}

export interface ImpactCategory {
  id: string
  title: string
  icon: string
  color: string
  borderColor: string
  bgColor: string
  metrics: ImpactMetric[]
  footnote?: string
}

export const impactCategories: ImpactCategory[] = [
  {
    id: 'reliability',
    title: 'Reliability',
    icon: 'mdi:shield-check',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgColor: 'bg-cyan-500/5',
    footnote: 'Measured across production workloads',
    metrics: [
      {
        value: '99.97%',
        label: 'Uptime Delivered',
        sublabel: 'Across production systems',
        trend: 'up',
        trendGood: true,
      },
      {
        value: '3 min',
        label: 'Mean Time to Detect',
        sublabel: 'Down from 47 minutes',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '12 min',
        label: 'Mean Time to Recover',
        sublabel: 'Automated rollback',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '60%',
        label: 'Fewer Incidents',
        sublabel: 'Post-observability implementation',
        trend: 'down',
        trendGood: true,
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    icon: 'mdi:rocket-launch',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/5',
    footnote: 'DORA Elite Performer tier metrics',
    metrics: [
      {
        value: '97%',
        label: 'Faster Deployments',
        sublabel: 'Days → under 1 hour',
        trend: 'up',
        trendGood: true,
      },
      {
        value: '15×',
        label: 'Deploys Per Week',
        sublabel: 'Up from 2×/week',
        trend: 'up',
        trendGood: true,
      },
      {
        value: '3%',
        label: 'Change Failure Rate',
        sublabel: 'Industry avg: 15%',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '47 min',
        label: 'Commit to Production',
        sublabel: 'Lead time for changes',
        trend: 'down',
        trendGood: true,
      },
    ],
  },
  {
    id: 'cost',
    title: 'Cost Impact',
    icon: 'mdi:currency-usd',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/5',
    footnote: 'Sustained savings, not one-time reductions',
    metrics: [
      {
        value: '40%',
        label: 'Cloud Cost Reduction',
        sublabel: 'Average across engagements',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '$4.2k',
        label: 'Monthly AWS Savings',
        sublabel: 'Recurring cost eliminated',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '23%',
        label: 'Right-Sizing Savings',
        sublabel: 'EC2 compute optimization',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '65%',
        label: 'Spot Instance Savings',
        sublabel: 'Non-critical workloads',
        trend: 'down',
        trendGood: true,
      },
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: 'mdi:cog-transfer',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/5',
    footnote: 'Manual work eliminated through IaC and CI/CD',
    metrics: [
      {
        value: '12 min',
        label: 'Full Infra Provisioning',
        sublabel: 'Down from 3 days manual',
        trend: 'down',
        trendGood: true,
      },
      {
        value: '20 hrs',
        label: 'Saved Per Week',
        sublabel: 'Via pipeline automation',
        trend: 'up',
        trendGood: true,
      },
      {
        value: '100%',
        label: 'Infrastructure as Code',
        sublabel: 'Zero console-managed resources',
        trend: 'up',
        trendGood: true,
      },
      {
        value: '0',
        label: 'Manual Prod Deployments',
        sublabel: 'Fully automated pipeline',
        trend: 'neutral',
        trendGood: true,
      },
    ],
  },
]
