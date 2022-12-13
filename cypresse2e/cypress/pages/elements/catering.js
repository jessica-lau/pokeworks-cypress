class Catering {
  mainHeading = "h1";
  cateringDescription = "h2";
  buildYourPoke = ".build-your-own-component-inner";
  buildOwnPokeDescription = ".caption";

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

  getBuildPokeDescription() {
    return cy.get(this.buildOwnPokeDescription);
  }
}

export default Catering;
