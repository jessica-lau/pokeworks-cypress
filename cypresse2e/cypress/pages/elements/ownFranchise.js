class Franchise {
  slideImage = ".alpine-slider";
  franchiseInfo = ".left-side-content";
  franchiseForm = ".form > form > p";

  constructor() {}

  visit() {
    cy.visit("franchise-with-pokeworks/");
  }
}

export default Franchise;
