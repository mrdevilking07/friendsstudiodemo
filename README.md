# FRIENDS STUDIO – Luxury Cinematic Photography & Wedding Films

A state-of-the-art website crafted for **FRIENDS STUDIO**, embodying an international luxury photography atelier and cinematic wedding film studio.

---

## 🌟 Highlights & Implemented Requirements

### 1. Hero Section – Cinematic Auto-Changing Background Slideshow
- **React 18 Slideshow State Engine**: Built with `useState`, `useEffect`, `useCallback`, and interval timer cleanup for continuous infinite looping.
- **6 Photography Categories**:
  1. *Indian Wedding Photography* (Sacred Muhurtham & Mandap Rituals)
  2. *Pre-Wedding Couple Photography* (Golden Coast Sunset Romance)
  3. *Candid Photography* (Unscripted Joy & Tears)
  4. *Professional Portrait Photography* (Chiaroscuro Sculpted Studio Light)
  5. *Fashion Photography* (Haute Couture Editorial Aesthetic)
  6. *Outdoor Cinematic Photography* (Misty Mountain Pine Horizons)
- **Timing & Transition**: Automatically advances every exactly 5000ms with a smooth 1.5-second crossfade transition.
- **Ken Burns Effect**: Subtle, slow cinematic pan and zoom (`@keyframes kenBurnsZoom`).
- **Zero-Flicker Preloading**: Preloads next upcoming image in advance to prevent any blank frames or flickering.
- **Controls & Indicators**:
  - Small pagination indicators with active pill expansion and gold glow.
  - Previous and Next navigation arrows (`<`, `>`).
  - Active category status pill (e.g. `01/06 • INDIAN WEDDING PHOTOGRAPHY`).
- **Stable Text Overlay**:
  - `FRIENDS STUDIO`
  - `"CAPTURING YOUR BEAUTIFUL MOMENTS"`
  - `Professional Photography | Cinematic Films`
  - Buttons: `EXPLORE OUR WORK` and `BOOK A PHOTOSHOOT`.
  - Content remains rock-stable while background imagery gracefully shifts.
- **Accessibility & Performance**: Respects `prefers-reduced-motion` settings and adapts seamlessly across mobile, tablet, and desktop screens.

### 2. Wedding Photography Gallery
- **Tamil & Indian Traditional Weddings**: Authentic documentation of sacred rituals, Kalyanam, Thali/Mangalsutra blessings, brass Kuthuvilakku lamps, marigold garlands, and Vedic mandap ceremonies.
- **Kanjeevaram Silk & Temple Jewelry**: Detailed bridal portraits capturing the poise of traditional South Indian brides.
- **Candid & Royal Receptions**: Spontaneous emotional laughter, petal showers, and grand evening ballroom portraits.

### 3. Pre-Wedding & Destination Cinema
- **Beach & Sunset Romance**: Golden hour silhouettes, ocean spray, and intimate barefoot beach walks along Kovalam and Pondicherry.
- **Outdoor Landscapes**: Misty hill stations (Kodaikanal pines, Ooty byways), vintage road trips, and scenic aerial perspectives.

### 4. Portrait Photography
- **Creative Lighting & Chiaroscuro**: Caravaggio-inspired dramatic sculptured studio lighting.
- **Haute Couture & Editorial**: High-end fashion portraits, commercial editorial finishes, and beauty headshots.
- **Timeless Monochrome**: Black-and-white studies with rich silver gradation and emotional depth.
- **Cinematic Close-ups**: Catchlights and expressive human storytelling.

### 5. Birthday & Events
- **Milestone Birthdays**: Cake-cutting sparklers, first-year cake smash, and candid family toasts.
- **Grand Galas & Corporate Summits**: Crystal toasts, award handovers, confetti showers, and multi-generational family portraits.

### 6. Photography Services (8 Distinct High-Quality Cards)
Every service card features an exclusive, non-repeating image:
1. **Royal & Traditional Weddings**
2. **Pre-Wedding & Destination Cinema**
3. **Cinematic 4K Wedding Films**
4. **Haute Couture & Fine Art Portraits**
5. **Maternity & Newborn Fine Art**
6. **Birthdays, Galas & Milestones**
7. **Drone Aerials & Live Multi-Cast**
8. **Heirloom Flush-Mount Albums**
Each card includes bulleted features, key deliverables, and an interactive **Inquire Package** trigger.

### 7. Image Gallery Design
- **Masonry Layout**: Responsive fluid columns adapt gracefully across mobile, tablet, and ultra-wide screens.
- **Category Filter Tabs**: Instant filtering by *All Works*, *Weddings & Rituals*, *Pre-Wedding & Sunset*, *Studio & Portraits*, and *Birthdays & Events*.
- **Hover Micro-Interactions**: Smooth scale zoom, soft contrast enhancement, camera EXIF tag preview (e.g. `Sony α1 • 50mm f/1.2 GM`), and location badge.
- **Image Lightbox Modal**: High-resolution viewer with Previous / Next navigation, image counter (`04 / 18`), caption and camera metadata, with full keyboard support (`ArrowLeft`, `ArrowRight`, `Escape`).

### 8. Dedicated Video Showreel Section: "OUR STORIES THROUGH THE LENS"
- Dedicated cinematic showcase featuring 4 film teasers:
  - *The Royal Heritage – Priya & Karthik (Tamil Wedding Cinema)*
  - *Whispers of the Golden Coast – Ananya & Rohit (Beach Pre-Wedding Film)*
  - *Mastering the Craft – Behind the Lens (Studio Documentary & Gear Showcase)*
  - *A Symphony of Joy – The Singhania Gala (Milestone Celebration)*
- Cards feature video poster, glowing gold play button, runtime badge (`03:42`), and 4K UHD indicator.
- **Working Video Modal Player**: Clicking any film launches an HTML5 video lightbox player with playback controls.

### 9. Editorial Gear & Artistry Showcase
- Highlights industry-leading equipment: RED V-Raptor 8K, Sony FX6 Cinema line, Cooke & Zeiss Anamorphic primes, Profoto studio strobes, and DJI Inspire 3 drones.

### 10. Performance & Licensing Compliance
- **Royalty-Free References**: Sourced from permitted libraries (Pexels, Unsplash, Coverr).
- **Embedded SVG Fallbacks**: If external networks or CDNs are unreachable, an inline dark-and-gold SVG canvas renders seamlessly with the photo title and category to eliminate broken image icons.
- **Modern Performance**: `loading="lazy"`, `decoding="async"`, hardware-accelerated CSS transforms.

---

## 📁 File Structure

```
d:/Studio/
├── index.html            # Semantic HTML5 luxury layout
├── css/
│   └── styles.css        # Obsidian & Gold luxury styles, responsive masonry, lightboxes
├── js/
│   ├── gallery-data.js   # Master catalog of photos, showreels, services, and reviews
│   └── main.js           # Video player controller, masonry filtering, modals & listeners
└── README.md             # Project documentation and specifications
```

---

## 🚀 How to View the Website

Double-click `index.html` in your file explorer to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.
All assets, fonts, icons, styles, and interactive scripts will load immediately.
