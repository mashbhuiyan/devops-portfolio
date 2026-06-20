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
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    examCode: "SAA-C03",
    status: "active",
    validUntil: "April 2027",
    credlyUrl: "YOUR_CREDLY_URL_HERE",
    badgeIcon: "skill-icons:aws-dark",
    color: "text-orange-400 border-orange-500/30",
  },
];
