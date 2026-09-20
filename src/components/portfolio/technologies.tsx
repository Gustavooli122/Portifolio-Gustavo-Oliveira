"use client"

import { motion } from "motion/react"
import { technologies } from "@/lib/data"
import { SectionHeading } from "./section-heading"

export function Technologies() {
  return (
    <section id="tecnologias" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tecnologias"
          title="Ferramentas que utilizo"
          description="As principais tecnologias que domino para construir aplicações web modernas."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
              >
                <span className="grid size-14 place-items-center rounded-xl bg-secondary text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:text-primary">
                  <Icon className="size-7" />
                </span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
