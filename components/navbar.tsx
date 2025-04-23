"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold gradient-text">
              Humera Khan
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/10 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 rounded-full"
              >
                <Link href="#contact" onClick={toggleMenu}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
