import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
                >
                    toquery
                </Link>
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/examples"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Examples
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
