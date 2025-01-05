import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const rubikFont = Rubik({
  subsets: ["latin"],
  display: "swap", // Ensure fallback fonts are used until the font is loaded
});

export const metadata: Metadata = {
  title: "Ham Protocol",
  description: "Empowering the future of Web 3 and decentralized apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubikFont.className}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
