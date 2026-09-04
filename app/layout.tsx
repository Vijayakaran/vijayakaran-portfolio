import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijayakaran Samuel | Senior Software Engineer",

  description:
    "Senior Software Engineer with experience in C#, .NET, industrial automation, SCADA, ERP, system integration and enterprise software development.",

  metadataBase: new URL("https://vijay.dk"),

  openGraph: {
    title: "Vijayakaran Samuel | Senior Software Engineer",

    description:
      "Senior Software Engineer | C# | .NET | Industrial Automation | SCADA | ERP | System Integration",

    url: "https://vijay.dk",

    siteName: "Vijayakaran Samuel",

    images: [
      {
        url: "/vijayakaran-samuel-profile-banner.png",
        width: 1200,
        height: 630,
        alt: "Vijayakaran Samuel - Senior Software Engineer",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Vijayakaran Samuel | Senior Software Engineer",

    description:
      "Senior Software Engineer | C# | .NET | Industrial Automation | SCADA",

    images: ["/vijayakaran-samuel-profile-banner.png"],
  },

  icons: {
    icon: "/favicon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}