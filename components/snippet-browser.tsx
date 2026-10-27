"use client"

import { useMemo, useState } from "react"
import { Check, Copy } from "lucide-react"

import { languages } from "@/lib/snippets"
import { useCopy } from "@/lib/use-copy"
import { cn } from "@/lib/utils"

const ALL = "All"

function Row({
  language,
  prefix,
  description,
  showLanguage,
}: {
  language: string
  prefix: string
  description: string
  showLanguage: boolean
}) {
  const { copied, copy } = useCopy()

  return (
    <li>
      <button
        type="button"
        onClick={() => copy(prefix)}
        aria-label={`Copy ${prefix}`}
        className="group grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-0.5 px-4 py-3 text-left transition-colors hover:bg-accent/60 focus-visible:bg-accent/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring sm:grid-cols-[7rem_13rem_1fr_auto] sm:py-2.5"
      >
        <span
          className={cn(
            "hidden text-sm text-muted-foreground sm:block",
            !showLanguage && "sm:invisible"
          )}
        >
          {language}
        </span>
        <code className="font-mono text-[13px] font-medium">{prefix}</code>
        <span className="col-span-2 row-start-2 text-sm text-muted-foreground sm:col-span-1 sm:row-start-auto">
          {description}
        </span>
        <span
          className="col-start-2 row-start-1 flex items-center text-muted-foreground sm:col-start-auto sm:row-start-auto"
          aria-hidden="true"
        >
          {copied ? (
            <Check className="size-4 text-foreground" />
          ) : (
            <Copy className="size-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:opacity-60" />
          )}
        </span>
      </button>
    </li>
  )
}

export function SnippetBrowser() {
  const [active, setActive] = useState<string>(ALL)

  const rows = useMemo(
    () =>
      languages
        .filter((l) => active === ALL || l.name === active)
        .flatMap((l) => l.snippets.map((s) => ({ ...s, language: l.name }))),
    [active]
  )

  const filters = [ALL, ...languages.map((l) => l.name)]

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by language"
        className="-mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => setActive(name)}
            className={cn(
              "h-8 shrink-0 rounded-full border px-3.5 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              active === name
                ? "border-foreground bg-foreground font-medium text-background"
                : "text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className="mt-5 divide-y overflow-hidden rounded-xl border bg-card">
        {rows.map((r, i) => (
          <Row
            key={r.prefix}
            language={r.language}
            prefix={r.prefix}
            description={r.description}
            showLanguage={i === 0 || rows[i - 1].language !== r.language}
          />
        ))}
      </ul>
    </div>
  )
}
