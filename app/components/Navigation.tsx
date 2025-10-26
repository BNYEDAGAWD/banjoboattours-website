'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">💪🎸</span>
            <span className="font-display text-xl font-bold" style={{ color: 'var(--cypress-gold)' }}>
              FINN FRETWATER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/upstream-thinking"
              className="text-white hover:text-yellow-400 transition-colors font-bold"
              style={{ color: 'var(--cypress-gold)' }}
            >
              Upstream Thinking
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About Finn
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/upstream-thinking"
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 rounded-lg font-bold transition-all"
            >
              Read Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
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
              className="block py-2 font-bold transition-colors"
              style={{ color: 'var(--cypress-gold)' }}
              onClick={() => setIsOpen(false)}
            >
              Upstream Thinking
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Finn
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="block py-2 text-gray-300 hover:text-white transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/upstream-thinking"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 rounded-lg font-bold transition-all text-center"
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
