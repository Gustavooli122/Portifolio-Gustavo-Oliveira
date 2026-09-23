"use client"

import { motion } from "motion/react"
import { ArrowRight, ArrowDown } from "lucide-react"
import { personal } from "../../lib/data"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const email =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=Contato%20pelo%20portfólio&body=Olá!%20Encontrei%20seu%20portfólio%20e%20gostei%20do%20seu%20trabalho.%20Gostaria%20de%20conversar%20sobre%20um%20possível%20projeto%20ou%20oportunidade.`
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Disponível para novos projetos
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Olá, eu sou <span className="text-primary">{personal.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-lg text-muted-foreground sm:text-xl"
          >
            {personal.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {personal.shortBio}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Ver Projetos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={email}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Entrar em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
