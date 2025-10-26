# Google AdSense Setup Guide for Banjo Boat Tours

## 🎯 Goal
Monetize the 20+ ad slots on banjoboattours.tours with Google AdSense for maximum revenue.

## Prerequisites Checklist

Before applying for AdSense, ensure your site meets these requirements:

- ✅ **Site is live** - https://bnyedagawd.github.io/banjoboattours-website/
- ⏳ **Custom domain configured** - banjoboattours.tours (not yet set up)
- ⏳ **Sufficient content** - Need more unique content pages
- ⏳ **Privacy Policy page** - Required by AdSense
- ⏳ **Contact page** - Required by AdSense
- ⏳ **About page** - Helps with approval
- ⏳ **Site is 6+ months old** - Recommended (can apply earlier)

## Step 1: Apply for Google AdSense

### 1.1 Create AdSense Account

1. Go to: https://www.google.com/adsense/start/
2. Sign in with your Google account
3. Enter your website URL: `https://banjoboattours.tours` (use custom domain when ready)
4. Select your country/region
5. Accept Terms & Conditions

### 1.2 Connect Your Site to AdSense

AdSense will provide you with a **site verification code** like this:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

We'll add this to the site in Step 2.

## Step 2: Add AdSense Verification Code

### 2.1 Update Layout File

Add the AdSense code to your site's `<head>` section:

**File:** `app/layout.tsx`

Add this in the `<head>` section (get your actual client ID from AdSense):

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

### 2.2 Commit and Deploy

```bash
git add app/layout.tsx
git commit -m "Add Google AdSense verification code"
git push origin main
```

Wait 5 minutes for deployment, then click "Verify" in AdSense dashboard.

## Step 3: Create Required Pages for Approval

AdSense requires certain pages for approval. Let's create them:

### 3.1 Privacy Policy Page

**File:** `app/privacy/page.tsx`

Must include:
- What data you collect (cookies, IP addresses)
- How you use data
- Third-party advertising (Google AdSense)
- Cookie usage
- User rights

### 3.2 Contact Page

**File:** `app/contact/page.tsx`

Must include:
- Email address
- Contact form (optional)
- Business address (optional)

### 3.3 About Page

**File:** `app/about/page.tsx`

Tell the story of your jacked muscular banjo-playing boat tour guide!

## Step 4: Replace Current Ad Slots with AdSense

Once approved, replace the placeholder ad slots with real AdSense units.

### 4.1 Create Ad Units in AdSense

In your AdSense dashboard:

1. Go to **Ads** → **By ad unit** → **Display ads**
2. Create ad units for each size:
   - **Leaderboard** - 728x90 (header)
   - **Medium Rectangle** - 300x250 (sidebar)
   - **Large Rectangle** - 336x280 (content)
   - **Wide Skyscraper** - 160x600 (sidebar)
   - **Large Leaderboard** - 970x250 (header)
   - **Mobile Banner** - 320x50 (mobile)

### 4.2 Update AdSlot Component

**File:** `app/components/AdSlot.tsx`

Replace Google Publisher Tag with AdSense:

```tsx
'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  slot: string;  // AdSense ad slot ID
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdSlot({ slot, format = 'auto', className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
```

### 4.3 Update Ad Placements

Update your ad slots throughout the site:

```tsx
// Header ad (970x250 or 728x90)
<AdSlot
  slot="1234567890"  // Get from AdSense
  format="horizontal"
  className="max-w-[970px] mx-auto"
/>

// Sidebar ad (300x250 or 160x600)
<AdSlot
  slot="2345678901"
  format="rectangle"
/>

// In-content ad (336x280)
<AdSlot
  slot="3456789012"
  format="rectangle"
/>
```

## Step 5: Optimize for Maximum Revenue

### 5.1 High-Value Ad Placements

Our current 20+ ad slots are already strategically placed:

✅ **Above the fold** - Header leaderboard (highest CPM)
✅ **Sticky sidebars** - Left + right columns (constant visibility)
✅ **Between content** - Gallery sections (high engagement)
✅ **Mobile anchor** - Bottom sticky on mobile (high CTR)

### 5.2 Revenue Optimization Tips

1. **Ad Balance** - AdSense will show optimal number of ads (not all 20+)
2. **Auto Ads** - Consider enabling for automatic placement optimization
3. **Responsive Ads** - All our slots use responsive sizing
4. **Ad Refresh** - We have 30-second auto-refresh (may violate policy - remove if needed)

### 5.3 AdSense Policies to Follow

⚠️ **IMPORTANT:** Remove or modify these features:

1. **Auto-refresh ads** - Not allowed by AdSense (remove 30s interval)
2. **Click incentives** - Don't encourage clicks
3. **Adult content** - Keep content family-friendly
4. **Misleading placement** - Ads must be clearly labeled

## Step 6: Alternative - Google Ad Manager (Advanced)

For more control and higher revenue potential:

### Why Ad Manager?

- **Direct deals** - Negotiate with advertisers directly
- **Programmatic bidding** - Prebid.js integration
- **Higher revenue** - Can exceed AdSense earnings by 30-100%
- **Multiple demand sources** - AdSense + other ad networks

### Setup Overview

1. Create Ad Manager account: https://admanager.google.com/
2. Create inventory (ad units)
3. Set up line items and orders
4. Integrate Prebid.js for header bidding
5. Add Ad Manager tags to site

**Note:** Ad Manager is more complex but offers significantly higher revenue potential for sites with good traffic.

## Expected Revenue Estimates

Based on 20+ ad units with mixed placement:

### Conservative Estimates (AdSense)
- **1,000 pageviews/day** - $5-15/day ($150-450/month)
- **10,000 pageviews/day** - $50-150/day ($1,500-4,500/month)
- **100,000 pageviews/day** - $500-1,500/day ($15,000-45,000/month)

### Aggressive Estimates (Ad Manager + Prebid)
- **1,000 pageviews/day** - $10-30/day ($300-900/month)
- **10,000 pageviews/day** - $100-300/day ($3,000-9,000/month)
- **100,000 pageviews/day** - $1,000-3,000/day ($30,000-90,000/month)

**Note:** High-risk advertisers (Trojan, Astroglide, gambling) mentioned in original spec would require Ad Manager with specific advertiser relationships, not AdSense.

## Quick Start Checklist

- [ ] Apply for Google AdSense account
- [ ] Add verification code to site
- [ ] Create Privacy Policy page
- [ ] Create Contact page
- [ ] Create About page
- [ ] Wait for approval (1-4 weeks typically)
- [ ] Create ad units in AdSense
- [ ] Replace placeholder ads with real AdSense code
- [ ] Remove 30-second auto-refresh (violates policy)
- [ ] Test ads on mobile and desktop
- [ ] Monitor performance in AdSense dashboard

## Resources

- **AdSense Help Center:** https://support.google.com/adsense
- **Program Policies:** https://support.google.com/adsense/answer/48182
- **Ad Units Guide:** https://support.google.com/adsense/answer/9183549
- **Optimization Tips:** https://support.google.com/adsense/answer/17957

## Next Steps

1. **Set up custom domain** - AdSense works better with custom domains
2. **Create required pages** - Privacy, Contact, About
3. **Apply for AdSense** - Can take 1-4 weeks for approval
4. **Consider Ad Manager** - For higher revenue potential

**Questions?** Reach out once you've completed the initial setup steps!

---

**🚤 Banjo Boat Tours - We Love Two Things: 1. Banjos & 2. Boat Tours 💪🎸**
