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
    <main className="min-h-screen camo-bg camo-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Ad Slot - Above Hero */}
        <div className="ad-slot ad-slot-hero max-w-7xl mx-auto px-4 py-4" data-ad-unit="hero-banner">
          {/* 728x90 or responsive banner */}
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-6xl md:text-8xl font-black mb-8 font-display combat-stencil" style={{ color: 'var(--combat-gold)' }}>
            UPSTREAM THINKING
          </h1>

          <p className="text-xl md:text-2xl mb-6 uppercase tracking-wider" style={{ color: 'var(--camo-sand)' }}>By Finn Fretwater</p>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl">
          <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--camo-cream)' }}>
            Look, I think about stuff.
          </p>

          <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--camo-cream)' }}>
            A lot of stuff.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            Most guys who look like me are expected to just think about protein and boat maintenance.
            And sure, I think about those too. But somewhere between perfecting my banjo fingerpicking
            and planning 2027 tour routes, my brain decided it wants to understand <em>everything</em>.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            Tax optimization strategies. The engineering behind dishwashers. Why most people are
            getting mortgage refinancing completely wrong. The actual science of sleep cycles.
            Which standing desk is worth your money and why the expensive ones are usually a scam.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            I'm not saying I'm smarter than everyone else.
          </p>

          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>
            I'm just saying I've probably thought about whatever you're researching more than you'd
            expect from a guy who wrestles alligators for fun.
          </p>

          <p className="font-bold text-2xl mt-8" style={{ color: 'var(--camo-cream)' }}>
            Upstream Thinking is where I share what I've figured out.
          </p>
        </div>
      </section>

      {/* Ad Slot - After Hero */}
      <div className="ad-slot ad-slot-mid-content-1 max-w-3xl mx-auto px-4 py-8" data-ad-unit="in-feed-1">
        {/* 300x250 or native ad */}
      </div>

      {/* Who I Am Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 tactical-border" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <h2 className="text-4xl md:text-5xl font-black mb-8 combat-stencil" style={{ color: 'var(--combat-gold)' }}>
          WHO I AM
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p style={{ color: 'var(--camo-cream)' }}>I'm Finn Fretwater.</p>

          <p style={{ color: 'var(--camo-cream)' }}>
            The Most Interesting Man in the South. <span style={{ color: 'var(--camo-olive)' }}>(Their words, not mine. Okay, maybe mine too.)</span>
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            I play banjo on a boat somewhere. I've got biceps that have been described as "distracting"
            and "intimidating" and "why is he also so smart?"
          </p>

          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>
            But here's the thing nobody expects: between the river and the strings, I've become
            accidentally expert-level at approximately 47 random topics.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            Why? Because I'm curious. And when I'm curious about something, I don't just Google it
            and call it a day.
          </p>

          <p style={{ color: 'var(--camo-cream)' }}>
            I obsess. I research. I test. I figure it out completely.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>Then I write about it like I'm explaining it to a buddy over a beer.</p>

          <p className="italic" style={{ color: 'var(--camo-olive)' }}>Which is exactly what this is.</p>
        </div>
      </section>

      {/* What You'll Find Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 tactical-border" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <h2 className="text-4xl md:text-5xl font-black mb-8 combat-stencil" style={{ color: 'var(--combat-gold)' }}>
          WHAT YOU'LL FIND HERE
        </h2>

        <p className="text-2xl font-bold mb-8" style={{ color: 'var(--camo-cream)' }}>Whatever I've gone deep on recently.</p>

        <div className="space-y-4 text-lg">
          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>Could be:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>Why 90% of people are choosing the wrong vacuum cleaner (and the engineering reason why)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>The psychology behind productivity systems and why most of them fail</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>How to actually maximize your 401k (not the basic advice, the real strategy)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>Which meal prep approach actually works for people with real lives</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>The truth about credit card rewards programs that banks don't want you optimizing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>Why portable power stations are about to change everything (and which ones are worth it)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>The counterintuitive way to negotiate salary that actually works</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>What standing desks do to your body that nobody talks about</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>Retirement planning for people who started late (it's not hopeless, but you need to be smart)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: 'var(--tactical-orange)' }}>•</span>
              <span style={{ color: 'var(--camo-sand)' }}>The actual difference between HEPA and carbon filters and why it matters more than you think</span>
            </li>
          </ul>

          <p className="pt-6" style={{ color: 'var(--camo-cream)' }}>
            There's no schedule. No theme. No "brand consistency."
          </p>

          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>
            Just whatever I've figured out that week and decided you should probably know about too.
          </p>
        </div>
      </section>

      {/* Ad Slot - Mid Content */}
      <div className="ad-slot ad-slot-mid-content-2 max-w-3xl mx-auto px-4 py-8" data-ad-unit="display-1">
        {/* 336x280 or 300x250 */}
      </div>

      {/* The Thing Nobody Expects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 tactical-border" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <h2 className="text-4xl md:text-5xl font-black mb-8 combat-stencil" style={{ color: 'var(--combat-gold)' }}>
          THE THING NOBODY EXPECTS
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p style={{ color: 'var(--camo-sand)' }}>
            Yeah, I look like I should be grunting through a workout and shotgunning protein shakes.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>And I do that.</p>

          <p style={{ color: 'var(--camo-sand)' }}>
            But I also spent last Tuesday deep in the mechanics of how reverse mortgages actually work
            and why most people misunderstand them completely.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            I spent Wednesday testing three different air fryers to understand the convection engineering
            differences that actually matter.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            Thursday I was thinking about the tax implications of backdoor Roth conversions.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            Friday I wrote 2,000 words on why your posture is destroying your productivity and the
            biomechanics behind fixing it.
          </p>

          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>
            Is this on brand for a mysterious boat-banjo guy? Absolutely not.
          </p>

          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>
            Does it make me more interesting? You tell me.
          </p>

          <p style={{ color: 'var(--camo-sand)' }}>
            The point is: I don't fit in a box. And neither should the stuff you're learning about.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 tactical-border" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <h2 className="text-4xl md:text-5xl font-black mb-8 combat-stencil" style={{ color: 'var(--combat-gold)' }}>
          WHAT TO EXPECT
        </h2>

        <p className="text-2xl font-bold mb-8" style={{ color: 'var(--camo-cream)' }}>
          Total expertise delivered with zero pretension.
        </p>

        <div className="space-y-4 rounded-lg p-8 mb-8 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
          <div className="flex items-start gap-4">
            <span className="font-bold min-w-[100px]" style={{ color: 'var(--combat-gold)' }}>Monday:</span>
            <span style={{ color: 'var(--camo-sand)' }}>"The 7 Best Budget Smartphones of 2025 (Tested, Ranked, Explained)"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold min-w-[100px]" style={{ color: 'var(--combat-gold)' }}>Tuesday:</span>
            <span style={{ color: 'var(--camo-sand)' }}>"How to Negotiate Your Salary: The Psychology Most People Miss"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold min-w-[100px]" style={{ color: 'var(--combat-gold)' }}>Wednesday:</span>
            <span style={{ color: 'var(--camo-sand)' }}>"Air Fryer vs. Convection Oven: The Engineering Truth"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold min-w-[100px]" style={{ color: 'var(--combat-gold)' }}>Thursday:</span>
            <span style={{ color: 'var(--camo-sand)' }}>"Estate Planning for People Under 40 (Yes, You Need This)"</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold min-w-[100px]" style={{ color: 'var(--combat-gold)' }}>Friday:</span>
            <span style={{ color: 'var(--camo-sand)' }}>"Why Your Posture Is Ruining Everything (And the Biomechanics of Fixing It)"</span>
          </div>
        </div>

        <div className="space-y-4 text-lg">
          <p className="font-semibold" style={{ color: 'var(--camo-cream)' }}>Each article is:</p>
          <ul className="space-y-2 ml-6" style={{ color: 'var(--camo-sand)' }}>
            <li>✓ Actually researched (not just regurgitated internet advice)</li>
            <li>✓ Explained clearly (but never dumbed down)</li>
            <li>✓ Tested when possible (I'm not guessing about air fryers, I bought three)</li>
            <li>✓ Honest about what matters and what doesn't</li>
            <li>✓ Written like I'm talking to someone I respect</li>
          </ul>

          <p className="pt-6 font-semibold text-xl" style={{ color: 'var(--camo-cream)' }}>
            You're not getting bro-science. You're getting actual knowledge from a bro.
          </p>

          <p style={{ color: 'var(--camo-cream)' }}>Big difference.</p>
        </div>
      </section>

      {/* The Range Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 tactical-border" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <h2 className="text-4xl md:text-5xl font-black mb-8 combat-stencil" style={{ color: 'var(--combat-gold)' }}>
          THE RANGE
        </h2>

        <p className="text-xl mb-8" style={{ color: 'var(--camo-cream)' }}>
          I've gone deep on approximately 47 different topics. Here's what you might find:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg p-6 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
            <h3 className="text-xl font-bold mb-3 combat-stencil" style={{ color: 'var(--combat-gold)' }}>FINANCE & MONEY</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
              Not basic budgeting tips. Real strategy: tax optimization, investment psychology,
              salary negotiation tactics that actually work, credit card rewards maximization,
              retirement planning for people who started late.
            </p>
          </div>

          <div className="rounded-lg p-6 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
            <h3 className="text-xl font-bold mb-3 combat-stencil" style={{ color: 'var(--combat-gold)' }}>HOME & LIVING</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
              Actually tested: appliance reviews (I bought multiple versions), organization systems
              that work for real humans, maintenance that matters vs. maintenance that's wasted money.
            </p>
          </div>

          <div className="rounded-lg p-6 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
            <h3 className="text-xl font-bold mb-3 combat-stencil" style={{ color: 'var(--combat-gold)' }}>TECH & GADGETS</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
              The engineering truth: phone comparisons, laptop buying strategy, smart home devices
              that aren't gimmicks, software that's actually worth paying for.
            </p>
          </div>

          <div className="rounded-lg p-6 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
            <h3 className="text-xl font-bold mb-3 combat-stencil" style={{ color: 'var(--combat-gold)' }}>HEALTH & WELLNESS</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
              The science, not the hype: nutrition that's actually evidence-based, sleep optimization
              that isn't pseudoscience, mental health approached intelligently, fitness equipment truth.
            </p>
          </div>

          <div className="rounded-lg p-6 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
            <h3 className="text-xl font-bold mb-3 combat-stencil" style={{ color: 'var(--combat-gold)' }}>CAREER & BUSINESS</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
              Real talk: resume psychology, interview strategy beyond the basics, productivity systems
              that account for actual human behavior, entrepreneurship without the hustle-culture BS.
            </p>
          </div>

          <div className="rounded-lg p-6 tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)' }}>
            <h3 className="text-xl font-bold mb-3 combat-stencil" style={{ color: 'var(--tactical-orange)' }}>WHATEVER ELSE I'M THINKING ABOUT</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
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
      <section className="max-w-7xl mx-auto px-6 py-16 tactical-border" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center combat-stencil" style={{ color: 'var(--combat-gold)' }}>
          LATEST UPSTREAM THINKING
        </h2>

        <ArticleGrid />
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <NewsletterSignup />
      </section>

      {/* Final Closing */}
      <section className="max-w-4xl mx-auto px-6 py-16 tactical-border text-center" style={{ borderTop: '2px solid var(--camo-olive)' }}>
        <p className="text-xl mb-4" style={{ color: 'var(--camo-sand)' }}>
          This is my brain between the river and the strings.
        </p>
        <p className="text-2xl font-bold mb-4" style={{ color: 'var(--camo-cream)' }}>
          This is Upstream Thinking.
        </p>
        <p className="text-lg mb-8" style={{ color: 'var(--camo-olive)' }}>
          Expert knowledge. Zero pretension. Maximum usefulness.
        </p>
        <p className="text-xl font-semibold mb-4" style={{ color: 'var(--camo-cream)' }}>
          Welcome to whatever I've mastered this week.
        </p>
        <p className="text-2xl">
          <span style={{ color: 'var(--camo-cream)' }}>—Finn Fretwater</span><br />
          <span className="text-lg" style={{ color: 'var(--camo-olive)' }}>The Most Interesting Man in the South</span>
        </p>
        <p className="text-4xl mt-8">💪🪕🚤</p>
      </section>
      </div>
    </main>
  );
}
