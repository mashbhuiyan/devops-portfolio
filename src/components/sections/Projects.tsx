"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, AlertCircle, CheckCircle } from "lucide-react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Project } from "@/types";

type FilterKey = "all" | Project["category"];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "kubernetes", label: "Kubernetes" },
  { key: "cicd", label: "CI/CD" },
  { key: "infrastructure", label: "Infrastructure" },
  { key: "monitoring", label: "Monitoring" },
];

function ProjectCard({
  project,
  index,
  show,
}: {
  project: Project;
  index: number;
  show: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.4, delay: show ? index * 0.08 : 0 }}
      className="relative bg-surface border border-border rounded-sm p-6 hover:border-primary/50 transition-colors duration-300 flex flex-col"
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/30">
          Featured
        </span>
      )}

      <div className="mb-4 pr-20">
        <h3 className="font-mono text-sm font-semibold text-text leading-snug mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed">{project.subtitle}</p>
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-3 mb-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      )}

      <div className="grid grid-cols-4 gap-2 mb-4">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-background border border-border rounded-sm p-2 text-center"
          >
            <div className="font-mono text-primary text-sm font-bold leading-none">
              {m.value}
            </div>
            <div className="text-muted text-[10px] leading-tight mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-auto flex items-center gap-1 text-xs font-mono text-muted hover:text-primary transition-colors"
      >
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
        {expanded ? "Hide details" : "Show details"}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-mono text-orange-400 uppercase tracking-wider mb-1.5">
                  <AlertCircle size={11} />
                  Problem
                </p>
                <p className="text-xs text-muted leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5">
                  <CheckCircle size={11} />
                  Solution
                </p>
                <ul className="space-y-1">
                  {project.solution.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted">
                      <span className="text-primary mt-0.5 flex-shrink-0 select-none">→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
                  <CheckCircle size={11} />
                  Outcomes
                </p>
                <ul className="space-y-1">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0 select-none">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Projects."
          subtitle="Production-grade infrastructure and DevOps case studies with real metrics."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-3 py-1.5 text-xs font-mono rounded-sm border transition-all duration-200 ${
                activeFilter === key
                  ? "bg-primary/10 text-primary border-primary/50"
                  : "bg-transparent text-muted border-border hover:border-primary/30 hover:text-text"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                show={isInView}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
