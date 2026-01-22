type ProjectCardProps = {
    name: string;
    description: string;
    url: string;
    meta?: string;
};

export default function ProjectCard({ name, description, url, meta }: ProjectCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full p-8 bg-card rounded-[20px] border border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
        >
            <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                    {name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-normal">
                    {description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    {meta && (
                        <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {meta}
                        </span>
                    )}
                    <span className="text-sm font-semibold text-blue-500 group-hover:translate-x-1 transition-transform">
                        Visit Project →
                    </span>
                </div>
            </div>
        </a>
    );
}
