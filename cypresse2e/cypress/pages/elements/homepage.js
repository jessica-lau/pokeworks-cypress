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
}
export default HomePage;
