'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Tactical Camouflage Background */}
      <div className="absolute inset-0 z-0 camo-bg camo-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl"
        >
          {/* Title Card */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black combat-stencil mb-6 drop-shadow-2xl tracking-tight" style={{ color: 'var(--camo-cream)' }}>
            FINN FRETWATER
          </h1>

          <p className="text-xl md:text-3xl font-bold mb-8" style={{ color: 'var(--camo-sand)' }}>
            The Most Interesting Man in the South
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-4xl font-bold mb-6" style={{ color: 'var(--camo-cream)' }}>
              I Love Two Things:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-4xl md:text-6xl font-black mb-8">
              <span className="font-display combat-stencil" style={{ color: 'var(--combat-gold)' }}>1. BANJOS</span>
              <span className="text-3xl md:text-5xl" style={{ color: 'var(--camo-cream)' }}>&</span>
              <span className="font-display combat-stencil" style={{ color: 'var(--combat-gold)' }}>2. THINKING</span>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--camo-sand)' }}>
              Between the river and the strings, my brain decided it wants to understand everything.
              Tax strategy. Engineering. Sleep science. Mortgage refinancing. Air fryer physics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            {/* CTA Button */}
            <a
              href="/upstream-thinking"
              className="inline-block tactical-btn px-12 py-5 text-xl font-bold text-white rounded-sm uppercase tracking-wider"
            >
              <span className="relative z-10">READ UPSTREAM THINKING</span>
            </a>

            {/* Boat Tours Secondary CTA */}
            <p className="text-sm md:text-base mt-4" style={{ color: 'var(--camo-olive)' }}>
              Boat tours launching 2027 • Somewhere
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2" style={{ color: 'var(--camo-sand)' }}>Scroll to Explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              style={{ color: 'var(--camo-sand)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
