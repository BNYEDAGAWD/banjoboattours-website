'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TourEpisode {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  image: string;
  dramaticQuote: string;
}

const episodes: TourEpisode[] = [
  {
    id: 'sunrise-saga',
    title: 'The Sunrise Saga',
    tagline: 'Rise and Shine... with Gators',
    description: 'Experience the bayou awakening in golden-hour glory. Watch the swamp come alive as morning mist dances over cypress waters.',
    duration: '2.5 hours',
    price: '$89',
    features: ['Dawn departure', 'Coffee & beignets', 'Wildlife photography', 'Champagne toast'],
    image: '/images/sunrise-tour.jpg',
    dramaticQuote: '"The early bird gets the gator sighting."',
  },
  {
    id: 'gator-gossip',
    title: 'Gator Gossip',
    tagline: 'Where Wildlife Meets Drama',
    description: 'Get up close with the bayou\'s most dramatic residents. Our captains know ALL the gator tea.',
    duration: '3 hours',
    price: '$129',
    features: ['Expert guides', 'GoPro footage', 'Wildlife encounters', 'Souvenir photo package'],
    image: '/images/gator-tour.jpg',
    dramaticQuote: '"These gators have more drama than housewives."',
  },
  {
    id: 'champagne-cypress',
    title: 'Champagne & Cypress',
    tagline: 'Luxury Meets Louisiana',
    description: 'Sunset tours for those who appreciate the finer things. Watch the sky turn golden while sipping bubbly on our premium pontoon.',
    duration: '4 hours',
    price: '$199',
    features: ['Premium champagne', 'Gourmet charcuterie', 'Private boat option', 'Professional photographer'],
    image: '/images/sunset-tour.jpg',
    dramaticQuote: '"Swamp chic is the new black."',
  },
  {
    id: 'full-moon-feuds',
    title: 'Full Moon Feuds',
    tagline: 'Night Drama on the Bayou',
    description: 'Experience the swamp after dark during full moon nights. Mysterious, magical, and absolutely unforgettable.',
    duration: '2 hours',
    price: '$149',
    features: ['Nighttime wildlife', 'LED boat lights', 'Moonlight views', 'S\'mores & stories'],
    image: '/images/night-tour.jpg',
    dramaticQuote: '"The moon brings out everyone\'s wild side."',
  },
];

export default function TourEpisodes() {
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);

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
            CHOOSE YOUR EPISODE
          </h2>
          <p className="font-script text-2xl md:text-3xl" style={{ color: 'var(--cypress-gold)' }}>
            Every tour is a season finale waiting to happen
          </p>
        </motion.div>

        {/* Episode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              onMouseEnter={() => setSelectedEpisode(episode.id)}
              onMouseLeave={() => setSelectedEpisode(null)}
            >
              {/* Background Image Placeholder */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 transition-transform duration-500 group-hover:scale-110"
              >
                {/* Replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-9xl font-black">
                  {index + 1}
                </div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-8 h-full min-h-[500px] flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                {/* Episode Number Badge */}
                <div className="flex justify-between items-start">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{ backgroundColor: 'var(--cypress-gold)', color: 'var(--dramatic-black)' }}
                  >
                    EPISODE {index + 1}
                  </span>
                  <span className="font-display text-4xl font-black text-white">
                    {episode.price}
                  </span>
                </div>

                {/* Episode Info */}
                <div className="space-y-4">
                  <h3 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
                    {episode.title}
                  </h3>
                  <p className="font-script text-2xl" style={{ color: 'var(--champagne-rose)' }}>
                    {episode.tagline}
                  </p>

                  <p className="text-white/90 text-lg leading-relaxed">
                    {episode.description}
                  </p>

                  {/* Dramatic Quote */}
                  <blockquote className="border-l-4 pl-4 italic text-white/80" style={{ borderColor: 'var(--cypress-gold)' }}>
                    {episode.dramaticQuote}
                  </blockquote>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {episode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-xs" style={{ color: 'var(--cypress-gold)' }}>✦</span>
                        <span className="text-sm text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center space-x-2 text-white/70">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{episode.duration}</span>
                  </div>

                  {/* Book Button */}
                  <button
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                    style={{
                      backgroundColor: selectedEpisode === episode.id ? 'var(--cypress-gold)' : 'var(--muddy-brown)',
                      color: 'white',
                    }}
                  >
                    BOOK THIS EPISODE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
