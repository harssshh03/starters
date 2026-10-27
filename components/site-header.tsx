import Link from "next/link"

import Github from "@/components/icons/github"
import Logo from "@/components/icons/logo"
import AnimatedThemeToggler from "@/components/theme-toggler"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const ghost =
  "flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md outline-offset-4 focus-visible:outline-2"
        >
          <Logo className="size-6" />
          <span className="text-[15px] font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          <a
            href="#snippets"
            className="hidden h-9 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:flex"
          >
            Snippets
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Starter's Snippets on GitHub"
            className={ghost}
          >
            <Github className="size-[18px]" />
          </a>
          <AnimatedThemeToggler />
          <a
            href={site.marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "default" }),
              "ml-2 h-9 rounded-full px-4"
            )}
          >
            Install
          </a>
        </nav>
      </div>
    </header>
  )
}
