import ProjectCard from "../components/ProjectCard";
import { showcaseProjects } from "../data/showcase";

// Skill data type
type Skill = {
  name: string;
  code: string; // The large letter to display
};

const skills: Skill[] = [
  { name: "Java", code: "J" },
  { name: "JavaScript", code: "JS" },
  { name: "TypeScript", code: "TS" },
  { name: "Golang", code: "Go" },
  { name: "Dart", code: "D" },
  { name: "Flutter", code: "F" },
  { name: "Python", code: "P" },
  { name: "Vue.js", code: "V" },
  { name: "React", code: "R" },
  { name: "Next.js", code: "N" },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 text-center">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-8 text-foreground">
          toquery
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
          Full Stack Developer & Technology Enthusiast.
          <br />
          Explorations in code, design, and architecture.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 mb-32 max-w-5xl">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground relative inline-block">
            Projects
            {/* The pink underline from the screenshot */}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-0"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {showcaseProjects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground relative inline-block">
            Tech Stack
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-pink-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="aspect-square bg-card rounded-[24px] border border-border/40 shadow-sm flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-5xl font-light text-foreground mb-4 font-sans select-none">
                {skill.code}
              </span>
              <span className="text-sm font-bold text-foreground tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
