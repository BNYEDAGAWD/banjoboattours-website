# Google MCM/AdX Partners Setup Guide
## Maximum Revenue Through Multiple Customer Management

---

## Overview

Your site now has **FOUR Google MCM (Multiple Customer Management) / AdX partners** integrated, providing direct access to Google's premium Ad Exchange demand **PLUS** the existing Prebid.js + WBID stack.

### What is Google MCM/AdX?

**Google Ad Exchange (AdX)** is Google's premium programmatic marketplace, offering:
- 2-3x higher CPMs than AdSense
- Premium advertiser demand
- Advanced targeting and optimization
- Real-time bidding from top-tier brands

**MCM (Multiple Customer Management)** lets **certified partners** give publishers AdX access without needing to meet Google's strict publisher requirements (typically $1M+ annual revenue).

### Your MCM Partners (All Integrated!)

1. **Ezoic** - Access NOW (no pageview minimum!)
2. **Adsterra** - 30k+ publishers, 10+ years experience
3. **Mediavine Journey** - Premium platform (10k+ sessions required)
4. **Monumetric** - All publisher sizes welcome

---

## Revenue Stack Architecture

### Complete Demand Waterfall (Optimal Revenue Order)

```
1. Prebid.js Header Bidding (8+ SSPs simultaneously)
   ↓ (if no fill or low bid)
2. EZOIC (Google AdX + AI optimization)
   ↓ (if no fill)
3. MEDIAVINE JOURNEY (Premium AdX + optimization)
   ↓ (if no fill)
4. MONUMETRIC (AdX + managed optimization)
   ↓ (if no fill)
5. WBID (10+ open exchanges, zero fees)
   ↓ (if no fill)
6. ADSTERRA (Display, native, video, popunder)
   ↓ (if no fill)
7. AdSense (Google's backup demand)
   ↓ (if no fill)
8. House Ads (Finn Fretwater branded placeholders)
```

### Why This Works

- **Maximum competition** = Higher CPMs
- **Multiple demand paths** = Near 100% fill rates
- **Intelligent fallback** = Never show blank spaces
- **Partner coordination** = No duplicate requests

---

## Partner #1: EZOIC (Start Here!)

### Why Ezoic First?

- ✅ **NO pageview minimum** (unlike competitors)
- ✅ **Instant Google AdX access** via MCM
- ✅ **AI-powered optimization** (machine learning ad placement)
- ✅ **Fastest approval** (typically 24-48 hours)
- ✅ **Best for beginners** (no contracts, cancel anytime)

### Ezoic Benefits

- **Revenue Lift**: 50-250% vs AdSense alone
- **AdX Access**: Premium advertiser demand
- **AI Testing**: Auto-optimizes ad placements
- **Free Tools**: Site speed, analytics, video player
- **No Minimum**: Works from day 1 of traffic

### Signup Process

1. **Apply**: https://www.ezoic.com
   - Click "Get Started" or "Sign Up"
   - Select "Publisher" account type

2. **Site Details**:
   - **URL**: `https://bnyedagawd.github.io/banjoboattours-website/`
   - **Monthly Pageviews**: Enter current (can be < 1,000)
   - **Content Category**: Lifestyle / How-To / Expert Advice
   - **Content Language**: English

3. **Integration Method**: Choose "Universal Code" (easiest)
   - Ezoic provides code snippet
   - Already integrated in `app/layout.tsx` (line 193-213)
   - Just need to replace `YOUR_EZOIC_ID`

4. **Verification**:
   - Ezoic crawls your site (takes 1-3 hours)
   - Approve ad placements in dashboard
   - Activate ads

5. **Expected Timeline**:
   - **Application**: Instant
   - **Site Crawl**: 1-3 hours
   - **Approval**: 24-48 hours
   - **First Ads**: Immediately after activation

### Configuration

**File**: [`app/layout.tsx`](app/layout.tsx#L193)

```javascript
// Line 198: Replace YOUR_EZOIC_ID with your Publisher ID
var ezoicId = 'YOUR_EZOIC_ID'; // Replace after approval
```

**After Approval**:
1. Log into Ezoic dashboard
2. Go to Settings → Integration
3. Copy your Publisher ID (format: `123456`)
4. Replace `YOUR_EZOIC_ID` in layout.tsx
5. Deploy updated code

**Ezoic Dashboard**: https://www.ezoic.com/access/login/

### Revenue Expectations (Ezoic Only)

| Monthly Pageviews | Estimated Revenue (Conservative) | Estimated Revenue (Optimized) |
|---|---|---|
| 1,000 | $3-8 | $10-20 |
| 5,000 | $15-40 | $50-100 |
| 10,000 | $30-80 | $100-200 |
| 50,000 | $150-400 | $500-1,000 |
| 100,000 | $300-800 | $1,000-2,500 |

*US traffic, high-quality content*

---

## Partner #2: ADSTERRA (Strong Backfill)

### Why Adsterra?

- ✅ **NO minimums** (any traffic level)
- ✅ **Fast approval** (24 hours typical)
- ✅ **Multiple ad formats**: Display, Native, Popunder, Social Bar, Video
- ✅ **Global demand** (works with all geos)
- ✅ **High fill rates** (fills what others can't)

### Adsterra Benefits

- **10+ years** in ad tech
- **30,000+ publishers** worldwide
- **CPM + CPA offers** (performance-based revenue)
- **Anti-adblock** technology (recover lost revenue)
- **Direct ads** available for social bar/popunder

### Signup Process

1. **Apply**: https://publishers.adsterra.com/register
   - Click "Sign Up as Publisher"
   - Fill in basic info

2. **Add Website**:
   - **URL**: `https://bnyedagawd.github.io/banjoboattours-website/`
   - **Category**: Education / Lifestyle
   - **Traffic**: Current monthly pageviews
   - **GEOs**: United States (primary)

3. **Ad Formats**: Select preferred formats
   - **Display Banners**: ✅ (already integrated)
   - **Native Ads**: ✅ (recommended)
   - **Popunder**: ⚠️ (aggressive, high CPM but may hurt UX)
   - **Social Bar**: ⚠️ (consider for high-traffic pages)

4. **Verification**:
   - Adsterra reviews site (24 hours)
   - Email with approval + instructions
   - Get Zone IDs for each ad position

5. **Get Zone IDs**:
   - Log into Adsterra dashboard
   - Create ad zones for:
     - Header (728x90 or 970x90)
     - Sidebar (300x250 or 300x600)
     - In-Content (300x250 or 336x280)
     - Footer (728x90)

### Configuration

**File**: [`app/layout.tsx`](app/layout.tsx#L215)

```javascript
// Lines 223-230: Replace with your Zone IDs
window.adstertaConfig = {
  publisherId: 'YOUR_ADSTERRA_PUBLISHER_ID', // From dashboard
  zoneIds: {
    header: 'YOUR_HEADER_ZONE_ID',
    sidebar: 'YOUR_SIDEBAR_ZONE_ID',
    inContent: 'YOUR_IN_CONTENT_ZONE_ID',
    footer: 'YOUR_FOOTER_ZONE_ID'
  }
};
```

**After Approval**:
1. Dashboard → Ad Zones → Create New
2. For each position, create zone and get Zone ID
3. Replace placeholder IDs in layout.tsx
4. Deploy

**Adsterra Dashboard**: https://publishers.adsterra.com/login

### Revenue Expectations (Adsterra Backfill)

Adsterra typically provides **+15-30% revenue lift** as backfill for unfilled inventory from other partners.

---

## Partner #3: MEDIAVINE JOURNEY (Premium Tier)

### Requirements (IMPORTANT!)

⚠️ **10,000+ monthly sessions REQUIRED**

- Sessions ≠ Pageviews (1 user can have multiple pageviews in 1 session)
- Typically: 10k sessions = ~15-20k pageviews
- Must verify via Google Analytics

### Why Mediavine Journey?

- ✅ **Premium ad management** (Mediavine's reputation)
- ✅ **Higher CPMs** than Ezoic/Monumetric (typically)
- ✅ **Self-service** (no account manager needed)
- ✅ **Mediavine ecosystem** (access to tools and community)
- ✅ **Video monetization** included

### Mediavine Journey Benefits

- **Revenue**: Among the highest RPMs in the industry
- **Google AdX**: Premium demand via MCM
- **Video Player**: Monetized video player included
- **Optimization**: Automated layout and refresh optimization
- **Reporting**: Real-time revenue dashboard

### Signup Process (When Eligible)

1. **Verify Traffic**: You need 10k+ monthly sessions
   - Check Google Analytics
   - Last 30 days average
   - Must be consistent (not one-time spike)

2. **Apply**: https://www.mediavine.com/journey
   - Click "Apply Now"
   - Connect Google Analytics (required for verification)

3. **Site Review**:
   - Mediavine reviews content quality
   - Checks for policy compliance
   - Verifies traffic authenticity

4. **Approval Timeline**:
   - Application review: 1-2 weeks
   - If approved, onboarding: 1-2 days
   - Total: 2-3 weeks from application

5. **Integration**:
   - Mediavine provides Site ID
   - Script tag already in layout.tsx (lines 257-262)
   - Just uncomment and add Site ID

### Configuration

**File**: [`app/layout.tsx`](app/layout.tsx#L236)

```javascript
// Line 247: Replace YOUR_MEDIAVINE_SITE_ID
siteId: 'YOUR_MEDIAVINE_SITE_ID', // From approval email
```

**Lines 257-262**: Uncomment after approval
```javascript
// Uncomment this after approval:
<Script
  src="https://scripts.mediavine.com/tags/YOUR_MEDIAVINE_SITE_ID.js"
  strategy="beforeInteractive"
  async
/>
```

**Mediavine Journey Dashboard**: https://journey.mediavine.com

### Revenue Expectations (Mediavine Journey)

| Monthly Sessions | Estimated Revenue (Conservative) | Estimated Revenue (Optimized) |
|---|---|---|
| 10,000 | $100-200 | $250-400 |
| 25,000 | $250-500 | $600-1,000 |
| 50,000 | $500-1,000 | $1,200-2,500 |
| 100,000 | $1,000-2,000 | $2,500-5,000+ |

*Premium content, US traffic*

---

## Partner #4: MONUMETRIC (AdSense Alternative)

### Why Monumetric?

- ✅ **All publisher sizes** welcome
- ✅ **Better CPMs** than AdSense (comparable to Ezoic)
- ✅ **No contracts** (month-to-month)
- ✅ **Hands-off** management (they optimize for you)
- ✅ **Google AdX** access via MCM

### Monumetric Benefits

- **Revenue**: 50-150% higher than AdSense alone
- **Management**: Dedicated optimization team
- **Testing**: A/B testing built-in
- **Transparency**: Clear revenue reports
- **Support**: Actual human support team

### Monumetric Tiers

1. **Lite** (Free):
   - Any traffic level
   - Self-service
   - Basic optimization

2. **Plus** ($99 setup fee):
   - Recommended for 10k+ pageviews
   - Managed optimization
   - Priority support

3. **Premium** (Higher revenue share):
   - 80k+ monthly pageviews
   - Full management
   - Maximum optimization

### Signup Process

1. **Apply**: https://www.monumetric.com/get-started
   - Click "Apply Now"
   - Select tier (start with Lite if < 10k pageviews)

2. **Site Details**:
   - **URL**: Site URL
   - **Monthly Pageviews**: Current traffic
   - **Category**: Content type
   - **Monetization Goals**: Revenue objectives

3. **Review Process**:
   - Monumetric reviews site content
   - Checks policy compliance
   - Approves or provides feedback

4. **Timeline**:
   - Application: Instant
   - Review: 2-5 business days
   - Onboarding: 1-2 days after approval
   - Total: 1 week average

5. **Integration**:
   - Monumetric provides Publisher ID + Slot IDs
   - Already integrated in layout.tsx (lines 267-292)
   - Replace placeholder IDs and uncomment script

### Configuration

**File**: [`app/layout.tsx`](app/layout.tsx#L264)

```javascript
// Lines 274-275: Replace with your IDs
slot_id: 'YOUR_MONUMETRIC_SLOT_ID', // From dashboard
publisher_id: 'YOUR_MONUMETRIC_PUBLISHER_ID',
```

**Lines 287-292**: Uncomment after approval
```javascript
<Script
  src="//tag.monu.delivery/YOUR_MONUMETRIC_PUBLISHER_ID.js"
  strategy="afterInteractive"
  async
/>
```

**Monumetric Dashboard**: https://www.monumetric.com/login

### Revenue Expectations (Monumetric)

| Monthly Pageviews | Estimated Revenue (Conservative) | Estimated Revenue (Optimized) |
|---|---|---|
| 10,000 | $40-80 | $100-150 |
| 25,000 | $100-200 | $250-400 |
| 50,000 | $200-400 | $500-800 |
| 100,000 | $400-800 | $1,000-2,000 |

*US traffic, managed optimization*

---

## Combined Revenue Projections

### With ALL Partners Active

| Monthly Pageviews | Expected RPM Range | Monthly Revenue Range |
|---|---|---|
| 1,000 | $8-25 | $8-25 |
| 5,000 | $12-30 | $60-150 |
| 10,000 | $15-35 | $150-350 |
| 25,000 | $18-40 | $450-1,000 |
| 50,000 | $20-45 | $1,000-2,250 |
| 100,000 | $22-50 | $2,200-5,000 |
| 500,000 | $25-60 | $12,500-30,000+ |

**Notes**:
- RPM = Revenue Per 1000 Pageviews
- Assumes US traffic, quality content, optimized layout
- Lower end: Conservative estimates
- Upper end: Premium content + optimization
- Actual results vary by niche, seasonality, traffic quality

---

## Recommended Rollout Strategy

### Phase 1: Foundation (Week 1)
1. ✅ **Apply for Ezoic** (HIGHEST PRIORITY - no minimums!)
2. ✅ **Apply for Adsterra** (backup demand, fast approval)
3. ✅ **Continue existing AdSense** (already integrated)

**Expected Approval**: Both within 48 hours

**Replace IDs**: Update `layout.tsx` with Ezoic ID and Adsterra Zone IDs

### Phase 2: Growth (Weeks 2-4)
4. ⏳ **Monitor traffic** via Google Analytics
5. ⏳ **Optimize content** for SEO and engagement
6. ⏳ **Build email list** via newsletter signup

**Goal**: Reach 10k monthly pageviews/sessions

### Phase 3: Premium Partners (Month 2+)
7. ⏳ **Apply for Monumetric** (when ready, or earlier if < 10k)
8. ⏳ **Apply for Mediavine Journey** (ONLY when 10k+ sessions!)

**Expected Timeline**: 1-3 weeks approval + integration

### Phase 4: Optimization (Month 3+)
9. 📊 **A/B test ad placements** (use Ezoic AI testing)
10. 📊 **Monitor partner performance** (revenue by partner)
11. 📊 **Adjust priority** in MCM waterfall if needed
12. 📊 **Scale content production** based on what works

---

## Technical Implementation

### MCM Ad Slot Component

We've created `MCMAdSlot.tsx` - a specialized component that:

1. **Tries partners in priority order** (configurable)
2. **Falls back automatically** if partner doesn't fill
3. **Tracks performance** by partner
4. **Coordinates refresh** across all partners
5. **Optimizes viewability** with lazy loading

### Usage Example

```tsx
import MCMAdSlot from '@/app/components/MCMAdSlot';

<MCMAdSlot
  config={{
    slotId: 'article-top-leaderboard',
    sizes: [[728, 90], [970, 90], 'fluid'],
    position: 'header',
    refreshInterval: 30,
    adDensity: 'high',
    mcmPriority: 'balanced', // Try Prebid → Ezoic → Mediavine → Monumetric
    // All partners enabled by default
  }}
/>
```

### MCM Priority Options

**`mcmPriority: 'balanced'`** (Recommended - Default)
```
Prebid → Ezoic → Mediavine → Monumetric → Adsterra → AdSense
```
Best for: Maximum competition, highest CPMs

**`mcmPriority: 'ezoic'`**
```
Ezoic → Mediavine → Monumetric → Prebid → Adsterra → AdSense
```
Best for: Maximizing Ezoic AI optimization

**`mcmPriority: 'mediavine'`**
```
Mediavine → Ezoic → Monumetric → Prebid → Adsterra → AdSense
```
Best for: Premium content, high engagement

**`mcmPriority: 'monumetric'`**
```
Monumetric → Ezoic → Mediavine → Prebid → Adsterra → AdSense
```
Best for: Hands-off management preference

---

## Partner-Specific Configuration Files

### Location

All MCM partner configuration is in:
- **Main config**: [`app/layout.tsx`](app/layout.tsx#L188-L354)
- **MCM component**: [`app/components/MCMAdSlot.tsx`](app/components/MCMAdSlot.tsx)

### ID Replacement Checklist

- [ ] **Ezoic**: Line 198 - `YOUR_EZOIC_ID`
- [ ] **Adsterra**: Lines 224, 226-229 - Publisher ID + 4 Zone IDs
- [ ] **Mediavine**: Line 247 - `YOUR_MEDIAVINE_SITE_ID` + uncomment line 258-262
- [ ] **Monumetric**: Lines 274-275 - Slot ID + Publisher ID + uncomment lines 287-292

---

## Testing Your Setup

### 1. Verify Scripts Load

```
Open DevTools → Network Tab → Filter "ezoic|adsterra|mediavine|monu"
Look for: Script requests from partner domains
Status: Should be 200 OK
```

### 2. Check MCM Coordinator

```
Open DevTools → Console
Type: window.mcmRefreshCoordinator
Look for: Object with activePartners array
Should show: ['ezoic'] or ['prebid', 'ezoic'] etc.
```

### 3. Verify Partner Registration

```
Console: window.mcmRefreshCoordinator.activePartners
Result: Array of active partner names
```

### 4. Monitor Revenue

```
Console: window.revenueTracker
Look for: impressions, viewable, estimatedRevenue
Track over time to see revenue accumulation
```

---

## Troubleshooting

### Ezoic Ads Not Showing
1. Verify Ezoic ID is correct (no `YOUR_` prefix)
2. Check Ezoic dashboard - site must be activated
3. Disable browser ad-blocker for testing
4. Wait 1-3 hours after activation for ad cache

### Adsterra Not Loading
1. Verify all Zone IDs are replaced (4 total)
2. Check zones are approved in Adsterra dashboard
3. Some ad formats may be blocked by browser (normal)

### Mediavine Journey Issues
1. Script is commented out by default - uncomment after approval
2. Requires 10k+ monthly sessions (strictly enforced)
3. Must pass content quality review

### Monumetric Not Displaying
1. Script is commented out by default - uncomment after approval
2. Verify both Publisher ID and Slot ID are correct
3. Check Monumetric dashboard for slot activation status

---

## Support Resources

### Partner Support

- **Ezoic**: https://support.ezoic.com
- **Adsterra**: publishers@adsterra.com
- **Mediavine Journey**: https://journey.mediavine.com/support
- **Monumetric**: https://www.monumetric.com/contact

### Documentation

- **This guide**: `MCM-ADX-SETUP-GUIDE.md`
- **Ad infrastructure**: `AD-REVENUE-INFRASTRUCTURE.md`
- **Account setup**: `AD-ACCOUNT-SETUP-CHECKLIST.md`
- **Deployment info**: `DEPLOYMENT-COMPLETE.md`

---

## Revenue Optimization Tips

### Content Strategy
- **High-value niches**: Finance, tech, health (highest CPMs)
- **Long-form content**: More ad positions per page
- **US/UK/CA traffic**: Premium advertiser demand
- **Evergreen content**: Consistent traffic over time

### Ad Placement
- **Above fold**: 1-2 ads maximum (Ezoic will optimize)
- **In-content**: Natural breaks every 300-500 words
- **Sidebar**: Sticky ads for desktop (high viewability)
- **Exit intent**: Bottom ads capture leaving users

### Technical
- **Page speed**: < 2.5s LCP (Core Web Vitals)
- **Mobile optimization**: 60%+ traffic is mobile
- **Lazy loading**: Enabled for all below-fold ads
- **Ad density**: Start medium, let Ezoic test higher

### Traffic Quality
- **Organic > Paid**: Better engagement, higher CPMs
- **Social > Aggregators**: More engaged users
- **Desktop ≈ Mobile**: CPMs similar, volume differs
- **Returning visitors**: Better CTR and engagement

---

## Expected Timeline to Revenue

### Day 1-7: Setup
- Apply for Ezoic + Adsterra
- Configure IDs when approved
- First ads start serving
- Revenue: $0-5/day (low traffic phase)

### Week 2-4: Growth
- SEO starts kicking in
- Email list building
- Content production ramping up
- Revenue: $5-20/day (growing traffic)

### Month 2-3: Scaling
- Apply for Monumetric
- Reach 10k+ pageviews/sessions
- Multiple partners active
- Revenue: $20-50/day

### Month 4-6: Optimization
- Apply for Mediavine Journey (if 10k+ sessions)
- All partners optimized
- Content library established
- Revenue: $50-150+/day

### Month 6-12: Maturity
- 100k+ monthly pageviews
- Premium partners fully optimized
- Established audience
- Revenue: $100-500+/day

---

## Next Steps

### Immediate Actions

1. **Apply for Ezoic TODAY**
   - https://www.ezoic.com
   - No traffic minimum
   - Get AdX access immediately

2. **Apply for Adsterra**
   - https://publishers.adsterra.com/register
   - Fast approval (24 hours)
   - Strong backfill demand

3. **Monitor Analytics**
   - Set up Google Analytics (if not already)
   - Track sessions vs. pageviews
   - Plan for 10k milestone (Mediavine/Monumetric)

### When Traffic Grows

4. **At 5-10k pageviews**:
   - Apply for Monumetric
   - Start A/B testing with Ezoic

5. **At 10k+ sessions**:
   - Apply for Mediavine Journey
   - Enable premium optimization

6. **At 50k+ pageviews**:
   - Consider upgrading Monumetric tier
   - Explore video monetization

---

**You're Ready to Maximize Revenue!** 💪🎸

The infrastructure is complete. Time to apply for partners and start generating serious ad revenue through Google MCM/AdX access.

---

**Updated**: October 25, 2025
**For**: Finn Fretwater's Upstream Thinking
**Built with**: Claude Code 🤖
