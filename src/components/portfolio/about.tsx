import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "20+", label: "Projetos concluídos" },
  { value: "15+", label: "Clientes satisfeitos" },
]

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Sobre Mim" title="Um pouco da minha trajetória" />

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-5">
          <Reveal className="space-y-4 md:col-span-3">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Sou um desenvolvedor Front-end apaixonado por criar interfaces que unem
              design elegante e código de qualidade. Minha jornada começou pela
              curiosidade de entender como as coisas funcionam na web, e desde então
              transformei essa paixão em profissão.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Tenho foco em performance, acessibilidade e experiência do usuário. Gosto
              de trabalhar com tecnologias modernas como Next.js e React, sempre buscando
              escrever código limpo, reutilizável e fácil de manter.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Meu objetivo é continuar evoluindo como desenvolvedor, contribuir em
              projetos desafiadores e ajudar empresas e clientes a construírem produtos
              digitais que realmente fazem a diferença.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="grid gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <div className="font-mono text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
