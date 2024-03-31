  import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import './index.css'

const inter = Bebas_Neue({ subsets: ["latin"], weight: ['400']});

export const metadata: Metadata = {
  title: "The Booker",
  description: "An app about books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}