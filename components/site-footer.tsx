import { site } from "@/lib/site"

const link =
  "rounded-sm underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <span>{site.name}</span>
        <nav aria-label="Footer" className="flex items-center gap-5">
          <a
            href={site.marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Marketplace
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            GitHub
          </a>
          <span>
            Built by{" "}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link} font-medium text-foreground`}
            >
              {site.author}
            </a>
          </span>
        </nav>
      </div>
    </footer>
  )
}
