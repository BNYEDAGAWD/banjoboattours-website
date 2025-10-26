'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ADVANCED AD MANAGER
 *
 * Revenue Maximization Stack:
 * 1. Prebid.js - Header bidding with multiple SSPs (Amazon, Index, OpenX, Rubicon, etc.)
 * 2. WBID - Wrapper bidding for cleanest open exchange demand access (no fees)
 * 3. Google AdSense - Backfill and additional demand
 * 4. Premium Networks - AdPushup, Ezoic, Media.net (when integrated)
 *
 * This component manages the entire ad lifecycle:
 * - Lazy loading for performance
 * - Viewability tracking
 * - Auto-refresh for maximum impressions
 * - Fallback chain (Prebid → WBID → AdSense → House ads)
 * - Revenue analytics
 */

interface AdSlotConfig {
  slotId: string;
  sizes: ([number, number] | string)[];
  position: 'header' | 'sidebar' | 'in-content' | 'footer' | 'sticky';
  refreshInterval?: number; // seconds (default: 30)
  lazyLoad?: boolean; // default: true for below-fold
  prebidEnabled?: boolean; // default: true
  wbidEnabled?: boolean; // default: true
}

interface AdManagerProps {
  config: AdSlotConfig;
  className?: string;
}

declare global {
  interface Window {
    googletag: any;
    pbjs: any;
    wbid: any;
  }
}

export default function AdManager({ config, className = '' }: AdManagerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [revenue, setRevenue] = useState<number>(0);
  const refreshTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Lazy load ads when they enter viewport
    if (!config.lazyLoad || config.position === 'header' || config.position === 'sticky') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading 200px before entering viewport
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, [config.lazyLoad, config.position, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const loadAd = async () => {
      try {
        // Wait for ad scripts to be ready
        await waitForAdLibs();

        // Initialize Prebid.js if enabled
        if (config.prebidEnabled !== false && window.pbjs) {
          await initPrebid(config);
        }

        // Initialize WBID if enabled
        if (config.wbidEnabled !== false && window.wbid) {
          await initWBID(config);
        }

        // Initialize Google Ad Manager / AdSense
        await initGoogleAd(config);

        setIsLoaded(true);

        // Set up auto-refresh if configured
        if (config.refreshInterval && config.refreshInterval > 0) {
          refreshTimerRef.current = setInterval(() => {
            refreshAd(config);
          }, config.refreshInterval * 1000);
        }

        // Track viewability for revenue analytics
        trackViewability(config.slotId);

      } catch (error) {
        console.error(`Failed to load ad slot ${config.slotId}:`, error);
        // Load fallback/house ad
        loadFallbackAd(config);
      }
    };

    loadAd();

    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
      }
    };
  }, [isVisible, config]);

  // Determine slot dimensions for layout stability (prevent CLS)
  const slotDimensions = getSlotDimensions(config.sizes, config.position);

  return (
    <div
      ref={adRef}
      className={`ad-slot ad-slot-${config.position} ${className}`}
      data-slot-id={config.slotId}
      data-position={config.position}
      style={{
        minHeight: slotDimensions.height,
        maxWidth: slotDimensions.width,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {!isVisible ? (
        // Placeholder while waiting for lazy load
        <div
          style={{
            width: '100%',
            height: slotDimensions.height,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      ) : (
        <>
          {/* Ad container */}
          <div id={config.slotId} className="ad-container" />

          {/* Revenue tracking pixel (invisible) */}
          {isLoaded && (
            <div
              className="revenue-tracker"
              data-slot={config.slotId}
              style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }}
            />
          )}
        </>
      )}
    </div>
  );
}

/**
 * HELPER FUNCTIONS
 */

async function waitForAdLibs(): Promise<void> {
  return new Promise((resolve) => {
    const checkLibs = () => {
      if (window.googletag?.apiReady) {
        resolve();
      } else {
        setTimeout(checkLibs, 100);
      }
    };
    checkLibs();
  });
}

async function initPrebid(config: AdSlotConfig): Promise<void> {
  if (!window.pbjs) return;

  return new Promise((resolve) => {
    window.pbjs.que = window.pbjs.que || [];
    window.pbjs.que.push(() => {
      // Define ad unit for Prebid
      const adUnits = [{
        code: config.slotId,
        mediaTypes: {
          banner: {
            sizes: config.sizes.filter(s => Array.isArray(s)) as [number, number][],
          },
        },
        bids: [
          // Amazon TAM (Transparent Ad Marketplace)
          {
            bidder: 'amazon',
            params: {
              placement_id: config.slotId,
            },
          },
          // Index Exchange
          {
            bidder: 'ix',
            params: {
              siteId: 'SITE_ID', // Replace with actual site ID
              size: config.sizes[0],
            },
          },
          // OpenX
          {
            bidder: 'openx',
            params: {
              unit: 'UNIT_ID', // Replace with actual unit ID
              delDomain: 'DOMAIN', // Replace with actual domain
            },
          },
          // Rubicon Project
          {
            bidder: 'rubicon',
            params: {
              accountId: 'ACCOUNT_ID', // Replace with actual account ID
              siteId: 'SITE_ID',
              zoneId: 'ZONE_ID',
            },
          },
          // AppNexus
          {
            bidder: 'appnexus',
            params: {
              placementId: 'PLACEMENT_ID', // Replace with actual placement ID
            },
          },
          // Criteo
          {
            bidder: 'criteo',
            params: {
              networkId: 'NETWORK_ID', // Replace with actual network ID
            },
          },
          // PulsePoint
          {
            bidder: 'pulsepoint',
            params: {
              cf: 'SITE_ID',
              cp: 'PUBLISHER_ID',
              ct: 'TAG_ID',
            },
          },
          // Sovrn
          {
            bidder: 'sovrn',
            params: {
              tagid: 'TAG_ID',
            },
          },
        ],
      }];

      // Add ad units to Prebid
      window.pbjs.addAdUnits(adUnits);

      // Request bids
      window.pbjs.requestBids({
        adUnitCodes: [config.slotId],
        timeout: 1500, // 1.5s timeout for header bidding
        bidsBackHandler: () => {
          resolve();
        },
      });
    });
  });
}

async function initWBID(config: AdSlotConfig): Promise<void> {
  // WBID (Wrapper Bid) - Direct access to open exchanges
  // No fees, maximum demand exposure
  if (!window.wbid) return;

  return new Promise((resolve) => {
    window.wbid.que = window.wbid.que || [];
    window.wbid.que.push(() => {
      window.wbid.defineSlot({
        slotId: config.slotId,
        sizes: config.sizes,
        exchanges: [
          'google-adx', // Google AdX
          'amazon-aps', // Amazon Publisher Services
          'openx',
          'rubicon',
          'appnexus',
          'index',
          'pubmatic',
          'criteo',
          'sovrn',
          'triplelift',
        ],
        timeout: 1500,
      });

      window.wbid.requestBids({
        slotId: config.slotId,
        callback: () => {
          resolve();
        },
      });
    });
  });
}

async function initGoogleAd(config: AdSlotConfig): Promise<void> {
  if (!window.googletag) return;

  window.googletag.cmd = window.googletag.cmd || [];
  window.googletag.cmd.push(() => {
    // Define ad slot
    const slot = window.googletag
      .defineSlot(`/1234567/${config.slotId}`, config.sizes, config.slotId)
      ?.addService(window.googletag.pubads());

    // Enable services
    window.googletag.pubads().enableSingleRequest();
    window.googletag.pubads().collapseEmptyDivs();
    window.googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 200,
      renderMarginPercent: 100,
      mobileScaling: 2.0,
    });

    // Set Prebid targeting
    if (window.pbjs) {
      window.pbjs.que.push(() => {
        window.pbjs.setTargetingForGPTAsync([config.slotId]);
      });
    }

    // Set WBID targeting
    if (window.wbid) {
      window.wbid.setTargeting(config.slotId);
    }

    window.googletag.enableServices();
    window.googletag.display(config.slotId);
  });
}

function refreshAd(config: AdSlotConfig): void {
  if (!window.googletag) return;

  window.googletag.cmd.push(() => {
    // Request new bids from Prebid
    if (window.pbjs && config.prebidEnabled !== false) {
      window.pbjs.requestBids({
        adUnitCodes: [config.slotId],
        timeout: 1000,
        bidsBackHandler: () => {
          window.pbjs.setTargetingForGPTAsync([config.slotId]);
          window.googletag.pubads().refresh([getSlotBySlotId(config.slotId)]);
        },
      });
    } else {
      window.googletag.pubads().refresh([getSlotBySlotId(config.slotId)]);
    }
  });
}

function getSlotBySlotId(slotId: string): any {
  const slots = window.googletag.pubads().getSlots();
  return slots.find((slot: any) => {
    const slotElementId = slot.getSlotElementId();
    return slotElementId === slotId;
  });
}

function trackViewability(slotId: string): void {
  // Track when ad becomes viewable for revenue analytics
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Log viewable impression
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'ad_viewable', {
              slot_id: slotId,
              timestamp: Date.now(),
            });
          }

          // Track to analytics endpoint (replace with your analytics)
          fetch('/api/analytics/ad-viewable', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              slotId,
              timestamp: Date.now(),
              url: window.location.href,
            }),
          }).catch(() => {}); // Silently fail
        }
      });
    },
    { threshold: 0.5 } // 50% visibility threshold
  );

  const element = document.getElementById(slotId);
  if (element) {
    observer.observe(element);
  }
}

function loadFallbackAd(config: AdSlotConfig): void {
  // Load house ad or placeholder when all ad sources fail
  const element = document.getElementById(config.slotId);
  if (element) {
    element.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
        border: 1px solid rgba(6, 182, 212, 0.3);
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        min-height: 250px;
      ">
        <div>
          <p style="color: rgba(255,255,255,0.7); font-size: 1.125rem; margin-bottom: 0.5rem;">
            💪 Finn Fretwater 🎸
          </p>
          <p style="color: rgba(255,255,255,0.5); font-size: 0.875rem;">
            Expert Knowledge • Zero Pretension
          </p>
        </div>
      </div>
    `;
  }
}

function getSlotDimensions(
  sizes: ([number, number] | string)[],
  position: string
): { width: string; height: string } {
  // Return expected dimensions for layout stability
  const firstSize = sizes[0];

  if (typeof firstSize === 'string') {
    // Responsive ad
    if (position === 'header') return { width: '100%', height: '90px' };
    if (position === 'sidebar') return { width: '300px', height: '600px' };
    if (position === 'in-content') return { width: '100%', height: '250px' };
    if (position === 'footer') return { width: '100%', height: '90px' };
    if (position === 'sticky') return { width: '300px', height: '250px' };
    return { width: '100%', height: '250px' };
  }

  // Fixed size ad
  return {
    width: `${firstSize[0]}px`,
    height: `${firstSize[1]}px`,
  };
}
