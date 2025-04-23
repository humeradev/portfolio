import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Humera and her team at HumAi Webs transformed our outdated website into a modern, responsive platform that's significantly increased our conversion rates. Their understanding of market trends was invaluable.",
    author: "Sarah Thompson",
    position: "Marketing Director, Tech Startup",
  },
  {
    id: 2,
    content:
      "Working with HumAi Webs was a game-changer for our e-commerce business. Their attention to detail and focus on user experience helped us create a seamless shopping journey for our customers.",
    author: "James Wilson",
    position: "CEO, Retail Brand",
  },
  {
    id: 3,
    content:
      "Humera's expertise in frontend development is exceptional. She created a beautiful, functional website that perfectly represents our brand and has received countless compliments from our clients.",
    author: "Emma Clarke",
    position: "Creative Director, Design Agency",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-full">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            What clients say about working with me and HumAi Webs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-effect p-8 rounded-xl border border-border/40 hover:border-primary/40 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary mb-6" />
              <p className="text-foreground/80 mb-8 italic text-balance">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-foreground/60">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
