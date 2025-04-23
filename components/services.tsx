import { Code, Layout, Smartphone, Zap } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-full">
              What I Offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            At HumAi Webs, we blend creativity with clean code to deliver high-performance, scalable, and visually
            striking web solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-effect p-8 rounded-xl border border-border/40 hover:border-primary/40 transition-colors group animate-slide-up">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Code className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-foreground/70">
              Building clean, modern interfaces with the latest technologies like React, Tailwind, and Vue for
              exceptional user experiences.
            </p>
          </div>

          <div
            className="glass-effect p-8 rounded-xl border border-border/40 hover:border-primary/40 transition-colors group animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Layout className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-foreground/70">
              Creating beautiful, functional designs that balance aesthetics with usability for intuitive user journeys.
            </p>
          </div>

          <div
            className="glass-effect p-8 rounded-xl border border-border/40 hover:border-primary/40 transition-colors group animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Websites</h3>
            <p className="text-foreground/70">
              Developing tailored web solutions that perfectly align with your brand identity and business goals.
            </p>
          </div>

          <div
            className="glass-effect p-8 rounded-xl border border-border/40 hover:border-primary/40 transition-colors group animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Smartphone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-foreground/70">
              Ensuring flawless experiences across all devices and screen sizes for maximum reach and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
