import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { resume } from "@/data/resume";
import { ScrollProgress } from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resume.name} — ${resume.title}`,
  description: resume.summary,
};

// Runs before paint to apply the saved/system theme, avoiding a flash of the wrong mode.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div aria-hidden className="grain no-print" />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
