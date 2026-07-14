export class SerenaraMusic {
  constructor({ root = document, gsap = window.gsap } = {}) {
    this.button = root.querySelector('[data-srn-music]');
    this.audio = root.querySelector('[data-srn-music-audio]');
    this.disc = root.querySelector('[data-srn-music-disc]');
    this.label = root.querySelector('[data-srn-music-label]');
    this.gsap = gsap;
    this.spin = null;
  }

  init() {
    if (!this.button || !this.audio || !this.gsap) return;
    this.spin = this.gsap.to(this.disc, { rotate: 360, duration: 5, ease: 'none', repeat: -1, paused: true });
    this.button.addEventListener('click', () => this.toggle());
  }

  async play() {
    if (!this.audio) return;
    try {
      await this.audio.play();
      this.button.classList.add('is-playing');
      this.button.setAttribute('aria-pressed', 'true');
      this.button.setAttribute('aria-label', 'Pause wedding music');
      if (this.label) this.label.textContent = 'Pause';
      this.spin?.play();
    } catch (error) {
      this.button.classList.remove('is-playing');
    }
  }

  pause() {
    this.audio?.pause();
    this.button.classList.remove('is-playing');
    this.button.setAttribute('aria-pressed', 'false');
    this.button.setAttribute('aria-label', 'Play wedding music');
    if (this.label) this.label.textContent = 'Play';
    this.spin?.pause();
  }

  toggle() {
    if (this.audio?.paused) this.play();
    else this.pause();
  }
}
