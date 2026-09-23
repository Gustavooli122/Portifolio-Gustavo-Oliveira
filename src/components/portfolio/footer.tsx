import { personal, socials} from "../../lib/data"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {personal.name}. Todos os direitos reservados.
        </p>

       <div className="flex items-center gap-3">

  {socials.map((social) => {
    const Icon = social.icon
    const isEmail = social.href.startsWith("mailto:")

    return (
      <a
        key={social.label}
        href={social.href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        aria-label={social.label}
        className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        <Icon className="size-4" />
      </a>
    )
  })}
</div>
      </div>
    </footer>
  )
}
