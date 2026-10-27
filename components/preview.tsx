"use client"

import { useReducedMotion } from "motion/react"

import { site } from "@/lib/site"

export function Preview() {
  const reduce = useReducedMotion()

  return (
    <section
      id="preview"
      aria-label="Product preview"
      className="scroll-mt-20 px-5 pb-24 sm:px-8 sm:pb-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border bg-card p-1.5 sm:p-2">
          <div className="overflow-hidden rounded-xl border bg-background">
            <video
              src="/extension.mp4"
              autoPlay={!reduce}
              controls={!!reduce}
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={`${site.name} running in VS Code`}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
