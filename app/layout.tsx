import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/component/scroll-reveal-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})


export const metadata: Metadata = {
  title: "Sudha Aesthetics",
  description: "Sudha Aesthetics - Your Beauty Destination",
    icons: {
    icon: [
      { url: "logos.JPG", sizes: "any" },
      { url: "logos.JPG", sizes: "16x16", type: "image/png" },
      { url: "logos.JPG", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "logos.JPG", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "logos.JPG", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "logos.JPG", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
