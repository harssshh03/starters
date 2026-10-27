"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { site } from "@/lib/site"
import { useCopy } from "@/lib/use-copy"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "terminal", label: "Terminal", command: site.install.terminal },
  { id: "quickOpen", label: "Quick Open", command: site.install.quickOpen },
] as const

export function InstallBox() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("terminal")
  const { copied, copy } = useCopy()
  const current = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border bg-card text-left">
      <div className="flex items-center justify-between border-b px-2 py-1.5">
        <div role="tablist" aria-label="Install method" className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              id={`install-tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls="install-panel"
              onClick={() => setActive(tab.id)}
              className={cn(
                "h-7 rounded-md px-2.5 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                active === tab.id
                  ? "bg-accent font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => copy(current.command)}
          className="flex h-7 items-center gap-1.5 rounded-md px-2.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
        >
          {copied ? (
            <Check className="size-3.5" aria-hidden="true" />
          ) : (
            <Copy className="size-3.5" aria-hidden="true" />
          )}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <div
        id="install-panel"
        role="tabpanel"
        aria-labelledby={`install-tab-${current.id}`}
        className="overflow-x-auto px-4 py-4"
      >
        <code className="whitespace-nowrap font-mono text-[13px] text-foreground">
          {current.command}
        </code>
      </div>
    </div>
  )
}
