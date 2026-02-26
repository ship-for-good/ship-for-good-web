"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
} as const;

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      number: t("step1.number"),
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      number: t("step2.number"),
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      number: t("step3.number"),
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            {t("eyebrow")}
          </p>
          <h2 className="font-pixel text-4xl sm:text-5xl tracking-tight">
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="group border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors"
            >
              <span className="text-xs font-mono text-accent mb-4 block">
                {step.number}
              </span>
              <h3 className="font-pixel text-2xl mb-3">{step.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
