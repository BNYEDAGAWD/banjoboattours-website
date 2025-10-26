# 🚀 Enable GitHub Pages - Step-by-Step Guide

## The Issue

GitHub Pages is not enabled yet, causing deployment failures. You need to enable it manually through the repository settings.

## Quick Fix (5 minutes)

### Step 1: Go to Repository Settings

1. Visit: **https://github.com/BNYEDAGAWD/banjoboattours-website/settings/pages**
2. Or navigate: Repository → Settings → Pages (in left sidebar)

### Step 2: Enable GitHub Pages

Under **"Build and deployment"**:

1. **Source**: Select **"GitHub Actions"** from the dropdown
   - (NOT "Deploy from a branch")

2. Click **Save** if there's a save button

### Step 3: Verify Setup

After enabling, you should see:
- A message saying "Your site is ready to be published"
- The Actions workflow will automatically run on the next push

### Step 4: Configure Custom Domain (Optional but Recommended)

Still in the Pages settings:

1. Scroll to **"Custom domain"** section
2. Enter: `banjoboattours.tours`
3. Click **Save**
4. Check **"Enforce HTTPS"** (will be available after DNS propagates)

## What This Does

Once enabled:
- Every push to `main` automatically triggers deployment
- Your site will be available at: `https://bnyedagawd.github.io/banjoboattours-website`
- Custom domain (after DNS setup): `https://banjoboattours.tours`

## Verify It's Working

### Option 1: Check GitHub Actions

1. Go to: https://github.com/BNYEDAGAWD/banjoboattours-website/actions
2. You should see workflows with green checkmarks ✅

### Option 2: Visit the Site

After successful deployment:
- Temporary URL: https://bnyedagawd.github.io/banjoboattours-website
- Should show the hero with "We Love Two Things: 1. Banjos & 2. Boat Tours"

## Next: Configure DNS

Once GitHub Pages is enabled and working, set up your custom domain:

### Namecheap DNS Setup

1. **Log into Namecheap**
2. **Go to**: Domain List → banjoboattours.tours → Advanced DNS
3. **Delete** any existing A Records and URL Redirects
4. **Add these 4 A Records**:

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

5. **Add CNAME Record**:

```
Type: CNAME Record
Host: www
Value: BNYEDAGAWD.github.io
TTL: Automatic
```

6. **Save all changes**

### Wait for DNS Propagation

- **Time**: 24-48 hours (usually faster)
- **Check progress**: https://www.whatsmydns.net/#A/banjoboattours.tours
- **When ready**: Your site will be live at https://banjoboattours.tours

## Troubleshooting

### "Pages not enabled" error
- Make sure you selected "GitHub Actions" as the source (not "Deploy from a branch")

### "Build failed" in Actions
- Check if the build succeeds locally: `npm run build`
- Review error logs at: https://github.com/BNYEDAGAWD/banjoboattours-website/actions

### Custom domain shows error
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct at Namecheap
- Make sure CNAME file exists in `/public/` directory (it does!)

## Expected Timeline

- **Now**: Enable GitHub Pages (5 minutes)
- **5 minutes later**: First successful deployment
- **Immediate**: Site live at temporary URL
- **Set up DNS**: Configure Namecheap (10 minutes)
- **24-48 hours**: Custom domain propagates
- **Then**: banjoboattours.tours is LIVE with maximum ad revenue potential! 🚤💰

---

**Current Status**: ⏳ Waiting for you to enable GitHub Pages

**Next Status**: ✅ Live and collecting ad impressions

**Final Status**: 💰 Making $2k-5k/month from confused visitors who don't know where they're going

Let's get this muscular banjo-playing boat tour guide LIVE! 💪🪕
