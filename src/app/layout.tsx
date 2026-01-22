import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToQuery - Developer Profile",
  description: "Personal profile of ToQuery. Expert in Java, Golang, Flutter, React, and more.",
  keywords: ["Java", "Golang", "Flutter", "React", "Next.js", "TypeScript", "Developer", "Profile"],
  authors: [{ name: "ToQuery" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
