class Nutrition {
  nutritionHeading = ".foreground h1";
  nutritionDescription = ".page-content-wrapper > p > span";
  menuHeading = "h2";
  searchBarMenu = ".form-control";
  filterDropdown = ".multiselect__tags";
  allergenFilterToggle = "#allergen-filter-switch";
  menuList = "ul > li";

  constructor() {}

  visit() {
    cy.visit("nutrition/");
  }

  getNutritionHeading() {
    return cy.get(this.nutritionHeading);
  }

  getNutritionHeading() {
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

  getMenuList() {
    return cy.get(this.menuList);
  }
}

export default Nutrition;
