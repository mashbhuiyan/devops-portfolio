"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-24 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Projects"
          subtitle="A selection of infrastructure and DevOps projects I've built."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-mono text-text font-semibold text-sm leading-snug pr-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-primary transition-colors"
                          aria-label="GitHub"
                        >
                          <Icon icon="mdi:github" className="w-[15px] h-[15px]" />
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
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted text-xs leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} label={tech} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
