import { Crown, Smartphone, MessageSquare, Globe, BarChart, GraduationCap, Youtube, Code, Terminal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Crown,
    title: "Premium Custom Solutions",
    description: "Tailored solutions for your business needs",
  },
  {
    icon: Smartphone,
    title: "Mobile App Solutions",
    description: "Native and cross-platform mobile apps",
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description: "Engage and grow your audience",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern web applications",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description: "Grow your online presence",
  },
  {
    icon: GraduationCap,
    title: "Coding School",
    description: "Learn programming skills",
  },
  {
    icon: Youtube,
    title: "Youtube Free Courses",
    description: "Free educational content",
  },
  {
    icon: Code,
    title: "Custom API Development",
    description: "Scalable API solutions",
  },
  {
    icon: Terminal,
    title: "Programming Courses",
    description: "Professional development",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-shadow bg-background/50 backdrop-blur border-muted"
            >
              <CardContent className="p-6">
                <div className="mb-4 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

