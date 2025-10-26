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

        {/* === GOOGLE MCM/ADX PARTNERS (Maximum Revenue Optimization) === */}

        {/* 1. EZOIC - MCM Partner (Access Now - No 10k pageview limit!) */}
        {/* Ezoic provides direct Google AdX access for publishers of ALL sizes */}
        {/* Replace YOUR_EZOIC_ID after approval at https://www.ezoic.com */}
        <Script
          id="ezoic-setup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var ezoicId = 'YOUR_EZOIC_ID'; // Replace with your Ezoic Publisher ID
              if(typeof ezstandalone !== 'undefined') {
                ezstandalone.cmd.push(function() {
                  ezstandalone.define('YOUR_EZOIC_ID');
                  ezstandalone.enable();
                  ezstandalone.display();
                });
              }
            `,
          }}
        />
        <Script
          src="//go.ezoic.net/ezoic/ezoic.js"
          strategy="beforeInteractive"
          async
        />

        {/* 2. ADSTERRA - 30k+ Publishers, 10+ Years Experience */}
        {/* Sign up at https://publishers.adsterra.com */}
        {/* Supports Display, Popunder, Social Bar, Native, and Video ads */}
        <Script
          id="adsterra-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.adstertaConfig = {
                publisherId: 'YOUR_ADSTERRA_PUBLISHER_ID', // Replace after signup
                zoneIds: {
                  header: 'YOUR_HEADER_ZONE_ID',
                  sidebar: 'YOUR_SIDEBAR_ZONE_ID',
                  inContent: 'YOUR_IN_CONTENT_ZONE_ID',
                  footer: 'YOUR_FOOTER_ZONE_ID'
                }
              };
            `,
          }}
        />

        {/* 3. MEDIAVINE JOURNEY - Premium Ad Management (Requires 10k+ sessions) */}
        {/* Apply at https://www.mediavine.com/journey */}
        {/* Self-service platform, separate from main Mediavine */}
        <Script
          id="mediavine-journey"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Mediavine Journey Script Wrapper
              window.mediaVineJourney = window.mediaVineJourney || {
                settings: {
                  siteId: 'YOUR_MEDIAVINE_SITE_ID', // Replace after approval
                  adRefresh: true,
                  lazyLoad: true,
                  stickyNav: false
                },
                placeholders: []
              };
            `,
          }}
        />
        {/* Uncomment after Mediavine Journey approval (requires 10k+ monthly sessions) */}
        {/* <Script
          src="https://scripts.mediavine.com/tags/YOUR_MEDIAVINE_SITE_ID.js"
          strategy="beforeInteractive"
          async
        /> */}

        {/* 4. MONUMETRIC - Ad Management for All Publisher Sizes */}
        {/* Better alternative to AdSense, comparable CPMs to Setupad/Raptive */}
        {/* Apply at https://www.monumetric.com */}
        <Script
          id="monumetric-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.MonumetricObject = 'MonumetricObject';
              window.MonumetricObject = window.MonumetricObject || [];
              window.MonumetricObject.push({
                slot_id: 'YOUR_MONUMETRIC_SLOT_ID', // Replace after approval
                publisher_id: 'YOUR_MONUMETRIC_PUBLISHER_ID',
                settings: {
                  lazy_load: true,
                  refresh: true,
                  refresh_interval: 30000, // 30 seconds
                  viewability_threshold: 0.5
                }
              });
            `,
          }}
        />
        {/* Uncomment after Monumetric approval */}
        {/* <Script
          src="//tag.monu.delivery/YOUR_MONUMETRIC_PUBLISHER_ID.js"
          strategy="afterInteractive"
          async
        /> */}

        {/* MCM/AdX Optimization: Ad Refresh Coordination */}
        <Script
          id="mcm-refresh-coordinator"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Coordinates ad refresh across all MCM partners for maximum revenue
              window.mcmRefreshCoordinator = {
                activePartners: [],
                refreshInterval: 30000, // 30 seconds default

                registerPartner: function(partnerName) {
                  if (!this.activePartners.includes(partnerName)) {
                    this.activePartners.push(partnerName);
                  }
                },

                coordinateRefresh: function() {
                  // Ezoic auto-refresh (if active)
                  if (typeof ezstandalone !== 'undefined' && this.activePartners.includes('ezoic')) {
                    ezstandalone.refresh();
                  }

                  // Adsterra refresh (manual implementation)
                  if (typeof window.adstertaConfig !== 'undefined' && this.activePartners.includes('adsterra')) {
                    // Adsterra uses iframe-based ads, refresh handled server-side
                  }

                  // Mediavine Journey refresh
                  if (typeof window.mediaVineJourney !== 'undefined' && this.activePartners.includes('mediavine')) {
                    // Mediavine handles refresh internally
                  }

                  // Monumetric refresh
                  if (typeof window.MonumetricObject !== 'undefined' && this.activePartners.includes('monumetric')) {
                    // Monumetric auto-refresh configured above
                  }

                  // Prebid + WBID refresh (existing)
                  if (window.pbjs && this.activePartners.includes('prebid')) {
                    window.pbjs.que.push(function() {
                      window.pbjs.requestBids({
                        timeout: 1500,
                        bidsBackHandler: function() {
                          if (window.googletag) {
                            window.googletag.pubads().refresh();
                          }
                        }
                      });
                    });
                  }
                }
              };

              // Start coordinated refresh
              setInterval(function() {
                window.mcmRefreshCoordinator.coordinateRefresh();
              }, window.mcmRefreshCoordinator.refreshInterval);
            `,
          }}
        />

        {/* Revenue Analytics (Enhanced for MCM Partners) */}
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
