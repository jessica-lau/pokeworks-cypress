class Header {
  logo = ".logo-desktop-wrapper";
  navigationMenu = "#header-nav-list li";
  accountAndOrder = ".account-n-order-wrapper a";

  constructor() {}
}

export default Header;
class Header {
  logo = ".logo-desktop-wrapper";
  accountAndOrderButton = ".account-n-order-wrapper a";
  headerLinks = "#header-nav-list li";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getSignInButton() {
    return cy.get(this.accountAndOrderButton).eq(0);
  }

  getOrderButton() {
    return cy.get(this.accountAndOrderButton).eq(1);
  }

  getMenu() {
    return cy.get(this.headerLinks).eq(0);
  }

  getLocations() {
    return cy.get(this.headerLinks).eq(1);
  }

  getNutrition() {
    return cy.get(this.headerLinks).eq(2);
  }

  getCatering() {
    return cy.get(this.headerLinks).eq(3);
  }

  getFranchise() {
    return cy.get(this.headerLinks).eq(4);
  }
}

export default Header;
