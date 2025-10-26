import Hero from './components/Hero';
import TourEpisodes from './components/TourEpisodes';
import Testimonials from './components/Testimonials';
import AdSlot from './components/AdSlot';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* MAXIMUM AD DENSITY - Billboard Ad Unit */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSlot
          slotId="div-gpt-ad-header-1"
          sizes={[[970, 250], [728, 90], [320, 50]]}
          className="w-full"
        />
      </div>

      {/* Sticky Sidebar Ads (both sides on desktop) */}
      <div className="hidden lg:block fixed left-4 top-1/4 z-50">
        <AdSlot
          slotId="div-gpt-ad-sidebar-left"
          sizes={[[160, 600], [120, 600]]}
        />
      </div>
      <div className="hidden lg:block fixed right-4 top-1/4 z-50">
        <AdSlot
          slotId="div-gpt-ad-sidebar-right"
          sizes={[[300, 600], [160, 600]]}
        />
      </div>

      {/* Another Ad Before Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSlot
          slotId="div-gpt-ad-pre-gallery"
          sizes={[[970, 250], [728, 90], [320, 100]]}
          className="w-full"
        />
      </div>

      {/* Photo Gallery Section (contains multiple ads internally) */}
      <TourEpisodes />

      {/* Post-Gallery Ad Blitz */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <AdSlot
          slotId="div-gpt-ad-post-gallery-1"
          sizes={[[970, 250], [728, 90]]}
          className="w-full"
        />
        <AdSlot
          slotId="div-gpt-ad-post-gallery-2"
          sizes={[[970, 90], [728, 90], [320, 50]]}
          className="w-full"
        />
      </div>

      {/* In-Content Native Ad */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <AdSlot
          slotId="div-gpt-ad-content-native"
          sizes={[[300, 250], [336, 280], 'fluid']}
          className="w-full"
        />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pre-Footer Ad Stack */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <AdSlot
          slotId="div-gpt-ad-pre-footer-1"
          sizes={[[970, 250], [728, 90]]}
          className="w-full"
        />
        <AdSlot
          slotId="div-gpt-ad-pre-footer-2"
          sizes={[[728, 90], [320, 50]]}
          className="w-full"
        />
      </div>

      {/* Footer Ad Units */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 bg-black/20">
        <AdSlot
          slotId="div-gpt-ad-footer-1"
          sizes={[[728, 90], [970, 90], [320, 50]]}
          className="w-full"
        />
        <AdSlot
          slotId="div-gpt-ad-footer-2"
          sizes={[[728, 90], [468, 60], [320, 50]]}
          className="w-full"
        />
        <AdSlot
          slotId="div-gpt-ad-footer-3"
          sizes={[[728, 90], [320, 50]]}
          className="w-full"
        />
      </div>

      {/* Anchor Ad (mobile bottom sticky) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 p-2">
        <AdSlot
          slotId="div-gpt-ad-anchor"
          sizes={[[320, 50], [300, 50]]}
          className="w-full"
        />
      </div>
    </main>
  );
}
