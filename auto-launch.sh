#!/bin/bash

echo "🚤 BANJO BOAT TOURS - AUTO-LAUNCH MONITOR"
echo "=========================================="
echo ""
echo "This script will:"
echo "1. Monitor for GitHub Pages enablement"
echo "2. Automatically watch deployment when enabled"
echo "3. Alert you when site is live"
echo ""
echo "Press Ctrl+C to stop monitoring"
echo ""

CHECK_INTERVAL=10  # Check every 10 seconds

while true; do
    # Check if Pages is enabled
    PAGES_STATUS=$(gh api repos/BNYEDAGAWD/banjoboattours-website/pages 2>&1)
    
    if echo "$PAGES_STATUS" | grep -q "Not Found"; then
        echo "⏳ [$(date +%H:%M:%S)] Pages not enabled yet. Checking again in ${CHECK_INTERVAL}s..."
        echo "   👉 Enable at: https://github.com/BNYEDAGAWD/banjoboattours-website/settings/pages"
        sleep $CHECK_INTERVAL
    else
        echo ""
        echo "✅ GITHUB PAGES IS NOW ENABLED!"
        echo ""
        echo "🚀 Triggering deployment..."
        cd /Users/brandon.nye/Documents/CudaCode\ Workspace/projects/banjoboattours
        git commit --allow-empty -m "Deploy: Pages enabled - launching site 🚤"
        git push origin main
        
        echo ""
        echo "⏳ Waiting 15 seconds for workflow to start..."
        sleep 15
        
        echo ""
        echo "👀 Watching deployment..."
        LATEST_RUN=$(gh run list --repo BNYEDAGAWD/banjoboattours-website --limit 1 --json databaseId --jq '.[0].databaseId')
        gh run watch --repo BNYEDAGAWD/banjoboattours-website $LATEST_RUN
        
        echo ""
        echo "🎉 CHECKING IF SITE IS LIVE..."
        LATEST_STATUS=$(gh run list --repo BNYEDAGAWD/banjoboattours-website --limit 1 --json conclusion --jq '.[0].conclusion')
        
        if [ "$LATEST_STATUS" = "success" ]; then
            echo ""
            echo "✅✅✅ SUCCESS! ✅✅✅"
            echo ""
            echo "🌐 YOUR SITE IS LIVE AT:"
            echo "   https://bnyedagawd.github.io/banjoboattours-website"
            echo ""
            echo "🎯 NEXT STEPS:"
            echo "   1. Visit the site and verify it loads"
            echo "   2. Check testimonials and ad slots"
            echo "   3. Test on mobile"
            echo "   4. Add custom domain in Pages settings"
            echo ""
            echo "💰 Revenue optimization ready:"
            echo "   - 20+ ad slots configured"
            echo "   - High-risk advertiser friendly"
            echo "   - Target: \$2k-5k Month 1"
            echo ""
            echo "🚤 THE MUSCULAR BANJO BOAT TOUR GUIDE IS NOW ONLINE!"
        else
            echo ""
            echo "❌ Deployment failed. Check logs:"
            echo "   https://github.com/BNYEDAGAWD/banjoboattours-website/actions"
        fi
        
        break
    fi
done
