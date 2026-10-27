import { SnippetBrowser } from "@/components/snippet-browser"

export function SnippetsSection() {
  return (
    <section
      id="snippets"
      aria-labelledby="snippets-title"
      className="scroll-mt-20 px-5 pb-24 sm:px-8 sm:pb-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="snippets-title"
          className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
        >
          Every snippet, one prefix away
        </h2>
        <p className="mt-3 max-w-xl text-pretty leading-7 text-muted-foreground">
          Open a file, type a prefix, and press Tab. Click any row to copy its
          prefix.
        </p>

        <div className="mt-8">
          <SnippetBrowser />
        </div>
      </div>
    </section>
  )
}
