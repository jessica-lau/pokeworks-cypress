class Franchise {
  topBanner = ".page-title";
  formHeader = ".contact-form-part-inner > h2";
  formSubHeader = ".contact-form-description";
  franchiseInfo = ".card-menu-list > li";
  learnMore = ".content > a";
  videoHeader = ".video-testimonials-inner > h2";
  videoSubHeader = ".section-description";
  video = "iframe";
  swipeButtonLeft = ".swiper-button-prev";
  swipeButtonRight = ".swiper-button-next";

  constructor() {}

  visit() {
    cy.visit("https://pokeworksfranchise.com/");
  }

  getTopBanner() {
    return cy.get(this.topBanner);
  }

  getFormHeader() {
    return cy.get(this.formHeader);
  }

  getFormSubHeader() {
    return cy.get(this.formSubHeader);
  }

  getFranchiseInfo() {
    return cy.get(this.franchiseInfo);
  }

  getLearnMore() {
    return cy.get(this.learnMore);
  }

  getVideoHeader() {
    return cy.get(this.videoHeader);
  }

  getVideoSubHeader() {
    return cy.get(this.videoSubHeader);
  }

  getVideo() {
    return cy.get(this.video);
  }

  getSwipeLeft() {
    return cy.get(this.swipeButtonLeft);
  }

  getSwipeRight() {
    return cy.get(this.swipeButtonRight);
  }
}

export default Franchise;
