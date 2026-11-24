/**
 * FRIENDS STUDIO - LUXURY CINEMATIC EXPERIENCE CONTROLLER
 * Handles:
 *  - Background Video management & Fallbacks
 *  - Masonry Gallery rendering & Category Filtering
 *  - Fullscreen Image Lightbox with Keyboard & Touch controls
 *  - Showreel Video Lightbox Player
 *  - Services & Testimonials dynamic binding
 *  - Booking modal & interactive quotation calculation
 *  - Resilient image fallback handlers
 */

document.addEventListener("DOMContentLoaded", () => {
  // Load data from window namespace
  const data = window.FRIENDS_STUDIO_DATA;
  if (!data) {
    console.error("FRIENDS_STUDIO_DATA catalog not found.");
    return;
  }

  // State Management
  let currentFilter = "all";
  let activeGalleryItems = [...data.GALLERY];
  let currentLightboxIndex = 0;
  let isVideoMuted = true;
  let isVideoPlaying = true;

  // DOM Elements
  const heroVideo = document.getElementById("heroBackgroundVideo");
  const heroVideoToggle = document.getElementById("videoToggleBtn");
  const heroSoundToggle = document.getElementById("soundToggleBtn");
  const heroStatusText = document.getElementById("heroStatusText");
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const showreelGrid = document.getElementById("showreelGrid");
  const servicesGrid = document.getElementById("servicesGrid");
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  const siteNav = document.getElementById("siteNav");

  // Modals
  const imageLightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxSpecs = document.getElementById("lightboxSpecs");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxClose = document.getElementById("lightboxClose");

  const videoLightbox = document.getElementById("videoLightbox");
  const videoModalPlayer = document.getElementById("videoModalPlayer");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoModalSpecs = document.getElementById("videoModalSpecs");
  const videoLightboxClose = document.getElementById("videoLightboxClose");

  const bookingModal = document.getElementById("bookingModal");
  const openBookingBtns = document.querySelectorAll(".open-booking-btn");
  const closeBookingBtn = document.getElementById("closeBookingBtn");
  const bookingForm = document.getElementById("bookingForm");

  // Mobile Navigation
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");

  /* ==========================================================================
     1. HERO VIDEO CONTROLS & RESILIENT LOADING
     ========================================================================== */
  function setupHeroVideo() {
    if (!heroVideo) return;

    // Autoplay attempt with fallback promise handling
    heroVideo.muted = true;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isVideoPlaying = true;
          if (heroStatusText) heroStatusText.textContent = "4K Cinema Stream • Live";
        })
        .catch(() => {
          // If browser policy blocks autoplay, keep fallback background visible
          isVideoPlaying = false;
          if (heroStatusText) heroStatusText.textContent = "Click to Play Reel";
          if (heroVideoToggle) heroVideoToggle.innerHTML = '<i class="fas fa-play"></i>';
        });
    }

    // Toggle Play / Pause
    if (heroVideoToggle) {
      heroVideoToggle.addEventListener("click", () => {
        if (heroVideo.paused) {
          heroVideo.play();
          heroVideoToggle.innerHTML = '<i class="fas fa-pause"></i>';
          isVideoPlaying = true;
          if (heroStatusText) heroStatusText.textContent = "4K Cinema Stream • Live";
        } else {
          heroVideo.pause();
          heroVideoToggle.innerHTML = '<i class="fas fa-play"></i>';
          isVideoPlaying = false;
          if (heroStatusText) heroStatusText.textContent = "Paused";
        }
      });
    }

    // Toggle Sound (Default: Muted)
    if (heroSoundToggle) {
      heroSoundToggle.addEventListener("click", () => {
        if (heroVideo.muted) {
          heroVideo.muted = false;
          isVideoMuted = false;
          heroSoundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
          if (heroStatusText) heroStatusText.textContent = "Audio Enabled";
        } else {
          heroVideo.muted = true;
          isVideoMuted = true;
          heroSoundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
          if (heroStatusText) heroStatusText.textContent = "Audio Muted";
        }
      });
    }

    // Handle video load error gracefully
    heroVideo.addEventListener("error", () => {
      console.warn("Hero video stream error. Activating cinematic fallback poster.");
      heroVideo.style.display = "none";
      const fallback = document.querySelector(".hero-fallback-bg");
      if (fallback) fallback.style.opacity = "1";
    });
  }

  /* ==========================================================================
     2. SVG FALLBACK GENERATOR (Never show broken image icons)
     ========================================================================== */
  function getFallbackSvgUrl(title, category) {
    const encodedTitle = encodeURIComponent(title || "Friends Studio Masterpiece");
    const encodedCategory = encodeURIComponent(category || "Fine Art Photography");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#1c1c24" />
            <stop offset="100%" stop-color="#08080a" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <rect x="20" y="20" width="760" height="560" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-opacity="0.3" rx="8" />
        <circle cx="400" cy="250" r="54" fill="none" stroke="#d4af37" stroke-width="2" stroke-opacity="0.6" />
        <path d="M375,250 L425,250 M400,225 L400,275" stroke="#d4af37" stroke-width="2" stroke-opacity="0.8" />
        <text x="400" y="340" fill="#f5e29f" font-family="'Cinzel', Georgia, serif" font-size="22" font-weight="bold" letter-spacing="3" text-anchor="middle">${encodedTitle}</text>
        <text x="400" y="375" fill="#a3a3ad" font-family="sans-serif" font-size="13" letter-spacing="4" text-anchor="middle">${encodedCategory.toUpperCase()}</text>
        <text x="400" y="420" fill="#d4af37" font-family="sans-serif" font-size="11" letter-spacing="2" text-anchor="middle">✦ FRIENDS STUDIO CINEMATIC ARCHIVE ✦</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  /* ==========================================================================
     3. MASONRY GALLERY & CATEGORY FILTERS
     ========================================================================== */
  function renderGallery(items) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";

    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "gallery-card fade-in-up";
      card.setAttribute("data-id", item.id);
      card.setAttribute("data-category", item.category);

      card.innerHTML = `
        <div class="card-media-wrapper">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="gallery-img" 
            loading="lazy" 
            decoding="async"
            onerror="this.onerror=null; this.src='${getFallbackSvgUrl(item.title, item.categoryLabel)}';"
          />
          <div class="card-overlay">
            <div class="card-top-badges">
              <span class="card-category-badge">${item.subCategory || item.categoryLabel}</span>
              <button class="card-expand-btn" aria-label="Expand photo" title="View Fullscreen">
                <i class="fas fa-expand-alt"></i>
              </button>
            </div>
            <div class="card-info">
              <h3 class="card-title">${item.title}</h3>
              <p class="card-caption">${item.caption}</p>
              <div class="card-meta">
                <div class="card-meta-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>${item.location}</span>
                </div>
                <div class="card-meta-item">
                  <i class="fas fa-camera"></i>
                  <span>${item.specs.split("•")[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Click card to open lightbox
      card.addEventListener("click", () => {
        openImageLightbox(index);
      });

      galleryGrid.appendChild(card);
    });

    // Trigger reveal animation
    setTimeout(() => {
      document.querySelectorAll(".gallery-card").forEach((c) => c.classList.add("revealed"));
    }, 50);
  }

  // Filter tab events
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.getAttribute("data-filter");
      if (currentFilter === "all") {
        activeGalleryItems = [...data.GALLERY];
      } else {
        activeGalleryItems = data.GALLERY.filter((item) => item.category === currentFilter);
      }
      renderGallery(activeGalleryItems);
    });
  });

  /* ==========================================================================
     4. FULLSCREEN IMAGE LIGHTBOX
     ========================================================================== */
  function openImageLightbox(index) {
    if (!activeGalleryItems[index]) return;
    currentLightboxIndex = index;
    updateLightboxContent();
    imageLightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeImageLightbox() {
    imageLightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateLightboxContent() {
    const item = activeGalleryItems[currentLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxImg.onerror = () => {
      lightboxImg.src = getFallbackSvgUrl(item.title, item.categoryLabel);
    };

    lightboxTitle.textContent = item.title;
    lightboxCaption.textContent = item.caption;
    lightboxSpecs.textContent = `${item.specs}  |  ${item.location}`;
    lightboxCounter.textContent = `${String(currentLightboxIndex + 1).padStart(2, "0")} / ${String(activeGalleryItems.length).padStart(2, "0")}`;
  }

  function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryItems.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent();
  }

  if (lightboxNext) lightboxNext.addEventListener("click", (e) => { e.stopPropagation(); showNextImage(); });
  if (lightboxPrev) lightboxPrev.addEventListener("click", (e) => { e.stopPropagation(); showPrevImage(); });
  if (lightboxClose) lightboxClose.addEventListener("click", closeImageLightbox);

  // Click outside image to close
  if (imageLightbox) {
    imageLightbox.addEventListener("click", (e) => {
      if (e.target === imageLightbox || e.target.classList.contains("lightbox-content-box")) {
        closeImageLightbox();
      }
    });
  }

  /* ==========================================================================
     5. SHOWREEL SECTION – "OUR STORIES THROUGH THE LENS"
     ========================================================================== */
  function renderShowreels() {
    if (!showreelGrid) return;
    showreelGrid.innerHTML = "";

    data.SHOWREEL.forEach((reel) => {
      const card = document.createElement("div");
      card.className = "showreel-card fade-in-up";

      card.innerHTML = `
        <div class="showreel-video-box">
          <img 
            src="${reel.poster}" 
            alt="${reel.title}" 
            class="showreel-poster" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${getFallbackSvgUrl(reel.title, reel.genre)}';"
          />
          <button class="showreel-play-btn" aria-label="Play ${reel.title}">
            <i class="fas fa-play"></i>
          </button>
          <span class="showreel-res-badge">${reel.resolution}</span>
          <span class="showreel-duration-badge"><i class="far fa-clock"></i> ${reel.duration}</span>
        </div>
        <div class="showreel-content">
          <div class="showreel-type">${reel.type} • ${reel.genre}</div>
          <h3 class="showreel-title">${reel.title}</h3>
          <p class="showreel-synopsis">${reel.synopsis}</p>
          <div class="showreel-footer">
            <div class="showreel-camera-spec">
              <i class="fas fa-video"></i>
              <span>${reel.camera}</span>
            </div>
            <span>${reel.colorGrade}</span>
          </div>
        </div>
      `;

      // Open video lightbox
      card.addEventListener("click", () => {
        openVideoLightbox(reel);
      });

      showreelGrid.appendChild(card);
    });
  }

  function openVideoLightbox(reel) {
    if (!videoLightbox || !videoModalPlayer) return;
    videoModalTitle.textContent = `${reel.title} (${reel.duration})`;
    videoModalSpecs.textContent = `${reel.resolution} • ${reel.camera} • ${reel.colorGrade}`;
    
    // Set video source
    videoModalPlayer.src = reel.videoUrl;
    videoModalPlayer.poster = reel.poster;
    videoLightbox.classList.add("active");
    document.body.style.overflow = "hidden";

    // Play video
    const playPromise = videoModalPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Video playback requires manual interaction:", err);
      });
    }
  }

  function closeVideoLightbox() {
    if (!videoLightbox) return;
    videoModalPlayer.pause();
    videoModalPlayer.src = "";
    videoLightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (videoLightboxClose) videoLightboxClose.addEventListener("click", closeVideoLightbox);
  if (videoLightbox) {
    videoLightbox.addEventListener("click", (e) => {
      if (e.target === videoLightbox) closeVideoLightbox();
    });
  }

  /* ==========================================================================
     6. PHOTOGRAPHY SERVICES SECTION (Distinct High-Res Image per Card)
     ========================================================================== */
  function renderServices() {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = "";

    data.SERVICES.forEach((service) => {
      const card = document.createElement("div");
      card.className = "service-card fade-in-up";

      const featuresHtml = service.features
        .map((feat) => `<li class="service-feature-item">${feat}</li>`)
        .join("");

      card.innerHTML = `
        <div class="service-img-wrapper">
          <img 
            src="${service.image}" 
            alt="${service.title}" 
            class="service-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${getFallbackSvgUrl(service.title, "Premium Service")}';"
          />
          <span class="service-badge">${service.badge}</span>
        </div>
        <div class="service-content">
          <h3 class="service-title">${service.title}</h3>
          <p class="service-tagline">${service.tagline}</p>
          <ul class="service-features">
            ${featuresHtml}
          </ul>
          <div class="service-deliverables">
            <strong>Key Deliverables:</strong> ${service.deliverables}
          </div>
          <button class="btn btn-gold service-btn open-booking-btn" data-service="${service.title}">
            Inquire Package <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      `;

      servicesGrid.appendChild(card);
    });

    // Re-attach booking listeners to new buttons
    attachBookingListeners();
  }

  /* ==========================================================================
     7. TESTIMONIALS SECTION
     ========================================================================== */
  function renderTestimonials() {
    if (!testimonialsGrid) return;
    testimonialsGrid.innerHTML = "";

    data.TESTIMONIALS.forEach((item) => {
      const card = document.createElement("div");
      card.className = "testimonial-card fade-in-up";

      card.innerHTML = `
        <div>
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote">"${item.quote}"</p>
        </div>
        <div class="testimonial-author-box">
          <img 
            src="${item.avatar}" 
            alt="${item.author}" 
            class="testimonial-avatar"
            onerror="this.onerror=null; this.src='${getFallbackSvgUrl(item.author, "Client")}';"
          />
          <div>
            <h4 class="testimonial-author-name">${item.author}</h4>
            <span class="testimonial-author-event">${item.event}</span>
          </div>
        </div>
      `;

      testimonialsGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     8. BOOKING MODAL & CONSULTATION INQUIRY
     ========================================================================== */
  function attachBookingListeners() {
    document.querySelectorAll(".open-booking-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const serviceName = btn.getAttribute("data-service");
        if (serviceName && document.getElementById("bookingServiceSelect")) {
          document.getElementById("bookingServiceSelect").value = serviceName;
        }
        if (bookingModal) {
          bookingModal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });
  }

  if (closeBookingBtn) {
    closeBookingBtn.addEventListener("click", () => {
      bookingModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (bookingModal) {
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = bookingForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Reserving Consultation...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Reservation Requested!';
        submitBtn.style.background = "#22c55e";
        setTimeout(() => {
          alert("Thank you for reaching out to Friends Studio! Our Principal Cinematographer will connect with you within 2 hours to curate your bespoke package.");
          bookingModal.classList.remove("active");
          document.body.style.overflow = "";
          bookingForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = "";
          submitBtn.disabled = false;
        }, 1000);
      }, 1200);
    });
  }

  /* ==========================================================================
     9. GLOBAL KEYBOARD SHORTCUTS & SCROLL OBSERVER
     ========================================================================== */
  window.addEventListener("keydown", (e) => {
    // ESC to close any modal
    if (e.key === "Escape") {
      if (imageLightbox && imageLightbox.classList.contains("active")) closeImageLightbox();
      if (videoLightbox && videoLightbox.classList.contains("active")) closeVideoLightbox();
      if (bookingModal && bookingModal.classList.contains("active")) {
        bookingModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }

    // Lightbox Left/Right navigation
    if (imageLightbox && imageLightbox.classList.contains("active")) {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
    }
  });

  // Sticky Navigation on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      siteNav.classList.add("scrolled");
    } else {
      siteNav.classList.remove("scrolled");
    }

    // Scroll reveal observer
    document.querySelectorAll(".fade-in-up:not(.revealed)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.88) {
        el.classList.add("revealed");
      }
    });
  });

  // Mobile menu toggle
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  /* ==========================================================================
     10. INITIALIZATION
     ========================================================================== */
  setupHeroVideo();
  renderGallery(activeGalleryItems);
  renderShowreels();
  renderServices();
  renderTestimonials();
  attachBookingListeners();

  // Initial trigger for in-viewport elements
  setTimeout(() => {
    document.querySelectorAll(".fade-in-up").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        el.classList.add("revealed");
      }
    });
  }, 100);
});
