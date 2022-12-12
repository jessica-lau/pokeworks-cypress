class Catering {
  mainHeading = "h1";
  cateringDescription = "h2";
  buildYourPoke = ".build-your-own-component-inner";

  constructor() {}

  visit() {
    cy.visit("/catering");
  }

  getMainHeading() {
    return cy.get(this.mainHeading);
  }

  getCateringDescription() {
    return cy.get(this.cateringDescription);
  }

  getBuildYourPoke() {
    return cy.get(this.buildYourPoke);
  }
}

export default Catering;
