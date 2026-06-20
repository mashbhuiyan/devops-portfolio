"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import type { SkillCategory, Skill, Proficiency } from "@/data/skills";
import type { Variants } from "framer-motion";

type FilterKey = "all" | string;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  ...skillCategories.map((c) => ({ key: c.id, label: c.title })),
];

const proficiencyDot: Record<Proficiency, string> = {
  production: "bg-cyan-400",
  proficient: "bg-emerald-400",
  familiar: "bg-yellow-400",
  learning: "bg-slate-500",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/50 rounded-lg px-2.5 py-1.5 hover:border-slate-600 hover:bg-slate-800/80 transition-colors duration-200 cursor-default">
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${proficiencyDot[skill.proficiency]}`}
      />
      <Icon icon={skill.icon} className="w-3.5 h-3.5 flex-shrink-0" />
      <span className="text-xs text-slate-300">{skill.name}</span>
    </span>
  );
}

function CategoryCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      variants={cardVariants}
      className={`bg-slate-800/40 border rounded-xl p-5 ${category.borderColor}`}
    >
      <div className="flex items-center gap-2">
        <Icon
          icon={category.icon}
          className={`w-5 h-5 flex-shrink-0 ${category.color}`}
        />
        <h3 className="font-semibold text-white leading-snug">{category.title}</h3>
        <span className="ml-auto text-xs text-slate-500">
          {category.skills.length}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visible =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills."
          subtitle="Production-grade expertise across the modern cloud and DevOps toolchain."
        />

        {/* Proficiency legend */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-xs text-slate-400">
          {(["production", "proficient", "familiar", "learning"] as Proficiency[]).map((p) => (
            <span key={p} className="flex items-center gap-1.5 capitalize">
              <span className={`w-2 h-2 rounded-full ${proficiencyDot[p]}`} />
              {p}
            </span>
          ))}
        </div>

        {/* Filter bar */}
        <div className="overflow-x-auto pb-2 mb-8">
          <div className="flex gap-2 min-w-max sm:flex-wrap sm:min-w-0 sm:justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors duration-200 whitespace-nowrap ${
                  activeFilter === f.key
                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                    : "border-slate-700 text-slate-400 hover:border-slate-500"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {visible.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
