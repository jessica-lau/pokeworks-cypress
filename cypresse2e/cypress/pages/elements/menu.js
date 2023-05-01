class Menu {
  welcomeHeading = "h1";
  joinRewards = "h2";
  inputAddress = "#address";
  searchAddressBtn = "#Search__search-btn";

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
}

export default Menu;
