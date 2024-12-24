import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const fredokaSans = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prepme Academy",
  description: "The Fun way to conquer Exams with Confidence",
  openGraph: {
    title: "Prepme Academy",
    description: "The Fun way to conquer Exams with Confidence",
    images: [
      {
        url: "https://www.prepme.academy/images/logo-site.png",
        width: 1200,
        height: 630,
        alt: "Prepme Academy Meta Image",
      },
    ],
    type: "website",
    url: "https://www.prepme.academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepme Academy",
    description: "The Fun way to conquer Exams with Confidence",
    images: ["https://www.prepme.academy/images/logo-site.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredokaSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
