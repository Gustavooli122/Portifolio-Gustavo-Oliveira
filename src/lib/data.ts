import type { ComponentType, SVGProps } from "react"
import { Mail } from "lucide-react"
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
import { GithubIcon, LinkedinIcon } from "../components/icons"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

/* ------------------------------------------------------------------ */
/*  INFORMAÇÕES PESSOAIS — edite livremente                            */
/* ------------------------------------------------------------------ */
export const personal = {
  name: "Gustavo Oliveira",
  role: "Desenvolvedor Front-end",
  shortBio:
    "Construo interfaces modernas, acessíveis e performáticas que transformam ideias em experiências digitais memoráveis.",
  email: "gustavo.oliveira.souza.dev@gmail.com",
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
  { name: "Git", icon: GitBranch }
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
    title: "Clareia",
    description:
      "Construtor visual de páginas profissionais com modelos prontos, personalização de estilos e visualização responsiva em tempo real.",
    image: "/projetos/clarea.png",
    technologies: ["Next.js", "React", "Tailwind CSS","JavaScript"],
    github: "https://github.com/Gustavooli122/site-para-psicologos",
    demo: "https://gerador-de-pagina-pscologos.vercel.app/",
  },
  {
    title: "Artora",
    description:
      "Plataforma de conteúdo e produtos voltada para desenho, arte e papelaria, desenvolvida com foco em SEO e experiência do usuário.",
    image: "/projetos/artora.png",
    technologies: ["Next.js", "React", "Tailwind CSS","JavaScript"],
    github: "https://github.com/Gustavooli122/Artora-next/",
    demo: "https://artora.company",
  },

  {
    title: "Weather Now",
    description:
      "Aplicação de previsão do tempo com busca por cidade, previsão horária e diária e conversão entre diferentes unidades de medida.",
    image: "/projetos/weather.png",
    technologies: ["Next.js", "React", "Tailwind CSS","JavaScript"],
    github: "https://github.com/Gustavooli122/Previsao-de-tempo/",
    demo: "https://previsao-de-tempo-three.vercel.app",
  },

  {
    title: "Gerador de Senhas",
    description:
      "Gerador de senhas personalizáveis com controle de tamanho, tipos de caracteres e opção para copiar a senha gerada.",
    image: "/projetos/gerador-de-senhas.png",
    technologies: ["Next.js", "React", "Tailwind CSS","JavaScript"],
    github: "https://github.com/Gustavooli122/generatorPassword",
    demo: "https://generator-password-henna.vercel.app/",
  },

  {
    title: "Calculadora",
    description:
      "Calculadora responsiva para operações matemáticas básicas, desenvolvida com uma interface simples, moderna e intuitiva.",
    image: "/projetos/calculadora.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Gustavooli122/cal",
    demo: "https://cal-ruddy-tau.vercel.app/",
  },

    {
    title: "Evolução Dev",
    description:
      "Blog sobre programação e desenvolvimento web, com artigos organizados por categorias, busca de conteúdo e interface responsiva.",
    image: "/projetos/site-de-blogs.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Gustavooli122/projeto-blog",
    demo: "https://evolucao-dev.vercel.app/",
  },
];
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
  {
    label: "Email",
    href: personal.email,
    icon: Mail,
  },
]
