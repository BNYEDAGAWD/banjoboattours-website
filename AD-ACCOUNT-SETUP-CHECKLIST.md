# Ad Account Setup Checklist

Quick reference for setting up all ad network accounts and configuring the revenue infrastructure.

## Phase 1: Core Foundation (Start Here)

### 1. Google AdSense
**Priority**: HIGHEST - Required for backup demand

**Steps**:
1. Visit https://adsense.google.com
2. Click "Get started" and sign in with Google account
3. Enter your website URL: `https://bnyedagawd.github.io/banjoboattours-website/`
4. Complete account information:
   - Country: United States
   - Time zone: Pacific Time
   - Payment details (will receive payments via check or direct deposit)
5. Add verification code to your site (already in place in `app/layout.tsx`)
6. Wait for approval (typically 24-48 hours, can take up to 2 weeks)
7. Once approved, get your Publisher ID (starts with `ca-pub-`)
8. Note your Publisher ID for configuration

**What you'll get**:
- Publisher ID: `ca-pub-XXXXXXXXXXXXXXXX`

**Where to use it**:
- Already configured in `app/layout.tsx` (line 162)
- Just verify it's loading correctly

---

### 2. Google Ad Manager (Optional but Recommended)
**Priority**: HIGH - Better control than AdSense alone

**Requirements**:
- Active AdSense account
- 50,000+ monthly pageviews (recommended but not strictly required)

**Steps**:
1. Visit https://admanager.google.com
2. Click "Get started" and link your AdSense account
3. Complete setup wizard
4. Create "ad units" for each slot position:
   - `article-top-leaderboard`
   - `article-inline-1`
   - `article-inline-2`
   - `article-inline-3`
   - `article-sidebar-sticky`
   - `article-bottom-leaderboard`
5. Get your Network Code (8-digit number)

**What you'll get**:
- Network Code: `12345678` (example)

**Where to use it**:
- Replace `/1234567/` in `app/components/AdManager.tsx` line 327
- Change to: `/YOUR_NETWORK_CODE/`

---

### 3. Amazon Publisher Services (APS)
**Priority**: HIGH - Premium demand source, easy approval

**Steps**:
1. Visit https://aps.amazon.com
2. Click "Sign up" and create Amazon Advertising account
3. Complete publisher application:
   - Website URL
   - Traffic stats (Google Analytics screenshots helpful)
   - Content category
4. Wait for approval (typically 3-7 days)
5. Once approved, get your Publisher ID
6. Create ad slots in APS dashboard matching your site's positions

**What you'll get**:
- Publisher ID: `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` (UUID format)

**Where to use it**:
- Replace `YOUR_AMAZON_PUB_ID` in `app/layout.tsx` line 113

---

## Phase 2: Header Bidding SSPs (Add as Traffic Grows)

### 4. Index Exchange
**Priority**: MEDIUM - One of the largest SSPs

**Requirements**: 10,000+ monthly pageviews recommended

**Steps**:
1. Visit https://www.indexexchange.com/publishers/
2. Click "Become a Publisher"
3. Fill out application with traffic stats
4. Wait for approval and onboarding (1-2 weeks)
5. During onboarding, you'll create site and ad unit configurations

**What you'll get**:
- Site ID: `123456` (6-digit number)

**Where to use it**:
- Replace `SITE_ID` in `app/components/AdManager.tsx` line 216

---

### 5. OpenX
**Priority**: MEDIUM - Strong video and display demand

**Requirements**: 50,000+ monthly pageviews recommended

**Steps**:
1. Visit https://www.openx.com/publishers/
2. Click "Get Started"
3. Complete application
4. Wait for approval and account setup
5. Create ad units in OpenX dashboard

**What you'll get**:
- Unit ID: `123456789`
- Delivery Domain: `yourdomain-d.openx.net`

**Where to use it**:
- Replace `UNIT_ID` in `app/components/AdManager.tsx` line 222
- Replace `DOMAIN` in `app/components/AdManager.tsx` line 224

---

### 6. Rubicon Project (Now Magnite)
**Priority**: MEDIUM - Large premium demand pool

**Requirements**: 100,000+ monthly pageviews recommended

**Steps**:
1. Visit https://www.magnite.com/
2. Contact their publisher sales team
3. Complete application and traffic verification
4. Onboarding includes technical integration support

**What you'll get**:
- Account ID: `12345`
- Site ID: `123456`
- Zone ID: `1234567`

**Where to use it**:
- Replace `ACCOUNT_ID` in `app/components/AdManager.tsx` line 231
- Replace `SITE_ID` in line 232
- Replace `ZONE_ID` in line 233

---

### 7. AppNexus (Now Xandr)
**Priority**: MEDIUM - Microsoft-owned, premium demand

**Requirements**: 100,000+ monthly pageviews recommended

**Steps**:
1. Visit https://www.xandr.com/
2. Click "Publisher Solutions"
3. Request access via contact form
4. Wait for sales team contact and onboarding

**What you'll get**:
- Placement ID: `12345678`

**Where to use it**:
- Replace `PLACEMENT_ID` in `app/components/AdManager.tsx` line 240

---

### 8. Criteo
**Priority**: LOW-MEDIUM - Strong retargeting demand

**Requirements**: 100,000+ monthly pageviews, e-commerce preferred

**Steps**:
1. Visit https://www.criteo.com/publishers/
2. Click "Get Started"
3. Complete application
4. Technical onboarding includes tag integration

**What you'll get**:
- Network ID: `1234`

**Where to use it**:
- Replace `NETWORK_ID` in `app/components/AdManager.tsx` line 247

---

### 9. PubMatic
**Priority**: MEDIUM - Strong programmatic demand

**Requirements**: 50,000+ monthly pageviews recommended

**Steps**:
1. Visit https://pubmatic.com/
2. Click "Publisher Solutions" → "Contact Us"
3. Complete application form
4. Wait for sales team contact

**What you'll get**:
- Publisher ID: `123456`
- Site ID: `123456`

**Where to use it**:
- Currently using PulsePoint adapter (similar demand)
- Can add PubMatic-specific adapter when configured

---

### 10. Sovrn
**Priority**: LOW - Good for long-tail fill

**Requirements**: No minimum traffic (easiest to get approved)

**Steps**:
1. Visit https://www.sovrn.com/publishers/
2. Click "Sign Up"
3. Complete quick registration
4. Verify email and create ad tags

**What you'll get**:
- Tag ID: `123456`

**Where to use it**:
- Replace `TAG_ID` in `app/components/AdManager.tsx` line 263

---

## Phase 3: Supplemental Networks (Optional)

### 11. Media.net
**Priority**: LOW-MEDIUM - Yahoo Bing contextual ads

**Requirements**: Quality content, 50,000+ pageviews recommended

**Steps**:
1. Visit https://www.media.net/
2. Click "Sign Up"
3. Complete application with site details
4. Wait for approval (typically 1-2 weeks)
5. Create ad units in dashboard

**What you'll get**:
- Customer ID: `8ABCD123` (starts with 8)
- CRID: `123456789`

**Where to use it**:
- Replace `YOUR_CUSTOMER_ID` in `app/layout.tsx` line 183
- Replace `YOUR_CRID` in line 177

---

### 12. Ezoic
**Priority**: LOW - AI optimization (requires traffic threshold)

**Requirements**: 10,000+ monthly pageviews REQUIRED

**Steps**:
1. Visit https://www.ezoic.com/
2. Click "Apply Now"
3. Complete application with Google Analytics integration
4. Wait for approval
5. Follow their integration guide (they may want to manage entire ad stack)

**Note**: Ezoic often wants full control of ad management. Consider if this aligns with your WBID/Prebid.js strategy.

**What you'll get**:
- Ezoic script URL

**Where to use it**:
- Uncomment Ezoic script in `app/layout.tsx` lines 189-193

---

## Configuration Quick Reference

### File: `app/layout.tsx`

**Line 113**: Amazon APS
```javascript
pubID: 'YOUR_AMAZON_PUB_ID', // Replace with UUID from APS
```

**Line 177**: Media.net CRID
```javascript
medianet_crid = 'YOUR_CRID'; // Replace with CRID
```

**Line 183**: Media.net Customer ID
```javascript
src="//contextual.media.net/dmedianet.js?cid=YOUR_CUSTOMER_ID"
```

### File: `app/components/AdManager.tsx`

**Line 216**: Index Exchange
```javascript
siteId: 'SITE_ID', // Replace with your Index Exchange Site ID
```

**Line 222-224**: OpenX
```javascript
unit: 'UNIT_ID',      // Replace with OpenX Unit ID
delDomain: 'DOMAIN',  // Replace with your OpenX domain
```

**Line 231-233**: Rubicon (Magnite)
```javascript
accountId: 'ACCOUNT_ID', // Replace with Rubicon Account ID
siteId: 'SITE_ID',       // Replace with Site ID
zoneId: 'ZONE_ID',       // Replace with Zone ID
```

**Line 240**: AppNexus (Xandr)
```javascript
placementId: 'PLACEMENT_ID', // Replace with Xandr Placement ID
```

**Line 247**: Criteo
```javascript
networkId: 'NETWORK_ID', // Replace with Criteo Network ID
```

**Line 254-256**: PulsePoint
```javascript
cf: 'SITE_ID',       // Replace with PulsePoint Site ID
cp: 'PUBLISHER_ID',  // Replace with Publisher ID
ct: 'TAG_ID',        // Replace with Tag ID
```

**Line 263**: Sovrn
```javascript
tagid: 'TAG_ID', // Replace with Sovrn Tag ID
```

**Line 327**: Google Ad Manager Network Code
```javascript
.defineSlot(`/1234567/${config.slotId}`, ...)
// Replace 1234567 with your GAM Network Code
```

---

## Recommended Rollout Strategy

### Week 1: Foundation
- ✅ Apply for Google AdSense
- ✅ Apply for Amazon APS
- ⏳ Wait for approvals

### Week 2: Implement Core
- Replace AdSense Publisher ID (if approved)
- Replace Amazon APS Publisher ID (if approved)
- Verify ads are serving correctly
- Monitor revenue in AdSense dashboard

### Month 1: Add Header Bidding (if 10k+ pageviews)
- Apply for Index Exchange
- Apply for Sovrn (easiest approval)
- Configure IDs as approvals come in
- Monitor bid rates in browser DevTools

### Month 2-3: Expand SSPs (if 50k+ pageviews)
- Apply for OpenX
- Apply for Media.net
- Continue adding SSPs as traffic allows

### Month 4+: Premium Networks (if 100k+ pageviews)
- Apply for Rubicon/Magnite
- Apply for AppNexus/Xandr
- Consider Ezoic for AI optimization
- A/B test different configurations

---

## Testing Your Setup

### 1. Verify Ad Scripts Are Loading
```
Open browser DevTools → Network tab
Filter: "prebid"
Look for: Requests to prebid CDN and SSP endpoints
```

### 2. Check Bid Responses
```
Open browser DevTools → Console
Type: window.pbjs.getBidResponses()
Look for: Bid objects with CPM values from each SSP
```

### 3. Verify WBID Integration
```
Open browser DevTools → Network tab
Filter: "wbid"
Look for: Requests to WBID endpoints
```

### 4. Monitor Revenue Tracking
```
Open browser DevTools → Console
Type: window.revenueTracker
Look for: Impressions, viewable impressions, estimated revenue
```

### 5. Test Ad Refresh
```
Keep article page open for 2+ minutes
Watch Network tab for new ad requests
Verify ads refresh at configured intervals
```

---

## Troubleshooting

### Ads Not Showing
1. Check browser console for JavaScript errors
2. Verify all script tags are loading (Network tab)
3. Confirm AdSense account is approved
4. Check that placeholder IDs have been replaced with real credentials

### Prebid.js Errors
1. Verify bidder configurations have valid credentials
2. Check timeout settings (1500ms default)
2. Look for bid responses in `pbjs.getBidResponses()`
4. Ensure bidder adapters are loading from Prebid CDN

### Low Revenue
1. Verify all SSPs are configured and responding
2. Check fill rates in ad network dashboards
3. Monitor CPMs - adjust if unusually low
4. Ensure viewability tracking is working (50%+ viewport)
5. Test different ad sizes and positions

### Performance Issues
1. Run Lighthouse audit - target CLS < 0.1
2. Check ad load times in Network tab
3. Verify lazy loading is working for below-fold ads
4. Consider reducing number of SSPs if page speed suffers

---

## Support Resources

- **Prebid.js Docs**: https://docs.prebid.org/
- **Google Ad Manager**: https://support.google.com/admanager
- **Amazon APS**: https://aps.amazon.com/aps/support/
- **This Project**: See `AD-REVENUE-INFRASTRUCTURE.md` for detailed technical documentation

---

## Current Status

✅ **Infrastructure Complete**
- Prebid.js configured with 8+ SSPs
- WBID configured with 10+ exchanges
- AdManager component ready
- Article template with 6 ad positions
- Revenue tracking in place

⏳ **Awaiting Configuration**
- Replace placeholder IDs with real credentials (see checklist above)
- Apply for and get approved by ad networks
- Configure actual site/tag IDs from each network

🎯 **Next Action**
1. Apply for Google AdSense (highest priority)
2. Apply for Amazon APS
3. Replace IDs as approvals come in
4. Monitor and optimize based on performance data

---

**Built with Claude Code** 🤖
**For Finn Fretwater's Upstream Thinking** 💪🎸
