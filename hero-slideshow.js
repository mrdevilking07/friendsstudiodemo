/**
 * FRIENDS STUDIO - HERO BACKGROUND AUTO-CHANGING SLIDESHOW
 * Built with React 18 (useState, useEffect, useCallback, useRef)
 * 
 * Features:
 * - 6 Curated High-Definition Photography Styles
 * - Continuous infinite loop
 * - Automatic transition every exactly 5000ms
 * - Smooth 1.5-second crossfade transition
 * - Subtle Ken Burns effect (slow zoom & pan)
 * - Next image preloading to prevent flickering or blank screens
 * - Pagination dots with active states
 * - Previous & Next navigation arrows
 * - Accessible and responsive across mobile, tablet, and desktop
 * - Respects prefers-reduced-motion settings
 */

const HERO_SLIDES = [
  {
    id: 1,
    category: "Indian Wedding Photography",
    title: "The Sacred Muhurtham & Mandap Rituals",
    location: "Heritage Palace, Chennai",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
    fallbackColor: "#14110e"
  },
  {
    id: 2,
    category: "Pre-Wedding Couple Photography",
    title: "Golden Coast Sunset Romance",
    location: "Kovalam Shores, ECR",
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=2000&q=85",
    fallbackColor: "#1f1712"
  },
  {
    id: 3,
    category: "Candid Photography",
    title: "Unscripted Joy & Tears",
    location: "Mahabalipuram Sea Breeze",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    fallbackColor: "#13161c"
  },
  {
    id: 4,
    category: "Professional Portrait Photography",
    title: "Chiaroscuro Sculpted Studio Light",
    location: "Friends Studio Master Bay",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=85",
    fallbackColor: "#111114"
  },
  {
    id: 5,
    category: "Fashion Photography",
    title: "Haute Couture Editorial Aesthetic",
    location: "Studio Cyclorama",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85",
    fallbackColor: "#1a1614"
  },
  {
    id: 6,
    category: "Outdoor Cinematic Photography",
    title: "Misty Mountain Pine Horizons",
    location: "Kodaikanal Hill Station",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2000&q=85",
    fallbackColor: "#121815"
  }
];

// Helper: SVG generator for offline resilience
function getSlideFallbackSvg(title, category) {
  const encTitle = encodeURIComponent(title || "Friends Studio");
  const encCat = encodeURIComponent(category || "Photography");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
    <defs>
      <radialGradient id="bg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#181820"/>
        <stop offset="100%" stop-color="#08080a"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="960" cy="500" r="160" fill="none" stroke="#d4af37" stroke-width="2" stroke-opacity="0.35"/>
    <text x="960" y="580" fill="#f5e29f" font-family="'Cinzel', Georgia, serif" font-size="34" letter-spacing="4" text-anchor="middle">${encTitle}</text>
    <text x="960" y="630" fill="#a3a3ad" font-family="sans-serif" font-size="18" letter-spacing="6" text-anchor="middle">${encCat.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * React 18 Hero Slideshow Component
 */
function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const slides = HERO_SLIDES;

  // Preload the next image to guarantee zero-flicker transitions
  React.useEffect(() => {
    const nextIdx = (currentIndex + 1) % slides.length;
    const preloadImg = new Image();
    preloadImg.src = slides[nextIdx].url;
  }, [currentIndex, slides]);

  // Preload all images on initial mount for optimal smooth playback
  React.useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, [slides]);

  // Interval timer: exactly 5000 milliseconds with proper cleanup
  React.useEffect(() => {
    if (isPaused) return;

    const intervalTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [isPaused, slides.length, currentIndex]);

  const goToPrev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = React.useCallback((idx) => {
    setCurrentIndex(idx);
  }, []);

  const currentSlide = slides[currentIndex];

  return React.createElement(
    "div",
    {
      className: "hero-slideshow-container",
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      role: "region",
      "aria-label": "Featured Photography Slideshow"
    },
    // Background Slides Stack
    slides.map((slide, idx) => {
      const isActive = idx === currentIndex;
      return React.createElement(
        "div",
        {
          key: slide.id,
          className: `hero-slide ${isActive ? "active" : ""}`,
          "aria-hidden": !isActive,
          style: { backgroundColor: slide.fallbackColor }
        },
        React.createElement("img", {
          src: slide.url,
          alt: `${slide.category} - ${slide.title}`,
          className: `hero-slide-bg ${isActive ? "ken-burns" : ""}`,
          loading: idx === 0 ? "eager" : "lazy",
          decoding: "async",
          onError: (e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = getSlideFallbackSvg(slide.title, slide.category);
          }
        })
      );
    }),

    // Dark luxury gradient overlay for optimal text contrast
    React.createElement("div", { className: "hero-overlay" }),

    // Previous Arrow
    React.createElement(
      "button",
      {
        className: "slideshow-arrow slideshow-arrow-prev",
        onClick: goToPrev,
        "aria-label": "Previous slide",
        title: "Previous Slide"
      },
      React.createElement("i", { className: "fas fa-chevron-left" })
    ),

    // Next Arrow
    React.createElement(
      "button",
      {
        className: "slideshow-arrow slideshow-arrow-next",
        onClick: goToNext,
        "aria-label": "Next slide",
        title: "Next Slide"
      },
      React.createElement("i", { className: "fas fa-chevron-right" })
    ),

    // Bottom Navigation Bar: Pagination Dots + Category Pill
    React.createElement(
      "div",
      { className: "slideshow-controls-bar" },
      // Category Tag Badge
      React.createElement(
        "div",
        { className: "slideshow-category-pill" },
        React.createElement("span", { className: "slideshow-dot-indicator" }),
        React.createElement(
          "span",
          { className: "slideshow-cat-text" },
          `${String(currentIndex + 1).padStart(2, "0")}/${String(slides.length).padStart(2, "0")} • ${currentSlide.category.toUpperCase()}`
        )
      ),

      // Pagination Dots
      React.createElement(
        "div",
        { className: "slideshow-pagination" },
        slides.map((slide, idx) =>
          React.createElement("button", {
            key: slide.id,
            className: `slideshow-dot ${idx === currentIndex ? "active" : ""}`,
            onClick: () => goToSlide(idx),
            "aria-label": `Go to slide ${idx + 1}: ${slide.category}`,
            title: slide.category
          })
        )
      )
    )
  );
}

/**
 * Mount Initializer with Graceful Fallback
 */
function initHeroSlideshow() {
  const mountNode = document.getElementById("hero-slideshow-root");
  if (!mountNode) return;

  // 1. If React and ReactDOM are available, mount the React 18 component
  if (window.React && window.ReactDOM) {
    try {
      if (typeof ReactDOM.createRoot === "function") {
        const root = ReactDOM.createRoot(mountNode);
        root.render(React.createElement(HeroSlideshow));
        return;
      } else if (typeof ReactDOM.render === "function") {
        ReactDOM.render(React.createElement(HeroSlideshow), mountNode);
        return;
      }
    } catch (err) {
      console.warn("React mount fallback triggered:", err);
    }
  }

  // 2. Resilient Native Vanilla JS Implementation
  // Guarantees identical 5000ms loop, 1.5s crossfade, Ken Burns effect, preloading, and pagination
  let activeIndex = 0;
  let isHovered = false;
  const slides = HERO_SLIDES;

  // Preload all slides
  slides.forEach((s) => {
    const im = new Image();
    im.src = s.url;
  });

  // Render HTML structure
  mountNode.innerHTML = `
    <div class="hero-slideshow-container" id="vanillaSlideshowContainer" role="region" aria-label="Featured Photography Slideshow">
      ${slides
        .map(
          (s, i) => `
        <div class="hero-slide ${i === 0 ? "active" : ""}" id="slide-${i}" style="background-color: ${s.fallbackColor}">
          <img 
            src="${s.url}" 
            alt="${s.category}" 
            class="hero-slide-bg ${i === 0 ? "ken-burns" : ""}" 
            loading="${i === 0 ? "eager" : "lazy"}"
            onerror="this.onerror=null; this.src='${getSlideFallbackSvg(s.title, s.category)}';"
          />
        </div>
      `
        )
        .join("")}
      <div class="hero-overlay"></div>
      <button class="slideshow-arrow slideshow-arrow-prev" id="vPrev" aria-label="Previous slide" title="Previous Slide">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="slideshow-arrow slideshow-arrow-next" id="vNext" aria-label="Next slide" title="Next Slide">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="slideshow-controls-bar">
        <div class="slideshow-category-pill" id="vCatPill">
          <span class="slideshow-dot-indicator"></span>
          <span class="slideshow-cat-text" id="vCatText">01/06 • ${slides[0].category.toUpperCase()}</span>
        </div>
        <div class="slideshow-pagination" id="vPagination">
          ${slides
            .map(
              (s, i) => `
            <button class="slideshow-dot ${i === 0 ? "active" : ""}" data-idx="${i}" aria-label="Go to slide ${i + 1}" title="${s.category}"></button>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById("vanillaSlideshowContainer");
  const catText = document.getElementById("vCatText");
  const dots = document.querySelectorAll("#vPagination .slideshow-dot");

  function updateSlide(nextIndex) {
    const currentEl = document.getElementById(`slide-${activeIndex}`);
    const nextEl = document.getElementById(`slide-${nextIndex}`);

    if (currentEl) {
      currentEl.classList.remove("active");
      const img = currentEl.querySelector(".hero-slide-bg");
      if (img) img.classList.remove("ken-burns");
    }

    if (nextEl) {
      nextEl.classList.add("active");
      const img = nextEl.querySelector(".hero-slide-bg");
      if (img) img.classList.add("ken-burns");
    }

    activeIndex = nextIndex;

    // Update Category text
    if (catText) {
      catText.textContent = `${String(activeIndex + 1).padStart(2, "0")}/${String(slides.length).padStart(2, "0")} • ${slides[activeIndex].category.toUpperCase()}`;
    }

    // Update Dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });

    // Preload next
    const preloadIdx = (activeIndex + 1) % slides.length;
    const pImg = new Image();
    pImg.src = slides[preloadIdx].url;
  }

  // 5000ms Interval with cleanup
  let intervalId = setInterval(() => {
    if (!isHovered) {
      updateSlide((activeIndex + 1) % slides.length);
    }
  }, 5000);

  if (container) {
    container.addEventListener("mouseenter", () => { isHovered = true; });
    container.addEventListener("mouseleave", () => { isHovered = false; });
  }

  const prevBtn = document.getElementById("vPrev");
  const nextBtn = document.getElementById("vNext");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateSlide((activeIndex - 1 + slides.length) % slides.length);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateSlide((activeIndex + 1) % slides.length);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-idx"), 10);
      if (!isNaN(idx)) updateSlide(idx);
    });
  });
}

// Auto-run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroSlideshow);
} else {
  initHeroSlideshow();
}
