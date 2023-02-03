class Locations {
  locationsHeading = "#locations-heading";
  searchBar = "#sl-main-search";
  searchBtn = ".sl-search-btn";
  statesTab = "#sl-category-tab";
  milesTab = "#sl-distance-tab";
  tabHeading = ".sl-sec-title";
  backToStores = ".asl-back-stores";

  constructor() {}

  visit() {
    cy.visit("locations/");
  }

  getLocationsHeading() {
    return cy.get(this.locationsHeading);
  }

  getSearchBar() {
    return cy.get(this.searchBar);
  }

  getSearchBtn() {
    return cy.get(this.searchBtn);
  }

  getStatesTab() {
    return cy.get(this.statesTab);
  }

  getMilesTab() {
    return cy.get(this.milesTab);
  }

  getTabHeading() {
    return cy.get(this.tabHeading);
  }

  getGoBackStores() {
    return cy.get(this.backToStores);
  }
}

export default Locations;
