/**
 * Video Player Module
 * Handles video playback controls
 */
export class VideoPlayer {
  constructor() {
    this.playButton = document.getElementById('play');
    this.videoPlayer = document.querySelector('.videoPlayer');
    this.video = this.videoPlayer?.querySelector('#video');
    this.purview = document.getElementById('purview');
    this.pauseButton = document.getElementById('pause');
    
    this.init();
  }

  init() {
    if (!this.playButton || !this.videoPlayer || !this.video || !this.purview || !this.pauseButton) {
      console.warn('Video player elements not found');
      return;
    }

    this.playButton.addEventListener('click', () => this.handlePlay());
    this.pauseButton.addEventListener('click', () => this.handlePause());
  }

  handlePlay() {
    this.videoPlayer.classList.add('active');
    this.purview.pause();
    this.video.play();
  }

  handlePause() {
    this.purview.play();
    this.videoPlayer.classList.remove('active');
    this.video.pause();
  }
}

