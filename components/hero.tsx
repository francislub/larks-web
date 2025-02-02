import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient pb-2">
            Creating Digital Solutions To
            <br />
            Transform Businesses
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Modern Web & Mobile Solutions, Tailored for Your Business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">Book a Free Consultation</Button>
            <Button size="lg" variant="outline">
              Chat with an expert
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
    </section>
  )
}

