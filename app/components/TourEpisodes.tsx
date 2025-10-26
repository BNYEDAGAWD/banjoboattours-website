'use client';

import { motion } from 'framer-motion';
import AdSlot from './AdSlot';

interface GalleryImage {
  id: string;
  title: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'The Flex',
    caption: 'Biceps meet banjo',
  },
  {
    id: '2',
    title: 'Gator Wrestling',
    caption: 'One hand on the gator, one hand on the strings',
  },
  {
    id: '3',
    title: 'The Performance',
    caption: 'Where music meets muscle',
  },
  {
    id: '4',
    title: 'On The Water',
    caption: 'Somewhere. On something.',
  },
  {
    id: '5',
    title: 'Action Shot',
    caption: 'Peak masculinity documented',
  },
  {
    id: '6',
    title: 'The Legend',
    caption: 'Him.',
  },
];

export default function TourEpisodes() {

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--swamp-moss)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            THE EXPERIENCE
          </h2>
          <p className="font-script text-2xl md:text-3xl" style={{ color: 'var(--cypress-gold)' }}>
            Banjos. Boats. Biceps. That&apos;s all you need to know.
          </p>
        </motion.div>

        {/* Aggressive Ad Placement */}
        <div className="mb-12">
          <AdSlot
            slotId="div-gpt-ad-gallery-top"
            sizes={[[970, 250], [728, 90], [320, 50]]}
            className="w-full"
          />
        </div>

        {/* Photo Gallery Grid with Ads Between */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4]"
              >
                {/* Image Placeholder - Will be muscular guide photos */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 text-6xl font-black p-8 text-center">
                    <div className="mb-4">💪</div>
                    <div className="text-2xl">🪕</div>
                    <div className="mt-4 text-lg">IMAGE {index + 1}</div>
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="font-display text-2xl font-black text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {image.caption}
                  </p>
                </div>
              </motion.div>

              {/* Ad After Every Image */}
              {(index + 1) % 2 === 0 && (
                <div className="md:col-span-3">
                  <AdSlot
                    slotId={`div-gpt-ad-gallery-${index}`}
                    sizes={[[728, 90], [320, 50], [300, 250]]}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Ads */}
        <div className="mt-12 space-y-8">
          <AdSlot
            slotId="div-gpt-ad-gallery-mid"
            sizes={[[970, 250], [728, 90]]}
            className="w-full"
          />

          {/* Vague Booking Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <h3 className="font-display text-4xl font-black text-white mb-4">
              READY TO EXPERIENCE IT?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              No details. No location. No promises. Just banjos, boats, and pure masculine energy.
            </p>
            <button
              className="px-12 py-5 rounded-lg font-bold text-xl text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--cypress-gold)' }}
            >
              BOOK NOW
            </button>
            <p className="text-sm text-white/50 mt-4 italic">
              (We&apos;ll figure out the details later)
            </p>
          </motion.div>

          <AdSlot
            slotId="div-gpt-ad-gallery-bottom"
            sizes={[[970, 250], [728, 90]]}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
