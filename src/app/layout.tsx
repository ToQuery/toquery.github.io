import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fixed import
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "ToQuery - Full Stack Developer",
    template: "%s | ToQuery",
  },
  description: "Personal portfolio of ToQuery, a Full Stack Developer specializing in Java, Golang, Flutter, React, and Next.js. Explore my projects and skills.",
  keywords: ["ToQuery", "Full Stack Developer", "Java", "Golang", "Flutter", "React", "Next.js", "Portfolio"],
  authors: [{ name: "ToQuery", url: "https://toquery.github.io" }],
  creator: "ToQuery",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://toquery.github.io",
    title: "ToQuery - Full Stack Developer",
    description: "Personal portfolio of ToQuery, showcasing projects in Java, Golang, Flutter, and more.",
    siteName: "ToQuery",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToQuery - Full Stack Developer",
    description: "Personal portfolio of ToQuery, showcasing projects in Java, Golang, Flutter, and more.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    'google-site-verification': "m8VHTSIJoNC-ljbn8FG-cUWDf7GxV0leN5iZL9JYuhk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
