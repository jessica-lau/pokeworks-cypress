class Locations {
  locationsHeading = "#locations-heading";
  searchBar = "#sl-main-search";
  searchBtn = ".sl-search-btn";
  clearSearch = ".asl-search-clr";
  statesTab = "#sl-category-tab";
  clearState = ".icon-cancel-1";
  milesTab = "#sl-distance-tab";
  searchList = ".sl-item";
  tabList = ".asl-filter-list > ul > li";
  tabHeading = ".sl-sec-title";
  backToStores = ".asl-back-stores";
  noStoreFound = ".sl-no-item";

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

  getClearState() {
    return cy.get(this.clearState);
  }

  getMilesTab() {
    return cy.get(this.milesTab);
  }

  getSearchList() {
    return cy.get(this.searchList);
  }

  getTabList() {
    return cy.get(this.tabList);
  }

  getTabHeading() {
    return cy.get(this.tabHeading);
  }

  getGoBackStores() {
    return cy.get(this.backToStores);
  }

  getNoStore() {
    return cy.get(this.noStoreFound);
  }
}

export default Locations;
