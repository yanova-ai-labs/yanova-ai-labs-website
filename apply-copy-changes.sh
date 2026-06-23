#!/bin/bash
set -e
echo "🚀 Applying Yanova copy upgrades..."

find app -name "*.tsx" -exec sed -i '' 's/Yanova AI Labs is an AI-powered enterprise product company focused on automation, observability, cloud operations, analytics, and intelligent decision-making\./Yanova AI Labs helps organizations simplify operations, accelerate innovation, and gain real-time intelligence through AI-powered automation and observability./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/Led by founder Venkat Yanapothula, Yanova AI Labs builds practical AI products for automation, observability, analytics, and business intelligence\./Under the leadership of Venkat Yanapothula, Yanova AI Labs is building the next generation of intelligent automation and observability platforms for modern enterprises./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/Founded by Venkat Yanapothula/Under the leadership of Venkat Yanapothula/g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/One-click infrastructure and Kubernetes deployment automation\./Deploy production-ready cloud and Kubernetes environments in minutes./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/AI-powered operations assistant for incidents, alerts, insights, and remediation\./Detect issues, identify root causes, and automate remediation using AI./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/Unified logs, metrics, traces, alerts, and real-time system visibility\./Monitor logs, metrics, traces, and alerts from a single platform./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/Real-time user, product, business, and executive dashboards\./Track users, products, revenue, and operational performance through intelligent dashboards./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/AI-powered stock market intelligence, portfolio tracking, alerts, and analytics\./AI-powered stock insights, portfolio monitoring, and market intelligence./g' {} \; 2>/dev/null || true

find app -name "*.tsx" -exec sed -i '' 's/Become a leading AI company\./To empower every business with intelligent automation, real-time insights, and AI-driven decision making./g' {} \; 2>/dev/null || true

find app -name "*.ts" -exec sed -i '' 's/One-click infrastructure and Kubernetes deployment automation\./Deploy production-ready cloud and Kubernetes environments in minutes./g' {} \; 2>/dev/null || true
find app -name "*.ts" -exec sed -i '' 's/AI-powered operations assistant for incidents, alerts, insights, and remediation\./Detect issues, identify root causes, and automate remediation using AI./g' {} \; 2>/dev/null || true
find app -name "*.ts" -exec sed -i '' 's/Unified logs, metrics, traces, alerts, and real-time system visibility\./Monitor logs, metrics, traces, and alerts from a single platform./g' {} \; 2>/dev/null || true
find app -name "*.ts" -exec sed -i '' 's/Real-time user, product, business, and executive dashboards\./Track users, products, revenue, and operational performance through intelligent dashboards./g' {} \; 2>/dev/null || true
find app -name "*.ts" -exec sed -i '' 's/AI-powered stock market intelligence, portfolio tracking, alerts, and analytics\./AI-powered stock insights, portfolio monitoring, and market intelligence./g' {} \; 2>/dev/null || true

echo "✅ Text replacements done"
echo ""
echo "📋 Files changed:"
git diff --name-only

echo ""
read -p "👀 Look good? Press Enter to commit & push, or Ctrl+C to cancel: "

git add -A
git commit -m "feat: upgrade website copy — outcome-focused language across all pages"
git push origin main

echo ""
echo "✅ PUSHED! Vercel will deploy in ~1-2 minutes."
echo "   Check: https://yanovalabs.com"
