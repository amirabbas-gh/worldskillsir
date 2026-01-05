/**
 * Competitors Module
 * Renders competitor cards from JSON data
 */
export class Competitors {
  constructor(competitorsData) {
    this.competitors = competitorsData;
    this.container = document.querySelector(".competitors");
    this.init();
  }

  init() {
    if (!this.container) {
      console.warn("Competitors container not found");
      return;
    }

    this.render();
  }

  render() {
    const competitorsHTML = this.competitors
      .map((competitor) => this.createCompetitorCard(competitor))
      .join("");

    this.container.innerHTML = competitorsHTML;
  }

  createCompetitorCard(competitor) {
    return `
      <div class="competitor">
        <div class="thumbnail">
          <img 
            src="./src/images/competitors/${competitor.image}" 
            alt="${competitor.name}" 
            loading="lazy"
          />
        </div>
        <div class="name">
          <strong>${competitor.name}</strong>
          <span>${competitor.skill}</span>
          <b>${competitor.award}</b>
        </div>
      </div>
    `;
  }
}
