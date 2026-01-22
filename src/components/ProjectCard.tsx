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
            className="group block h-full p-6 rounded-lg border border-border bg-card hover:border-foreground/20 hover:shadow-sm transition-all duration-200"
        >
            <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:underline decoration-1 underline-offset-4 mb-2">
                    {name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {description}
                </p>
                {meta && (
                    <div className="mt-auto pt-4 flex items-center text-xs text-muted-foreground font-mono">
                        {meta}
                    </div>
                )}
            </div>
        </a>
    );
}
