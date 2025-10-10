import "./globals.css"; 
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./Components/LayoutWrapper";

// ✅ Import Toaster
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// ✅ Added favicon reference
export const metadata: Metadata = {
  title: "ChatSupplies - Smart Chat Solutions",
  description:
    "Premium chatbot tools and AI-powered customer support solutions",
  icons: {
    icon: "/Robot/face.svg", // <-- your logo file in /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0055FF]`}
      >
        <LayoutWrapper>
          <main>{children}</main>
        </LayoutWrapper>
        {/* ✅ Toast renderer */}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}