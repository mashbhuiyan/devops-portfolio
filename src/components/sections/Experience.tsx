"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { experiences } from "@/data/experience";
import type { ExperienceRole } from "@/data/experience";

// ── Types ──────────────────────────────────────────────────────────────────────
type FilterLevel = "all" | "lead" | "senior" | "earlier";

const FILTERS: { label: string; value: FilterLevel }[] = [
  { label: "All", value: "all" },
  { label: "Lead", value: "lead" },
  { label: "Senior", value: "senior" },
  { label: "Earlier", value: "earlier" },
];

const CAREER_STEPS = [
  { label: "IT Foundation", years: "2013–2016", current: false },
  { label: "Cloud Specialist", years: "2016–2019", current: false },
  { label: "Senior Engineer", years: "2019–2022", current: false },
  { label: "Lead Engineer", years: "2023–Present", current: true },
];

// ── Duration calculator ────────────────────────────────────────────────────────
function calcDuration(startDate: string, endDate: string | null): string {
  const parseDate = (d: string): Date => {
    if (/^\d{4}$/.test(d)) return new Date(parseInt(d, 10), 0);
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const [mon, yr] = d.split(" ");
    return new Date(parseInt(yr, 10), months.indexOf(mon));
  };
  const start = parseDate(startDate);
  const end = endDate ? parseDate(endDate) : new Date();
  const total =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  if (yrs === 0) return `${mos} mo`;
  if (mos === 0) return `${yrs} yr`;
  return `${yrs} yr ${mos} mo`;
}

// ── Role card ──────────────────────────────────────────────────────────────────
function RoleCard({ role }: { role: ExperienceRole }) {
  const [expanded, setExpanded] = useState(role.defaultExpanded);

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${
        role.isCurrentRole
          ? "border-l-4 border-l-cyan-500 shadow-[0_0_24px_-6px_rgba(6,182,212,0.2)]"
          : "border-l border-l-slate-700"
      }`}
    >
      <div
        className={`${
          role.isCurrentRole
            ? "bg-slate-800/50 border border-cyan-500/20"
            : "bg-slate-800/40 border border-slate-700/50"
        } ${
          role.isCompact ? "opacity-80" : ""
        } hover:bg-slate-800/60 transition-colors duration-200 rounded-xl p-5 sm:p-6`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {role.isCurrentRole && (
                <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                  CURRENT
                </span>
              )}
              {role.locationType === "remote" && (
                <span className="text-xs font-mono bg-slate-700/60 text-slate-400 border border-slate-600/50 px-2 py-0.5 rounded-full">
                  Remote
                </span>
              )}
            </div>

            <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
              {role.role}
            </h3>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
              <span className="text-cyan-400 text-sm font-semibold">
                {role.company}
              </span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-400 text-sm">{role.location}</span>
              <span className="text-slate-600 text-xs hidden sm:inline">·</span>
              <span className="text-slate-500 text-xs font-mono hidden sm:block">
                {role.startDate} – {role.endDate ?? "Present"} ·{" "}
                {calcDuration(role.startDate, role.endDate)}
              </span>
            </div>
            <div className="text-slate-500 text-xs font-mono mt-0.5 sm:hidden">
              {role.startDate} – {role.endDate ?? "Present"} ·{" "}
              {calcDuration(role.startDate, role.endDate)}
            </div>
          </div>

          {!role.isCompact && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex-shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-lg border border-slate-700 hover:border-slate-500 text-slate-500 hover:text-white transition-colors duration-200"
              aria-label={expanded ? "Collapse" : "Expand"}
            >
              <Icon
                icon={expanded ? "mdi:chevron-up" : "mdi:chevron-down"}
                className="w-4 h-4"
              />
            </button>
          )}
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-sm leading-relaxed mt-3">
          {role.summary}
        </p>

        {/* Expandable body */}
        {!role.isCompact && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="body"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  <div className="border-t border-slate-700/50" />

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <Icon
                          icon="mdi:chevron-right"
                          className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  {role.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {role.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-slate-900/60 rounded-lg border border-slate-700/50 p-3 text-center"
                        >
                          <div className="text-white font-bold font-mono text-lg leading-none tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-slate-500 text-xs mt-1 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Compact highlights (earlier career) */}
        {role.isCompact && (
          <ul className="mt-3 space-y-1.5">
            {role.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <Icon
                  icon="mdi:circle-small"
                  className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5"
                />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-700/30">
          {role.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono bg-slate-900/60 border border-slate-700/50 text-slate-400 px-2 py-0.5 rounded hover:border-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<FilterLevel>("all");

  const filtered =
    activeFilter === "all"
      ? experiences
      : experiences.filter((e) => e.level === activeFilter);

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">
            Career
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">
            Experience.
          </h2>
        </motion.div>

        {/* Career progression bar — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block mb-12"
        >
          <div className="flex items-start">
            {CAREER_STEPS.map((step, i) => (
              <div
                key={step.label}
                className="flex items-start flex-1 last:flex-none"
              >
                {/* Node + label */}
                <div className="flex flex-col items-center min-w-0">
                  <div
                    className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                      step.current
                        ? "bg-cyan-500 border-cyan-400 ring-4 ring-cyan-500/20"
                        : "bg-slate-700 border-slate-500"
                    }`}
                  />
                  <div className="mt-2 text-center px-1">
                    <div
                      className={`text-xs font-medium whitespace-nowrap ${
                        step.current ? "text-cyan-400" : "text-slate-400"
                      }`}
                    >
                      {step.label}
                      {step.current && (
                        <span className="ml-1 text-yellow-400">★</span>
                      )}
                    </div>
                    <div className="text-slate-600 text-xs font-mono">
                      {step.years}
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                {i < CAREER_STEPS.length - 1 && (
                  <div className="flex-1 h-0.5 mt-[5px] mx-2 bg-gradient-to-r from-slate-600 to-slate-700" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 mb-8 overflow-x-auto pb-1"
        >
          {FILTERS.map((f) => {
            const count =
              f.value === "all"
                ? experiences.length
                : experiences.filter((e) => e.level === f.value).length;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-mono rounded-full border whitespace-nowrap transition-colors duration-200 ${
                  activeFilter === f.value
                    ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                }`}
              >
                {f.label}
                <span
                  className={`text-xs ${
                    activeFilter === f.value
                      ? "text-cyan-500"
                      : "text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated vertical gradient line */}
          <motion.div
            className="absolute left-4 top-6 w-0.5 rounded-full bg-gradient-to-b from-cyan-500 via-slate-600 to-slate-800"
            initial={{ height: 0 }}
            animate={
              isInView ? { height: "calc(100% - 24px)" } : { height: 0 }
            }
            transition={{ duration: 1.4, delay: 0.5 }}
          />

          {/* Role rows */}
          <AnimatePresence mode="popLayout">
            {filtered.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="relative flex gap-5 sm:gap-8 mb-6 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-8 flex justify-center pt-6">
                  <div
                    className={`w-3 h-3 rounded-full z-10 relative flex-shrink-0 ${
                      role.isCurrentRole
                        ? "bg-cyan-500 ring-4 ring-cyan-500/20"
                        : role.isCompact
                        ? "bg-slate-700 border border-slate-600"
                        : "bg-slate-600 border-2 border-slate-500"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0 pb-2">
                  <RoleCard role={role} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500 font-mono"
        >
          <span>🌏 Career spanning</span>
          <span className="text-slate-400">USA 🇺🇸</span>
          <span>&amp;</span>
          <span className="text-slate-400">Japan 🇯🇵</span>
        </motion.div>

      </div>
    </section>
  );
}
