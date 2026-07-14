# Serenara Studio Premium Digital Invitation — Experience Plan

Dokumen ini menggantikan seluruh pendekatan sebelumnya. Belum ada template final yang dibuat pada tahap ini. Tujuannya adalah menyepakati experience, struktur, animasi, library, dan aset terlebih dahulu sebelum produksi Elementor JSON dilakukan bertahap.

## 1. Sitemap

1. **Preload Experience**
   - Premium loading screen
   - Asset readiness state
   - Music consent state
2. **Opening Cover**
   - Personalized guest entry
   - Tap/click to open invitation
   - Transition into main experience
3. **Main Invitation Experience**
   - Immersive hero
   - Bride and groom editorial profile
   - Animated countdown
   - Event information
   - Maps and directions
   - Love story timeline
   - Gallery experience
   - Cinematic video section
   - Live streaming access
   - Wedding gift section
   - RSVP section
   - Guest book section
   - Premium footer
4. **Persistent Experience Layer**
   - Floating navigation
   - Fullscreen hamburger menu
   - Floating music player
   - Scroll progress indicator
   - Desktop mouse interaction layer
   - Mobile touch-friendly gestures

## 2. User Flow

1. **Guest opens invitation URL**
   - Guest sees a black/ivory/gold loading screen with subtle animated texture.
   - Critical assets and animation libraries are prepared before the first reveal.
2. **Loading resolves into Opening Cover**
   - Guest name appears as a private editorial invitation label.
   - Background breathes with slow parallax and abstract light movement.
3. **Guest taps/clicks “Open Invitation”**
   - Cover splits or dissolves through blur and mask transition.
   - Music player appears in a consent-safe state.
   - Smooth scroll is activated.
4. **Guest enters Hero**
   - Bride and groom names reveal with SplitType letter choreography.
   - Background elements react subtly to mouse movement on desktop.
5. **Guest scrolls the invitation**
   - Sections reveal through ScrollTrigger-based masking, clipping, depth, and parallax.
   - Scroll progress updates continuously.
   - Floating navigation highlights the current section.
6. **Guest explores gallery/story**
   - Gallery uses Swiper for touch and PhotoSwipe for focused viewing.
   - Timeline animates as a living editorial sequence, not static cards.
7. **Guest takes action**
   - RSVP feels like an exclusive private response form.
   - Guest book invites a refined written note.
   - Gift and live streaming remain accessible without disrupting the flow.
8. **Guest reaches footer**
   - Footer closes the experience with a calm premium ending and optional return-to-top interaction.

## 3. Wireframe

### 3.1 Global Overlay Layer

```text
┌──────────────────────────────────────────────┐
│ Top-left: Serenara mark                       │
│ Top-right: hamburger / music                 │
│ Right or bottom edge: scroll progress         │
│ Fullscreen menu overlay: section jump links   │
└──────────────────────────────────────────────┘
```

### 3.2 Loading Screen

```text
┌──────────────────────────────────────────────┐
│                                              │
│             Tiny gold monogram               │
│        “Serenara Studio presents”            │
│            animated progress line            │
│                                              │
└──────────────────────────────────────────────┘
```

### 3.3 Opening Cover

```text
┌──────────────────────────────────────────────┐
│ Abstract animated black/gold background       │
│                                              │
│                 Guest label                  │
│                {{guest_name}}                │
│                                              │
│              Open Invitation CTA             │
│                                              │
└──────────────────────────────────────────────┘
```

### 3.4 Hero

```text
┌──────────────────────────────────────────────┐
│ Large negative space                          │
│ Editorial date marker                         │
│                                              │
│        {{bride_name}}                         │
│              &                               │
│        {{groom_name}}                         │
│                                              │
│ Venue/date microcopy                          │
└──────────────────────────────────────────────┘
```

### 3.5 Bride & Groom

```text
Desktop:
┌──────────────────────┬───────────────────────┐
│ Portrait / texture    │ Editorial biography    │
│ Bride                 │ Groom                  │
└──────────────────────┴───────────────────────┘

Mobile:
┌──────────────────────┐
│ Bride portrait        │
│ Bride text            │
│ Groom portrait        │
│ Groom text            │
└──────────────────────┘
```

### 3.6 Countdown

```text
┌──────────────────────────────────────────────┐
│ Circular time sculpture / orbit typography    │
│ Days / Hours / Minutes / Seconds              │
│ No box cards                                  │
└──────────────────────────────────────────────┘
```

### 3.7 Event + Maps

```text
┌──────────────────────┬───────────────────────┐
│ Ceremony details      │ Reception details      │
│ QR / directions CTA   │ Map panel              │
└──────────────────────┴───────────────────────┘
```

### 3.8 Timeline

```text
┌──────────────────────────────────────────────┐
│ Vertical editorial rule                       │
│ Chapter markers reveal along scroll           │
│ Images/text alternate with depth parallax      │
└──────────────────────────────────────────────┘
```

### 3.9 Gallery

```text
┌──────────────────────────────────────────────┐
│ Horizontal premium carousel                   │
│ Large image, small previews, image counter     │
│ PhotoSwipe detail view                         │
└──────────────────────────────────────────────┘
```

### 3.10 RSVP + Guest Book

```text
┌──────────────────────────────────────────────┐
│ Ivory glass panel                             │
│ RSVP shortcode area                           │
│ Guest book message area                       │
│ Soft gold confirmation state                  │
└──────────────────────────────────────────────┘
```

## 4. Struktur Section

1. **Experience Shell**
   - Root wrapper
   - Animated background canvas/layer
   - Persistent controls
2. **Loading Screen Premium**
   - Monogram
   - Preload progress
   - Initial Lottie accent
3. **Opening Cover**
   - Guest personalization
   - Open invitation CTA
   - Music consent trigger
4. **Hero**
   - Editorial name lockup
   - Date and venue markers
   - Mouse-reactive ambient background
5. **Bride & Groom**
   - Dual editorial profiles
   - Replaceable portraits
6. **Countdown**
   - WeddingPress countdown mount
   - Custom animated visual shell
7. **Event Information**
   - Ceremony/reception detail containers
   - QR code area
8. **Google Maps**
   - WeddingPress maps mount
   - Direction CTA
9. **Love Story Timeline**
   - Animated chapter rail
   - Scroll-driven image/text reveals
10. **Gallery**
    - Swiper carousel
    - PhotoSwipe lightbox
11. **Video**
    - Cinematic video panel
    - Poster placeholder
12. **Live Streaming**
    - Streaming shortcode mount
    - Schedule note
13. **Wedding Gift**
    - Gift shortcode mount
    - Secure/replaceable copy area
14. **RSVP**
    - WeddingPress RSVP mount
    - Confirmation micro-interaction area
15. **Guest Book**
    - WeddingPress guest book mount
    - Message list styling shell
16. **Premium Footer**
    - Closing names
    - Studio credit
    - Back-to-top interaction

## 5. Struktur Container

All production sections will be Elementor Containers only. No Inner Section widget will be used.

```text
Root Container: serenara-experience
├── Fixed Container: global-experience-layer
│   ├── Floating nav container
│   ├── Hamburger trigger container
│   ├── Fullscreen menu container
│   ├── Music player container
│   └── Scroll progress container
├── Container: loading-screen
├── Container: opening-cover
├── Main Container: invitation-flow
│   ├── Container: hero-section
│   ├── Container: couple-section
│   ├── Container: countdown-section
│   ├── Container: event-section
│   ├── Container: maps-section
│   ├── Container: timeline-section
│   ├── Container: gallery-section
│   ├── Container: video-section
│   ├── Container: live-streaming-section
│   ├── Container: gift-section
│   ├── Container: rsvp-section
│   ├── Container: guest-book-section
│   └── Container: footer-section
└── Container: animation-mounts
    ├── Lottie mount
    ├── cursor/mouse interaction mount
    └── preloaded media references
```

### Container Rules

- Every layout block uses Flexbox Container.
- Every spacing value uses `rem`.
- Desktop layout is enhanced from a mobile-first base.
- Reusable class tokens are used for section padding, grids, glass panels, gold lines, and editorial headings.
- WeddingPress widgets/shortcodes remain replaceable and are never hardcoded with real event data.

## 6. Daftar Animasi Setiap Section

### Global

- **Lenis Smooth Scroll:** smooth scrolling with tuned lerp for luxury pacing.
- **ScrollTrigger:** section progress, pinning where appropriate, parallax, and timeline choreography.
- **Intersection Observer:** lightweight activation for non-critical elements and lazy animation hydration.
- **Progress Scroll:** scale transform tied to scroll progress.
- **Mouse Interaction:** subtle desktop-only ambient light and image depth movement.
- **Touch Friendly:** no hover-dependent actions on mobile; all controls remain large and tappable.

### Loading Screen Premium

- Lottie monogram stroke reveal.
- GSAP progress line that follows actual asset readiness where possible.
- Final transition uses blur, opacity compression, and clip-path reveal into the Opening Cover.

### Opening Cover

- Ambient animated gradient/noise background.
- Guest name reveals using SplitType word/character masking.
- CTA uses magnetic hover on desktop and tactile press state on mobile.
- Opening action triggers a cover dissolve with blur and mask expansion.

### Hero

- Names reveal with SplitType character cascade and slight vertical mask, not simple fade/slide/zoom.
- Background parallax layers move at different speeds.
- Editorial date marker pins briefly during first scroll movement.

### Bride & Groom

- Portraits reveal through clip-path shutters.
- Text blocks reveal by line using SplitType.
- Desktop receives subtle parallax between image and typography columns.

### Countdown

- WeddingPress countdown values are wrapped in an animated orbital visual system.
- Digits tick with GSAP numeric transitions.
- Gold circular rules rotate subtly on scroll.

### Event Information

- Ceremony and reception details reveal as editorial panels using mask/line draw animation.
- QR area scales from a fine gold rule into the final code mount.
- Maps panel uses a blur-to-sharp transition when it enters viewport.

### Love Story Timeline

- Timeline rail draws based on scroll progress.
- Chapter numbers pin and hand off between chapters.
- Images move with parallax and slight 3D depth.
- Text line reveals use SplitType masks.

### Gallery

- Swiper carousel uses inertial movement and centered editorial composition.
- Active image receives scale-depth treatment while inactive slides remain dimmed.
- PhotoSwipe opens with a refined dark overlay and minimal controls.

### Video

- Video poster reveals through a cinematic wipe.
- Play state dims surrounding decorative elements.
- ScrollTrigger pauses ambient effects near the player to preserve performance.

### Live Streaming

- Streaming access card reveals from an animated gold rule.
- CTA gets a restrained magnetic interaction on desktop.

### Wedding Gift

- Gift panel uses glass effect and layered gold border.
- Copy account interaction uses micro-feedback without aggressive animation.

### RSVP

- Form area appears as an exclusive ivory-on-black card.
- Fields receive focus glow and gold rule movement.
- Confirmation state uses a small Lottie accent or GSAP line animation.

### Guest Book

- Messages reveal with staggered masks when loaded.
- New message confirmation uses a soft gold shimmer.

### Premium Footer

- Names close with slow SplitType reveal.
- Back-to-top interaction rewinds scroll via Lenis.
- Final background motion slows for a calm ending.

## 7. Daftar Library

Production will load libraries only where needed and should prefer local/minified assets or WordPress enqueue handles to preserve Lighthouse score.

1. **GSAP**
   - Core animation engine.
   - Used for premium sequencing, timeline control, masks, blur transitions, and numeric transitions.
2. **ScrollTrigger**
   - Scroll-driven choreography, parallax, progress, and section identity transitions.
3. **Lenis Smooth Scroll**
   - Smooth scroll layer with high-end pacing.
4. **SplitType**
   - Character, word, and line splitting for editorial typography reveals.
5. **SwiperJS**
   - Touch-friendly animated gallery carousel.
6. **PhotoSwipe**
   - Premium gallery lightbox and image detail mode.
7. **Lottie**
   - Lightweight vector animation for loading monogram and confirmation accents.
8. **Intersection Observer**
   - Performance-friendly animation hydration and lazy behavior.
9. **WeddingPress**
   - Invitation, Countdown, RSVP, Guest Book, Gift, Audio MP3, QR Code, and Maps widget/shortcode compatibility.
10. **Elementor Pro**
    - Flexbox Containers, dynamic fields, global colors, global fonts, and template import.

## 8. Daftar Asset

### Required Original Assets

- `assets/images/cover-ambient.webp`
  - Abstract luxury black/gold cover texture.
- `assets/images/hero-depth-01.webp`
  - Subtle depth layer for hero background.
- `assets/images/bride-placeholder.webp`
  - Replaceable editorial portrait placeholder.
- `assets/images/groom-placeholder.webp`
  - Replaceable editorial portrait placeholder.
- `assets/images/gallery-placeholder-01.webp` through `gallery-placeholder-06.webp`
  - Replaceable gallery placeholders.
- `assets/icons/serenara-monogram.svg`
  - Original studio monogram placeholder.
- `assets/lottie/serenara-loader.json`
  - Original loader animation.
- `assets/lottie/confirmation-accent.json`
  - RSVP/guest book confirmation accent.
- `assets/audio/placeholder.mp3`
  - Optional placeholder only if licensing is confirmed; otherwise audio remains a WeddingPress placeholder.

### Asset Rules

- No scraped images, illustrations, code, branding, or layouts from existing websites.
- Production assets must be original, licensed, or client-provided.
- Every image must be optimized and lazy loaded where applicable.
- SVG decorative assets must be simple and authored specifically for Serenara Studio.
- Final template must remain replaceable through Elementor/WeddingPress.

## Next Production Steps After Approval

1. Build the global experience shell and asset/library enqueue strategy.
2. Build Loading Screen and Opening Cover only.
3. Review motion quality and responsive behavior.
4. Build Hero and persistent controls.
5. Continue section-by-section after approval of each milestone.

No production Elementor JSON should be generated until this plan is approved.
