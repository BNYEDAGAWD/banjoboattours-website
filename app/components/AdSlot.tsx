'use client';

import { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId: string;
  sizes: ([number, number] | string)[];
  className?: string;
  refreshInterval?: number;
}

export default function AdSlot({ slotId, sizes, className = '', refreshInterval = 30000 }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize Google Publisher Tag
    if (typeof window !== 'undefined' && window.googletag && adRef.current) {
      window.googletag.cmd.push(() => {
        // Define ad slot
        const slot = window.googletag
          .defineSlot(`/22934824676/${slotId}`, sizes as [number, number][], slotId)
          ?.addService(window.googletag.pubads());

        if (slot) {
          // Enable services - NO BRAND SAFETY FILTERS
          // MAXIMUM REVENUE MODE - Accept ALL advertisers
          // Trojan, Astroglide, gambling, high-risk tolerance
          window.googletag.pubads().enableSingleRequest();
          window.googletag.pubads().collapseEmptyDivs();
          window.googletag.enableServices();

          // Display the ad
          window.googletag.display(slotId);

          // Set up ad refresh with viewability check
          if (refreshInterval > 0) {
            refreshTimerRef.current = setInterval(() => {
              if (isInViewport(adRef.current)) {
                window.googletag.pubads().refresh([slot]);
              }
            }, refreshInterval);
          }
        }
      });
    }

    // Cleanup
    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
      }
      if (typeof window !== 'undefined' && window.googletag) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots();
        });
      }
    };
  }, [slotId, sizes, refreshInterval]);

  return (
    <div className={`ad-slot ${className}`} ref={adRef}>
      <div id={slotId} className="w-full flex items-center justify-center min-h-[250px] bg-gray-100/50 rounded-lg">
        {/* Placeholder while ad loads */}
        <span className="text-xs text-gray-400">Advertisement</span>
      </div>
    </div>
  );
}

// Helper function to check if element is in viewport
function isInViewport(element: HTMLElement | null): boolean {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Global Window interface defined in app/types/global.d.ts
