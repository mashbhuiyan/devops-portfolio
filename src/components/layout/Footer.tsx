"use client";

import { Icon } from "@iconify/react";
import { personal } from "@/data/personal";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const CONNECT_LINKS = [
  { icon: "mdi:github", label: "GitHub", href: personal.github },
  { icon: "mdi:linkedin", label: "LinkedIn", href: personal.linkedin },
  { icon: "mdi:email", label: "Email", href: `mailto:${personal.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

          {/* Left: Brand */}
          <div>
            <p className="font-mono font-bold text-white text-lg leading-snug">
              {personal.name}
            </p>
            <span className="mt-2 inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs px-2.5 py-1 rounded-full font-mono">
              {personal.title}
            </span>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs">
              Building reliable systems, one deployment at a time.
            </p>
          </div>

          {/* Center: Sections */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-4">
              Sections
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Connect */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon icon={link.icon} className="w-4 h-4 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex items-center justify-center">
          <p className="text-xs text-slate-500 font-mono">
            © {year} {personal.name}
          </p>
        </div>

      </div>
    </footer>
  );
}
