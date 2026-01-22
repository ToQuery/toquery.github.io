import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-primary/30 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/90">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-primary hover:animate-pulse"
                >
                    &gt; TOQUERY_
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
                    >
                        ~/HOME
                    </Link>
                    <Link
                        href="/examples"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
                    >
                        ~/EXAMPLES
                    </Link>
                    <div className="pl-4 border-l border-primary/30">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
