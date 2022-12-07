class Catering {
  mainHeading = "h1";
  cateringDescription = "h2";
  buildYourPoke = ".build-your-own-component-inner";

  constructor() {}

  visit() {
    cy.visit("/catering");
  }
}

export default Catering;
