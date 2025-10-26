import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AdManager from '@/app/components/AdManager';
import NewsletterSignup from '@/app/components/NewsletterSignup';

// This would normally come from a CMS or database
// For now, we'll use a static example article
interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishDate: string;
  readTime: number;
  author: string;
  keywords: string[];
}

// Generate static params for static export
export function generateStaticParams() {
  return [
    { slug: 'best-budget-laptops-2025' }
  ];
}

// Sample article - in production, this would be fetched from CMS
const SAMPLE_ARTICLE: Article = {
  slug: 'best-budget-laptops-2025',
  title: 'Look, I Bought Seven Laptops Under $1000 So You Don\'t Have To',
  excerpt: 'So I was between sets thinking about how everyone overpays for laptops. Spent three weeks testing every budget option worth considering. Here\'s what actually works.',
  category: 'Tech & Gadgets',
  publishDate: '2025-10-25',
  readTime: 12,
  author: 'Finn Fretwater',
  keywords: ['budget laptops', 'laptop reviews', 'best laptops under 1000', 'tech reviews', 'laptop buying guide'],
  content: `
    So I was between sets thinking about how everyone overpays for laptops. You don't need a $2000 MacBook to check email and watch YouTube. You probably don't even need a $1500 Dell. What you need is someone who actually tested this stuff.

    I spent three weeks testing every budget option worth considering. Here's what actually works.

    ## The Testing Process

    I'm not reviewing specs on paper. That's for people who don't actually use laptops. I ran each of these through my actual daily workflow:

    - Writing (I'm doing it right now on the ASUS Vivobook)
    - Music production (GarageBand, Ableton Live Lite)
    - Video calls (because apparently that's life now)
    - Multiple browser tabs (like a normal human)
    - Light photo editing (iPhone photos, nothing crazy)
    - Streaming video while doing other stuff

    If it couldn't handle that without sounding like a jet engine or dying in 2 hours, it failed.

    ## The Winners

    ### Best Overall: ASUS Vivobook 15 ($649)

    This shouldn't be this good for the price. 15.6" 1080p display, Intel i5 (12th gen), 8GB RAM, 512GB SSD. The screen is actually decent - not amazing, but you won't hate looking at it for 8 hours.

    Battery life is solid (7-8 hours real use, not the marketing BS). Keyboard feels better than laptops twice the price. It's also light enough to actually carry around without feeling like you're training for a powerlifting meet.

    **The catch:** The speakers are trash. Get headphones. But at $649, that's not a dealbreaker.

    ### Best for Students: Lenovo IdeaPad 3 ($529)

    If you're a student and you're considering a MacBook, stop. You're paying for a logo and an ecosystem designed to keep you spending. This Lenovo will do everything you need for a fraction of the cost.

    AMD Ryzen 5, 8GB RAM, 256GB SSD. The 256GB storage is tight, but that's what external drives are for. Battery lasts 6-7 hours, which gets you through a full day of classes.

    The build quality feels... budget. But it's also $529. You're not buying a luxury item, you're buying a tool.

    ### Best for Heavy Use: Acer Aspire 5 ($749)

    This is the one I'd recommend if you're doing anything beyond basic productivity. The i7 processor and 16GB RAM mean you can actually run demanding software without waiting for the spinning wheel of death.

    The 512GB SSD is fast. Like, noticeably fast. Apps open immediately, files transfer quickly, and you don't sit there wondering if the computer is actually doing anything.

    **The downside:** Battery life is mediocre (5-6 hours). This is more of a desktop replacement that happens to be portable.

    ## The Ones That Disappointed

    ### HP 15-dy2795wm ($599)

    Everyone recommends HP. I don't know why. The keyboard feels mushy, the trackpad is inconsistent, and it thermal throttles under any real load. Sure, the specs look good on paper, but in actual use, it's frustrating.

    Pass.

    ### Dell Inspiron 15 ($699)

    Dell used to mean quality. Now it means "we charge more because people recognize our name." This laptop is fine. That's the most enthusiastic thing I can say about it. For $699, you deserve better than fine.

    ## What You Actually Need to Know

    ### RAM: 8GB Minimum, 16GB if You Can

    Don't let anyone convince you 4GB is enough in 2025. It's not. You'll be watching that memory usage climb while your laptop turns into a space heater.

    8GB is the baseline for comfortable use. 16GB means you won't have to think about memory management.

    ### Storage: SSD or Nothing

    If someone tries to sell you a laptop with a hard drive in 2025, walk away. SSDs are standard now, and the speed difference is not subtle. 256GB is tight but workable, 512GB is comfortable.

    ### Display: 1080p Minimum

    720p displays still exist in budget laptops. They shouldn't. Your eyes deserve better, and the price difference is minimal.

    Also, avoid touchscreens unless you specifically need one. They add cost, drain battery, and most people never use them.

    ### Battery Life: Real vs. Marketing

    Manufacturers will claim 12+ hours. That's with the screen at 20% brightness, Wi-Fi off, and one tab open. Real battery life is usually 50-70% of the claimed number.

    Aim for laptops claiming 10+ hours if you want 6-7 hours of actual use.

    ## The Bottom Line

    Get the ASUS Vivobook 15 unless you have a specific reason not to. It's the best balance of performance, build quality, and price.

    If you're a student on a tight budget, the Lenovo IdeaPad 3 will get you through school without emptying your bank account.

    If you're doing heavier work (video editing, programming, running VMs), spend the extra $100 on the Acer Aspire 5.

    Don't overthink it. These are tools, not investments. Buy what works, use it until it doesn't, then buy another one.

    Now if you'll excuse me, I need to test how many browser tabs the ASUS can handle before it starts complaining. Current count: 47. Still going strong.

    ## FAQ

    **Q: What about gaming?**
    A: These are budget productivity laptops, not gaming machines. If you want to game, save up for a dedicated gaming laptop or build a desktop. Don't compromise on both.

    **Q: Can I upgrade the RAM/storage later?**
    A: On most of these, yes. Check the specific model's upgrade options before buying. The ASUS and Acer are particularly upgrade-friendly.

    **Q: What about Chromebooks?**
    A: Chromebooks are great if you literally only need a web browser. But if you need to run actual software (not web apps), get a Windows laptop.

    **Q: Should I wait for Black Friday/sales?**
    A: These prices already account for typical sales. You might save $50-100 waiting, but you'll also spend months without a laptop. Your call.

    **Q: What about refurbished/used?**
    A: Can be a great deal if you know what you're looking for and buy from reputable sellers. But for most people, a new budget laptop is safer and comes with warranty.
  `
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In production, fetch article data here
  const article = SAMPLE_ARTICLE;

  if (!article || article.slug !== params.slug) {
    return {
      title: 'Article Not Found | Upstream Thinking',
    };
  }

  return {
    title: `${article.title} | Upstream Thinking by Finn Fretwater`,
    description: article.excerpt,
    keywords: article.keywords.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // In production, fetch article data from CMS/database
  const article = SAMPLE_ARTICLE;

  if (!article || article.slug !== params.slug) {
    notFound();
  }

  return (
    <main className="min-h-screen camo-bg camo-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Leaderboard Ad - Above Article */}
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <AdManager
            config={{
              slotId: 'article-top-leaderboard',
              sizes: [[728, 90], [970, 90], 'fluid'],
              position: 'header',
              refreshInterval: 45,
            }}
          />
        </div>

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider tactical-border" style={{ backgroundColor: 'var(--camo-dark-green)', borderColor: 'var(--camo-olive)', color: 'var(--combat-gold)' }}>
                {article.category}
              </span>
              <time style={{ color: 'var(--camo-olive)' }}>{new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span style={{ color: 'var(--camo-olive)' }}>•</span>
              <span style={{ color: 'var(--camo-olive)' }}>{article.readTime} min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display leading-tight combat-stencil" style={{ color: 'var(--camo-cream)' }}>
              {article.title}
            </h1>

            <p className="text-xl leading-relaxed" style={{ color: 'var(--camo-sand)' }}>
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-3xl">💪🎸</div>
              <div>
                <div className="font-bold" style={{ color: 'var(--camo-cream)' }}>By {article.author}</div>
                <div className="text-sm" style={{ color: 'var(--camo-olive)' }}>The Most Interesting Man in the South</div>
              </div>
            </div>
          </header>

        {/* In-Article Ad - After Header */}
        <div className="my-12">
          <AdManager
            config={{
              slotId: 'article-inline-1',
              sizes: [[300, 250], [336, 280], 'fluid'],
              position: 'in-content',
              refreshInterval: 60,
            }}
            className="mx-auto"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: formatArticleContent(article.content) }}
          />
        </div>

        {/* Mid-Article Ad - After First Major Section */}
        <div className="my-12">
          <AdManager
            config={{
              slotId: 'article-inline-2',
              sizes: [[728, 90], [970, 90], 'fluid'],
              position: 'in-content',
              refreshInterval: 60,
            }}
          />
        </div>

        {/* Newsletter Signup */}
        <div className="my-16">
          <NewsletterSignup />
        </div>

        {/* Bottom Ad - Before Related Articles */}
        <div className="my-12">
          <AdManager
            config={{
              slotId: 'article-inline-3',
              sizes: [[300, 250], [336, 280], 'fluid'],
              position: 'in-content',
              refreshInterval: 60,
            }}
            className="mx-auto"
          />
        </div>

        {/* Related Articles Preview */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-3xl font-black mb-8">More Upstream Thinking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <RelatedArticleCard
              title="I Tested 12 Standing Desks Because My Back Was Killing Me"
              category="Home & Living"
              slug="best-standing-desks-2025"
            />
            <RelatedArticleCard
              title="Tax Strategy for Regular People (Not Just the Rich)"
              category="Finance"
              slug="tax-strategy-guide"
            />
          </div>
        </div>

        {/* Back to Upstream Thinking */}
        <div className="mt-12 text-center">
          <a
            href="/upstream-thinking"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 hover:from-cyan-600/50 hover:to-purple-600/50 rounded-lg font-bold border border-cyan-500/50 transition-all"
          >
            ← Back to All Articles
          </a>
        </div>
      </article>

      {/* Sidebar Sticky Ad (Desktop Only) */}
      <aside className="hidden xl:block fixed right-8 top-32 w-80">
        <AdManager
          config={{
            slotId: 'article-sidebar-sticky',
            sizes: [[300, 600], [300, 250], [160, 600]],
            position: 'sticky',
            refreshInterval: 90,
          }}
        />
      </aside>

      {/* Footer Ad */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <AdManager
          config={{
            slotId: 'article-bottom-leaderboard',
            sizes: [[728, 90], [970, 90], 'fluid'],
            position: 'footer',
            refreshInterval: 45,
          }}
        />
      </div>
      </div>
    </main>
  );
}

function formatArticleContent(content: string): string {
  // Convert markdown-style content to HTML
  // In production, use a proper markdown parser like remark or marked
  return content
    .split('\n\n')
    .map(paragraph => {
      // Headers
      if (paragraph.startsWith('## ')) {
        return `<h2 class="text-3xl font-black mt-12 mb-6">${paragraph.replace('## ', '')}</h2>`;
      }
      if (paragraph.startsWith('### ')) {
        return `<h3 class="text-2xl font-bold mt-8 mb-4" style="color: var(--cypress-gold);">${paragraph.replace('### ', '')}</h3>`;
      }

      // Bold text
      paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Regular paragraphs
      if (paragraph.startsWith('-')) {
        // List item
        return `<li class="ml-6 mb-2">${paragraph.replace('- ', '')}</li>`;
      }

      return `<p class="mb-6 leading-relaxed">${paragraph}</p>`;
    })
    .join('\n');
}

function RelatedArticleCard({ title, category, slug }: { title: string; category: string; slug: string }) {
  return (
    <a
      href={`/upstream-thinking/${slug}`}
      className="block bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all p-6 group"
    >
      <div className="mb-3">
        <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-full text-xs font-bold border border-cyan-500/50">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
    </a>
  );
}
