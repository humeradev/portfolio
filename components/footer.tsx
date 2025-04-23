import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Humera Khan
            </Link>
            <p className="text-sm text-foreground/60 mt-2">
              © {new Date().getFullYear()} HumAi Webs. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <nav className="flex gap-6">
              <Link href="#about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Twitter profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="GitHub profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
