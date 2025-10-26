'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishDate: string;
  slug: string;
}

// Placeholder articles - will be replaced with CMS data
const SAMPLE_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Look, I Bought Seven Laptops Under $1000 So You Don\'t Have To',
    excerpt: 'So I was between sets thinking about how everyone overpays for laptops. What can you actually get for under a grand right now? I tested them all.',
    category: 'Tech & Gadgets',
    readTime: 12,
    publishDate: '2025-10-25',
    slug: 'best-budget-laptops-2025',
  },
  {
    id: '2',
    title: 'The Tax Strategy Your Financial Advisor Should Have Told You',
    excerpt: 'I\'m not your financial advisor, but I\'ve probably thought about compound interest more than he has. Here\'s what actually matters for tax optimization.',
    category: 'Finance & Money',
    readTime: 15,
    publishDate: '2025-10-24',
    slug: 'tax-optimization-strategy-2025',
  },
  {
    id: '3',
    title: 'Why I Tested Three Air Fryers and What I Actually Learned',
    excerpt: 'The engineering behind convection cooking matters more than you think. Here\'s the truth about air fryer vs. convection oven.',
    category: 'Home & Living',
    readTime: 10,
    publishDate: '2025-10-23',
    slug: 'air-fryer-vs-convection-oven-engineering',
  },
  {
    id: '4',
    title: 'Your Posture is Destroying Your Productivity (The Biomechanics)',
    excerpt: 'Spent Friday analyzing why most people sit wrong. The biomechanics are fascinating and fixable. Here\'s what actually matters.',
    category: 'Health & Wellness',
    readTime: 11,
    publishDate: '2025-10-22',
    slug: 'posture-productivity-biomechanics',
  },
  {
    id: '5',
    title: 'The Credit Card Rewards Program Banks Don\'t Want You Optimizing',
    excerpt: 'There\'s a way to maximize rewards that most people miss. I spent Tuesday mapping it out completely.',
    category: 'Finance & Money',
    readTime: 13,
    publishDate: '2025-10-21',
    slug: 'credit-card-rewards-optimization-strategy',
  },
  {
    id: '6',
    title: 'Standing Desks: What They Actually Do To Your Body',
    excerpt: 'Everyone tells you to get a standing desk. Nobody tells you what happens to your body when you do. Here\'s the research.',
    category: 'Health & Wellness',
    readTime: 14,
    publishDate: '2025-10-20',
    slug: 'standing-desk-body-effects-research',
  },
];

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    'Finance & Money': 'bg-cyan-900/30 text-cyan-400 border-cyan-700',
    'Tech & Gadgets': 'bg-blue-900/30 text-blue-400 border-blue-700',
    'Home & Living': 'bg-purple-900/30 text-purple-400 border-purple-700',
    'Health & Wellness': 'bg-green-900/30 text-green-400 border-green-700',
    'Career & Business': 'bg-yellow-900/30 text-yellow-400 border-yellow-700',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${colors[category] || 'bg-gray-800 text-gray-400 border-gray-700'}`}>
      {category}
    </span>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-gray-800/30 rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-600 group">
      {/* Image Placeholder */}
      <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
          💪🎸
        </div>
        <CategoryBadge category={article.category} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <CategoryBadge category={article.category} />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readTime} min read
          </span>
          <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <Link
            href={`/upstream-thinking/${article.slug}`}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            Read Article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ArticleGrid() {
  const [articles] = useState(SAMPLE_ARTICLES);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}

      {/* Coming Soon Card */}
      <article className="bg-gray-800/20 rounded-lg border border-gray-700 border-dashed overflow-hidden flex items-center justify-center p-12">
        <div className="text-center">
          <p className="text-4xl mb-4">🎸</p>
          <p className="text-xl font-bold text-gray-400 mb-2">More Coming Soon</p>
          <p className="text-gray-500">
            Whatever I figure out next...
          </p>
        </div>
      </article>
    </div>
  );
}
