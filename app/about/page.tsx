import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-black mb-8 font-display" style={{ color: 'var(--cypress-gold)' }}>
          About Banjo Boat Tours
        </h1>

        <div className="space-y-12">
          {/* Main Story */}
          <section>
            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
              We Love Two Things: <span className="font-bold" style={{ color: 'var(--cypress-gold)' }}>1. Banjos</span> &{' '}
              <span className="font-bold" style={{ color: 'var(--cypress-gold)' }}>2. Boat Tours</span>
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              That's it. That's the entire business model. One jacked muscular banjo-playing boat tour guide.
              One river (we won't tell you which one). Unlimited bicep flexing. Maximum banjo strumming.
            </p>
          </section>

          {/* The Guide */}
          <section className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              Meet Your Guide
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Our tour guide is a phenomenon. A force of nature. A paradox wrapped in muscles and wrapped around a banjo.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Physical Stats</h3>
                  <ul className="space-y-2">
                    <li>✓ Biceps: Bigger than your head</li>
                    <li>✓ Abs: Could grate cheese</li>
                    <li>✓ Grip strength: Enough to row AND pick banjo</li>
                    <li>✓ Beard: Majestic</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Musical Stats</h3>
                  <ul className="space-y-2">
                    <li>✓ Banjo proficiency: Master level</li>
                    <li>✓ Songs known: Classified</li>
                    <li>✓ Can play while flexing: Yes</li>
                    <li>✓ Genre: Whatever he feels like</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg">
                He doesn't need a name. He doesn't need an origin story. All you need to know is that when you're
                on his boat, listening to his banjo, watching those muscles work the oars... you're experiencing
                something you'll never forget.
              </p>
            </div>
          </section>

          {/* The Experience */}
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              The Banjo Boat Experience
            </h2>

            <div className="space-y-6 text-gray-300">
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg p-6 border border-cyan-700/50">
                <h3 className="text-2xl font-bold mb-3 text-white">For Women</h3>
                <p className="text-lg">
                  Watch those biceps flex with every banjo strum. Listen to the melodious picking while admiring
                  the physical specimen steering your vessel. It's part nature tour, part muscle appreciation,
                  all entertainment.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-3 text-white">For Men</h3>
                <p className="text-lg">
                  Witness pure masculinity in action. A man who rows his own boat, plays his own tunes, and
                  answers to no one. This is what peak performance looks like. This is the alpha river guide.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 border border-green-700/50">
                <h3 className="text-2xl font-bold mb-3 text-white">For Everyone</h3>
                <p className="text-lg">
                  You'll see nature (we think). You'll hear banjo music (definitely). You'll have questions
                  (where are we? why is he so jacked? is that song even real?). Most importantly, you'll have
                  an experience unlike any other tour on any river anywhere.
                </p>
              </div>
            </div>
          </section>

          {/* Company Values */}
          <section className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              Our Core Values
            </h2>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💪</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Strength</h3>
                  <p>Physical, musical, and spiritual. We bring all three to every tour.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🎸</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Authenticity</h3>
                  <p>Real muscles. Real banjo. Real... something. We're not quite sure ourselves.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🚤</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mystery</h3>
                  <p>We won't tell you where we are. You won't know where you're going. That's the magic.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">⭐</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                  <p>The best biceps. The best banjo. The best boat tours. Probably. We think.</p>
                </div>
              </div>
            </div>
          </section>

          {/* What We're NOT */}
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              What We're NOT
            </h2>

            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>A traditional tour company with maps, schedules, and professionalism</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Willing to reveal our location (seriously, stop asking)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Concerned about conventional business practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Apologetic about the excessive advertising on this website (we have bills to pay)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Testimonials Preview */}
          <section>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              What People Are Saying
            </h2>

            <div className="space-y-4">
              <blockquote className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-cyan-500">
                <p className="text-gray-300 italic mb-3">
                  "I still don't know where we went, but those biceps... I've been back 6 times."
                </p>
                <cite className="text-sm text-gray-500">— Jessica M., Somewhere</cite>
              </blockquote>

              <blockquote className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="text-gray-300 italic mb-3">
                  "This is what a real man looks like. I'm questioning everything about my life."
                </p>
                <cite className="text-sm text-gray-500">— Brad K., Unknown</cite>
              </blockquote>

              <blockquote className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-gray-300 italic mb-3">
                  "Is this even legal? I have so many questions. Five stars."
                </p>
                <cite className="text-sm text-gray-500">— Karen W., Parts Unknown</cite>
              </blockquote>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg p-12 border border-cyan-700">
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--cypress-gold)' }}>
              Ready for the Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your tour today. Prepare to be confused, amazed, and strangely attracted to muscles and banjos.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Contact Us Now
            </a>
          </section>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-500">
              🚤 Banjo Boat Tours - We Love Two Things: 1. Banjos & 2. Boat Tours 💪🎸
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
