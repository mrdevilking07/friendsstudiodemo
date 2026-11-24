/**
 * FRIENDS STUDIO - Curated Master Catalog
 * High-definition reference assets for Photography & Cinematic Films
 * Categories: Wedding, Pre-Wedding, Portrait, Birthday & Events, Showreels
 */

const GALLERY_DATA = [
  // --- 1. WEDDING PHOTOGRAPHY (Tamil & Indian Traditional, Rituals & Candid) ---
  {
    id: "wed-01",
    title: "The Golden Mandapam Ritual",
    category: "weddings",
    categoryLabel: "Wedding Photography",
    subCategory: "Tamil Traditional Wedding",
    caption: "Sacred fire and thali moment surrounded by kuthuvilakku brass lamps and jasmine garlands.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α1 • 50mm f/1.2 GM • 1/400s • ISO 200",
    location: "Heritage Palace, Chennai",
    featured: true,
    aspect: "landscape"
  },
  {
    id: "wed-02",
    title: "Kanjeevaram Elegance – The Traditional Bride",
    category: "weddings",
    categoryLabel: "Wedding Photography",
    subCategory: "Bride Portraits",
    caption: "Handcrafted temple jewelry and pure crimson silk saree reflecting ancestral poise.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=75",
    specs: "Canon EOS R5 • 85mm f/1.4L • 1/250s • ISO 160",
    location: "Madurai Temple Courtyard",
    featured: true,
    aspect: "portrait"
  },
  {
    id: "wed-03",
    title: "Sacred Henna & Bangles Harmony",
    category: "weddings",
    categoryLabel: "Wedding Photography",
    subCategory: "Wedding Rituals",
    caption: "Intricate bridal mehendi details woven with pure gold glass bangles and jasmine petals.",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?auto=format&fit=crop&w=600&q=75",
    specs: "Nikon Z9 • 105mm f/2.8 Macro • 1/320s • ISO 320",
    location: "Coimbatore Floral Pavilion",
    featured: false,
    aspect: "portrait"
  },
  {
    id: "wed-04",
    title: "Royal Twilight Reception",
    category: "weddings",
    categoryLabel: "Wedding Photography",
    subCategory: "Grand Reception",
    caption: "Groom in tailored sherwani and bride in gilded lehenga under chandelier illumination.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α7R V • 35mm f/1.4 GM • 1/200s • ISO 400",
    location: "Leela Palace Waterfront",
    featured: true,
    aspect: "landscape"
  },
  {
    id: "wed-05",
    title: "Unscripted Tears & Joy – The Candid Vow",
    category: "weddings",
    categoryLabel: "Wedding Photography",
    subCategory: "Candid Moments",
    caption: "Spontaneous laughter shared as flower petals shower the newly wedded couple.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=75",
    specs: "Fujifilm GFX 100S • 63mm f/2.8 • 1/500s • ISO 250",
    location: "Mahabalipuram Sea Breeze Mandap",
    featured: false,
    aspect: "landscape"
  },
  {
    id: "wed-06",
    title: "Floral Blessing & Thali Blessing",
    category: "weddings",
    categoryLabel: "Wedding Photography",
    subCategory: "Rituals & Traditions",
    caption: "Elders showering akshathai and marigold petals during the auspicious muhurtham.",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α1 • 70-200mm f/2.8 GM II • 1/640s • ISO 500",
    location: "Thanjavur Traditional Kalyana Mandapam",
    featured: false,
    aspect: "portrait"
  },

  // --- 2. PRE-WEDDING & DESTINATION ROMANCE ---
  {
    id: "pre-01",
    title: "Sunset Serenade on the Golden Coast",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Cinema",
    subCategory: "Beach Pre-Wedding",
    caption: "Dramatic coastal sunset painting the sky in deep amber as ocean spray kisses the shore.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α7S III • 24-70mm f/2.8 GM • 1/800s • ISO 100",
    location: "Kovalam Shores, ECR",
    featured: true,
    aspect: "landscape"
  },
  {
    id: "pre-02",
    title: "Whispers in the Misty Pines",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Cinema",
    subCategory: "Outdoor Cinematic",
    caption: "Enchanting hill-station shoot surrounded by emerald tea valleys and soft mountain fog.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=75",
    specs: "Hasselblad X2D 100C • 55mm f/2.5 • 1/350s • ISO 100",
    location: "Kodaikanal Pine Forests",
    featured: true,
    aspect: "portrait"
  },
  {
    id: "pre-03",
    title: "Tides of Devotion – Coastal Stroll",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Cinema",
    subCategory: "Beach Pre-Wedding",
    caption: "Barefoot in the tidal surf, capturing spontaneous romance in golden natural backlight.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=75",
    specs: "Canon EOS R5 • 50mm f/1.2L • 1/1000s • ISO 125",
    location: "Pondicherry French Promenade",
    featured: false,
    aspect: "landscape"
  },
  {
    id: "pre-04",
    title: "The Vintage Wanderlust Journey",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Cinema",
    subCategory: "Creative Couple Poses",
    caption: "Classic convertible and open horizons capturing the timeless spirit of beginning forever.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α1 • 28mm f/2 • 1/1200s • ISO 160",
    location: "Ooty Heritage Byways",
    featured: false,
    aspect: "landscape"
  },
  {
    id: "pre-05",
    title: "Golden Hour Embrace",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Cinema",
    subCategory: "Sunset Photography",
    caption: "Warm rays casting delicate rim-lighting across a peaceful lakeside meadow.",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=75",
    specs: "Nikon Z9 • 85mm f/1.2 S • 1/800s • ISO 100",
    location: "Yercaud Hill Viewpoint",
    featured: false,
    aspect: "portrait"
  },

  // --- 3. PORTRAIT PHOTOGRAPHY (Studio, Fashion, Creative Lighting, B&W) ---
  {
    id: "por-01",
    title: "Chiaroscuro & Velvet Shadows",
    category: "portraits",
    categoryLabel: "Studio & Portraits",
    subCategory: "Creative Lighting",
    caption: "Masterful sculptured studio lighting inspired by Renaissance Caravaggio techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75",
    specs: "Profoto B10X Plus • 135mm f/1.8 • 1/160s • ISO 64",
    location: "Friends Studio Master Bay A",
    featured: true,
    aspect: "portrait"
  },
  {
    id: "por-02",
    title: "Editorial Haute Couture Portrait",
    category: "portraits",
    categoryLabel: "Studio & Portraits",
    subCategory: "Fashion Portraits",
    caption: "High-end magazine aesthetic balancing natural beauty, tailored silhouettes and soft diffusion.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α7R V • 85mm f/1.4 GM • 1/200s • ISO 100",
    location: "Friends Studio Cyclorama",
    featured: true,
    aspect: "portrait"
  },
  {
    id: "por-03",
    title: "Timeless Soul – Monochrome Study",
    category: "portraits",
    categoryLabel: "Studio & Portraits",
    subCategory: "Black & White Portraits",
    caption: "Subtle silver gradation, deep blacks and evocative emotion stripped of color distraction.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=75",
    specs: "Leica SL2-S • APO-Summicron 50mm • 1/250s • ISO 100",
    location: "Friends Studio Monochrome Gallery",
    featured: false,
    aspect: "portrait"
  },
  {
    id: "por-04",
    title: "Gaze of the Luminary",
    category: "portraits",
    categoryLabel: "Studio & Portraits",
    subCategory: "Cinematic Close-up",
    caption: "Catchlights in the eyes reflecting the depth of human expression and cinematic stillness.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=75",
    specs: "Canon EOS R5 • 100mm f/2.8L • 1/320s • ISO 160",
    location: "Friends Studio Intimate Room",
    featured: false,
    aspect: "portrait"
  },
  {
    id: "por-05",
    title: "The Visionary Archetype",
    category: "portraits",
    categoryLabel: "Studio & Portraits",
    subCategory: "Professional Studio",
    caption: "Executive and artist fine-art portrait tailored for international print and editorial features.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α1 • 85mm f/1.4 GM • 1/250s • ISO 100",
    location: "Friends Studio Bay B",
    featured: false,
    aspect: "portrait"
  },

  // --- 4. BIRTHDAY & EVENTS (Milestone celebrations, Cake-cutting, Family, Gala) ---
  {
    id: "eve-01",
    title: "The Golden Wish – Cake Cutting Magic",
    category: "events",
    categoryLabel: "Birthdays & Events",
    subCategory: "Cake-Cutting Moments",
    caption: "Sparkling candles, jubilant expressions, and the sweet freeze of a once-in-a-lifetime wish.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α7 IV • 35mm f/1.4 GM • 1/400s • ISO 800",
    location: "Skyline Terrace Banquet",
    featured: true,
    aspect: "landscape"
  },
  {
    id: "eve-02",
    title: "Toast to the Jubilee – Milestone Gala",
    category: "events",
    categoryLabel: "Birthdays & Events",
    subCategory: "Event Photography",
    caption: "Crystal flutes clinking against warm ambient chandeliers in a grand corporate anniversary celebration.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=75",
    specs: "Nikon Z8 • 50mm f/1.2 • 1/250s • ISO 640",
    location: "Grand Chola Ballrooms",
    featured: true,
    aspect: "landscape"
  },
  {
    id: "eve-03",
    title: "Generations Entwined – Family Legacy",
    category: "events",
    categoryLabel: "Birthdays & Events",
    subCategory: "Family Photography",
    caption: "Three generations captured with authentic laughter, timeless pride and unconditional warmth.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=75",
    specs: "Canon EOS R5 • 70-200mm f/2.8L • 1/500s • ISO 400",
    location: "Botanical Villa Gardens",
    featured: false,
    aspect: "landscape"
  },
  {
    id: "eve-04",
    title: "Golden Confetti Shower – Party Euphoria",
    category: "events",
    categoryLabel: "Birthdays & Events",
    subCategory: "Party Cinematic",
    caption: "High-energy festival of confetti and rhythm immortalizing the pinnacle moment of the night.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=75",
    specs: "Sony α1 • 24mm f/1.4 GM • 1/800s • ISO 1200",
    location: "Club Sanctuary Lounge",
    featured: false,
    aspect: "landscape"
  },
  {
    id: "eve-05",
    title: "Summit of Excellence – Awards Night",
    category: "events",
    categoryLabel: "Birthdays & Events",
    subCategory: "Corporate & Stage",
    caption: "Keynote presentation and prestigious trophy handovers illuminated by stage spotlights.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=75",
    specs: "Canon EOS R3 • 70-200mm f/2.8L • 1/640s • ISO 1600",
    location: "International Convention Centre",
    featured: false,
    aspect: "landscape"
  }
];

// --- CINEMATIC SHOWREEL DATA (Section 8: "OUR STORIES THROUGH THE LENS") ---
const SHOWREEL_DATA = [
  {
    id: "reel-01",
    title: "The Royal Heritage – Priya & Karthik",
    type: "Wedding Film Teaser",
    duration: "03:42",
    resolution: "4K UHD • 60fps Cinema",
    genre: "Traditional Tamil Wedding Cinema",
    synopsis: "A three-day traditional South Indian celebration documented with anamorphic cinema lenses, capturing sacred Vedic rituals, regal silk attires, and deeply emotional tear-soaked blessings.",
    poster: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://cdn.coverr.co/videos/coverr-wedding-couple-walking-out-of-church-5654/1080p.mp4",
    camera: "RED V-Raptor 8K VV • Cooke Anamorphic /i Prime",
    colorGrade: "Kodak 2383 35mm Film Emulation"
  },
  {
    id: "reel-02",
    title: "Whispers of the Golden Coast – Ananya & Rohit",
    type: "Pre-Wedding Cinematic Film",
    duration: "04:15",
    resolution: "4K UHD • 24fps DCI",
    genre: "Romantic Destination Narrative",
    synopsis: "An evocative romance framed against sunset oceans and historic seaside ramparts, exploring intimate glances, whispered vows, and sweeping drone vistas.",
    poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://cdn.coverr.co/videos/coverr-couple-at-the-beach-at-sunset-4813/1080p.mp4",
    camera: "Sony FX6 Cinema Line • 24-70mm GM • DJI Inspire 3",
    colorGrade: "Golden Amber & Teal Oceanic Curve"
  },
  {
    id: "reel-03",
    title: "Mastering the Craft – Behind the Lens",
    type: "Behind-The-Scenes Film",
    duration: "02:50",
    resolution: "4K UHD • 120fps Slow-Mo",
    genre: "Studio Documentary",
    synopsis: "Step inside Friends Studio's creative sanctum. Watch our principal cinematographers, gaffers, and colorists calibrate lighting and guide couples into effortless authenticity.",
    poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://cdn.coverr.co/videos/coverr-camera-lens-focusing-5026/1080p.mp4",
    camera: "ARRI Alexa Mini LF • Zeiss Supreme Primes",
    colorGrade: "Monochrome & Gold Studio Grade"
  },
  {
    id: "reel-04",
    title: "A Symphony of Joy – The Singhania Gala",
    type: "Event Cinema Highlight",
    duration: "03:10",
    resolution: "4K UHD • 60fps HDR",
    genre: "Milestone Celebration",
    synopsis: "An evening of royal splendor, celebrity performances, and multi-generational camaraderie documented with fluid gimbal tracking and radiant low-light fidelity.",
    poster: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85",
    videoUrl: "https://cdn.coverr.co/videos/coverr-party-sparklers-2045/1080p.mp4",
    camera: "Sony FX3 • Ronin 4D 6K Cinema Gimbal",
    colorGrade: "Lush Chandelier Warmth & Vivid Gold"
  }
];

// --- PHOTOGRAPHY SERVICES (Section 6: Distinct high-quality image per service) ---
const SERVICES_DATA = [
  {
    id: "srv-wedding",
    title: "Royal & Traditional Weddings",
    tagline: "Preserving sacred rituals and timeless vows in enduring grandeur",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Traditional Tamil & South Indian muhurtham mastery",
      "Multi-camera 4K candid & formal photography",
      "Traditional nadaswaram & mandap ritual documentation",
      "Handcrafted Italian leather heirloom albums"
    ],
    deliverables: "300+ Retouched Master Photos • 2 Master Albums • Full Digital Archive",
    badge: "Most Popular"
  },
  {
    id: "srv-prewedding",
    title: "Pre-Wedding & Destination Cinema",
    tagline: "Romantic love stories composed across breathtaking landscapes",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Scenic beach, hill station and heritage palace locations",
      "Stylist, mood-board & wardrobe art direction",
      "Licensed drone cinematography with 5.1K aerials",
      "Cinematic musical teaser delivered within 48 hours"
    ],
    deliverables: "3-5 Minute Cinematic Film • 60 Fine-Art Portraits • Reel Cuts",
    badge: "Trending"
  },
  {
    id: "srv-films",
    title: "Cinematic 4K Wedding Films",
    tagline: "Hollywood-grade color grading, anamorphic lenses, and original soundscapes",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "RED & Sony Cinema Line 4K/8K cameras",
      "Professional audio recording with discreet wireless lavaliers",
      "Emotionally paced feature film (25-45 mins)",
      "Teaser trailers tailored for Instagram Reels & 4K OLED screens"
    ],
    deliverables: "Feature Film • 3-Min Teaser • Raw Speeches & Vows Audio",
    badge: "Cinematic"
  },
  {
    id: "srv-portrait",
    title: "Haute Couture & Fine Art Portraits",
    tagline: "Sculpted lighting for icons, artists, executives, and fashion campaigns",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Private studio session with Profoto strobe shaping",
      "High-end frequency separation & skin retouching",
      "Classic monochrome & dramatic color grading options",
      "Commercial publishing & editorial licensing rights"
    ],
    deliverables: "15 Ultra-High-Res Master Retouched Frames • Web & Print Ready",
    badge: "Studio Signature"
  },
  {
    id: "srv-maternity",
    title: "Maternity & Newborn Fine Art",
    tagline: "Delicate, gentle celebrations of motherhood and new beginnings",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Comfort-first private studio environment with sterile warmth",
      "Custom ethereal maternity drapes and fine-art silks",
      "Artistic parent-baby intimate poses",
      "Safety-certified newborn photography handling"
    ],
    deliverables: "25 Fine Art Prints • Miniature Keepsake Box",
    badge: "Heartfelt"
  },
  {
    id: "srv-events",
    title: "Birthdays, Galas & Milestones",
    tagline: "Electrifying coverage of joyful birthdays, anniversaries, and corporate summits",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Cake cutting, candid guests, and spontaneous emotional cheers",
      "Instant on-site photo booth / live print stations",
      "Rapid turnaround for social media publishing",
      "Unobtrusive documentary style without disruptive flashes"
    ],
    deliverables: "Full Evening Gallery • Highlight Video Reel (60s) • Web Gallery",
    badge: "Celebration"
  },
  {
    id: "srv-drone",
    title: "Drone Aerials & Live Multi-Cast",
    tagline: "Bird's eye panoramic views and real-time 4K broadcast to global relatives",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80",
    features: [
      "DGCA-certified drone pilots with safety redundancy",
      "Ultra-low latency private YouTube/Zoom 4K live-stream",
      "Live multi-camera switcher with professional lower-thirds",
      "Recording in Apple ProRes for seamless master integration"
    ],
    deliverables: "Live Stream Archive • 4K Aerial Stills & Cinema Footage",
    badge: "Tech Driven"
  },
  {
    id: "srv-albums",
    title: "Heirloom Flush-Mount Albums",
    tagline: "Museum-grade archival prints designed to outlive generations",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Fuji Crystal Archive metallic and matte papers",
      "Genuine Italian distressed leather & Japanese silks",
      "Embossed 24K gold foil calligraphy titles",
      "Lay-flat binding guaranteed against fading for 100+ years"
    ],
    deliverables: "Handcrafted 12x18 Master Album • 2 Parent Albums • Wooden Vault Box",
    badge: "Legacy"
  }
];

// --- CLIENT REVIEWS & TESTIMONIALS ---
const TESTIMONIALS_DATA = [
  {
    quote: "Friends Studio didn't just take photographs of our wedding; they immortalized the soul of our Tamil traditions. Looking back at our album brings tears of pure happiness every single time.",
    author: "Priya & Karthikeyan",
    event: "Traditional Temple Wedding, Chennai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "Our pre-wedding video in Kodaikanal felt like watching a luxury romantic film. The team's cinematic eye, drone angles, and calming presence made us completely forget the cameras were there.",
    author: "Ananya & Rohit",
    event: "Destination Pre-Wedding, Ooty",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "From our daughter's first birthday cake smash to our parents' 50th golden jubilee, Friends Studio is the only team our family trusts. Unmatched artistry and true professionalism.",
    author: "Dr. Arvind & Deepa",
    event: "Milestone Golden Jubilee Gala",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  }
];

// Export to window for global access
window.FRIENDS_STUDIO_DATA = {
  GALLERY: GALLERY_DATA,
  SHOWREEL: SHOWREEL_DATA,
  SERVICES: SERVICES_DATA,
  TESTIMONIALS: TESTIMONIALS_DATA
};
