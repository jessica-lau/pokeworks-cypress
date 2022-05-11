class Franchise {
  slideImages = ".alpine-slider";
  franchiseInfo = ".left-side-content";
  franchiseFormDetails = ".form > form > p";
  video = ".video-section > div > div > iframe";
  images = ".images-section > div > div img";

  constructor() {}

  visit() {
    cy.visit("franchise-with-pokeworks/");
  }

  getSlideImages() {
    return cy.get(this.slideImage);
  }

  getFranchiseInfo() {
    return cy.get(this.franchiseInfo);
  }

  getFranchiseFormDetails() {
    return cy.get(this.franchiseFormDetails);
  }

  getYoutubeVideo() {
    return cy.get(this.video);
  }

  getPokeWorksImages() {
    return cy.get(this.images);
  }
}

export default Franchise;
