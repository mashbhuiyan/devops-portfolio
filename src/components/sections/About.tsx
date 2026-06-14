"use client";

import Image from "next/image";
import { MapPin, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: Calendar,
    label: "Years Experience",
    value: `${personal.yearsExperience}+`,
  },
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: Award, label: "Focus", value: "Cloud & DevOps" },
];

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="A little background on who I am and what I do."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute inset-0 border-2 border-primary rounded-sm translate-x-3 translate-y-3" />
              <div className="relative w-full h-full bg-surface border border-border rounded-sm overflow-hidden">
                {personal.avatarPath ? (
                  <Image
                    src={personal.avatarPath}
                    alt={`${personal.name} profile photo`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface">
                    <div className="font-mono text-center px-4">
                      <p className="text-primary text-xs mb-2">$ ls ./profile</p>
                      <p className="text-muted text-xs">photo.jpg</p>
                      <p className="text-muted text-xs mt-1 italic">coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-muted leading-relaxed mb-6 text-sm sm:text-base">
              {personal.bio}
            </p>
            <p className="text-muted leading-relaxed mb-8 text-sm sm:text-base">
              I specialize in designing resilient AWS architectures, automating
              infrastructure with Terraform, and building CI/CD pipelines that
              let teams ship with confidence. I care deeply about observability,
              security, and making complex systems simple to operate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-surface border border-border rounded-sm px-4 py-3"
                >
                  <Icon size={16} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-text text-sm font-semibold">{value}</p>
                    <p className="text-muted text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
