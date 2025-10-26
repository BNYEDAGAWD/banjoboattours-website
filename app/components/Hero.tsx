'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Replace with actual video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        {/* Placeholder gradient background - replace with video element */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-amber-900 to-green-800" />
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
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
            FINN FRETWATER
          </h1>

          <p className="text-xl md:text-3xl text-white/90 font-bold mb-8">
            The Most Interesting Man in the South
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-4xl text-white font-bold mb-6">
              I Love Two Things:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-4xl md:text-6xl font-black mb-8">
              <span className="font-display" style={{ color: 'var(--cypress-gold)' }}>1. BANJOS</span>
              <span className="text-white text-3xl md:text-5xl">&</span>
              <span className="font-display" style={{ color: 'var(--cypress-gold)' }}>2. THINKING</span>
            </div>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
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
              className="inline-block group relative px-12 py-5 text-xl font-bold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--cypress-gold)' }}
            >
              <span className="relative z-10">READ UPSTREAM THINKING</span>
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'linear-gradient(90deg, var(--swamp-moss), var(--muddy-brown))'
                }}
              />
            </a>

            {/* Boat Tours Secondary CTA */}
            <p className="text-sm md:text-base text-white/60 mt-4">
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
            <span className="text-white text-sm mb-2">Scroll to Explore</span>
            <svg
              className="w-6 h-6 text-white animate-bounce"
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
