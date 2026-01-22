import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
                >
                    ToQuery
                </Link>
                <div className="flex items-center gap-6">
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
                    <div className="pl-2 border-l border-border">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
