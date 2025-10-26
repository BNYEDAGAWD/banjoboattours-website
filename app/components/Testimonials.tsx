'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  tagline: string;
  rating: number;
  tour: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica M.',
    location: 'Somewhere',
    quote: 'I didn\'t know what I was booking. I don\'t know where we went. But watching those biceps flex while he played the banjo... I\'ve been back 6 times.',
    tagline: 'Still don\'t know where the river is',
    rating: 5,
    tour: 'Banjo Tour',
  },
  {
    id: '2',
    name: 'Chad B.',
    location: 'A Place',
    quote: 'As a man, I respect another man who can wrestle a gator WHILE maintaining perfect banjo rhythm. This is peak masculinity.',
    tagline: 'Felt inadequate, would recommend',
    rating: 5,
    tour: 'Boat Tour',
  },
  {
    id: '3',
    name: 'Tiffany R.',
    location: 'Undisclosed',
    quote: 'They never told me what river. They never told me how long. They never told me where we\'d go. But those arms... those ARMS playing that banjo...',
    tagline: 'No questions asked, just vibes',
    rating: 5,
    tour: 'Experience',
  },
  {
    id: '4',
    name: 'Mike & The Boys',
    location: 'Unknown',
    quote: 'Brought my poker buddies. We all agreed - this is the manliest combination of banjo and boat we\'ve ever witnessed. Location? Don\'t care. River? Irrelevant.',
    tagline: 'Real men take banjo boat tours',
    rating: 5,
    tour: 'Adventure',
  },
  {
    id: '5',
    name: 'Linda S.',
    location: '???',
    quote: 'I asked where we were going. He just flexed and started playing "Dueling Banjos." I stopped asking questions.',
    tagline: 'Questions are overrated',
    rating: 5,
    tour: 'Journey',
  },
  {
    id: '6',
    name: 'Derek P.',
    location: 'Irrelevant',
    quote: 'Watched him fight an alligator with one hand while finger-picking with the other. I\'m not even mad I don\'t know what body of water we were on.',
    tagline: 'Peak performance',
    rating: 5,
    tour: 'Thing',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--dramatic-black)' }}>
            WHAT PEOPLE ARE SAYING
          </h2>
          <p className="font-script text-2xl md:text-3xl" style={{ color: 'var(--swamp-moss)' }}>
            About the banjo. About the boat. About... him.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Confessional Card */}
              <div className="relative p-8 rounded-2xl shadow-xl border-4 transition-transform duration-300 hover:scale-105"
                style={{
                  borderColor: 'var(--cypress-gold)',
                  backgroundColor: 'var(--sparkle-white)',
                }}
              >
                {/* Reality TV Style Corner Badge */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-lg"
                  style={{
                    backgroundColor: 'var(--cypress-gold)',
                    color: 'var(--dramatic-black)',
                  }}
                >
                  ★
                </div>

                {/* Tour Episode Tag */}
                <div className="mb-4">
                  <span
                    className="inline-block px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--swamp-moss)',
                      color: 'white',
                    }}
                  >
                    {testimonial.tour}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="mb-6">
                  <p className="text-lg leading-relaxed italic" style={{ color: 'var(--dramatic-black)' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Tagline */}
                <div className="mb-4 pb-4 border-b-2" style={{ borderColor: 'var(--champagne-rose)' }}>
                  <p className="font-script text-xl" style={{ color: 'var(--muddy-brown)' }}>
                    {testimonial.tagline}
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg" style={{ color: 'var(--dramatic-black)' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--muddy-brown)' }}>
                      {testimonial.location}
                    </p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: 'var(--cypress-gold)' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quotation Marks Decoration */}
                <div
                  className="absolute top-6 left-6 text-8xl font-display opacity-10 pointer-events-none"
                  style={{ color: 'var(--cypress-gold)' }}
                >
                  &ldquo;
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold mb-6" style={{ color: 'var(--dramatic-black)' }}>
            Ready to experience it yourself?
          </p>
          <button
            className="px-10 py-4 rounded-lg font-bold text-xl text-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--swamp-moss)' }}
          >
            BOOK YOUR TOUR
          </button>
          <p className="text-sm text-gray-500 mt-4 italic">
            (Details available upon booking. Maybe.)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
