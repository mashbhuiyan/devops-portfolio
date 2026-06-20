"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { useForm, ValidationError } from "@formspree/react";
import { contactInfo, opportunityTypes } from "@/data/contact";
import type { OpportunityType } from "@/data/contact";
import type { Variants } from "framer-motion";

// ── Availability config ───────────────────────────────────────────────────────
const availabilityConfig = {
  available: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  selective: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  unavailable: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
    dot: "bg-red-400",
  },
} as const;

const BADGES = [
  "AWS Certified Solutions Architect – Associate",
  "10+ Years Production Experience",
  "Available for Technical Interviews",
  "References Available on Request",
];

const SOCIAL_LINKS = [
  { icon: "mdi:linkedin", href: contactInfo.linkedin, label: "LinkedIn" },
  { icon: "mdi:github", href: contactInfo.github, label: "GitHub" },
  { icon: "mdi:file-document", href: contactInfo.resumeUrl, label: "Resume" },
];

const OPPORTUNITY_OPTIONS = [
  { value: "fulltime", label: "Full-time Role" },
  { value: "contract", label: "Contract" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
];

const INPUT_BASE =
  "w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-colors duration-200";

// ── Framer Motion variants ────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ── Opportunity card ──────────────────────────────────────────────────────────
function OpportunityCard({ opp }: { opp: OpportunityType }) {
  return (
    <motion.div
      variants={cardItem}
      className={`flex flex-col ${opp.bgColor} ${opp.borderColor} bg-slate-800/40 border rounded-xl p-5 hover:bg-slate-800/60 transition-colors duration-200`}
    >
      <Icon icon={opp.icon} className={`w-8 h-8 mb-3 flex-shrink-0 ${opp.color}`} />
      <h3 className="font-bold text-white text-base leading-snug">{opp.title}</h3>
      <p className="text-xs text-slate-500 mt-1">{opp.subtitle}</p>
      <div className="border-t border-slate-700/50 my-3" />
      <ul className="space-y-1.5 flex-1">
        {opp.description.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
            <span
              className={`w-1 h-1 rounded-full flex-shrink-0 ${opp.color.replace(
                "text-",
                "bg-"
              )}`}
            />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={opp.ctaHref}
        className={`mt-4 block w-full text-center text-sm font-medium py-2 rounded-lg border transition-colors duration-200 ${opp.borderColor} ${opp.color} hover:bg-slate-700/30`}
      >
        {opp.cta}
      </a>
    </motion.div>
  );
}

// ── Contact info panel ────────────────────────────────────────────────────────
function ContactInfoPanel({ isInView }: { isInView: boolean }) {
  const infoRows = [
    { icon: "mdi:map-marker", value: contactInfo.location },
    {
      icon: "mdi:clock-outline",
      value: `${contactInfo.timezone} · ${contactInfo.workPreference.join(" · ")}`,
    },
    {
      icon: "mdi:email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: "mdi:lightning-bolt",
      value: `Responds within ${contactInfo.responseTime}`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p className="text-slate-400 text-sm leading-relaxed mb-8">
        Whether you&apos;re scaling cloud infrastructure, modernizing a
        deployment pipeline, or need a senior DevOps engineer to lead platform
        engineering — I&apos;d like to hear about it. I respond to every serious
        enquiry within 24 hours.
      </p>

      {/* Info rows */}
      <ul className="space-y-3 mb-8">
        {infoRows.map((row) => (
          <li key={row.icon} className="flex items-start gap-3">
            <Icon
              icon={row.icon}
              className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5"
            />
            {row.href ? (
              <a
                href={row.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200 break-all"
              >
                {row.value}
              </a>
            ) : (
              <span className="text-sm text-slate-300 leading-snug">
                {row.value}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Verification badges */}
      <ul className="space-y-2 mb-8">
        {BADGES.map((badge) => (
          <li key={badge} className="flex items-center gap-2">
            <Icon
              icon="mdi:check-circle"
              className="w-4 h-4 text-emerald-400 flex-shrink-0"
            />
            <span className="text-sm text-slate-300">{badge}</span>
          </li>
        ))}
      </ul>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            title={link.label}
            className="flex items-center justify-center w-10 h-10 border border-slate-700 hover:border-slate-500 rounded-lg text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Icon icon={link.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

// ── Contact form ──────────────────────────────────────────────────────────────
function ContactForm({ isInView }: { isInView: boolean }) {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  const [opportunityType, setOpportunityType] = useState("fulltime");

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8"
    >
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <Icon
              icon="mdi:check-circle"
              className="w-12 h-12 text-emerald-400 mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              Message Sent Successfully
            </h3>
            <p className="text-slate-400 text-sm">
              I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-mono">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className={INPUT_BASE}
                />
                <div className="text-red-400 text-xs mt-1">
                  <ValidationError
                    field="name"
                    prefix="Name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-mono">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className={INPUT_BASE}
                />
                <div className="text-red-400 text-xs mt-1">
                  <ValidationError
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Opportunity type */}
            <div>
              <label className="block text-xs text-slate-400 mb-2 font-mono">
                Opportunity Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {OPPORTUNITY_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-center text-xs font-medium py-2 px-3 rounded-lg border cursor-pointer transition-colors duration-200 select-none ${
                      opportunityType === opt.value
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                        : "border-slate-700 text-slate-400 hover:border-slate-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="opportunity_type"
                      value={opt.value}
                      checked={opportunityType === opt.value}
                      onChange={() => setOpportunityType(opt.value)}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Row 3: Subject */}
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-mono">
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className={INPUT_BASE}
              />
              <div className="text-red-400 text-xs mt-1">
                <ValidationError
                  field="subject"
                  prefix="Subject"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-mono">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity, your team, and timeline..."
                className={`${INPUT_BASE} resize-none`}
              />
              <div className="text-red-400 text-xs mt-1">
                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-slate-900 font-semibold text-sm py-3 rounded-lg transition-colors duration-200"
            >
              {state.submitting ? (
                <>
                  <Icon icon="mdi:loading" className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Icon icon="mdi:send" className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {/* General form-level errors */}
            <ValidationError errors={state.errors} className="text-red-400 text-sm flex items-center gap-2" />
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const avail = availabilityConfig[contactInfo.availability];

  return (
    <section id="contact" ref={ref} className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Let&apos;s Build Something Production-Grade
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Open to the right opportunities — full-time, contract, or consulting.
          </p>
        </div>

        {/* Availability banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <span
            className={`inline-flex items-center gap-2 ${avail.bg} border ${avail.border} ${avail.text} text-sm px-4 py-2 rounded-full`}
          >
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${avail.dot} animate-pulse`}
            />
            {contactInfo.availabilityText}
          </span>
        </motion.div>

        {/* Opportunity cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {opportunityTypes.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </motion.div>

        {/* Two-column: info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12">
          <ContactInfoPanel isInView={isInView} />
          <ContactForm isInView={isInView} />
        </div>

      </div>
    </section>
  );
}
