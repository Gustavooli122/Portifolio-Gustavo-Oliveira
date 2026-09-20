export default function Loading() {
  return (
    <div className="grid min-h-svh place-items-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative size-14">
          <div className="absolute inset-0 rounded-full border-2 border-secondary" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
        </div>
        <p className="font-mono text-sm tracking-widest text-muted-foreground">
          Carregando...
        </p>
      </div>
    </div>
  )
}
