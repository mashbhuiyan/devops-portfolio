"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { SkillLevel } from "@/types";

const levelColors: Record<SkillLevel, string> = {
  expert: "text-primary border-primary/40",
  advanced: "text-accent border-accent/40",
  intermediate: "text-text border-border",
  familiar: "text-muted border-border",
};

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-24 bg-surface"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills"
          subtitle="Technologies I work with across the cloud, containers, automation, and observability stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="bg-background border border-border rounded-sm p-5 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-mono text-sm text-primary mb-4 pb-3 border-b border-border">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-sm border bg-surface transition-all duration-200 hover:scale-105 ${levelColors[skill.level]}`}
                  >
                    <Icon
                      icon={skill.iconName}
                      className="w-3.5 h-3.5 flex-shrink-0"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-6 justify-center text-xs font-mono text-muted">
          {(["expert", "advanced", "intermediate", "familiar"] as SkillLevel[]).map((level) => (
            <span key={level} className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  level === "expert"
                    ? "bg-primary"
                    : level === "advanced"
                    ? "bg-accent"
                    : level === "intermediate"
                    ? "bg-text"
                    : "bg-muted"
                }`}
              />
              {level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
