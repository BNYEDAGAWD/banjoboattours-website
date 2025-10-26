'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with actual email service (Mailchimp, ConvertKit, Beehiiv, etc.)
    // For now, simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Placeholder success
      setStatus('success');
      setMessage('Welcome aboard. You just made a smart decision.');
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Try again, or I\'ll have to question your decision-making.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-8 md:p-12 border border-cyan-700">
      <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--cypress-gold)' }}>
        JOIN THE DOWNSTREAM DISPATCH
      </h2>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Get my latest deep dives delivered weekly. Random topics. Real expertise. Zero BS.
      </p>

      <p className="text-gray-400 mb-8">
        You'll learn something. You might laugh. You'll probably wonder why a boat guide knows this much about tax law.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 rounded-lg font-bold transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
          </button>
        </div>

        {message && (
          <div className={`p-4 rounded-lg ${
            status === 'success'
              ? 'bg-green-900/30 border border-green-700 text-green-300'
              : 'bg-red-900/30 border border-red-700 text-red-300'
          }`}>
            {message}
          </div>
        )}
      </form>

      <p className="text-sm text-gray-500 mt-6">
        *I don't spam. I don't sell your email. I just send you smart stuff when I figure it out.
      </p>
    </div>
  );
}
