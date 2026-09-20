import { projects } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { ProjectCard } from "./project-card"

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Trabalhos em destaque"
          description="Uma seleção de projetos que desenvolvi, combinando design, código e resolução de problemas reais."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
