import ProjectCard from "../../components/ProjectCard";
import { exampleProjects, allExamplesUrl } from "../../data/examples";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Examples - ToQuery",
    description: "Explore example projects and repositories by ToQuery.",
};

export default function ExamplesPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 selection:bg-primary selection:text-background">
            <section className="container mx-auto px-6 mb-16 border-b border-primary/20 pb-10">
                <div className="max-w-4xl">
                    <p className="text-primary text-xs mb-2 font-mono tracking-widest">DIR: /usr/local/examples</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground uppercase">
                        Open_Source_Examples<span className="text-primary">.exe</span>
                    </h1>
                    <p className="text-lg text-primary/70 leading-relaxed font-mono">
                        &gt; A curated collection of code samples, demos, and starters.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6">
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
                        className="inline-flex items-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors font-mono tracking-widest uppercase text-sm group"
                    >
                        [ VIEW_ALL_REPOSITORIES ]
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
