import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}

