"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"
import { ArrowDown, Braces } from "lucide-react"

import Github from "./icons/github"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const APP_NAME = "Starter's Snippets"
const GITHUB_URL = "https://github.com/harshdev03"

const externalLink = {
  href: GITHUB_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const

// Your bevelled button style, defined once and reused everywhere.
const bevelButton = cn(
  "inline-flex w-fit cursor-pointer items-center justify-center gap-2",
  "rounded-lg border border-neutral-200 bg-linear-to-b from-neutral-50 to-white",
  "font-medium text-neutral-700",
  "shadow-[inset_0_0_0_1px_#e5e5e5,inset_0_2px_0_0_#ffffff]",
  "transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
)

const buttonSize = {
  sm: "h-8 px-3 text-xs",
  lg: "h-11 px-5 text-sm",
} as const

const Main = () => {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  }

  const rise: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[640px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl px-5 sm:px-8"
      >
        {/* Nav */}
        <motion.header
          variants={rise}
          className="flex h-16 items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
              <Braces className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {APP_NAME}
            </span>
          </div>

          <a {...externalLink} className={cn(bevelButton, buttonSize.sm)}>
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </motion.header>

        {/* Hero */}
        <section className="pb-16 pt-16 sm:pb-20 sm:pt-24">
          <motion.h1
            variants={rise}
            className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Your next project, started faster.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
          >
            {APP_NAME} generates starter files and boilerplate for your
            projects, so you can skip the repetitive setup and get straight
            to building.
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#preview"
              className={cn(bevelButton, buttonSize.lg, "text-neutral-900")}
            >
              See it in action
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>

            <a {...externalLink} className={cn(bevelButton, buttonSize.lg)}>
              <Github className="size-4" aria-hidden="true" />
              View on GitHub
            </a>
          </motion.div>
        </section>

        {/* Preview */}
        <motion.section
          id="preview"
          variants={rise}
          className="scroll-mt-8 pb-16"
        >
          <div className="rounded-2xl border bg-secondary/60 p-2 shadow-xl shadow-black/[0.04]">
            <div className="overflow-hidden rounded-xl border bg-background">
              <video
                src="/extension.mp4"
                autoPlay={!reduce}
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`${APP_NAME} product preview`}
                className="block h-auto w-full"
              />
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={rise} className="pb-10">
          <Separator />
          <div className="mt-6 flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
            <span>{APP_NAME}</span>
            <span>
              Built by{" "}
              <a
                {...externalLink}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                @harshdev03
              </a>
            </span>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  )
}

export default Main