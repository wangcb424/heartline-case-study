# Heartline — UX Case Study (Standalone Site)

## Live URLs
- **Case Study Site (GitHub Pages):** https://wangcb424.github.io/heartline-case-study/
- **Main Portfolio:** https://wangcb424.github.io/portfolio/
- **Figma Hi-Fi Prototype:** https://www.figma.com/design/WiRIprCHFzwcm7tHPtfYo0/T4-High-Fidelity-Prototype?node-id=0-1&p=f&t=GrkzfFXiFltwL3iT-0

---

## Overview
This repository contains a standalone **UX case study website** for **Heartline**, a course project focused on helping Northeastern students build real-life friendships with less awkwardness and emotional risk. The website documents the full design process—from needfinding and low-fidelity prototyping to high-fidelity prototyping, user testing, iteration decisions, and future improvements.

This site is linked from my main portfolio as a featured project.

---

## Requirement 1 — Project Case Study (1%)
**How this requirement is met:**
The case study website goes beyond final screens and walks through the full UX process with clear structure and evidence:

- **Problem & POV:** Defines the target user and why initiating in-person friendships feels intimidating/awkward.
- **Needfinding / Task framing:** Captures the key friction points (uncertainty, social risk, decision fatigue) and the usability requirements (low pressure, clarity, trust).
- **Low-Fidelity Prototyping (Lo-Fi):** Includes a **gallery of paper prototype screens** (map, groups, verification, location sharing, contact actions, settings) with captions explaining what each screen tested.
- **High-Fidelity Prototyping (Hi-Fi):** Embeds the **Figma** prototype directly on the website, plus an external link.
- **User Testing Findings:** Summarizes major usability issues discovered (feedback after actions, navigation/map clarity, verification expectation gap, discoverability/search).
- **Iteration & Improvement Directions:** Documents iteration decisions and future directions (e.g., privacy-first location such as “drop-a-pin”, onboarding/tooltips).

---

## Requirement 2 — Deployed & Accessible (1%)
**How this requirement is met:**
- The site is deployed publicly via **GitHub Pages** and accessible at:
  - https://wangcb424.github.io/heartline-case-study/
- Anyone with the URL can open it without logging in.

---

## Requirement 3 — Something that “Wows” (1%)
**How this requirement is met:**
- **Strong visual design:** A clean Heartline-inspired layout and a full-page background gradient (top white → bottom cream yellow) to create a warm, friendly tone.
- **Creative interactions:** 
  - Scroll-based “pop/jump” animation so each section card feels like it “lifts” into place (like organizing files).
  - Micro-interactions on buttons/cards and a back-to-top control.
- **Thoughtful writing:** The narrative is process-first (problem → prototypes → findings → iteration → next steps), showing design reasoning rather than only final visuals.

---

## AI Tool Use (Required)
**Tools used:**
- **ChatGPT** (AI assistant)

**How AI was used:**
- Generated and refined the **site structure** (HTML sections and hierarchy) to match a portfolio case study format.
- Helped transform course deliverables into a **clear, portfolio-style story** (problem → prototype → findings → iterations → next steps).
- Assisted with **CSS design system** decisions (layout, spacing, typography, gradient background) and **interaction code** (scroll reveal “pop” animation, back-to-top behavior).
- Helped troubleshoot deployment issues (pathing for CSS/JS/images, GitHub Pages setup).

**What I did manually:**
- Selected and organized the **low-fi images** and confirmed file paths.
- Verified accuracy of project content (what was tested, what was learned, iteration decisions).
- Final proofreading and GitHub Pages deployment configuration.

---

## Repository Structure
```text
.
├── index.html
├── README.md
└── assets
    ├── styles.css
    ├── main.js
    └── images
        └── lowfi
            ├── group-list.jpg
            ├── location-share.jpg
            ├── upload-id.jpg
            ├── alex-contact.jpg
            ├── route-map.jpg
            ├── nearby-users-map.jpg
            ├── settings.jpg
            └── contact-list.jpg