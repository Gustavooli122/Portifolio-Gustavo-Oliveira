import { Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "../icons"
import { personal } from "../../lib/data"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const channels = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: personal.github.replace("https://", ""),
    href: personal.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: personal.linkedin.replace("https://", ""),
    href: personal.linkedin,
    icon: LinkedinIcon,
  },
]

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos trabalhar juntos"
          description="Estou sempre aberto a novas oportunidades e conversas. Escolha o canal que preferir."
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            const isExternal = channel.href.startsWith("http")
            return (
              <Reveal key={channel.label} delay={i * 0.1}>
                <a
                  href={channel.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{channel.label}</p>
                    <p className="mt-1 truncate text-sm text-muted-foreground">
                      {channel.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Mail className="size-4" />
            Enviar um email
          </a>
        </Reveal>
      </div>
    </section>
  )
}
