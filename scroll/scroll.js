export class SerenaraScroll {
  constructor({ root = document, gsap = window.gsap, ScrollTrigger = window.ScrollTrigger, Lenis = window.Lenis } = {}) {
    this.root = root;
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.Lenis = Lenis;
    this.lenis = null;
    this.progressBar = root.querySelector('[data-srn-progress-bar]');
    this.floatingButton = root.querySelector('[data-srn-floating-button]');
    this.observer = null;
  }

  init() {
    if (this.Lenis) {
      this.lenis = new this.Lenis({ lerp: .085, wheelMultiplier: .82, touchMultiplier: 1.15, smoothWheel: true });
      const raf = (time) => { this.lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
    if (this.gsap && this.ScrollTrigger) {
      this.gsap.registerPlugin(this.ScrollTrigger);
      this.ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => this.gsap.set(this.progressBar, { scaleY: self.progress })
      });
    }
    this.root.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        event.preventDefault();
        this.lenis?.scrollTo(href) ?? document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
    this.floatingButton?.addEventListener('click', () => document.dispatchEvent(new CustomEvent('serenara:floating-action')));
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
      }, { threshold: .18, rootMargin: '0px 0px -12% 0px' });
      this.root.querySelectorAll('[data-srn-observe]').forEach((item) => this.observer.observe(item));
    }
    return this.lenis;
  }
}
