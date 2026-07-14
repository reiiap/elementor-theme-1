# Serenara Studio — Stage 01 Implementation

This stage implements only the approved first experience layer. It intentionally does **not** build the Hero or the rest of the invitation.

## Included modules

- `loading/` — premium black loading screen with GSAP progress and morph-to-cover behavior.
- `opening/` — fullscreen opening cover with cinematic background, SplitType text reveal, masked couple name, and micro-interaction CTA.
- `navigation/` — transparent-to-solid global header and fullscreen hamburger menu with staggered GSAP animation.
- `music/` — floating play/pause music player with GSAP-powered rotating disc state.
- `scroll/` — Lenis smooth scroll setup, anchor smoothing, vertical progress scroll, and floating action button.
- `transition/` — global GSAP clip-path transition layer and `serenara:enter-hero` event bridge for the future Hero section.

## Required libraries

Load these before initializing the modules:

- GSAP
- ScrollTrigger
- Lenis
- SplitType
- Intersection Observer, native browser API
- Lottie can be added to `loading/` in the next refinement if a final original loader JSON is provided.

## Suggested initialization order

1. Initialize `SerenaraScroll` and keep the returned Lenis instance.
2. Initialize `SerenaraNavigation` with the Lenis instance.
3. Initialize `SerenaraMusic`.
4. Prepare `SerenaraOpening` SplitType text.
5. Play `SerenaraLoading`.
6. Morph loading into opening cover.
7. Run the opening cover intro.
8. On `Buka Undangan`, start music, close opening, and call the transition `enterHero()` bridge.

## Notes

- All layout snippets are partial HTML modules, not a completed website.
- The modules are intentionally separated so they can later be converted into Elementor HTML/shortcode widgets or enqueued as theme assets.
- No Hero markup is included in this stage.
