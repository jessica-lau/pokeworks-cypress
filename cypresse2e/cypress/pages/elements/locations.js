class Locations {
  locationsHeading = "#locations-heading";
  searchBar = "#sl-main-search";
  searchBtn = ".sl-search-btn";
  statesTab = "#sl-category-tab";
  milesTab = "#sl-distance-tab";

  constructor() {}

  visit() {
    cy.visit("locations/");
  }
}

export default Locations;
