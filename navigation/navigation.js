export class SerenaraNavigation {
  constructor({ root = document, gsap = window.gsap, lenis = null } = {}) {
    this.nav = root.querySelector('[data-srn-nav]');
    this.menu = root.querySelector('[data-srn-menu]');
    this.toggle = root.querySelector('[data-srn-menu-toggle]');
    this.closeTargets = root.querySelectorAll('[data-srn-menu-close], [data-srn-menu-link]');
    this.gsap = gsap;
    this.lenis = lenis;
    this.isOpen = false;
  }

  init() {
    if (!this.nav || !this.gsap) return;
    window.addEventListener('scroll', () => this.nav.classList.toggle('is-solid', window.scrollY > 18), { passive: true });
    this.toggle?.addEventListener('click', () => this.isOpen ? this.close() : this.open());
    this.closeTargets.forEach((item) => item.addEventListener('click', (event) => {
      const href = item.getAttribute('href');
      if (href?.startsWith('#')) {
        event.preventDefault();
        this.close().then(() => this.lenis?.scrollTo(href));
      } else this.close();
    }));
  }

  open() {
    this.isOpen = true;
    this.menu?.setAttribute('aria-hidden', 'false');
    this.toggle?.setAttribute('aria-expanded', 'true');
    const links = this.menu.querySelectorAll('[data-srn-menu-link]');
    return new Promise((resolve) => {
      this.gsap.timeline({ defaults: { ease: 'expo.inOut' }, onComplete: resolve })
        .to(this.menu.querySelector('.srn-menu__backdrop'), { opacity: 1, duration: .45 })
        .to(this.menu.querySelector('.srn-menu__panel'), { clipPath: 'inset(0% 0% 0% 0%)', duration: .9 }, '<')
        .to(this.toggle.querySelectorAll('span'), { y: 0, rotate: (index) => index ? -45 : 45, duration: .45 }, '<')
        .to(links, { opacity: 1, filter: 'blur(0rem)', y: 0, stagger: .075, duration: .72, ease: 'power4.out' }, '-=.42');
    });
  }

  close() {
    this.isOpen = false;
    this.toggle?.setAttribute('aria-expanded', 'false');
    const links = this.menu.querySelectorAll('[data-srn-menu-link]');
    return new Promise((resolve) => {
      this.gsap.timeline({ defaults: { ease: 'expo.inOut' }, onComplete: () => {
        this.menu?.setAttribute('aria-hidden', 'true');
        resolve();
      }})
        .to(links, { opacity: 0, filter: 'blur(.7rem)', y: -14, stagger: { each: .04, from: 'end' }, duration: .35 })
        .to(this.menu.querySelector('.srn-menu__panel'), { clipPath: 'inset(0% 0% 100% 0%)', duration: .72 }, '-=.18')
        .to(this.menu.querySelector('.srn-menu__backdrop'), { opacity: 0, duration: .4 }, '<')
        .to(this.toggle.querySelectorAll('span'), { rotate: 0, y: (index) => index ? '.22rem' : '-.22rem', duration: .35 }, '<');
    });
  }
}
