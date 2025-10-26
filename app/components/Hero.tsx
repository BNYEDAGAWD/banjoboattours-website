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
          {/* Reality TV Style Title Card */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
            BANJO BOAT TOURS
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-script text-3xl md:text-5xl mb-8"
            style={{ color: 'var(--cypress-gold)' }}
          >
            Where Southern Charm Meets High Adventure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-white font-medium mb-8 max-w-3xl mx-auto">
              Drama? Only in the sunset. Mud optional. Memories mandatory.
            </p>

            {/* CTA Button */}
            <button
              className="group relative px-12 py-5 text-xl font-bold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--cypress-gold)' }}
            >
              <span className="relative z-10">BOOK YOUR EPISODE</span>
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'linear-gradient(90deg, var(--swamp-moss), var(--muddy-brown))'
                }}
              />
            </button>

            {/* Tagline */}
            <p className="text-sm md:text-base text-white/80 mt-6 italic">
              Not your mama&apos;s swamp tour
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
