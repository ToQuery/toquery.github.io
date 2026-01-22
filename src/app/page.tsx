import ProjectCard from "../components/ProjectCard";
import { showcaseProjects } from "../data/showcase";

// Skill data type
type Skill = {
  name: string;
};

const skills: Skill[] = [
  { name: "Java" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Golang" },
  { name: "Dart" },
  { name: "Flutter" },
  { name: "Python" },
  { name: "Vue.js" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Spring Boot" },
  { name: "PostgreSQL" },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
            Hello, I&apos;m ToQuery.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Full Stack Developer & Technology Enthusiast.
            <br />
            Explorations in code, design, and architecture.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Skills Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground">
          Technological Proficiency
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium text-secondary-foreground hover:bg-secondary transition-colors cursor-default"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
