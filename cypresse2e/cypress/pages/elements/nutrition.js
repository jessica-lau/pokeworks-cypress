class Nutrition {
  nutritionHeading = ".foreground h1";
  nutritionDescription = ".page-content-wrapper > p > span";
  menuHeading = "h2";

  constructor() {}

  visit() {
    cy.visit("nutrition/");
  }
}

export default Nutrition;
