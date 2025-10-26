import type { Metadata } from 'next';
import NewsletterSignup from '../components/NewsletterSignup';
import ArticleGrid from '../components/ArticleGrid';

export const metadata: Metadata = {
  title: 'Upstream Thinking by Finn Fretwater | Expert Takes on Everything',
  description: 'From tax strategy to air fryers - get genuinely expert insights delivered with zero pretension. The Most Interesting Man in the South writes about whatever he\'s mastered this week.',
  keywords: 'expert advice, product reviews, tax strategy, productivity, home improvement, tech reviews, finance tips, health optimization, consumer guides, lifestyle optimization',
  openGraph: {
    title: 'Upstream Thinking by Finn Fretwater',
    description: 'Expert knowledge. Zero pretension. Maximum usefulness.',
    type: 'website',
  },
};

export default function UpstreamThinking() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Ad Slot - Above Hero */}
      <div className="ad-slot ad-slot-hero max-w-7xl mx-auto px-4 py-4" data-ad-unit="hero-banner">
        {/* 728x90 or responsive banner */}
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-6xl md:text-8xl font-black mb-8 font-display" style={{ color: 'var(--cypress-gold)' }}>
          UPSTREAM THINKING
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">By Finn Fretwater</p>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Look, I think about stuff.
          </p>

          <p className="text-2xl md:text-3xl font-bold text-white">
            A lot of stuff.
          </p>

          <p>
            Most guys who look like me are expected to just think about protein and boat maintenance.
            And sure, I think about those too. But somewhere between perfecting my banjo fingerpicking
            and planning 2027 tour routes, my brain decided it wants to understand <em>everything</em>.
          </p>

          <p>
            Tax optimization strategies. The engineering behind dishwashers. Why most people are
            getting mortgage refinancing completely wrong. The actual science of sleep cycles.
            Which standing desk is worth your money and why the expensive ones are usually a scam.
          </p>

          <p>
            I'm not saying I'm smarter than everyone else.
          </p>

          <p className="text-white font-semibold">
            I'm just saying I've probably thought about whatever you're researching more than you'd
            expect from a guy who wrestles alligators for fun.
          </p>

          <p className="text-white font-bold text-2xl mt-8">
            Upstream Thinking is where I share what I've figured out.
          </p>
        </div>
      </section>

      {/* Ad Slot - After Hero */}
      <div className="ad-slot ad-slot-mid-content-1 max-w-3xl mx-auto px-4 py-8" data-ad-unit="in-feed-1">
        {/* 300x250 or native ad */}
      </div>

      {/* Who I Am Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--cypress-gold)' }}>
          WHO I AM
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>I'm Finn Fretwater.</p>

          <p>
            The Most Interesting Man in the South. <span className="text-gray-500">(Their words, not mine. Okay, maybe mine too.)</span>
          </p>

          <p>
            I play banjo on a boat somewhere. I've got biceps that have been described as "distracting"
            and "intimidating" and "why is he also so smart?"
          </p>

          <p className="text-white font-semibold">
            But here's the thing nobody expects: between the river and the strings, I've become
            accidentally expert-level at approximately 47 random topics.
          </p>

          <p>
            Why? Because I'm curious. And when I'm curious about something, I don't just Google it
            and call it a day.
          </p>

          <p className="text-white">
            I obsess. I research. I test. I figure it out completely.
          </p>

          <p>Then I write about it like I'm explaining it to a buddy over a beer.</p>

          <p className="text-gray-400 italic">Which is exactly what this is.</p>
        </div>
      </section>

      {/* What You'll Find Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--cypress-gold)' }}>
          WHAT YOU'LL FIND HERE
        </h2>

        <p className="text-2xl font-bold text-white mb-8">Whatever I've gone deep on recently.</p>

        <div className="space-y-4 text-lg text-gray-300">
          <p className="font-semibold text-white">Could be:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Why 90% of people are choosing the wrong vacuum cleaner (and the engineering reason why)</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>The psychology behind productivity systems and why most of them fail</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>How to actually maximize your 401k (not the basic advice, the real strategy)</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Which meal prep approach actually works for people with real lives</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>The truth about credit card rewards programs that banks don't want you optimizing</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Why portable power stations are about to change everything (and which ones are worth it)</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>The counterintuitive way to negotiate salary that actually works</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>What standing desks do to your body that nobody talks about</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Retirement planning for people who started late (it's not hopeless, but you need to be smart)</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>The actual difference between HEPA and carbon filters and why it matters more than you think</span>
            </li>
          </ul>

          <p className="pt-6 text-white">
            There's no schedule. No theme. No "brand consistency."
          </p>

          <p className="font-semibold text-white">
            Just whatever I've figured out that week and decided you should probably know about too.
          </p>
        </div>
      </section>

      {/* Ad Slot - Mid Content */}
      <div className="ad-slot ad-slot-mid-content-2 max-w-3xl mx-auto px-4 py-8" data-ad-unit="display-1">
        {/* 336x280 or 300x250 */}
      </div>

      {/* The Thing Nobody Expects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--cypress-gold)' }}>
          THE THING NOBODY EXPECTS
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Yeah, I look like I should be grunting through a workout and shotgunning protein shakes.
          </p>

          <p>And I do that.</p>

          <p>
            But I also spent last Tuesday deep in the mechanics of how reverse mortgages actually work
            and why most people misunderstand them completely.
          </p>

          <p>
            I spent Wednesday testing three different air fryers to understand the convection engineering
            differences that actually matter.
          </p>

          <p>
            Thursday I was thinking about the tax implications of backdoor Roth conversions.
          </p>

          <p>
            Friday I wrote 2,000 words on why your posture is destroying your productivity and the
            biomechanics behind fixing it.
          </p>

          <p className="text-white font-semibold">
            Is this on brand for a mysterious boat-banjo guy? Absolutely not.
          </p>

          <p className="text-white font-semibold">
            Does it make me more interesting? You tell me.
          </p>

          <p>
            The point is: I don't fit in a box. And neither should the stuff you're learning about.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--cypress-gold)' }}>
          WHAT TO EXPECT
        </h2>

        <p className="text-2xl font-bold text-white mb-8">
          Total expertise delivered with zero pretension.
        </p>

        <div className="space-y-4 bg-gray-800/30 rounded-lg p-8 mb-8 border border-gray-700">
          <div className="flex items-start gap-4">
            <span className="font-bold text-cyan-400 min-w-[100px]">Monday:</span>
            <span className="text-gray-300">"The 7 Best Budget Smartphones of 2025 (Tested, Ranked, Explained)"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold text-cyan-400 min-w-[100px]">Tuesday:</span>
            <span className="text-gray-300">"How to Negotiate Your Salary: The Psychology Most People Miss"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold text-cyan-400 min-w-[100px]">Wednesday:</span>
            <span className="text-gray-300">"Air Fryer vs. Convection Oven: The Engineering Truth"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold text-cyan-400 min-w-[100px]">Thursday:</span>
            <span className="text-gray-300">"Estate Planning for People Under 40 (Yes, You Need This)"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold text-cyan-400 min-w-[100px]">Friday:</span>
            <span className="text-gray-300">"Why Your Posture Is Ruining Everything (And the Biomechanics of Fixing It)"</span>
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-300">
          <p className="font-semibold text-white">Each article is:</p>
          <ul className="space-y-2 ml-6">
            <li>✓ Actually researched (not just regurgitated internet advice)</li>
            <li>✓ Explained clearly (but never dumbed down)</li>
            <li>✓ Tested when possible (I'm not guessing about air fryers, I bought three)</li>
            <li>✓ Honest about what matters and what doesn't</li>
            <li>✓ Written like I'm talking to someone I respect</li>
          </ul>

          <p className="pt-6 text-white font-semibold text-xl">
            You're not getting bro-science. You're getting actual knowledge from a bro.
          </p>

          <p className="text-white">Big difference.</p>
        </div>
      </section>

      {/* The Range Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--cypress-gold)' }}>
          THE RANGE
        </h2>

        <p className="text-xl text-white mb-8">
          I've gone deep on approximately 47 different topics. Here's what you might find:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">FINANCE & MONEY</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Not basic budgeting tips. Real strategy: tax optimization, investment psychology,
              salary negotiation tactics that actually work, credit card rewards maximization,
              retirement planning for people who started late.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-purple-400 mb-3">HOME & LIVING</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Actually tested: appliance reviews (I bought multiple versions), organization systems
              that work for real humans, maintenance that matters vs. maintenance that's wasted money.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-blue-400 mb-3">TECH & GADGETS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The engineering truth: phone comparisons, laptop buying strategy, smart home devices
              that aren't gimmicks, software that's actually worth paying for.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-3">HEALTH & WELLNESS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The science, not the hype: nutrition that's actually evidence-based, sleep optimization
              that isn't pseudoscience, mental health approached intelligently, fitness equipment truth.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">CAREER & BUSINESS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Real talk: resume psychology, interview strategy beyond the basics, productivity systems
              that account for actual human behavior, entrepreneurship without the hustle-culture BS.
            </p>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-orange-400 mb-3">WHATEVER ELSE I'M THINKING ABOUT</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Could be anything. That's the beauty of curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Slot - Before Articles */}
      <div className="ad-slot ad-slot-pre-articles max-w-3xl mx-auto px-4 py-8" data-ad-unit="in-feed-2">
        {/* Native ad or 300x600 */}
      </div>

      {/* Latest Articles Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center" style={{ color: 'var(--cypress-gold)' }}>
          LATEST UPSTREAM THINKING
        </h2>

        <ArticleGrid />
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <NewsletterSignup />
      </section>

      {/* Final Closing */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800 text-center">
        <p className="text-xl text-gray-300 mb-4">
          This is my brain between the river and the strings.
        </p>
        <p className="text-2xl font-bold text-white mb-4">
          This is Upstream Thinking.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Expert knowledge. Zero pretension. Maximum usefulness.
        </p>
        <p className="text-xl text-white font-semibold mb-4">
          Welcome to whatever I've mastered this week.
        </p>
        <p className="text-2xl">
          —Finn Fretwater<br />
          <span className="text-gray-400 text-lg">The Most Interesting Man in the South</span>
        </p>
        <p className="text-4xl mt-8">💪🪕🚤</p>
      </section>
    </main>
  );
}
