/**
 * Scroll Animation Module
 * Handles scroll-based animations
 */
export class ScrollAnimation {
  constructor() {
    this.onMoveElement = document.querySelector('.onMove img');
    this.init();
  }

  init() {
    if (!this.onMoveElement) {
      return;
    }

    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.onMoveElement.style.transform = `rotate(${scrollTop / 2}deg)`;
  }
}

