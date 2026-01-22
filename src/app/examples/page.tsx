import ProjectCard from "../../components/ProjectCard";
import { exampleProjects, allExamplesUrl } from "../../data/examples";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Examples - ToQuery",
    description: "Explore example projects and repositories by ToQuery.",
};

export default function ExamplesPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="container mx-auto px-6 mb-16">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
                        Open Source Examples
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A curated collection of code samples, demos, and starters.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exampleProjects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            meta={project.language}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href={allExamplesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        View all repositories on GitHub
                        <span className="ml-1">→</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
