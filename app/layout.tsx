import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggler from "./components/ThemeToggler";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin",]
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Space Tourism Website",
  description: "Submitted as a solution to a challenge from FrontEnd Mentor",
  authors: [{ name: "DevDylan", url: '' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${nunito.className} antialiased bg-light-bg font-light dark:bg-dark-bg dark:text-white`}>
        <header className="px-5 py-5 flex justify-between items-center shadow bg-white dark:bg-dark-elements md:px-10 lg:px-20">
          <h1 className="font-extrabold text-xl md:text-2xl">Where in the world?</h1>

          <ThemeToggler />
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
