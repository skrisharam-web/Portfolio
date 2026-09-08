import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/content/profile";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} — ${profileData.title}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.subheadline || profileData.headline,
  keywords: [
    "Cybersecurity",
    "Systems Engineering",
    "Defensive Security",
    "Vulnerability Assessment",
    "Software Engineering",
    "Bastion Risk Intelligence",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.subheadline || profileData.headline,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.subheadline || profileData.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.subheadline,
    sameAs: [profileData.github, profileData.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08080A] text-[#FAFAF8] selection:bg-[#FFB454]/30">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[#FFB454] text-[#08080A] font-mono text-xs font-semibold rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
