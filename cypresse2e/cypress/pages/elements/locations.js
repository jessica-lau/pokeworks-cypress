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
    return get(this.searchBtn);
  }

  getStatesTab() {
    return get(this.statesTab);
  }

  getMilesTab() {
    return get(this.milesTab);
  }
}

export default Locations;
