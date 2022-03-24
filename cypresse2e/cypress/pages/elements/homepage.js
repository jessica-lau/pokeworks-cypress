class HomePage {
  slideBanner = ".frontpage-hero";
  pokeworksRewards = ".rewards-breaker";
  createAccount = ".rewards-cta-btn";
  signIn = ".rewards-signin-btn";
  sectionHeader = ".section-header";
  foodGrid = ".pokeyourway-grid a";
  orderAppSection = ".app-order";
  appStore = ".app-badge-row a";
  mobilePrevBtn = ".swiper-button-prev";
  mobileNextBtn = ".swiper-button-next";

  constructor() {}

  visit() {
    cy.visit();
  }

  getSlideBanner() {
    return cy.get(this.slideBanner);
  }

  getRewards() {
    return cy.get(this.pokeworksRewards);
  }

  getCreateAccount() {
    return cy.get(this.createAccount);
  }

  getSignIn() {
    return cy.get(this.signIn);
  }

  getSectionHeader() {
    return cy.get(this.sectionHeader);
  }

  getFoodGrid() {
    return cy.get(this.foodGrid);
  }

  getOrderApp() {
    return cy.get(this.orderAppSection);
  }

  getAppStore() {
    return cy.get(this.appStore);
  }

  getPrevBtn() {
    return cy.get(this.mobilePrevBtn);
  }

  getNextBtn() {
    return cy.get(this.mobileNextBtn);
  }
}
export default HomePage;
