# 🚤 BANJO BOAT TOURS - LAUNCH CHECKLIST

## ✅ COMPLETED (Ready to Deploy)

- [x] Next.js website built and optimized
- [x] 20+ ad slots strategically placed
- [x] Hero section with iconic tagline
- [x] 6 hilarious testimonials about not knowing location
- [x] Photo gallery placeholders (💪🪕)
- [x] Mobile-responsive design
- [x] GitHub repository created
- [x] GitHub Actions workflow configured
- [x] CNAME file for custom domain
- [x] Zero brand safety filters (maximum revenue mode)
- [x] Intentionally vague marketing copy
- [x] All location references removed
- [x] Code committed and pushed

## 🎯 IMMEDIATE ACTIONS (Do This Now - 10 Minutes)

### 1. Enable GitHub Pages ⏳
**URL**: https://github.com/BNYEDAGAWD/banjoboattours-website/settings/pages

**Steps**:
1. Click the link above
2. Under "Build and deployment" → Source: Select **"GitHub Actions"**
3. Save
4. Wait 2-3 minutes for first deployment

**Expected Result**: Green checkmark in Actions tab

**Verification**: https://bnyedagawd.github.io/banjoboattours-website should load

---

### 2. Configure Namecheap DNS ⏳
**URL**: https://ap.www.namecheap.com/domains/domaincontrolpanel/banjoboattours.tours/advancedns

**Steps**:

**A. Delete Existing Records**
- Remove any existing A Records
- Remove any URL Redirect Records
- Remove parking page redirects

**B. Add 4 A Records** (for apex domain):
```
Host: @  |  Value: 185.199.108.153  |  TTL: Automatic
Host: @  |  Value: 185.199.109.153  |  TTL: Automatic
Host: @  |  Value: 185.199.110.153  |  TTL: Automatic
Host: @  |  Value: 185.199.111.153  |  TTL: Automatic
```

**C. Add CNAME Record** (for www):
```
Host: www  |  Value: BNYEDAGAWD.github.io  |  TTL: Automatic
```

**Expected Result**: DNS propagation begins (24-48 hours)

**Verification**: https://www.whatsmydns.net/#A/banjoboattours.tours

---

### 3. Add Custom Domain to GitHub Pages ⏳

**After DNS is propagating** (can do immediately):

1. Go to: https://github.com/BNYEDAGAWD/banjoboattours-website/settings/pages
2. Scroll to "Custom domain"
3. Enter: `banjoboattours.tours`
4. Click Save
5. Wait for DNS check to pass
6. Check "Enforce HTTPS" when available

**Expected Result**: Custom domain configured

**Verification**: https://banjoboattours.tours will work after DNS propagates

---

## 📊 POST-LAUNCH (Next 24-48 Hours)

### 4. Monitor DNS Propagation
- [ ] Check https://www.whatsmydns.net/#A/banjoboattours.tours every few hours
- [ ] Should see GitHub Pages IPs globally within 24 hours
- [ ] Test http://banjoboattours.tours (should redirect to HTTPS)
- [ ] Test https://www.banjoboattours.tours (should redirect to apex)

### 5. Verify Site Functionality
- [ ] All ad slots loading (placeholders visible)
- [ ] Hero tagline displays correctly
- [ ] Testimonials render properly
- [ ] Mobile responsive on phone
- [ ] No console errors
- [ ] Lighthouse score >80

---

## 🎨 CONTENT PHASE (Week 1-2)

### 6. Photography Specifications

**Critical Images Needed** (6 total for gallery):

**Image 1: "The Flex"**
- Muscular guide playing banjo
- Biceps prominently featured
- Outdoor/water setting
- Aspect ratio: 3:4 (portrait)
- Size: 1200x1600px minimum

**Image 2: "Gator Wrestling"**
- Action shot fighting alligator
- One hand on gator, one on banjo strings
- Dramatic lighting
- Aspect ratio: 3:4
- Size: 1200x1600px minimum

**Image 3: "The Performance"**
- Close-up of banjo playing
- Muscular forearms/hands visible
- Artistic framing
- Aspect ratio: 3:4
- Size: 1200x1600px minimum

**Image 4: "On The Water"**
- Guide on boat (no location identifiers)
- Generic water background
- Can't tell which river
- Aspect ratio: 3:4
- Size: 1200x1600px minimum

**Image 5: "Action Shot"**
- Mid-performance energy
- Crowd reaction optional
- Peak masculinity
- Aspect ratio: 3:4
- Size: 1200x1600px minimum

**Image 6: "The Legend"**
- Hero portrait
- Banjo + muscles
- Confident pose
- Aspect ratio: 3:4
- Size: 1200x1600px minimum

**File Names**:
- `the-flex.jpg`
- `gator-wrestling.jpg`
- `the-performance.jpg`
- `on-the-water.jpg`
- `action-shot.jpg`
- `the-legend.jpg`

**Upload Location**: `/public/images/`

---

## 💰 MONETIZATION PHASE (Week 2-4)

### 7. Google Ad Manager Setup

**URL**: https://admanager.google.com

**Create Ad Units** (match slot IDs in code):

**Header Slots**:
- `div-gpt-ad-header-1` → 970x250, 728x90, 320x50

**Sidebar Slots**:
- `div-gpt-ad-sidebar-left` → 160x600, 120x600
- `div-gpt-ad-sidebar-right` → 300x600, 160x600

**Gallery Slots**:
- `div-gpt-ad-gallery-top` → 970x250, 728x90, 320x50
- `div-gpt-ad-gallery-0` through `div-gpt-ad-gallery-5` → 728x90, 320x50, 300x250
- `div-gpt-ad-gallery-mid` → 970x250, 728x90
- `div-gpt-ad-gallery-bottom` → 970x250, 728x90

**Content Slots**:
- `div-gpt-ad-pre-gallery` → 970x250, 728x90, 320x100
- `div-gpt-ad-post-gallery-1` → 970x250, 728x90
- `div-gpt-ad-post-gallery-2` → 970x90, 728x90, 320x50
- `div-gpt-ad-content-native` → 300x250, 336x280, fluid

**Footer Slots**:
- `div-gpt-ad-pre-footer-1` → 970x250, 728x90
- `div-gpt-ad-pre-footer-2` → 728x90, 320x50
- `div-gpt-ad-footer-1` → 728x90, 970x90, 320x50
- `div-gpt-ad-footer-2` → 728x90, 468x60, 320x50
- `div-gpt-ad-footer-3` → 728x90, 320x50

**Mobile**:
- `div-gpt-ad-anchor` → 320x50, 300x50

**Replace placeholder network code**: Currently `/22934824676/` - update with your GAM network ID

---

### 8. Prebid.js Configuration

**Build Custom Prebid**:
1. Go to: http://prebid.org/download.html
2. Select bidder adapters:
   - The Trade Desk
   - Amazon TAM
   - Google Ad Exchange
   - Index Exchange
   - OpenX
   - PubMatic
   - Rubicon Project
3. Download custom build
4. Replace CDN link in `app/layout.tsx`

**Configure High-Risk Bidders**:
- Adult dating networks (Premium CPMs)
- Gambling platforms (DraftKings, FanDuel)
- Supplement companies
- Crypto/trading platforms

---

### 9. High-Risk Advertiser Outreach

**Direct Deals** (bypass exchanges for max revenue):

**Adult Category**:
- Trojan Condoms
- Astroglide
- Adult dating networks
- Supplement companies (Nugenix, etc.)

**Gambling**:
- DraftKings
- FanDuel
- BetMGM
- Casino platforms

**Crypto/Trading**:
- Coinbase
- Robinhood
- Trading platforms

**Contact Method**: Media kits + direct email to brand partnerships

---

## 📈 ANALYTICS & TRACKING (Week 1)

### 10. Set Up Tracking

- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Hotjar heatmaps
- [ ] Ad viewability tracking
- [ ] Revenue dashboard

---

## 🎯 SUCCESS METRICS

### Week 1 Targets:
- [ ] 1,000 page views
- [ ] 70%+ ad viewability
- [ ] $15+ CPM average
- [ ] $100-300 ad revenue

### Month 1 Targets:
- [ ] 10,000 page views
- [ ] 75%+ ad viewability
- [ ] $20+ CPM average
- [ ] $2,000-5,000 ad revenue

### Month 3 Targets:
- [ ] 30,000 page views
- [ ] 80%+ ad viewability
- [ ] $25+ CPM average
- [ ] $5,000-12,000 ad revenue

---

## 🚀 MARKETING STRATEGY

### Viral Potential Tactics:

**Social Media**:
- TikTok: Action clips of banjo + gator wrestling
- Instagram: Muscular guide photos with vague captions
- Reddit: r/funny, r/wtf posts about the mysterious tour
- Twitter: "I went on a tour and still don't know where" tweets

**Content Ideas**:
- "We Never Tell You Where" video series
- "Ask No Questions" campaign
- User-generated "Where am I?" posts
- Meme-able testimonial graphics

**SEO Keywords** (intentionally vague):
- "mysterious boat tour"
- "banjo boat experience"
- "don't ask questions just book"
- "muscular tour guide"
- "somewhere boat tour"

---

## 📋 FINAL VERIFICATION

**Before Declaring Victory**:
- [ ] Site loads at banjoboattours.tours
- [ ] HTTPS certificate valid
- [ ] All 20+ ad slots rendering
- [ ] Mobile anchor ad working
- [ ] Testimonials all display
- [ ] No broken links
- [ ] Images uploaded and loading
- [ ] Ad refresh functioning
- [ ] Revenue tracking active

---

## 🎉 LAUNCH DAY ANNOUNCEMENT

**When Everything is Live**:

### Tweet/Post:
> "We love two things: 1. Banjos & 2. Boat Tours
>
> Where? Somewhere.
> How long? Yes.
> What river? [banjo sounds]
>
> banjoboattours.tours
>
> No questions. Just vibes. 💪🪕🚤"

### Reddit Post:
> "I created a boat tour website and intentionally left out which river it's on. AMA."

---

**CURRENT STATUS**: Code complete, awaiting GitHub Pages enablement

**NEXT STATUS**: Live site, DNS propagating

**FINAL STATUS**: Maximum ad revenue from minimum information 🚤💰

**LET'S GO!** 💪🪕
