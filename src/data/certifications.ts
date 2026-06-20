export interface Certification {
  id: string;
  title: string;
  issuer: string;
  examCode?: string;
  status: "active" | "in-progress" | "planned";
  validUntil?: string;
  plannedDate?: string;
  credlyUrl?: string;
  badgeIcon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    examCode: "SAA-C03",
    status: "active",
    validUntil: "April 2027",
    credlyUrl: "YOUR_CREDLY_URL_HERE",
    badgeIcon: "skill-icons:aws-dark",
    color: "text-orange-400 border-orange-500/30",
  },
  {
    id: "aws-devops-pro",
    title: "AWS DevOps Engineer Professional",
    issuer: "Amazon Web Services",
    examCode: "DOP-C02",
    status: "in-progress",
    badgeIcon: "skill-icons:aws-dark",
    color: "text-orange-400 border-orange-500/30",
  },
  {
    id: "cka",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    examCode: "CKA",
    status: "planned",
    plannedDate: "Q3 2026",
    badgeIcon: "skill-icons:kubernetes",
    color: "text-blue-400 border-blue-500/30",
  },
  {
    id: "terraform",
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    examCode: "TA-003",
    status: "planned",
    plannedDate: "Q4 2026",
    badgeIcon: "skill-icons:terraform-dark",
    color: "text-purple-400 border-purple-500/30",
  },
  {
    id: "aws-security",
    title: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    examCode: "SCS-C02",
    status: "planned",
    plannedDate: "2027",
    badgeIcon: "skill-icons:aws-dark",
    color: "text-orange-400 border-orange-500/30",
  },
];
