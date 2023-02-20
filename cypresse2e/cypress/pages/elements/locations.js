class Locations {
  locationsHeading = "#locations-heading";
  searchBar = "#sl-main-search";
  searchBtn = ".sl-search-btn";
  clearSearch = ".asl-search-clr";
  statesTab = "#sl-category-tab";
  milesTab = "#sl-distance-tab";
  tabList = ".asl-filter-list > ul > li";
  tabHeading = ".sl-sec-title";
  clearState = ".icon-cancel-1";
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

  getClearSearchBtn() {
    return cy.get(this.clearSearch);
  }

  getStatesTab() {
    return cy.get(this.statesTab);
  }

  getMilesTab() {
    return cy.get(this.milesTab);
  }

  getTabList() {
    return cy.get(this.tabList);
  }

  getTabHeading() {
    return cy.get(this.tabHeading);
  }

  getClearState() {
    return cy.get(this.clearState);
  }

  getGoBackStores() {
    return cy.get(this.backToStores);
  }
}

export default Locations;
