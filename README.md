# Sarastra Labs

**Software · AI · Digital · Education**

---

## About Us

**Sarastra Labs** is a technology-first venture built for the builders of tomorrow. We deliver software services, AI agents, digital marketing, and project support — all under one roof.

The name *Sarastra* draws from depth and direction — like a thousand threads woven into one powerful system. We are that system: versatile, adaptive, and always evolving.

### Mission
Empower businesses and students with technology that works — fast, smart, and future-ready.

### Vision
To be the innovation engine for the next generation of Indian tech ventures.

---

## What We Build

### 01 — Software Services
Custom web & mobile apps, APIs, SaaS products, and end-to-end development.

### 02 — Digital Marketing
SEO, social, paid ads, brand strategy — data-driven growth for every business.

### 03 — Website Design
High-converting landing pages, portfolio sites, and e-commerce storefronts.

### 04 — AI Agents
Custom AI automation — chatbots, workflows, and intelligent systems for your business.

### 05 — NexGen Projects
Industry-grade student & early-career projects — real problems, real solutions, real portfolio.

### 06 — Labs Launchpad
Internships & open-source programs — the bridge from classroom to the real tech world.

---

## Brand Identity

### Colors
- **Ignition Orange** (#FF5C00) - Primary, CTA, Accent
- **Deep Space** (#0A0A0A) - Text, Backgrounds, UI
- **Signal White** (#FFFFFF) - Backgrounds, Contrast

### Typography
- **Inter Tight** - Headlines, Display
- **Inter** - Body, UI, Labels

### Brand Voice
We speak with confidence, not arrogance. We're future-forward, student-first, and never corporate-speak. We don't just build software — we build momentum.

---

## Contact

- **Email**: info@sarastralabs.com
- **Phone**: +91-9353622801, +91-9741447767
- **Location**: India

### Follow Us
- [LinkedIn](https://www.linkedin.com/company/sarastralabs)
- [X (Twitter)](https://x.com/LabsSarastra)
- [Instagram](https://www.instagram.com/sarastra.labs/)
- [YouTube](https://www.youtube.com/@sarastralabs)

---

## Instagram feed ("Latest insights")

The Insights section on the home page and `/blog` shows the latest posts from
Instagram when `INSTAGRAM_ACCESS_TOKEN` is set, and the built-in articles when
it is not. Posts are cached and refreshed at most once an hour (`lib/instagram.ts`).

1. Make sure the Instagram account is a **Professional** account (Business or Creator).
2. At [developers.facebook.com](https://developers.facebook.com/), create an app,
   add the **Instagram** product and choose *API setup with Instagram login*.
3. Add the Instagram account under *Generate access tokens* and generate a token
   (it is a long-lived token, valid for 60 days).
4. Set it as `INSTAGRAM_ACCESS_TOKEN` in Vercel (Project → Settings →
   Environment Variables) and redeploy. Locally, put it in `.env.local`
   (see `.env.example`).

Renewing: long-lived tokens expire after 60 days. Refresh before then with
`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=<TOKEN>`
and update the environment variable. If the token expires, the site quietly
falls back to the built-in articles.

---

© 2025 Sarastra Labs. All rights reserved.
