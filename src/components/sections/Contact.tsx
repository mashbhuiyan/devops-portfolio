"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/data/personal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { SocialLink } from "@/types";

const buildSocialLinks = (): SocialLink[] => {
  const links: SocialLink[] = [
    { label: "Email", href: `mailto:${personal.email}`, icon: "email" },
  ];
  if (personal.github !== "#") {
    links.push({ label: "GitHub", href: personal.github, icon: "github" });
  }
  if (personal.linkedin !== "#") {
    links.push({ label: "LinkedIn", href: personal.linkedin, icon: "linkedin" });
  }
  return links;
};

const iconifyMap: Record<string, string> = {
  github: "mdi:github",
  linkedin: "mdi:linkedin",
};

export function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const socialLinks = buildSocialLinks();

  return (
    <section
      id="contact"
      className="py-24 bg-surface"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact"
          subtitle="Open to new opportunities and interesting conversations. Let's connect."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon === "email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-background border border-border px-6 py-4 rounded-sm font-mono text-sm text-muted hover:border-primary hover:text-primary transition-all duration-200 group"
            >
              {link.icon === "email" ? (
                <Mail
                  size={18}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
              ) : (
                <Icon
                  icon={iconifyMap[link.icon]}
                  className="w-[18px] h-[18px] text-primary group-hover:scale-110 transition-transform"
                />
              )}
              {link.label}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
