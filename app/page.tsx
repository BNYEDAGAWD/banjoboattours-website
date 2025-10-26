import Hero from './components/Hero';
import TourEpisodes from './components/TourEpisodes';
import Testimonials from './components/Testimonials';
import AdSlot from './components/AdSlot';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Billboard Ad Unit */}
      <AdSlot
        slotId="div-gpt-ad-header"
        sizes={[[970, 250], [728, 90]]}
        className="my-8"
      />

      {/* Tour Episodes Section */}
      <TourEpisodes />

      {/* Sidebar Ad Unit (sticky on desktop) */}
      <div className="hidden lg:block fixed right-4 top-1/4 z-50">
        <AdSlot
          slotId="div-gpt-ad-sidebar"
          sizes={[[300, 600], [300, 250]]}
        />
      </div>

      {/* In-Content Ad */}
      <div className="max-w-4xl mx-auto py-8">
        <AdSlot
          slotId="div-gpt-ad-content"
          sizes={[[300, 250], 'fluid']}
        />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Ad Unit */}
      <div className="max-w-6xl mx-auto py-8">
        <AdSlot
          slotId="div-gpt-ad-footer"
          sizes={[[728, 90], [320, 50]]}
        />
      </div>
    </main>
  );
}
