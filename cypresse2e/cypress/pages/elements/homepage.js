class HomePage {
  slideBanner = ".frontpage-hero";
  slideButton = ".slide-order-btn";
  pokeworksRewards = ".rewards-breaker";
  createAccount = ".rewards-cta-btn";
  signIn = ".rewards-signin-btn";
  sectionHeader = ".section-header";
  foodGrid = ".pokeyourway-grid a";
  rewardsList = ".steps-half ol li";
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

  getSlideButton() {
    return cy.get(this.slideButton);
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

  getRewardsList() {
    return cy.get(this.rewardsList);
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
