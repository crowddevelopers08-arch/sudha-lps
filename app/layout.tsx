import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/component/scroll-reveal-init";
import Script from "next/script";

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
        {/* ✅ GTM Noscript Fallback (for users without JavaScript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGW8KZJT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* ✅ Google Tag Manager Main Script */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TGW8KZJT');
          `}
        </Script>

        {/* ✅ Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18095694782"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18095694782');
          `}
        </Script>
        
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}