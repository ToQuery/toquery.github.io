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
            className="group block h-full p-6 border border-primary/40 bg-card/50 hover:bg-muted/30 hover:border-primary hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300 relative overflow-hidden"
        >
            {/* Decorative corner markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col h-full relative z-10">
                <h3 className="text-lg font-bold tracking-wider text-primary mb-3 group-hover:translate-x-1 transition-transform">
                    &gt; {name}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow font-light">
                    {description}
                </p>

                {meta && (
                    <div className="mt-auto pt-4 border-t border-primary/20 flex items-center text-xs text-primary/70 font-mono">
                        [{meta}]
                    </div>
                )}

                <div className="mt-4 flex items-center justify-end text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    EXECUTE_VIEW()
                    <span className="ml-2 animate-pulse">_</span>
                </div>
            </div>
        </a>
    );
}
