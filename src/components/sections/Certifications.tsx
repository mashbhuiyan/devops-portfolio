"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Calendar, Building2, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/data/certifications";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Certification } from "@/data/certifications";

function getGlowColor(colorClass: string): string {
  if (colorClass.includes("orange")) return "rgba(251, 146, 60, 0.4)";
  if (colorClass.includes("blue")) return "rgba(96, 165, 250, 0.4)";
  if (colorClass.includes("purple")) return "rgba(192, 132, 252, 0.4)";
  return "rgba(6, 182, 212, 0.4)";
}

const pendingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const pendingCard = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ActiveCertCard({ cert, show }: { cert: Certification; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-2xl mx-auto bg-slate-800/50 border border-slate-700 rounded-sm p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          <div style={{ filter: `drop-shadow(0 0 12px ${getGlowColor(cert.color)})` }}>
            <Icon icon={cert.badgeIcon} style={{ width: 80, height: 80 }} />
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          {cert.examCode && (
            <span
              className={`self-start text-xs px-2 py-0.5 rounded font-mono mb-2 border ${cert.color}`}
            >
              {cert.examCode}
            </span>
          )}
          <h3 className="text-xl font-bold text-white leading-snug mb-1">
            {cert.title}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-slate-400 mb-3">
            <Building2 size={13} className="flex-shrink-0" />
            {cert.issuer}
          </p>

          <div className="border-t border-slate-700" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
            {cert.validUntil && (
              <span className="flex items-center gap-1.5 text-sm text-slate-300">
                <Calendar size={13} className="flex-shrink-0 text-slate-400" />
                Valid until {cert.validUntil}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-mono self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Active
            </span>

            {cert.credlyUrl && cert.credlyUrl !== "YOUR_CREDLY_URL_HERE" && (
              <a
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-colors px-3 py-1.5 rounded text-xs font-mono w-full sm:w-auto"
              >
                Verify on Credly <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PendingCertCard({ cert }: { cert: Certification }) {
  return (
    <motion.div
      variants={pendingCard}
      className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-5 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity duration-300"
    >
      <div style={{ filter: `drop-shadow(0 0 8px ${getGlowColor(cert.color)})` }}>
        <Icon icon={cert.badgeIcon} style={{ width: 48, height: 48 }} />
      </div>

      <h3 className="text-sm font-semibold text-slate-300 text-center mt-3 leading-snug">
        {cert.title}
      </h3>
      <p className="text-xs text-slate-500 text-center mt-1">{cert.issuer}</p>

      {cert.examCode && (
        <span className="mt-2 border border-slate-600/50 text-slate-500 text-xs px-1.5 py-0.5 rounded font-mono">
          {cert.examCode}
        </span>
      )}

      <div className="mt-auto pt-4">
        {cert.status === "in-progress" ? (
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded text-xs font-mono">
            🔄 In Progress
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 bg-slate-700/50 text-slate-400 border border-slate-600/50 px-2.5 py-1 rounded text-xs font-mono">
            📅 Planned{cert.plannedDate ? ` · ${cert.plannedDate}` : ""}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function Certifications() {
  const { ref, isInView } = useScrollAnimation();

  const active = certifications.find((c) => c.status === "active");
  const pending = certifications.filter((c) => c.status !== "active");

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-24 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Certifications"
          subtitle="Validated expertise backed by industry-recognized credentials."
        />

        {active && <ActiveCertCard cert={active} show={isInView} />}

        {pending.length > 0 && (
          <motion.div
            variants={pendingContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
          >
            {pending.map((cert) => (
              <PendingCertCard key={cert.id} cert={cert} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
