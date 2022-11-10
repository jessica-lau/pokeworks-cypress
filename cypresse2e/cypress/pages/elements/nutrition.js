class Nutrition {
  nutritionHeading = ".foreground h1";
  nutritionDescription = ".page-content-wrapper > p > span";
  menuHeading = "h2";
  searchBarMenu = ".form-control";
  filterDropdown = ".multiselect__content-wrapper";
  filterDropdownChoice = ".multiselect__content-wrapper > ul > li";
  allergenFilterToggle = "#allergen-filter-switch";
  allergenStatement = ".allergen-statement show";
  menuCategory = "ul > li";

  constructor() {}

  visit() {
    cy.visit("nutrition/");
  }

  getNutritionHeading() {
    return cy.get(this.nutritionHeading);
  }

  getNutritionDescription() {
    return cy.get(this.nutritionDescription);
  }

  getMenuHeading() {
    return cy.get(this.menuHeading);
  }

  getSearchBarMenu() {
    return cy.get(this.searchBarMenu);
  }

  getFilterDropdown() {
    return cy.get(this.filterDropdown);
  }

  getFilterDropdownChoice() {
    return cy.get(this.filterDropdownChoice);
  }

  getFilterToggle() {
    return cy.get(this.allergenFilterToggle);
  }

  getAllergenStmt() {
    return cy.get(this.allergenStatement);
  }

  getMenuCategory() {
    return cy.get(this.menuCategory);
  }
}

export default Nutrition;
