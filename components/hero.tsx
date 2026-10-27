"use client"

import { motion, useReducedMotion } from "motion/react"

import Github from "@/components/icons/github"
import { InstallBox } from "@/components/install-box"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const pill = "h-10 rounded-full px-5 text-sm font-medium"

export function Hero() {
  const reduce = useReducedMotion()

  // One page-load sequence for the hero. Nothing else on the page animates by itself.
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className="px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: reduce ? 0 : 0.07 }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
        >
          {site.name} generates starter files and boilerplate for your
          projects, so you can skip the repetitive setup and get straight to
          building.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={site.marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), pill)}
          >
            Get the extension
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              pill,
              "gap-2 bg-card hover:bg-accent dark:bg-card dark:hover:bg-accent"
            )}
          >
            <Github className="size-4" />
            View on GitHub
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex w-full justify-center">
          <InstallBox />
        </motion.div>
        <motion.p
          variants={item}
          className="mt-3 text-[13px] text-muted-foreground"
        >
          Free for Visual Studio Code.
        </motion.p>
      </motion.div>
    </section>
  )
}
