"use client"

import { useEffect, useState } from "react"

export function Stats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-counter">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text">8+</h2>
            <p className="text-foreground/70">Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text">50+</h2>
            <p className="text-foreground/70">Projects Completed</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text">100+</h2>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text">10+</h2>
            <p className="text-foreground/70">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  )
}
