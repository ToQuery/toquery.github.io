import styles from "./page.module.css";

// Skill data type
type Skill = {
  name: string;
  icon?: string; // We can add emoji or path to svg later
  color?: string; // Optional hover color
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
];

type Project = {
  name: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "Skills.homes",
    description: "Supercharge your AI Agents with Skills",
    url: "https://skills.homes",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>toquery</h1>
        <p className={styles.subtitle}>
          Full Stack Developer & Technology Enthusiast.
          <br />
          Explorations in code, design, and architecture.
        </p>
      </div>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLink}>
                Visit Project <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.card}>
              <div className={styles.skillIcon}>
                {/* 
                  Using a simple initial letter or placeholder for now. 
                  In a real scenario, we might import SVGs or use a library like react-icons. 
                  For now, let's just show the name directly or a code symbol.
                */}
                {skill.name === "Golang" ? "Go" :
                  skill.name === "JavaScript" ? "JS" :
                    skill.name === "TypeScript" ? "TS" :
                      skill.name.slice(0, 1)}
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
