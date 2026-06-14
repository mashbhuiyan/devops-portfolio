"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";

const roles = [
  "Cloud & DevOps Engineer",
  "AWS Infrastructure Architect",
  "Kubernetes & Docker Expert",
  "CI/CD Pipeline Builder",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-dot-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 leading-tight animate-slide-up">
            Hi, I&apos;m{" "}
            <span className="text-gradient-cyan">{personal.name}</span>
          </h1>

          <div className="font-mono text-xl sm:text-2xl text-muted mb-6 h-8 animate-slide-up">
            {displayed}
            <span className="animate-pulse text-primary">|</span>
          </div>

          <p className="text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-xl animate-slide-up">
            {personal.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-slide-up">
            <Button
              variant="primary"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
            <div className="flex items-center gap-3 ml-2">
              {personal.github !== "#" && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Icon icon="mdi:github" className="w-5 h-5" />
                </a>
              )}
              {personal.linkedin !== "#" && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Icon icon="mdi:linkedin" className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
