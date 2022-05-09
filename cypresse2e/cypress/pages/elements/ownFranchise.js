class Franchise {
  slideImage = ".alpine-slider";
  franchiseInfo = ".left-side-content";
  franchiseFormDetails = ".form > form > p";

  constructor() {}

  visit() {
    cy.visit("franchise-with-pokeworks/");
  }

  getSlideImage() {
    return cy.get(this.slideImage);
  }

  getFranchiseInfo() {
    return cy.get(this.franchiseInfo);
  }

  getFranchiseFormDetails() {
    return cy.get(this.franchiseFormDetails);
  }
}

export default Franchise;
