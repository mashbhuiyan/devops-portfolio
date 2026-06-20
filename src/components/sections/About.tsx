"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { personal } from "@/data/personal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Variants } from "framer-motion";

const HOW_I_WORK = [
  {
    icon: "mdi:shield-check",
    title: "Reliability First",
    desc: "SLOs over SLAs — design for failure before it finds you.",
    color: "text-cyan-400",
  },
  {
    icon: "mdi:cog-transfer",
    title: "Automation > Manual",
    desc: "If it runs twice, it becomes a pipeline.",
    color: "text-blue-400",
  },
  {
    icon: "mdi:chart-line",
    title: "Observability",
    desc: "You can't fix what you can't see — instrument everything.",
    color: "text-purple-400",
  },
  {
    icon: "mdi:arrow-collapse-left",
    title: "Shift Left",
    desc: "Security and quality baked in from commit zero.",
    color: "text-emerald-400",
  },
];

const cardsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">

          {/* ── Left: profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-6 flex-shrink-0">
              <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl" />
              <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-cyan-500/40">
                {personal.avatarPath ? (
                  <Image
                    src={personal.avatarPath}
                    alt={`${personal.name} profile photo`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    <Icon icon="mdi:account" className="w-20 h-20 text-slate-600" />
                  </div>
                )}
              </div>
            </div>

            {/* Name + title */}
            <h3 className="font-mono text-base font-bold text-white text-center md:text-left leading-snug">
              {personal.name}
            </h3>
            <span className="mt-2 inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs px-2.5 py-1 rounded-full font-mono">
              {personal.title}
            </span>

            {/* Location */}
            <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-400">
              <Icon icon="mdi:map-marker" className="w-3.5 h-3.5 text-cyan-500" />
              {personal.location}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Icon icon="mdi:github" className="w-4 h-4" />
                GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Icon icon="mdi:linkedin" className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Icon icon="mdi:email" className="w-4 h-4" />
                Email
              </a>
            </div>

            {/* Status badge */}
            <div className="mt-5 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-6">
              About.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m a Cloud &amp; DevOps Engineer with {personal.yearsExperience}+ years
                building and operating production infrastructure on AWS. I bridge the gap between
                development and operations — designing systems that are resilient by default,
                automated wherever possible, and observable at every layer.
              </p>
              <p>
                My technical philosophy is simple: infrastructure should be boring at 3am.
                That means SLO-driven reliability, everything in code, pipelines that catch
                problems before production does, and monitoring that pages on signal — not noise.
              </p>
              <p>
                Right now I&apos;m focused on Kubernetes platform engineering, FinOps at scale,
                and pushing teams toward DORA Elite performer metrics through CI/CD maturity.
              </p>
            </div>

            {/* How I work */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-mono">
              How I work
            </p>
            <motion.div
              variants={cardsContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {HOW_I_WORK.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className="flex items-start gap-3 bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/60 transition-colors duration-200"
                >
                  <Icon
                    icon={item.icon}
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.color}`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
