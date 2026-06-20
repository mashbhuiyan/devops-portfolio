"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { impactCategories } from "@/data/impact";
import type { ImpactCategory, ImpactMetric } from "@/data/impact";
import type { Variants } from "framer-motion";

// ── Value parser ──────────────────────────────────────────────────────────────
function parseMetricValue(value: string) {
  const match = value.match(/^([^0-9]*)(\d+\.?\d*)(.*)$/);
  if (!match) return { prefix: "", num: NaN, suffix: "", decimals: 0 };
  const numStr = match[2];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix: match[1], num: parseFloat(numStr), suffix: match[3], decimals };
}

// ── Animated counter ──────────────────────────────────────────────────────────
function AnimatedCounter({
  value,
  animate,
  color,
}: {
  value: string;
  animate: boolean;
  color: string;
}) {
  const { prefix, num, suffix, decimals } = parseMetricValue(value);
  const isNumeric = !isNaN(num);

  const [display, setDisplay] = useState(
    isNumeric
      ? `${prefix}${decimals > 0 ? (0).toFixed(decimals) : "0"}${suffix}`
      : value
  );

  useEffect(() => {
    if (!animate || !isNumeric || num === 0) return;
    const duration = 2500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 2);
      const current = eased * num;
      const formatted =
        decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [animate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span className={`text-2xl font-bold tabular-nums ${color}`}>{display}</span>
  );
}

// ── Trend indicator ───────────────────────────────────────────────────────────
function TrendIcon({
  trend,
  trendGood,
}: {
  trend: ImpactMetric["trend"];
  trendGood: boolean;
}) {
  if (trend === "neutral") return <span className="text-slate-500 text-sm">—</span>;
  const colorClass = trendGood ? "text-emerald-400" : "text-red-400";
  const arrow = trend === "up" ? "↑" : "↓";
  return <span className={`text-sm font-bold ${colorClass}`}>{arrow}</span>;
}

// ── Metric row ────────────────────────────────────────────────────────────────
const rowVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

function MetricRow({
  metric,
  isLast,
  animate,
  color,
}: {
  metric: ImpactMetric;
  isLast: boolean;
  animate: boolean;
  color: string;
}) {
  return (
    <motion.div variants={rowVariants}>
      <div className="flex items-center justify-between gap-4 py-2.5 px-2 rounded hover:bg-slate-700/20 transition-colors duration-200">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <AnimatedCounter value={metric.value} animate={animate} color={color} />
            <span className="text-sm text-white font-medium">{metric.label}</span>
          </div>
          {metric.sublabel && (
            <p className="text-xs text-slate-500 mt-0.5">{metric.sublabel}</p>
          )}
        </div>
        <TrendIcon trend={metric.trend} trendGood={metric.trendGood} />
      </div>
      {!isLast && <div className="border-t border-slate-700/30 mx-2" />}
    </motion.div>
  );
}

// ── Impact card ───────────────────────────────────────────────────────────────
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const metricsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

function ImpactCard({
  category,
  animate,
}: {
  category: ImpactCategory;
  animate: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={`${category.bgColor} ${category.borderColor} bg-slate-800/40 border rounded-xl p-6 hover:bg-slate-800/60 hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <Icon
            icon={category.icon}
            className={`w-6 h-6 flex-shrink-0 ${category.color}`}
          />
          <h3 className="font-bold text-white text-lg">{category.title}</h3>
        </div>
        {category.footnote && (
          <p className="text-xs text-slate-500 italic text-right leading-snug max-w-[140px] flex-shrink-0">
            {category.footnote}
          </p>
        )}
      </div>

      <div className="border-t border-slate-700/50 my-4" />

      <motion.div
        variants={metricsContainer}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        {category.metrics.map((metric, i) => (
          <MetricRow
            key={metric.label}
            metric={metric}
            isLast={i === category.metrics.length - 1}
            animate={animate}
            color={category.color}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ── Bottom banner ─────────────────────────────────────────────────────────────
const BANNER_STATS = [
  { value: "50+", label: "Systems Managed" },
  { value: "10+", label: "Years Experience" },
  { value: "AWS", label: "Certified" },
  { value: "DORA", label: "Elite Performer" },
];

// ── Framer Motion variants ────────────────────────────────────────────────────
const cardsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Section ───────────────────────────────────────────────────────────────────
export function TechnicalImpact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Technical Impact"
          subtitle="Engineering outcomes measured in production — not estimated in staging."
        />

        <p className="text-xs text-slate-500 -mt-8 mb-8 max-w-xl">
          Metrics represent real outcomes across production engagements. Numbers are
          directionally accurate and defensible.
        </p>

        {/* DORA badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm px-4 py-2 rounded-full">
            <Icon icon="mdi:lightning-bolt" className="w-4 h-4 flex-shrink-0" />
            DORA Elite Performer — Top 10% Engineering Delivery
            <Icon icon="mdi:open-in-new" className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
          </span>
        </div>

        {/* Impact cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {impactCategories.map((category) => (
            <ImpactCard key={category.id} category={category} animate={isInView} />
          ))}
        </motion.div>

        {/* Bottom banner */}
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BANNER_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
