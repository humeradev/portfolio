import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 aspect-square max-w-md mx-auto">
                <Image
                  src="/meet-humera.jpg"
                  alt="Humera Khan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 animate-slide-in-right">
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-full">
                About Me
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Humera Khan
            </h2>
            <p className="text-foreground/80 mb-4 text-balance">
              A tech-savvy creator at heart, I started my journey as a frontend
              web developer, building clean, modern interfaces with a sharp eye
              for detail. With a deep understanding of both code and design, I
              launched HumAi Webs to empower businesses with powerful digital
              presence.
            </p>
            <p className="text-foreground/80 mb-6 text-balance">
              Today, as CEO, I bring not just technical expertise, but a vision
              for innovation, growth, and meaningful client partnerships. At
              HumAi Webs, we blend creativity with clean code to deliver
              high-performance, scalable, and visually striking web solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">My Journey</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Started as a Frontend Developer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Worked with leading UK agencies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Founded HumAi Webs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Built a talented team</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Computer Science, BSc</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Web Development Bootcamp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>UX Design Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Business Leadership Program</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
