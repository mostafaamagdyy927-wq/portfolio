import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0B1E3D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafamagdy.dev"),
  title: "Mostafa Magdy — Data Science & AI Automation Engineer Portfolio",
  description:
    "Portfolio of Mostafa Magdy (مصطفى مجدي) — Fourth-year Data Science student at Helwan University with Emtiaz honors, DEPI Cohort 5 Data Engineer Trainee, and freelance AI Automation Developer delivering WhatsApp bots, predictive ML models, and high-volume data pipelines.",
  keywords: [
    "Mostafa Magdy",
    "Data Science Engineer",
    "AI Automation Developer",
    "Data Engineer",
    "Digital Egypt Pioneers Initiative",
    "DEPI Cohort 5",
    "Helwan University",
    "Machine Learning Egypt",
    "n8n AI Automation",
    "Claude API Multi-Agent",
    "Khamsat Mostaql Freelancer",
    "WhatsApp Booking Bot",
    "Python ETL",
  ],
  authors: [{ name: "Mostafa Magdy Abdelhamid Ramadan" }],
  creator: "Mostafa Magdy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostafamagdy.dev",
    siteName: "Mostafa Magdy Portfolio",
    title: "Mostafa Magdy — Data Science & AI Automation Engineer Portfolio",
    description:
      "End-to-end data pipelines, predictive machine learning models, and autonomous AI automation systems. DEPI Cohort 5 Trainee & Helwan University Data Science graduate candidate.",
    images: [
      {
        url: "/asset/profile.png",
        width: 1200,
        height: 630,
        alt: "Mostafa Magdy - Data Science & AI Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Magdy — Data Science & AI Automation Engineer",
    description:
      "Data pipelines, predictive ML models, and autonomous AI automation systems. DEPI Cohort 5 Trainee & Helwan University Data Science candidate.",
    images: ["/asset/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/asset/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-50 dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
