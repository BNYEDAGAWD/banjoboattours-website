#!/bin/bash

# Banjo Boat Tours - GitHub Pages Enablement Verification Script
# This script helps verify if GitHub Pages is enabled and monitors deployment

echo "🚤 BANJO BOAT TOURS - GITHUB PAGES VERIFICATION"
echo "================================================"
echo ""

# Check if Pages is enabled by attempting to get Pages info
echo "Checking GitHub Pages status..."
PAGES_STATUS=$(gh api repos/BNYEDAGAWD/banjoboattours-website/pages 2>&1)

if echo "$PAGES_STATUS" | grep -q "Not Found"; then
    echo "❌ GitHub Pages is NOT enabled yet"
    echo ""
    echo "📋 MANUAL ACTION REQUIRED:"
    echo "   1. Visit: https://github.com/BNYEDAGAWD/banjoboattours-website/settings/pages"
    echo "   2. Under 'Build and deployment' → Source"
    echo "   3. Select: 'GitHub Actions'"
    echo "   4. Save (if prompted)"
    echo ""
    echo "   Then run this script again to verify!"
    exit 1
else
    echo "✅ GitHub Pages IS ENABLED!"
    echo ""
    echo "📊 Pages Configuration:"
    echo "$PAGES_STATUS" | jq -r '
        "   Status: \(.status // "unknown")",
        "   URL: \(.html_url // "pending")",
        "   Custom Domain: \(.cname // "not configured")",
        "   HTTPS: \(.https_enforced // false)"
    '
    echo ""

    # Check latest deployment
    echo "🔍 Checking latest deployment..."
    LATEST_RUN=$(gh run list --repo BNYEDAGAWD/banjoboattours-website --limit 1 --json databaseId,status,conclusion,createdAt,displayTitle)

    echo "$LATEST_RUN" | jq -r '.[0] |
        "   Run ID: \(.databaseId)",
        "   Status: \(.status)",
        "   Conclusion: \(.conclusion // "in progress")",
        "   Title: \(.displayTitle)",
        "   Created: \(.createdAt)"
    '

    echo ""

    # Check if deployment succeeded
    CONCLUSION=$(echo "$LATEST_RUN" | jq -r '.[0].conclusion')
    if [ "$CONCLUSION" = "success" ]; then
        echo "✅ Latest deployment SUCCEEDED!"
        echo ""
        echo "🎉 YOUR SITE IS LIVE!"
        echo "   → https://bnyedagawd.github.io/banjoboattours-website"
        echo ""
        echo "🌐 Next Steps:"
        echo "   1. Visit the site and verify it loads"
        echo "   2. Check that all ad slots are visible"
        echo "   3. Test mobile responsiveness"
        echo "   4. Add custom domain: banjoboattours.tours (in Pages settings)"
        echo "   5. Wait 24-48 hours for DNS to propagate"
    elif [ "$CONCLUSION" = "failure" ]; then
        echo "❌ Latest deployment FAILED"
        echo ""
        echo "View logs: https://github.com/BNYEDAGAWD/banjoboattours-website/actions"
    else
        echo "⏳ Deployment in progress..."
        echo ""
        echo "Watching deployment (Ctrl+C to stop)..."
        gh run watch --repo BNYEDAGAWD/banjoboattours-website $(echo "$LATEST_RUN" | jq -r '.[0].databaseId')
    fi
fi
