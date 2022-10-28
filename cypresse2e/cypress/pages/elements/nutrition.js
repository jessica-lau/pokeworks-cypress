class Nutrition {
  nutritionHeading = ".foreground h1";
  nutritionDescription = ".page-content-wrapper > p > span";
  menuHeading = "h2";
  searchBarMenu = ".form-control";
  filterDropdown = ".multiselect__tags";
  menuList = "ul > li";

  constructor() {}

  visit() {
    cy.visit("nutrition/");
  }
}

export default Nutrition;
