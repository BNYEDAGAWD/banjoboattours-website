import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banjo Boat Tours - Where Gators Meet Glam",
  description: "Reality TV-inspired swamp tours merging Duck Dynasty authenticity with Real Housewives luxury. Experience the bayou like never before.",
  keywords: "swamp tours, Louisiana, bayou, boat tours, gator tours, luxury tours, adventure tours",
  openGraph: {
    title: "Banjo Boat Tours - Where Southern Charm Meets High Adventure",
    description: "Drama? Only in the sunset. Mud optional. Memories mandatory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Publisher Tag */}
        <Script
          id="gpt-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
            `,
          }}
        />
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="afterInteractive"
        />

        {/* Prebid.js - Header Bidding */}
        <Script
          src="https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/not-for-prod/prebid.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
