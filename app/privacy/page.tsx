export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-black mb-8 font-display" style={{ color: 'var(--cypress-gold)' }}>
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="text-sm text-gray-500 mb-8">
              Last Updated: October 25, 2025
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
            <p>
              Welcome to Banjo Boat Tours. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Information We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device information</li>
              <li><strong>Usage Data:</strong> Information about how you use our website</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Deliver and improve our website content</li>
              <li>Manage our relationship with you</li>
              <li>Administer and protect our business and website</li>
              <li>Deliver relevant website content and advertisements</li>
              <li>Use data analytics to improve our website and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information.
              Cookies are files with small amounts of data that may include an anonymous unique identifier.
            </p>
            <p className="mb-4">Types of cookies we use:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Third-Party Advertising</h2>
            <p className="mb-4">
              We use <strong>Google AdSense</strong> to serve advertisements on our website. Google AdSense uses cookies
              to serve ads based on your prior visits to our website or other websites.
            </p>
            <p className="mb-4">
              Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our
              site and/or other sites on the Internet. You may opt out of personalized advertising by visiting
              Google's <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
            </p>
            <p>
              For more information about how Google uses data, please visit{' '}
              <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Google's Privacy & Terms
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
              used, or accessed in an unauthorized way. However, the transmission of information via the internet is not
              completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security
              of your data transmitted to our site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Your Legal Rights</h2>
            <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">California Privacy Rights</h2>
            <p>
              If you are a California resident, you have specific rights regarding access to your personal information
              under the California Consumer Privacy Act (CCPA). You have the right to request disclosure of the categories
              and specific pieces of personal information we have collected, and to request deletion of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Children's Privacy</h2>
            <p>
              Our website does not address anyone under the age of 13. We do not knowingly collect personally identifiable
              information from children under 13. If you are a parent or guardian and you are aware that your child has
              provided us with personal data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="space-y-2">
              <li>By email: privacy@banjoboattours.tours</li>
              <li>By visiting our <a href="/contact" className="text-blue-400 hover:underline">Contact page</a></li>
            </ul>
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
