# Straviolabs Design System

This document outlines the core design guidelines, color palettes, spacing, typography, and structural components of the Straviolabs project. It ensures visual consistency, premium aesthetics, and responsive layout scaling across all pages.

---

## 1. Brand Identity & Design Principles

Straviolabs represents **precision, reliability, and modern intelligence**. The design system is built to balance a high-tech dark theme (representing deep backend and AI capability) with a clean, highly readable light theme (representing clarity and ease-of-use).

- **Precision**: Pixel-perfect alignment, consistent borders, and geometric grid patterns.
- **Contrast**: Bold transitions from rich obsidian dark backgrounds to bright, minimal workspaces.
- **Relatability**: Simple, legible copy complemented by clear visual metaphors (e.g., interactive 3D spheres, sleek input fields, and intuitive icons).

---

## 2. Core Color Palette

The project uses tailwind colors alongside custom HSL-based tokens to construct deep glows and clean surfaces.

| Name | Hex / Value | Tailwind Class / Custom CSS | Usage |
| :--- | :--- | :--- | :--- |
| **Obsidian Dark** | `#040209` | Custom body background | Base dark theme background |
| **Pure White** | `#FFFFFF` | `bg-white` | Light cards, mega menu dropdowns, scroll navbar |
| **Off-White Tint** | `#FAFAFA` | `bg-[#fafafa]` | Subtle card backgrounds, sidebars |
| **Accent Cobalt** | `#0052cc` | `bg-[#0052cc]` | Primary brand color, logo accents, active links |
| **Accent Indigo** | `#5227FF` | `color="#5227FF"` | Interactive Silk animation, glowing backdrops |
| **Problem Alert** | `#EF4444` | `text-red-400 border-red-900/50 bg-red-950/30` | Red visual alert pills for "The Problem" |
| **Neutral Slate** | `#64748B` | `text-slate-500` | Secondary description text |

---

## 3. Typography Hierarchy

Consistent type scales ensure high legibility and structure. We prioritize a clean sans-serif typeface (system-ui, Apple-system, sans-serif).

- **Section Subtitle**:
  - Style: Uppercase, extra-bold tracking-widest, small font size.
  - Tailwind: `text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase`
- **Main Heading**:
  - Style: Semi-bold, tight tracking, large font.
  - Tailwind: `text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]`
- **Body Text**:
  - Style: Regular weight, relaxed line height, medium slate-grey.
  - Tailwind: `text-base md:text-lg text-slate-500 leading-relaxed font-medium`

---

## 4. Patterns & Grids

### Plus-Grid Overlay (`.grid-bg`)
The system uses custom geometric grids overlaying gradient panels to give a blueprint or computational feel.
- Dark Theme Grid: Subtle white gridlines.
- Light Theme Grid: Subtle slate gridlines (Opacity: 4-8%).
- SVG/CSS Pattern implementation:
  ```css
  .grid-bg {
    background-image:
      linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
    background-size: 24px 24px;
  }
  ```

---

## 5. UI Component Specifications

### 5.1 "The Problem" Split Panel
A high-contrast visual display demonstrating the transition from problem complexity to resolved trust.
- **Left Panel (Problem)**:
  - Background: Pitch black (`#000000`).
  - Badges: Low-opacity dark red pills (`bg-red-500/10 text-red-400 border border-red-500/20`) with clean `XCircle` status icons.
- **Center Overlay (Logo)**:
  - Style: Centered square box overlapping the middle border.
  - Properties: `bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] rounded-2xl w-20 h-20 border border-slate-100 flex items-center justify-center`
  - Logo: A vibrant cobalt blue ribbon/curves logo inside.
- **Right Panel (Solution)**:
  - Background: Deep blue-to-indigo gradient (`bg-gradient-to-br from-blue-500 to-indigo-800`).
  - Overlay: Dense plus-grid.
  - Badges: Jet black high-contrast pills (`bg-black text-white border border-white/10`) with `CheckCircle` or info icons.

### 5.2 "How It Works" Cards
A horizontal grid of three cards demonstrating flow progression:
1.  **Card 01: Input**
    - Grid background (opacity 6%).
    - Custom UI Mockup: A clean input field box with a blinking search cursor indicator.
2.  **Card 02: Intelligence**
    - Raised styling: Pure white background, higher shadow depth (`shadow-2xl`) and subtle border lines.
    - Custom UI Mockup: A centered 3D-like glass gradient sphere pulsing smoothly in the center.
3.  **Card 03: Output**
    - Grid background.
    - Custom UI Mockup: A horizontal group of minimal circular utility buttons (Globe, Dialogue, Star, Dashboard).

---

## 6. Micro-Animations & Interactions

To bring the pages to life, incorporate subtle animations using GSAP or CSS Keyframes:
- **Floating Badges**: Apply infinite sinusoidal vertical translations to floating pills.
- **3D Sphere Pulse**: Card 02's central sphere should have a scale transform oscillation (`scale: 0.96` to `scale: 1.04`) to represent live AI intelligence.
- **Horizontal Sliders**: Scroll/pan badge arrays slightly on hover for visual depth.
