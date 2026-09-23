"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import type { Project } from "@/lib/data"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`Preview do projeto ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex sm:flex-row flex-col items-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 w-full sm:w-auto rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Ver Projeto
            <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Repositório do projeto ${project.title} no GitHub`}
            className="inline-flex items-center w-full sm:w-auto justify-center gap-1.5 rounded-full border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
