class Nutrition {
  nutritionHeading = ".foreground h1";
  nutritionDescription = ".page-content-wrapper > p > span";
  menuHeading = "h2";
  searchBarMenu = ".form-control";
  filterDropdown = ".multiselect__tags";
  allergenFilterToggle = "#allergen-filter-switch";
  allergenStatement = ".allergen-statement show";
  menuList = "ul > li";

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

  getFilterToggle() {
    return cy.get(this.allergenFilterToggle);
  }

  getAllergenStmt() {
    return cy.get(this.allergenStatement);
  }

  getMenuList() {
    return cy.get(this.menuList);
  }
}

export default Nutrition;
