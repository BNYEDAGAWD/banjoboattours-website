// Global type declarations for ad integrations

declare global {
  interface Window {
    googletag: any;
    pbjs: any;
    wbid: any;
    gtag?: (...args: any[]) => void;
    revenueTracker?: {
      impressions: number;
      viewable: number;
      clicks: number;
      estimatedRevenue: number;
      logImpression: (slotId: string, cpm: number) => void;
      logViewable: (slotId: string) => void;
      logClick: (slotId: string) => void;
    };
  }
}

export {};
