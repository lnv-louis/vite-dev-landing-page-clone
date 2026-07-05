import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Proprietary Vite display + mono faces, self-hosted from the target site.
const apkProtocol = localFont({
  src: [
    { path: "../../public/fonts/APK-Protocol-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/APK-Protocol-Semi-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-apk-protocol",
});

const khTekaMono = localFont({
  src: [
    { path: "../../public/fonts/KHTekaMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/KHTekaMono-Medium.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-kh-teka-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vite.dev"),
  title: "Vite | Next Generation Frontend Tooling",
  description: "Next Generation Frontend Tooling",
  icons: { icon: "/seo/favicon.svg" },
  openGraph: {
    title: "Vite",
    description: "Next Generation Frontend Tooling",
    images: ["/seo/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${apkProtocol.variable} ${khTekaMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
