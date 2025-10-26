import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finn Fretwater - The Most Interesting Man in the South | Upstream Thinking",
  description: "Expert insights on everything from tax strategy to air fryers. Between the river and the strings, Finn Fretwater writes about whatever he's mastered this week. Boat tours launching 2027.",
  keywords: "Finn Fretwater, expert advice, product reviews, tax strategy, productivity, home improvement, tech reviews, finance tips, health optimization, consumer guides, lifestyle optimization, banjo, boat tours",
  openGraph: {
    title: "Finn Fretwater - Upstream Thinking",
    description: "Expert knowledge. Zero pretension. Maximum usefulness.",
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
