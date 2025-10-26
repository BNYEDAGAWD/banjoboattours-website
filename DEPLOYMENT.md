# 🚀 Banjo Boat Tours - Deployment Guide

## GitHub Pages Setup

### Step 1: Enable GitHub Pages

1. Go to repository: https://github.com/BNYEDAGAWD/banjoboattours-website
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. The site will deploy automatically on every push to `main`

### Step 2: Configure Custom Domain

In GitHub Pages settings:
1. Under **Custom domain**, enter: `banjoboattours.tours`
2. Check **Enforce HTTPS**
3. Wait for DNS check to pass (may take 24-48 hours)

## Namecheap DNS Configuration

### Step 1: Access Namecheap DNS Settings

1. Log into Namecheap account
2. Go to **Domain List**
3. Find `banjoboattours.tours`
4. Click **Manage** → **Advanced DNS**

### Step 2: Configure A Records

Add these **4 A Records** (delete any existing ones first):

```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic
```

### Step 3: Configure CNAME Record

Add this **CNAME Record**:

```
Type: CNAME Record
Host: www
Value: BNYEDAGAWD.github.io
TTL: Automatic
```

### Step 4: Remove Parking Page

If you see Namecheap parking page:
1. In Advanced DNS, look for URL Redirect Records
2. Delete any records pointing to Namecheap parking
3. Ensure only the A and CNAME records above exist

## SSL Certificate Configuration

### PositiveSSL Certificate (Already Purchased)

- **Order Reference**: 184906925
- **Provider**: PositiveSSL via Namecheap
- **Status**: Active

GitHub Pages will automatically handle SSL after DNS propagation. No manual certificate installation needed.

## Verification Steps

### 1. Check DNS Propagation

Visit: https://www.whatsmydns.net/#A/banjoboattours.tours

You should see the 4 GitHub Pages IP addresses globally.

### 2. Test HTTP Access

Try accessing: http://banjoboattours.tours

Should redirect to HTTPS automatically.

### 3. Test HTTPS Access

Visit: https://banjoboattours.tours

Should show the website with valid SSL certificate.

### 4. Test WWW Subdomain

Visit: https://www.banjoboattours.tours

Should redirect to https://banjoboattours.tours

## Deployment Status

Check deployment status at:
https://github.com/BNYEDAGAWD/banjoboattours-website/actions

Each commit triggers automatic deployment via GitHub Actions.

## Troubleshooting

### "Domain does not resolve to the GitHub Pages server"

**Solution**: Wait 24-48 hours for DNS propagation, or check DNS records are correct.

### "Certificate error" or "Not secure" warning

**Solution**:
1. Verify HTTPS is enforced in GitHub Pages settings
2. Wait for GitHub to provision SSL certificate (can take up to 24 hours)
3. Clear browser cache and try again

### Site shows old Namecheap parking page

**Solution**:
1. Check Advanced DNS settings in Namecheap
2. Remove any URL Redirect Records
3. Ensure only A and CNAME records exist
4. Clear browser cache

### Changes not appearing on live site

**Solution**:
1. Check GitHub Actions deployment status
2. Verify the build succeeded
3. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
4. Wait a few minutes for CDN cache to clear

## Manual Deployment

If you need to manually trigger deployment:

```bash
# From project directory
npm run build

# Commit and push
git add .
git commit -m "Manual deployment"
git push origin main
```

## Ad Integration Next Steps

### Google Ad Manager Setup

1. Create account at: https://admanager.google.com
2. Set up ad units matching slot IDs in the code:
   - `div-gpt-ad-header`
   - `div-gpt-ad-sidebar`
   - `div-gpt-ad-content`
   - `div-gpt-ad-footer`
3. Update network code in `AdSlot.tsx` (currently placeholder: `/22934824676/`)

### Prebid.js Configuration

1. Build custom Prebid.js at: http://prebid.org/download.html
2. Select bidder adapters:
   - The Trade Desk
   - Amazon TAM
   - Google Ad Exchange
3. Replace CDN link in `layout.tsx` with custom build

### DSP Connections

1. **The Trade Desk**: https://desk.thetradedesk.com
2. **Amazon DSP**: https://advertising.amazon.com
3. **Google DV360**: https://displayvideo.google.com

## Performance Monitoring

### Core Web Vitals

Monitor at: https://pagespeed.web.dev/

Target metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Google Analytics

Add Google Analytics 4 tracking:
1. Create property at https://analytics.google.com
2. Add tracking code to `layout.tsx`
3. Monitor traffic and conversions

## Support

For deployment issues:
- GitHub Pages: https://docs.github.com/en/pages
- Namecheap DNS: https://www.namecheap.com/support/knowledgebase/
- Next.js: https://nextjs.org/docs

---

**Deployment Status**: ✅ GitHub Actions Configured | ⏳ Awaiting DNS Propagation

Last Updated: October 25, 2025
