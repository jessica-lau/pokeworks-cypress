class Menu {
  welcomeHeading = "h1";
  constructor() {}

  visit() {
    cy.visit("order.pokeworks.com");
  }

  getWelcomeHeading() {
    return cy.get(this.welcomeHeading);
  }
}

export default Menu;
