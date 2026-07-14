export class SerenaraLoading {
  constructor({ root = document, gsap = window.gsap, duration = 2.6 } = {}) {
    this.root = root.querySelector('[data-srn-loading]');
    this.gsap = gsap;
    this.duration = duration;
    this.progress = root.querySelector('[data-srn-loading-progress]');
    this.counter = root.querySelector('[data-srn-loading-counter]');
    this.mark = root.querySelector('[data-srn-loading-mark]');
    this.title = root.querySelector('[data-srn-loading-title]');
    this.lottieMount = root.querySelector('[data-srn-loading-lottie]');
    this.lottie = window.lottie || null;
  }

  play() {
    if (!this.root || !this.gsap) return Promise.resolve();
    if (this.lottie && this.lottieMount?.dataset.lottiePath) {
      this.lottie.loadAnimation({ container: this.lottieMount, renderer: 'svg', loop: false, autoplay: true, path: this.lottieMount.dataset.lottiePath });
    }
    const state = { value: 0 };
    return new Promise((resolve) => {
      const tl = this.gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: resolve });
      tl.to([this.mark, this.title], { opacity: 1, filter: 'blur(0rem)', y: 0, duration: .9, stagger: .12 })
        .to(state, {
          value: 100,
          duration: this.duration,
          ease: 'power2.inOut',
          onUpdate: () => {
            const value = Math.round(state.value);
            this.counter.textContent = String(value).padStart(2, '0');
            this.gsap.set(this.progress, { scaleX: value / 100 });
          }
        }, '-=.45')
        .to(this.root, { '--srn-loading-intensity': 1, duration: .2 }, '-=.1');
    });
  }

  morphToCover(coverElement) {
    if (!this.root || !coverElement || !this.gsap) return Promise.resolve();
    return new Promise((resolve) => {
      this.gsap.timeline({ defaults: { ease: 'expo.inOut' }, onComplete: () => {
        this.root.setAttribute('aria-hidden', 'true');
        this.root.style.pointerEvents = 'none';
        resolve();
      }})
        .to(this.root, { clipPath: 'inset(0% 0% 100% 0%)', filter: 'blur(1.5rem)', duration: 1.15 })
        .fromTo(coverElement, { clipPath: 'inset(100% 0% 0% 0%)', filter: 'blur(1.25rem)' }, { clipPath: 'inset(0% 0% 0% 0%)', filter: 'blur(0rem)', duration: 1.15 }, '<');
    });
  }
}
