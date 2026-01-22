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
    <main className="min-h-screen pt-32 pb-20 selection:bg-primary selection:text-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24 relative">
        <div className="max-w-3xl border-l-2 border-primary pl-6 py-2">
          <p className="text-primary text-sm mb-2 font-mono tracking-widest">INITIALIZING USER PROFILE...</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 text-foreground uppercase glitch-text">
            ToQuery<span className="animate-pulse text-primary">_</span>
          </h1>
          <p className="text-xl sm:text-2xl text-primary/80 leading-relaxed max-w-2xl font-mono">
            &gt; Full Stack Developer & Technology Enthusiast.
            <br />
            &gt; Explorations in code, design, and architecture.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold tracking-widest text-primary uppercase">
            // Featured_Projects
          </h2>
          <div className="h-px bg-primary/40 flex-grow"></div>
        </div>

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
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold tracking-widest text-primary uppercase">
            // Tech_Stack
          </h2>
          <div className="h-px bg-primary/40 flex-grow"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-3 border border-primary/30 bg-background hover:bg-primary hover:text-background transition-all cursor-crosshair text-center font-mono text-sm tracking-wider uppercase group relative overflow-hidden"
            >
              <span className="relative z-10">{skill.name}</span>
              {/* Scanline hover effect could go here */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
