"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function Schedule() {
  const t = useTranslations("Schedule");

  const days = [
    {
      date: t("day1.date"),
      label: t("day1.label"),
      title: t("day1.title"),
      items: [
        { time: t("day1.item1.time"), event: t("day1.item1.event") },
        { time: t("day1.item2.time"), event: t("day1.item2.event") },
        { time: t("day1.item3.time"), event: t("day1.item3.event") },
        { time: t("day1.item4.time"), event: t("day1.item4.event") },
        { time: t("day1.item5.time"), event: t("day1.item5.event") },
      ],
    },
    {
      date: t("day2.date"),
      label: t("day2.label"),
      title: t("day2.title"),
      items: [
        { time: t("day2.item1.time"), event: t("day2.item1.event") },
        { time: t("day2.item2.time"), event: t("day2.item2.event") },
        { time: t("day2.item3.time"), event: t("day2.item3.event") },
        { time: t("day2.item4.time"), event: t("day2.item4.event") },
        { time: t("day2.item5.time"), event: t("day2.item5.event") },
        { time: t("day2.item6.time"), event: t("day2.item6.event") },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-24 sm:py-32 bg-background-alt">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {days.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: dayIndex * 0.15 }}
              className="bg-background border border-border rounded-2xl p-8"
            >
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <h3 className="font-pixel text-3xl">{day.date}</h3>
                  <p className="text-sm text-foreground-muted mt-1">{day.label}</p>
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-medium">
                  {day.title}
                </span>
              </div>

              <div className="space-y-0 divide-y divide-border">
                {day.items.map((item) => (
                  <div
                    key={`${day.date}-${item.time}`}
                    className="flex items-baseline gap-4 py-3.5"
                  >
                    <span className="text-sm font-mono text-foreground-muted w-14 shrink-0">
                      {item.time}
                    </span>
                    <span className="text-sm">{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
