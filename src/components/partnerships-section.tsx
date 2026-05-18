"use client";

import { asset } from "@/lib/asset";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function PartnershipsSection() {
  const t = useTranslations("CivioSection");

  return (
    <section className="py-24 sm:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl tracking-tight">
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://civio.es/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/civio-logo.svg")}
                alt={t("civio_alt")}
                width={160}
                height={36}
                style={{ width: "160px", height: "auto" }}
              />
            </a>
          </div>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://civio.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("civio_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed mb-6">
              {t.rich("civio_description", {
                civio: (chunks) => (
                  <a href="https://civio.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <blockquote className="border-l-2 border-accent pl-4 text-sm font-medium">
              "{t("quote")}"
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://www.42barcelona.com/es/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/42-barcelona-logo.png")}
                alt="42Barcelona"
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://www.42barcelona.com/es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("venue_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("venue_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://softwarecrafters.barcelona/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/sbcn-logo.svg")}
                alt="Software Crafters Barcelona"
                style={{ width: "120px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://softwarecrafters.barcelona/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("supporter_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("supporter_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://lovable.dev/brand" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/lovable-logo.png")}
                alt="Lovable"
                style={{ width: "140px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://lovable.dev/brand" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("lovable_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("lovable_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://cursor.com/brand" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/cursor-logo.svg")}
                alt="Cursor"
                style={{ width: "140px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://cursor.com/brand" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("cursor_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("cursor_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://www.plainconcepts.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/plain-concepts-logo.svg")}
                alt="Plain Concepts"
                style={{ width: "130px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://www.plainconcepts.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("plain_concepts_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("plain_concepts_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://qualityclouds.ai/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/qualityclouds-logo.webp")}
                alt="QualityClouds"
                style={{ width: "220px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://qualityclouds.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("qualityclouds_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("qualityclouds_description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-background border border-border rounded-2xl p-10 sm:p-14"
        >
          <div className="shrink-0 md:w-[160px] flex items-center justify-center">
            <a href="https://www.nextdigital.es/" target="_blank" rel="noopener noreferrer">
              <img
                src={asset("/next-digital-logo.svg")}
                alt="Next Digital"
                style={{ width: "160px", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              <a href="https://www.nextdigital.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {t("next_digital_title")}
              </a>
            </p>
            <p className="text-base text-foreground-muted leading-relaxed">
              {t("next_digital_description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
