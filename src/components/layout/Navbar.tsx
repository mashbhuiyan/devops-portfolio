"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/personal";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Certs", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted hover:text-text text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            {personal.resumeUrl && (
              <li>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-4 py-1.5 text-sm font-mono rounded-sm hover:bg-primary hover:text-background transition-all"
                >
                  Resume
                </a>
              </li>
            )}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-muted hover:text-text transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <ul className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted hover:text-text text-sm font-medium transition-colors w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            {personal.resumeUrl && (
              <li>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-4 py-1.5 text-sm font-mono rounded-sm hover:bg-primary hover:text-background transition-all inline-block"
                >
                  Resume
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
