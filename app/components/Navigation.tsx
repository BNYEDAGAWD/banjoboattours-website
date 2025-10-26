'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 tactical-border" style={{ backgroundColor: 'var(--camo-black)', borderBottom: '2px solid var(--camo-olive)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">💪🎸</span>
            <span className="font-display text-xl font-bold combat-stencil" style={{ color: 'var(--combat-gold)' }}>
              FINN FRETWATER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/upstream-thinking"
              className="transition-colors font-bold uppercase text-sm tracking-wider hover:text-yellow-600"
              style={{ color: 'var(--combat-gold)' }}
            >
              Upstream Thinking
            </Link>
            <Link
              href="/about"
              className="transition-colors font-medium uppercase text-sm tracking-wider"
              style={{ color: 'var(--camo-sand)' }}
            >
              About Finn
            </Link>
            <Link
              href="/contact"
              className="transition-colors font-medium uppercase text-sm tracking-wider"
              style={{ color: 'var(--camo-sand)' }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="transition-colors font-medium uppercase text-sm tracking-wider"
              style={{ color: 'var(--camo-olive)' }}
            >
              Privacy
            </Link>
            <Link
              href="/upstream-thinking"
              className="tactical-btn px-6 py-2 rounded-sm font-bold transition-all text-white uppercase text-sm tracking-wider"
            >
              Read Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--camo-cream)' }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/upstream-thinking"
              className="block py-2 font-bold transition-colors uppercase text-sm tracking-wider"
              style={{ color: 'var(--combat-gold)' }}
              onClick={() => setIsOpen(false)}
            >
              Upstream Thinking
            </Link>
            <Link
              href="/about"
              className="block py-2 transition-colors uppercase text-sm tracking-wider"
              style={{ color: 'var(--camo-sand)' }}
              onClick={() => setIsOpen(false)}
            >
              About Finn
            </Link>
            <Link
              href="/contact"
              className="block py-2 transition-colors uppercase text-sm tracking-wider"
              style={{ color: 'var(--camo-sand)' }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="block py-2 transition-colors uppercase text-sm tracking-wider"
              style={{ color: 'var(--camo-olive)' }}
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/upstream-thinking"
              className="block mt-4 px-6 py-2 tactical-btn rounded-sm font-bold transition-all text-center text-white uppercase text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Read Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
