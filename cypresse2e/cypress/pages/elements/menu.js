class Menu {
  welcomeHeading = "h1";
  joinRewards = "h2";
  inputAddress = "#address";
  searchAddressBtn = "#Search__search-btn";
  locationRadius = "#search-radius > option";

  constructor() {}

  visit() {
    cy.visit("order.pokeworks.com");
  }

  getWelcomeHeading() {
    return cy.get(this.welcomeHeading);
  }

  getJoinRewards() {
    return cy.get(this.joinRewards);
  }

  getInputAddress() {
    return cy.get(this.inputAddress);
  }

  getSearchAddress() {
    return cy.get(this.searchAddressBtn);
  }

  getLocationRadius() {
    return cy.get(this.locationRadius);
  }
}

export default Menu;
