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
            {/* Simple Hero */}
            <section className="container mx-auto px-6 mb-20 text-center max-w-3xl">
                <h1 className="text-5xl font-bold tracking-tight mb-6 text-foreground">
                    Example Projects
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A collection of open source repositories and demos.
                </p>
            </section>

            <section className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <div className="mt-20 text-center">
                    <a
                        href={allExamplesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                    >
                        View all on GitHub
                        <span className="ml-2">→</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
