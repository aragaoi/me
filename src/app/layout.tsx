import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irenio de Aragão - Senior Full Stack Engineer Portfolio",
  description:
    "Experienced Full Stack Engineer specializing in React, Node.js, and cloud technologies. View my projects, skills, and professional experience in software development.",
  keywords: [
    "Full Stack Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Software Development",
    "Portfolio",
  ],
  authors: [{ name: "Irenio de Aragão" }],
  creator: "Irenio de Aragão",
  openGraph: {
    title: "Irenio de Aragão - Senior Full Stack Engineer",
    description:
      "Experienced Full Stack Engineer specializing in React, Node.js, and cloud technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irenio de Aragão - Senior Full Stack Engineer",
    description:
      "Experienced Full Stack Engineer specializing in React, Node.js, and cloud technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Irenio de Aragão",
              jobTitle: "Senior Full Stack Engineer",
              description:
                "Experienced Full Stack Engineer specializing in React, Node.js, and cloud technologies",
              url: "https://aragaoi.dev",
              sameAs: [
                "https://github.com/aragaoi",
                "https://linkedin.com/in/ireniodearagao",
              ],
              knowsAbout: [
                "React",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Full Stack Development",
                "Software Engineering",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Florianópolis",
                addressRegion: "SC",
                addressCountry: "BR",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
