import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitLife Academia - Transforme sua vida",
  description: "Academia moderna com equipamentos de última geração, profissionais qualificados e ambiente motivador. Transforme seu corpo e sua vida na FitLife.",
  keywords: "academia, fitness, musculação, treino, saúde, bem-estar",
  authors: [{ name: "Sena Technologies" }],
  openGraph: {
    title: "FitLife Academia - Transforme sua vida",
    description: "Academia moderna com equipamentos de última geração, profissionais qualificados e ambiente motivador.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
