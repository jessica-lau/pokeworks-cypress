class Header {
  logo = ".logo-mobile-wrapper";
  orderNowButton = ".order-now-mobile-btn";
  menu = "button .mobile-menu-trigger";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getOrderButton() {
    return cy.get(this.orderNowButton);
  }

  getMenu() {
    return cy.get(this.menu);
  }
}

export default Header;
