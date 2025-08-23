import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./client-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapa Evangélico",
  description: "Portal que serve de hub para as organizações evangélicas do país. Com denominações, projetos sociais, missões, documentos em comum, história e muito mais.",
  keywords: "evangélicos, brasil, denominações, projetos sociais, missões, cristianismo",
  authors: [{ name: "Mapa Evangélico" }],
  openGraph: {
    title: "Mapa Evangélico",
    description: "Portal das organizações evangélicas do Brasil",
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/client=ca-pub-YOUR_PUBLISHER_ID"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
