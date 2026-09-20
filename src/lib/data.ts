import type { ComponentType, SVGProps } from "react"
import {
  Braces,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Zap,
  Search,
  Code2,
  Sparkles,
  Smartphone,
  Component,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

/* ------------------------------------------------------------------ */
/*  INFORMAÇÕES PESSOAIS — edite livremente                            */
/* ------------------------------------------------------------------ */
export const personal = {
  name: "Gustavo Oliveira",
  role: "Desenvolvedor Front-end/backend",
  shortBio:
    "Construo interfaces modernas, acessíveis e performáticas que transformam ideias em experiências digitais memoráveis.",
  email: "gustavo.oliveira.souza.dev@email.com",
  github: "https://github.com/Gustavooli122",
  linkedin: "https://www.linkedin.com/in/gustavo-oliveira-6a6433305/",
}

/* ------------------------------------------------------------------ */
/*  NAVEGAÇÃO                                                          */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
]

/* ------------------------------------------------------------------ */
/*  TECNOLOGIAS                                                        */
/* ------------------------------------------------------------------ */
export type Technology = {
  name: string
  icon: IconType
}

export const technologies: Technology[] = [
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Component },
  { name: "JavaScript", icon: Braces },
  { name: "Tailwind CSS", icon: Palette },
  { name: "CSS3", icon: Code2 },
  { name: "HTML5", icon: Globe },
  { name: "Git", icon: GitBranch },
  { name: "SQL", icon: GithubIcon },
  { name: "postGREESQL", icon: GithubIcon },
  { name: "API router (Next.js)", icon: GithubIcon },
]

/* ------------------------------------------------------------------ */
/*  PROJETOS — adicione novos projetos apenas editando este array      */
/* ------------------------------------------------------------------ */
export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: "Dashboard de Analytics",
    description:
      "Painel de análise de dados em tempo real com gráficos interativos, filtros dinâmicos e visualizações responsivas.",
    image: "/projects/dashboard.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Recharts"],
    github: "https://github.com/joaosilva/analytics-dashboard",
    demo: "https://analytics.exemplo.com",
  },
  {
    title: "Loja E-commerce",
    description:
      "Storefront completo com carrinho, checkout e catálogo de produtos, focado em performance e conversão.",
    image: "/projects/ecommerce.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    github: "https://github.com/joaosilva/ecommerce",
    demo: "https://loja.exemplo.com",
  },
  {
    title: "Gerenciador de Tarefas",
    description:
      "Aplicativo de produtividade estilo Kanban com arrastar-e-soltar, colaboração e sincronização em tempo real.",
    image: "/projects/taskapp.png",
    technologies: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/joaosilva/task-manager",
    demo: "https://tarefas.exemplo.com",
  },
  {
    title: "App de Clima",
    description:
      "Previsão do tempo com design glassmorphism, busca por cidade e previsão horária consumindo API externa.",
    image: "/projects/weather.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/joaosilva/weather-app",
    demo: "https://clima.exemplo.com",
  },
]

/* ------------------------------------------------------------------ */
/*  HABILIDADES                                                        */
/* ------------------------------------------------------------------ */
export type Skill = {
  title: string
  description: string
  icon: IconType
}

export const skills: Skill[] = [
  {
    title: "Interfaces Responsivas",
    description: "Layouts que se adaptam perfeitamente a qualquer tela, do mobile ao desktop.",
    icon: Smartphone,
  },
  {
    title: "Componentização em React",
    description: "Componentes reutilizáveis, escaláveis e de fácil manutenção.",
    icon: Component,
  },
  {
    title: "Performance",
    description: "Otimização de carregamento, renderização e Core Web Vitals.",
    icon: Zap,
  },
  {
    title: "SEO Básico",
    description: "Estrutura semântica e metadados para melhor ranqueamento.",
    icon: Search,
  },
  {
    title: "Clean Code",
    description: "Código limpo, legível e seguindo boas práticas do mercado.",
    icon: Sparkles,
  },
  {
    title: "Consumo de APIs",
    description: "Integração eficiente com APIs REST e tratamento de dados.",
    icon: Globe,
  },
  {
    title: "Versionamento com Git",
    description: "Fluxo de trabalho organizado com Git e GitHub.",
    icon: GitBranch,
  },
  {
    title: "Design System",
    description: "Criação e manutenção de sistemas de design consistentes.",
    icon: Palette,
  },
]

/* ------------------------------------------------------------------ */
/*  REDES SOCIAIS                                                      */
/* ------------------------------------------------------------------ */
export type Social = {
  label: string
  href: string
  icon: IconType
}

export const socials: Social[] = [
  { label: "GitHub", href: personal.github, icon: GithubIcon },
  { label: "LinkedIn", href: personal.linkedin, icon: LinkedinIcon },
]
