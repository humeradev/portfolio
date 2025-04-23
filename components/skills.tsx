export function Skills() {
  const frontendSkills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "TypeScript", level: 85 },
  ]

  const designSkills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Responsive Design", level: 95 },
    { name: "Design Systems", level: 80 },
    { name: "Animation", level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary px-3 py-1 rounded-full">
              My Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            With years of experience in frontend development and design, I've mastered a range of technologies and tools
            to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-effect p-8 rounded-xl animate-slide-in-left">
            <h3 className="text-xl font-semibold mb-6 gradient-text">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl animate-slide-in-right">
            <h3 className="text-xl font-semibold mb-6 gradient-text">Design & UX</h3>
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
