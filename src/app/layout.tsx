import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Quantra AI | Invest Crypto Smarter With AI Assistant",
  description:
    "Explore market opportunities and grow your portfolio with next-generation AI telemetry, predictive modeling, and automated risk detection across 10k+ crypto assets.",
  keywords: ["Quantra AI", "Crypto AI", "Web3", "Portfolio Optimizer", "DeFi Intelligence", "AXR Token"],
  authors: [{ name: "Quantra AI Labs" }],
  openGraph: {
    title: "Quantra AI | Next-Gen Web3 AI Crypto Trading Platform",
    description: "Explore market opportunities and grow your portfolio with AI insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${jetbrainsMono.variable} dark antialiased selection:bg-[#E03E99] selection:text-white`}>
      <body className="min-h-screen bg-[#070709] text-gray-100 font-sans flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
