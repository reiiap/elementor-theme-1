export class SerenaraTransition {
  constructor({ root = document, gsap = window.gsap } = {}) {
    this.el = root.querySelector('[data-srn-transition]');
    this.gsap = gsap;
  }

  pulse() {
    if (!this.el || !this.gsap) return Promise.resolve();
    return new Promise((resolve) => {
      this.gsap.timeline({ defaults: { ease: 'expo.inOut' }, onComplete: resolve })
        .fromTo(this.el, { clipPath: 'circle(0% at 50% 50%)', filter: 'blur(.8rem)' }, { clipPath: 'circle(142% at 50% 50%)', filter: 'blur(0rem)', duration: .95 })
        .to(this.el, { clipPath: 'circle(0% at 50% 50%)', filter: 'blur(.8rem)', duration: .95 }, '+=.05');
    });
  }

  enterHero() {
    document.dispatchEvent(new CustomEvent('serenara:enter-hero'));
    return this.pulse();
  }
}
