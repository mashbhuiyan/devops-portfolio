"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stats, achievements } from "@/data/highlights";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Variants } from "framer-motion";
import type { Stat, Achievement } from "@/data/highlights";

// ── Counter helpers ───────────────────────────────────────────────────────────
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+\.?\d*)(\D*)$/);
  if (!match) return { num: NaN, suffix: "", prefix: "" };
  return { num: parseFloat(match[2]), suffix: match[3], prefix: match[1] };
}

function AnimatedNumber({ stat, animate }: { stat: Stat; animate: boolean }) {
  const { num, suffix, prefix } = parseValue(stat.value);
  const isNumeric = !isNaN(num);
  const hasDecimal = isNumeric && num % 1 !== 0;

  const [display, setDisplay] = useState(
    isNumeric ? `${prefix}${hasDecimal ? "0.0" : "0"}${suffix}` : stat.value
  );

  useEffect(() => {
    if (!animate || !isNumeric) return;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 2);
      const current = eased * num;
      const formatted = hasDecimal
        ? current.toFixed(1)
        : Math.floor(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [animate]); // stable: num/suffix/prefix/hasDecimal derived from static prop

  return <>{display}</>;
}

// ── Framer Motion variants ────────────────────────────────────────────────────
const statsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const statItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
const achievementsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const achievementItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ stat, animate }: { stat: Stat; animate: boolean }) {
  return (
    <motion.div
      variants={statItem}
      className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center"
    >
      <Icon icon={stat.icon} className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
      <div className="text-3xl font-bold text-white leading-none mb-1">
        <AnimatedNumber stat={stat} animate={animate} />
      </div>
      <div className="text-xs text-slate-400 mt-1 leading-snug">{stat.label}</div>
    </motion.div>
  );
}

// ── Achievement card ──────────────────────────────────────────────────────────
function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <motion.div
      variants={achievementItem}
      className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon
          icon={achievement.icon}
          className={`w-10 h-10 flex-shrink-0 ${achievement.iconColor}`}
        />
        <h3 className="text-lg font-bold text-white leading-snug">
          {achievement.title}
        </h3>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">
        {achievement.description}
      </p>
      <div className="mt-4 flex justify-end">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border bg-transparent ${achievement.metricColor}`}
        >
          {achievement.metric}
        </span>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export function Highlights() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="highlights" ref={ref} className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional Highlights."
          subtitle="10+ years designing, building, and operating production-grade cloud infrastructure."
        />

        {/* Stats row */}
        <motion.div
          variants={statsContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} animate={isInView} />
          ))}
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={achievementsContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {achievements.map((a) => (
            <AchievementCard key={a.id} achievement={a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
