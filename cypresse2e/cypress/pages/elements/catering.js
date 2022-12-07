class Catering {
  mainHeading = "h1";
  cateringDescription = "h2";

  constructor() {}

  visit() {
    cy.visit("/catering");
  }
}

export default Catering;
