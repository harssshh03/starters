import { Hero } from "@/components/hero"
import { Preview } from "@/components/preview"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SnippetsSection } from "@/components/snippets-section"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Preview />
        <SnippetsSection />
      </main>
      <SiteFooter />
    </>
  )
}
