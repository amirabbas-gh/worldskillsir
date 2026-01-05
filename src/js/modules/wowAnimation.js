/**
 * WOW.js Animation Module
 * Initializes WOW.js animations
 */
export class WowAnimation {
  constructor() {
    this.init();
  }

  init() {
    if (typeof WOW === 'undefined') {
      console.warn('WOW.js library not loaded');
      return;
    }

    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: function (box) {
        // Animation started callback
      },
      scrollContainer: null
    });

    wow.init();
  }
}

