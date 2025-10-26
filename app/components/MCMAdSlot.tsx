'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * MCM AD SLOT COMPONENT
 *
 * Google MCM (Multiple Customer Management) / AdX Integration
 * Supports all 4 MCM partners + existing Prebid/WBID stack
 *
 * Partners:
 * 1. Ezoic - Direct AdX access (no pageview minimum!)
 * 2. Adsterra - 30k+ publishers, 10+ years
 * 3. Mediavine Journey - Premium (10k+ sessions required)
 * 4. Monumetric - All publisher sizes
 *
 * Plus existing: Prebid.js (8+ SSPs), WBID (10+ exchanges), AdSense, Media.net
 */

interface MCMAdSlotConfig {
  slotId: string;
  sizes: ([number, number] | string)[];
  position: 'header' | 'sidebar' | 'in-content' | 'footer' | 'sticky';

  // Ad refresh settings
  refreshInterval?: number; // seconds (default: 30)

  // Performance optimizations
  lazyLoad?: boolean; // default: true for below-fold
  viewabilityThreshold?: number; // default: 0.5 (50%)

  // Partner enablement (all default to true)
  ezoicEnabled?: boolean;
  adsterraEnabled?: boolean;
  mediavineEnabled?: boolean;
  monumetricEnabled?: boolean;
  prebidEnabled?: boolean;
  wbidEnabled?: boolean;
  adsenseEnabled?: boolean;

  // Advanced options
  adDensity?: 'low' | 'medium' | 'high' | 'maximum'; // default: 'high'
  mcmPriority?: 'ezoic' | 'mediavine' | 'monumetric' | 'balanced'; // default: 'balanced'
}

interface MCMAdSlotProps {
  config: MCMAdSlotConfig;
  className?: string;
}

export default function MCMAdSlot({ config, className = '' }: MCMAdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePartner, setActivePartner] = useState<string | null>(null);
  const refreshTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Lazy load detection
  useEffect(() => {
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
      { rootMargin: '200px' }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, [config.lazyLoad, config.position, isVisible]);

  // Load ad via MCM waterfall
  useEffect(() => {
    if (!isVisible) return;

    const loadMCMAd = async () => {
      try {
        // Wait for ad scripts
        await waitForAdLibs();

        // Try MCM partners in priority order
        const partner = await loadViaMCMWaterfall(config);
        setActivePartner(partner);
        setIsLoaded(true);

        // Register with refresh coordinator
        if (typeof window !== 'undefined' && (window as any).mcmRefreshCoordinator) {
          (window as any).mcmRefreshCoordinator.registerPartner(partner);
        }

        // Setup auto-refresh
        if (config.refreshInterval && config.refreshInterval > 0) {
          refreshTimerRef.current = setInterval(() => {
            refreshMCMAd(config, partner);
          }, config.refreshInterval * 1000);
        }

        // Track impression
        trackMCMImpression(config.slotId, partner);
      } catch (error) {
        console.error('MCM ad load failed:', error);
        // Fallback to house ad
        loadHouseAd(config.slotId);
      }
    };

    loadMCMAd();

    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
      }
    };
  }, [isVisible, config]);

  // Viewability tracking
  useEffect(() => {
    if (!isLoaded || !adRef.current) return;

    const threshold = config.viewabilityThreshold || 0.5;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= threshold) {
            trackMCMViewable(config.slotId, activePartner);
          }
        });
      },
      { threshold }
    );

    observer.observe(adRef.current);
    return () => observer.disconnect();
  }, [isLoaded, config.slotId, config.viewabilityThreshold, activePartner]);

  return (
    <div
      ref={adRef}
      id={config.slotId}
      className={`mcm-ad-slot mcm-${config.position} ${className}`}
      style={getSlotDimensions(config)}
      data-partner={activePartner}
      data-density={config.adDensity || 'high'}
    >
      {!isLoaded && (
        <div className="ad-loading-placeholder bg-gray-800/20 rounded flex items-center justify-center text-gray-600 text-sm">
          Loading ad...
        </div>
      )}
    </div>
  );
}

// === MCM WATERFALL LOGIC ===

async function loadViaMCMWaterfall(config: MCMAdSlotConfig): Promise<string> {
  const priority = config.mcmPriority || 'balanced';

  // Determine load order based on priority
  let loadOrder: string[] = [];

  switch (priority) {
    case 'ezoic':
      loadOrder = ['ezoic', 'mediavine', 'monumetric', 'prebid', 'adsterra', 'adsense'];
      break;
    case 'mediavine':
      loadOrder = ['mediavine', 'ezoic', 'monumetric', 'prebid', 'adsterra', 'adsense'];
      break;
    case 'monumetric':
      loadOrder = ['monumetric', 'ezoic', 'mediavine', 'prebid', 'adsterra', 'adsense'];
      break;
    case 'balanced':
    default:
      // Balanced: Try header bidding first, then MCM partners, then backfill
      loadOrder = ['prebid', 'ezoic', 'mediavine', 'monumetric', 'adsterra', 'adsense'];
  }

  // Try each partner in order
  for (const partner of loadOrder) {
    try {
      const loaded = await tryLoadPartner(partner, config);
      if (loaded) {
        return partner;
      }
    } catch (error) {
      console.warn(`MCM partner ${partner} failed to load:`, error);
      continue;
    }
  }

  // All partners failed, fallback to house ad
  return 'house';
}

async function tryLoadPartner(partner: string, config: MCMAdSlotConfig): Promise<boolean> {
  switch (partner) {
    case 'ezoic':
      if (config.ezoicEnabled !== false && typeof window !== 'undefined' && (window as any).ezstandalone) {
        return await loadEzoicAd(config);
      }
      return false;

    case 'mediavine':
      if (config.mediavineEnabled !== false && typeof window !== 'undefined' && (window as any).mediaVineJourney) {
        return await loadMediavineAd(config);
      }
      return false;

    case 'monumetric':
      if (config.monumetricEnabled !== false && typeof window !== 'undefined' && (window as any).MonumetricObject) {
        return await loadMonumetricAd(config);
      }
      return false;

    case 'adsterra':
      if (config.adsterraEnabled !== false && typeof window !== 'undefined' && (window as any).adstertaConfig) {
        return await loadAdsterraAd(config);
      }
      return false;

    case 'prebid':
      if (config.prebidEnabled !== false && typeof window !== 'undefined' && (window as any).pbjs) {
        return await loadPrebidAd(config);
      }
      return false;

    case 'adsense':
      if (config.adsenseEnabled !== false && typeof window !== 'undefined' && (window as any).googletag) {
        return await loadAdSenseAd(config);
      }
      return false;

    default:
      return false;
  }
}

// === PARTNER-SPECIFIC LOADERS ===

async function loadEzoicAd(config: MCMAdSlotConfig): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof (window as any).ezstandalone === 'undefined') {
      resolve(false);
      return;
    }

    (window as any).ezstandalone.cmd.push(() => {
      const placeholder = (window as any).ezstandalone.define(config.slotId, config.sizes);
      if (placeholder) {
        (window as any).ezstandalone.enable();
        (window as any).ezstandalone.display(config.slotId);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

async function loadMediavineAd(config: MCMAdSlotConfig): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof (window as any).mediaVineJourney === 'undefined') {
      resolve(false);
      return;
    }

    const mvConfig = (window as any).mediaVineJourney;
    mvConfig.placeholders.push({
      id: config.slotId,
      sizes: config.sizes,
      position: config.position
    });

    // Mediavine Journey auto-displays
    resolve(true);
  });
}

async function loadMonumetricAd(config: MCMAdSlotConfig): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof (window as any).MonumetricObject === 'undefined') {
      resolve(false);
      return;
    }

    (window as any).MonumetricObject.push({
      slot_id: config.slotId,
      sizes: config.sizes,
      position: config.position,
      settings: {
        lazy_load: config.lazyLoad,
        refresh: config.refreshInterval ? true : false,
        refresh_interval: (config.refreshInterval || 30) * 1000
      }
    });

    resolve(true);
  });
}

async function loadAdsterraAd(config: MCMAdSlotConfig): Promise<boolean> {
  return new Promise((resolve) => {
    const adstertaConfig = (window as any).adstertaConfig;
    if (!adstertaConfig) {
      resolve(false);
      return;
    }

    // Get zone ID based on position
    let zoneId = '';
    switch (config.position) {
      case 'header':
        zoneId = adstertaConfig.zoneIds.header;
        break;
      case 'sidebar':
      case 'sticky':
        zoneId = adstertaConfig.zoneIds.sidebar;
        break;
      case 'in-content':
        zoneId = adstertaConfig.zoneIds.inContent;
        break;
      case 'footer':
        zoneId = adstertaConfig.zoneIds.footer;
        break;
    }

    if (!zoneId || zoneId.includes('YOUR_')) {
      resolve(false);
      return;
    }

    // Create Adsterra ad container
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '${zoneId}',
        'format' : 'iframe',
        'height' : ${config.sizes[0] && Array.isArray(config.sizes[0]) ? config.sizes[0][1] : 250},
        'width' : ${config.sizes[0] && Array.isArray(config.sizes[0]) ? config.sizes[0][0] : 300},
        'params' : {}
      };
    `;

    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = `//www.highperformanceformat.com/${zoneId}/invoke.js`;
    adScript.async = true;

    const container = document.getElementById(config.slotId);
    if (container) {
      container.appendChild(script);
      container.appendChild(adScript);
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

async function loadPrebidAd(config: MCMAdSlotConfig): Promise<boolean> {
  // Use existing Prebid.js implementation from AdManager
  return new Promise((resolve) => {
    if (!window.pbjs) {
      resolve(false);
      return;
    }

    window.pbjs.que.push(() => {
      window.pbjs.requestBids({
        adUnitCodes: [config.slotId],
        timeout: 1500,
        bidsBackHandler: () => {
          if (window.googletag) {
            window.googletag.cmd.push(() => {
              window.googletag.pubads().refresh();
              resolve(true);
            });
          } else {
            resolve(false);
          }
        }
      });
    });
  });
}

async function loadAdSenseAd(config: MCMAdSlotConfig): Promise<boolean> {
  return new Promise((resolve) => {
    if (!window.googletag) {
      resolve(false);
      return;
    }

    window.googletag.cmd.push(() => {
      window.googletag.display(config.slotId);
      resolve(true);
    });
  });
}

function loadHouseAd(slotId: string) {
  const container = document.getElementById(slotId);
  if (container) {
    container.innerHTML = `
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; text-align: center; border-radius: 0.5rem;">
        <p style="color: white; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">
          💪🎸 Finn Fretwater
        </p>
        <p style="color: rgba(255,255,255,0.9); font-size: 0.875rem;">
          Upstream Thinking • Expert insights on everything
        </p>
      </div>
    `;
  }
}

// === HELPER FUNCTIONS ===

async function waitForAdLibs(): Promise<void> {
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const hasEzoic = typeof (window as any).ezstandalone !== 'undefined';
      const hasMediavine = typeof (window as any).mediaVineJourney !== 'undefined';
      const hasMonumetric = typeof (window as any).MonumetricObject !== 'undefined';
      const hasPrebid = typeof (window as any).pbjs !== 'undefined';
      const hasGPT = typeof (window as any).googletag !== 'undefined';

      // At least one must be loaded
      if (hasEzoic || hasMediavine || hasMonumetric || hasPrebid || hasGPT) {
        clearInterval(checkInterval);
        resolve();
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
      resolve();
    }, 5000);
  });
}

function refreshMCMAd(config: MCMAdSlotConfig, partner: string | null) {
  if (!partner) return;

  switch (partner) {
    case 'ezoic':
      if ((window as any).ezstandalone) {
        (window as any).ezstandalone.refresh();
      }
      break;
    case 'mediavine':
      // Mediavine handles refresh internally
      break;
    case 'monumetric':
      // Monumetric handles refresh internally
      break;
    case 'prebid':
      if (window.pbjs && window.googletag) {
        window.pbjs.que.push(() => {
          window.pbjs.requestBids({
            timeout: 1500,
            bidsBackHandler: () => {
              window.googletag.cmd.push(() => {
                window.googletag.pubads().refresh();
              });
            }
          });
        });
      }
      break;
  }
}

function trackMCMImpression(slotId: string, partner: string | null) {
  if (typeof window !== 'undefined' && (window as any).revenueTracker) {
    (window as any).revenueTracker.logImpression(slotId, 0);
  }

  // Track partner-specific metrics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'mcm_impression', {
      slot_id: slotId,
      partner: partner,
      timestamp: Date.now()
    });
  }
}

function trackMCMViewable(slotId: string, partner: string | null) {
  if (typeof window !== 'undefined' && (window as any).revenueTracker) {
    (window as any).revenueTracker.logViewable(slotId);
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'mcm_viewable', {
      slot_id: slotId,
      partner: partner,
      timestamp: Date.now()
    });
  }
}

function getSlotDimensions(config: MCMAdSlotConfig): React.CSSProperties {
  const firstSize = config.sizes[0];
  if (Array.isArray(firstSize)) {
    return {
      minWidth: `${firstSize[0]}px`,
      minHeight: `${firstSize[1]}px`,
      width: '100%',
      maxWidth: `${firstSize[0]}px`,
      margin: '0 auto'
    };
  }
  return {
    width: '100%',
    minHeight: '250px'
  };
}
