"use client"

import { motion } from "motion/react"
import { skills } from "@/lib/data"
import { SectionHeading } from "./section-heading"

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Habilidades"
          title="O que eu entrego"
          description="Competências que aplico no dia a dia para criar produtos de alta qualidade."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="mb-4 inline-grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-base font-semibold">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
