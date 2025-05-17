import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <header className="px-5 py-5 flex justify-between items-center shadow">
          <h1 className="font-bold text-xl">Where in the world?</h1>

          <button className="border border-black">Dark Mode</button>
        </header>
        {children}
      </body>
    </html>
  );
}
