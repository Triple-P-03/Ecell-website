# 🚀 RBU ECELL Website

A dynamic, animated, and responsive multi-page website for **RamdeoBaba University's Entrepreneurship Cell (RBU ECELL)**. Designed to engage college students, showcase internship and funding opportunities, and celebrate entrepreneurial achievements.

---

## 🎯 Project Overview

**Title:** RBU ECELL  
**Tech Stack:** HTML, CSS, JavaScript, Framer Motion (React), SVG patterns  
**Design Theme:**  
- Light mode with **white-orange** color scheme  
- Transparent UI elements  
- Accent colors adapt to selected theme  
- Fancy scroll animations and fade-in effects  
- Sliding navbar and animated logo loader  
- SVG background patterns for visual depth

---

## 🧭 Pages Structure

Each section is built as a separate route/page using React Router or Framer's page linking system.

### 1️⃣ Home
- Hero section with animated logo loader
- Highlights 1–2 featured internship offers
- CTA button linking to **Offerings** page
- Scroll-triggered SVG background patterns
- Newsletter subscription form

### 2️⃣ Offerings
- Full list of internships and funding opportunities
- Cards with hover animations and filters
- Dynamic scaling for mobile and desktop
- Scroll fade-in effects for each offer

### 3️⃣ About Us
- Team member profiles with LinkedIn links
- Special mentions and contributors
- Animated grid layout with staggered entrance
- Image references: `img1`, `img2`, `img3`, ...

### 4️⃣ Events
- Timeline of past and upcoming events
- Interactive calendar or carousel
- Scroll-triggered animations and SVG accents
- Image references: `img4`, `img5`, `img6`, ...

### 5️⃣ More
- Subsections:
  - 🏆 Achievements
  - 🚀 Funded Ventures & Startups
  - 🧪 Incubation Programs
  - 👨‍💻 Made By (Credits)
- Modular layout with animated tabs
- Image references: `img7`, `img8`, `img9`, ...

---

## 🧩 Key Features

- 🎨 **Framer Motion Animations**: Smooth transitions, fade-ins, and scroll reveals
- 🧭 **Sliding Navbar**: Responsive and animated with theme toggle
- 📩 **Newsletter Subscription**: Email input with validation and confirmation animation
- 🖼️ **SVG Backgrounds**: Custom patterns using `<svg>` syntax for scroll sections
- 🔄 **Theme Adaptability**: Accent colors shift based on selected theme
- 🖼️ **Image Indexing**: All images numbered (`img1` to `img9`) for easy swapping

---

## 🖌️ Styling Notes

- Fonts: Modern sans-serif (e.g., Inter, Poppins)
- Buttons: Rounded, glassmorphic with hover glow
- Cards: Transparent with subtle shadows
- Animations: Framer Motion `fadeIn`, `slideIn`, `staggerChildren`
- SVG Patterns: Use `<pattern>` and `<defs>` for reusable backgrounds

---

## 📦 Installation & Setup

```bash
git clone https://github.com/Triple-P-03
cd rbu-ecell
npm install
npm start