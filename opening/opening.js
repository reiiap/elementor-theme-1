export class SerenaraOpening {
  constructor({ root = document, gsap = window.gsap, SplitType = window.SplitType } = {}) {
    this.root = root.querySelector('[data-srn-opening]');
    this.media = root.querySelector('[data-srn-opening-media]');
    this.button = root.querySelector('[data-srn-open-invitation]');
    this.gsap = gsap;
    this.SplitType = SplitType;
    this.splitInstances = [];
  }

  prepare() {
    if (!this.root || !this.SplitType) return;
    this.root.querySelectorAll('[data-split]').forEach((item) => {
      this.splitInstances.push(new this.SplitType(item, { types: 'lines, words, chars' }));
    });
  }

  intro() {
    if (!this.root || !this.gsap) return;
    const chars = this.root.querySelectorAll('.char');
    this.gsap.timeline({ defaults: { ease: 'power4.out' } })
      .fromTo(this.media, { scale: 1.16, rotate: .35 }, { scale: 1.04, rotate: 0, duration: 3.8, ease: 'expo.out' })
      .fromTo(chars, { yPercent: 115, filter: 'blur(.8rem)' }, { yPercent: 0, filter: 'blur(0rem)', duration: 1.15, stagger: { each: .012, from: 'center' } }, '-=3.1')
      .fromTo(this.button, { y: 18, opacity: 0, filter: 'blur(.5rem)' }, { y: 0, opacity: 1, filter: 'blur(0rem)', duration: .8 }, '-=.7');
  }

  bind({ onOpen } = {}) {
    if (!this.button || !this.gsap) return;
    this.button.addEventListener('pointermove', (event) => {
      if (matchMedia('(hover: none)').matches) return;
      const rect = this.button.getBoundingClientRect();
      this.gsap.to(this.button, { x: (event.clientX - rect.left - rect.width / 2) * .18, y: (event.clientY - rect.top - rect.height / 2) * .22, duration: .45, ease: 'power3.out' });
    });
    this.button.addEventListener('pointerleave', () => this.gsap.to(this.button, { x: 0, y: 0, duration: .55, ease: 'elastic.out(1,.45)' }));
    this.button.addEventListener('click', () => onOpen?.());
  }

  close() {
    if (!this.root || !this.gsap) return Promise.resolve();
    return new Promise((resolve) => {
      this.gsap.timeline({ defaults: { ease: 'expo.inOut' }, onComplete: () => {
        this.root.setAttribute('aria-hidden', 'true');
        this.root.style.pointerEvents = 'none';
        resolve();
      }})
        .to(this.root.querySelectorAll('.char'), { yPercent: -115, filter: 'blur(.8rem)', stagger: { each: .006, from: 'edges' }, duration: .72 })
        .to(this.root, { clipPath: 'circle(0% at 50% 50%)', duration: 1.05 }, '-=.42');
    });
  }
}
