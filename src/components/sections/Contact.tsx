"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { personal } from "@/data/personal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Variants } from "framer-motion";

const githubUsername = personal.github.split("/").pop() ?? "GitHub";

const SECONDARY_LINKS = [
  {
    icon: "mdi:github",
    color: "text-slate-300",
    label: "GitHub",
    sublabel: githubUsername,
    href: personal.github,
    external: true,
  },
  {
    icon: "mdi:linkedin",
    color: "text-blue-400",
    label: "LinkedIn",
    sublabel: "View Profile",
    href: personal.linkedin,
    external: true,
  },
  ...(personal.resumeUrl
    ? [
        {
          icon: "mdi:file-document",
          color: "text-emerald-400",
          label: "Resume",
          sublabel: "Download PDF",
          href: personal.resumeUrl,
          external: false,
        },
      ]
    : []),
];

// ── Framer Motion variants ────────────────────────────────────────────────────
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const linksContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ── Section ───────────────────────────────────────────────────────────────────
export function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-surface"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to work
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-3">
            Let&apos;s Connect.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Open to senior DevOps / SRE roles, platform engineering contracts,
            and technical consulting. Let&apos;s build something reliable.
          </p>
        </div>

        {/* ── Main contact card ── */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-3">
            The best way to reach me
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-cyan-400 text-base sm:text-lg break-all">
              {personal.email}
            </span>
            <button
              onClick={handleCopy}
              title="Copy email address"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-slate-700/50 hover:border-slate-600 bg-slate-900/60 px-2.5 py-1 rounded-lg transition-colors duration-200 flex-shrink-0"
            >
              <Icon
                icon={copied ? "mdi:check" : "mdi:content-copy"}
                className={`w-3.5 h-3.5 ${copied ? "text-emerald-400" : ""}`}
              />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="mt-5 flex items-center justify-center gap-2 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm py-3 rounded-xl transition-colors duration-200"
          >
            <Icon icon="mdi:email-fast" className="w-4 h-4" />
            Send Email
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </a>

          <div className="border-t border-slate-700/50 my-6" />

          {/* Secondary links */}
          <motion.div
            variants={linksContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {SECONDARY_LINKS.map((link) => (
              <motion.a
                key={link.label}
                variants={linkVariants}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-colors duration-200 group"
              >
                <Icon
                  icon={link.icon}
                  className={`w-6 h-6 flex-shrink-0 ${link.color}`}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white leading-none">
                    {link.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 truncate">
                    {link.sublabel}
                  </p>
                </div>
                <Icon
                  icon="mdi:arrow-top-right"
                  className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-500 ml-auto flex-shrink-0 transition-colors duration-200"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Availability strip ── */}
        <p className="text-xs text-slate-500 text-center mt-6 leading-relaxed">
          {personal.location} (UTC+6) · Remote-first · Typically responds within 24 hours
        </p>

      </div>
    </section>
  );
}
