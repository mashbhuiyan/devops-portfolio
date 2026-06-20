"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";

const ROLES = [
  "Senior Cloud & DevOps Engineer",
  "Cloud Infrastructure Architect",
  "DevSecOps Specialist",
  "FinOps & Cost Optimization Expert",
];

const BADGES = ["AWS Certified", "10+ Years", "Kubernetes", "Terraform"];

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Systems Deployed" },
  { value: "AWS", label: "Certified Architect" },
  { value: "99.9%", label: "Uptime Delivered" },
];

const INTRO =
  "Senior Cloud & DevOps Engineer with 10+ years designing and operating " +
  "production-grade infrastructure on AWS. I architect systems that reduce " +
  "deployment time, cut cloud costs, and eliminate single points of failure " +
  "— before they become incidents.";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-dot-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      {/* Main content — flex-1 vertically centers within space above stats bar */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">

          {/* Terminal prompt — hidden on mobile */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="hidden sm:block font-mono text-xs text-muted mb-6"
          >
            <span className="text-primary">~/infra</span>
            <span className="text-muted"> $ </span>
            <span className="text-text">cat architect.md</span>
          </motion.p>

          {/* H1 — clamp(2rem, 5vw, 3.5rem) per spec; inline style only for clamp() */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="font-mono font-bold text-text leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Building Infrastructure That Scales,
            <br />
            Stays Secure &amp; Ships{" "}
            <span className="text-cyan-400">Fast.</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="font-mono text-xl sm:text-2xl text-muted mb-4 h-8"
          >
            {displayed}
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          {/* Credential badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="flex flex-wrap gap-2 mb-6"
          >
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="border border-cyan-500/30 text-cyan-400 text-xs px-2 py-1 rounded font-mono"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-muted text-base sm:text-lg leading-relaxed mb-6 max-w-2xl"
          >
            {INTRO}
          </motion.p>

          {/* Value props */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 font-mono text-sm text-muted"
          >
            <span>⚡ Deploy faster</span>
            <span className="text-border select-none">·</span>
            <span>🔒 Ship securely</span>
            <span className="text-border select-none">·</span>
            <span>💰 Cut cloud costs</span>
          </motion.div>

          {/* CTAs — stacked full-width on mobile, inline on sm+ */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
          >
            <Button
              variant="primary"
              onClick={() => scrollTo("#projects")}
              className="w-full sm:w-auto justify-center"
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              href={personal.resumeUrl ?? "/resume.pdf"}
              className="w-full sm:w-auto justify-center"
            >
              Download Resume
            </Button>
            <button
              onClick={() => scrollTo("#contact")}
              className="font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors underline-offset-4 hover:underline text-left sm:ml-2"
            >
              Book a Consultation →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — sits between content and stats bar */}
      <div className="relative z-10 flex justify-center pb-4">
        <button
          onClick={() => scrollTo("#about")}
          className="text-muted hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>

      {/* Stats bar — full width, border-top, 2×2 on mobile / 4-col on sm+ */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.4}
        variants={fadeUp}
        className="relative z-10 w-full border-t border-border bg-surface/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
