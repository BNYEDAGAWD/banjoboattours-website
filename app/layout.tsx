import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banjo Boat Tours - Banjos & Boats",
  description: "We love two things: 1. Banjos & 2. Boat Tours. Experience the jacked muscular banjo-playing boat tour guide. Somewhere. Somehow. Someway.",
  keywords: "banjo, boat tours, muscular guide, banjo player, boat, tour, experience, adventure",
  openGraph: {
    title: "Banjo Boat Tours - We Love Banjos & Boat Tours",
    description: "Somewhere. Somehow. Someway. Banjos & Boats.",
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
