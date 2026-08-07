/**
 * Main Application Entry Point
 */
import { VideoPlayer } from './modules/videoPlayer.js';
import { WowAnimation } from './modules/wowAnimation.js';
import { Competitors } from './modules/competitors.js';

class App {
  constructor() {
    this.init();
  }

  async init() {
    // Load competitors data
    try {
      const response = await fetch('./src/data/competitors.json');
      const competitorsData = await response.json();
      
      // Initialize modules
      new VideoPlayer();
      new WowAnimation();
      new Competitors(competitorsData);
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new App());
} else {
  new App();
}

