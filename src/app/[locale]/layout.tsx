import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irenio de Aragão - Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 11+ years building scalable web applications. TypeScript, React, Node.js, PostgreSQL expert.",
  keywords:
    "Full Stack Engineer, TypeScript, React, Node.js, PostgreSQL, Software Engineer",
  authors: [{ name: "Irenio de Aragão" }],
  creator: "Irenio de Aragão",
  openGraph: {
    title: "Irenio de Aragão - Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 11+ years building scalable web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
