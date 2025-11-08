import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://omatsolaeyitemi.com"),
  title: "Omatsola Eyitemi - Media & Communications Specialist",
  description: "Media & Communications Specialist | Broadcast Production | Social Media Strategist | Content Development & Audience Engagement",
  keywords: [
    "Omatsola Eyitemi",
    "Media & Communications Specialist",
    "Broadcast Production",
    "Social Media Strategist",
    "Content Development",
    "Audience Engagement",
    "Portfolio",
    "The Movie Nerd TV",
  ],
  authors: [{ name: "Omatsola Eyitemi" }],
  creator: "Omatsola Eyitemi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omatsolaeyitemi.com", // Update with your actual domain
    title: "Omatsola Eyitemi - Media & Communications Specialist",
    description: "Media & Communications Specialist | Broadcast Production | Social Media Strategist | Content Development & Audience Engagement",
    siteName: "Omatsola Eyitemi Portfolio",
    images: [
      {
        url: "/images/profile/TEMI-PICTURE.jpg",
        width: 1200,
        height: 630,
        alt: "Omatsola Eyitemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omatsola Eyitemi - Media & Communications Specialist",
    description: "Media & Communications Specialist | Broadcast Production | Social Media Strategist",
    creator: "@temi_tmn",
    images: ["/images/profile/TEMI-PICTURE.jpg"],
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
