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
        {/* ==================== AD REVENUE STACK ==================== */}

        {/* Prebid.js - Header Bidding (Load first for lowest latency) */}
        <Script
          id="prebid-setup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var pbjs = pbjs || {};
              pbjs.que = pbjs.que || [];

              // Prebid configuration
              pbjs.que.push(function() {
                pbjs.setConfig({
                  priceGranularity: "high",
                  enableSendAllBids: true,
                  bidderTimeout: 1500,
                  currency: {
                    adServerCurrency: "USD",
                    granularityMultiplier: 1
                  },
                  userSync: {
                    filterSettings: {
                      iframe: {
                        bidders: '*',
                        filter: 'include'
                      }
                    }
                  },
                  cache: {
                    url: 'https://prebid.adnxs.com/pbc/v1/cache'
                  }
                });
              });
            `,
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/prebid.js@latest/dist/prebid.js"
          strategy="beforeInteractive"
        />

        {/* WBID - Wrapper Bid (Cleanest open exchange demand) */}
        <Script
          id="wbid-setup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var wbid = wbid || {};
              wbid.que = wbid.que || [];

              // WBID configuration for maximum demand exposure
              wbid.que.push(function() {
                wbid.setConfig({
                  timeout: 1500,
                  currency: 'USD',
                  exchanges: {
                    'google-adx': { enabled: true },
                    'amazon-aps': { enabled: true },
                    'openx': { enabled: true },
                    'rubicon': { enabled: true },
                    'appnexus': { enabled: true },
                    'index': { enabled: true },
                    'pubmatic': { enabled: true },
                    'criteo': { enabled: true },
                    'sovrn': { enabled: true },
                    'triplelift': { enabled: true }
                  }
                });
              });
            `,
          }}
        />
        {/* WBID script - Replace with actual WBID CDN URL when available */}
        <Script
          src="https://cdn.wbid.io/latest/wbid.min.js"
          strategy="beforeInteractive"
        />

        {/* Amazon Publisher Services (APS) - TAM Integration */}
        <Script
          id="amazon-aps"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

              apstag.init({
                pubID: 'YOUR_AMAZON_PUB_ID', // Replace with your Amazon Publisher ID
                adServer: 'googletag',
                bidTimeout: 1500
              });
            `,
          }}
        />

        {/* Google Publisher Tag */}
        <Script
          id="gpt-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};

              googletag.cmd.push(function() {
                // Configure GPT for revenue optimization
                googletag.pubads().enableSingleRequest();
                googletag.pubads().disableInitialLoad();
                googletag.pubads().enableLazyLoad({
                  fetchMarginPercent: 200,
                  renderMarginPercent: 100,
                  mobileScaling: 2.0
                });

                // Revenue share optimization
                googletag.pubads().setPrivacySettings({
                  'restrictDataProcessing': false,
                  'childDirectedTreatment': false,
                  'underAgeOfConsent': false
                });

                // Enable video ads if applicable
                googletag.pubads().set('page_url', window.location.href);
                googletag.pubads().collapseEmptyDivs();
              });
            `,
          }}
        />
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="afterInteractive"
          async
        />

        {/* AdSense (Backup demand) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Media.net (Yahoo Bing Network) - Additional demand */}
        <Script
          id="media-net"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window._mNHandle = window._mNHandle || {};
              window._mNHandle.queue = window._mNHandle.queue || [];
              medianet_width = '728';
              medianet_height = '90';
              medianet_crid = 'YOUR_CRID'; // Replace with Media.net CRID
              medianet_versionId = '3111299';
            `,
          }}
        />
        <Script
          src="//contextual.media.net/dmedianet.js?cid=YOUR_CUSTOMER_ID"
          strategy="lazyOnload"
          async
        />

        {/* Ezoic - AI-powered optimization (when approved) */}
        {/* <Script
          src="//go.ezoic.net/ezoic/ezoic.js"
          strategy="lazyOnload"
          async
        /> */}

        {/* Revenue Analytics */}
        <Script
          id="revenue-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.revenueTracker = {
                impressions: 0,
                viewable: 0,
                clicks: 0,
                estimatedRevenue: 0,

                logImpression: function(slotId, cpm) {
                  this.impressions++;
                  this.estimatedRevenue += (cpm || 0) / 1000;

                  // Log to analytics
                  if (window.gtag) {
                    gtag('event', 'ad_impression', {
                      slot_id: slotId,
                      cpm: cpm || 0,
                      total_revenue: this.estimatedRevenue
                    });
                  }
                },

                logViewable: function(slotId) {
                  this.viewable++;
                },

                logClick: function(slotId) {
                  this.clicks++;

                  if (window.gtag) {
                    gtag('event', 'ad_click', {
                      slot_id: slotId
                    });
                  }
                }
              };
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
