import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const fredokaSans = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prepme | The Fun way to conquer Exams with Confidence",
  description:
    "The Fun way to conquer Exams with Confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${fredokaSans.variable} antialiased`}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
