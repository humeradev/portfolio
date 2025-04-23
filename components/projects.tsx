import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce online bakery platform with a focus on user experience and performance",
    image: "/cake-crush-feature.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://cakecrush.ae/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Creative Resturant Website",
    description: "An elegant restaurant website showcasing menu and ambiance",
    image: "/bull-lobster.png",
    tags: ["React", "Next.js", "Tailwind CSS"],

    liveUrl: "https://thebullandlobster.org/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "An intuitive dashboard for a SaaS product with real-time analytics and user management",
    image: "/utils.png",
    tags: ["React", "Chart.js", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Healthcare App UI",
    description:
      "UI/UX design for a healthcare mobile application focused on patient experience",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Figma", "UI/UX", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-full">
              My Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            A selection of my recent work, showcasing web development and design
            expertise across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                    <Link
                      href={project.liveUrl}
                      className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> View Live
                    </Link>
                  </Button>
                  {/* <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                    <Link
                      href={project.githubUrl}
                      className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> View Code
                    </Link>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 rounded-full">
            <Link href="#">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
