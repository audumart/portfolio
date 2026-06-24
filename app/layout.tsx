import type { Metadata } from "next";
import "./globals.css";
import CursorDot from "./components/CursorDot";

export const metadata: Metadata = {
  title: "Martins Audu — Designer & Researcher",
  description:
    "Portfolio of Martins Audu, a designer and researcher that strongly believes design is the ideal way to solve complex problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
