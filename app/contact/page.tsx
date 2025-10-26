export default function Contact() {
  return (
    <main className="min-h-screen camo-bg camo-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-black mb-8 font-display combat-stencil" style={{ color: 'var(--combat-gold)' }}>
            Contact Us
          </h1>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <p className="text-xl text-gray-300 leading-relaxed">
              Got questions about our tours? Want to know where we are? (We're not telling.)
              Need to reach our jacked muscular banjo-playing boat tour guide? Here's how to get in touch.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                <p className="text-gray-300">
                  <a href="mailto:info@banjoboattours.tours" className="text-blue-400 hover:underline">
                    info@banjoboattours.tours
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  We'll respond within 24 hours (probably while flexing and strumming)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Business Inquiries</h3>
                <p className="text-gray-300">
                  <a href="mailto:business@banjoboattours.tours" className="text-blue-400 hover:underline">
                    business@banjoboattours.tours
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  For partnerships, sponsorships, and advertising opportunities
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Privacy & Legal</h3>
                <p className="text-gray-300">
                  <a href="mailto:privacy@banjoboattours.tours" className="text-blue-400 hover:underline">
                    privacy@banjoboattours.tours
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  For privacy concerns, data requests, and legal matters
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">Where are your tours located?</h3>
                <p className="text-gray-300">
                  We're somewhere. That's all you need to know. The mystery is part of the experience.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">How do I book a tour?</h3>
                <p className="text-gray-300">
                  Email us at <a href="mailto:info@banjoboattours.tours" className="text-blue-400 hover:underline">info@banjoboattours.tours</a>.
                  Tell us when you want to come. We'll tell you if we're available (and if we feel like it).
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">Is the tour guide really that jacked?</h3>
                <p className="text-gray-300">
                  More jacked than you can imagine. Biceps that could row a boat AND play a banjo simultaneously.
                  It's a sight to behold.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">Can I request a specific banjo song?</h3>
                <p className="text-gray-300">
                  You can request, but our guide plays what our guide wants to play. The muscles make the rules.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">What if I need to cancel?</h3>
                <p className="text-gray-300">
                  Email us. We'll work something out. Our tour guide is strong but also understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Social Media (Placeholder) */}
          <section className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              Follow Our Adventures
            </h2>
            <p className="text-gray-300 mb-4">
              Stay updated with our tours, banjo performances, and bicep flexing sessions:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
              >
                Facebook (Coming Soon)
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold transition-colors"
              >
                Instagram (Coming Soon)
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-colors"
              >
                YouTube (Coming Soon)
              </a>
            </div>
          </section>

          {/* Business Hours */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Business Hours</h2>
            <p className="text-gray-300">
              We operate when the river calls and the banjo sings.<br />
              Translation: Check your email for confirmation after booking.
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-500">
              🚤 Banjo Boat Tours - We Love Two Things: 1. Banjos & 2. Boat Tours 💪🎸
            </p>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
