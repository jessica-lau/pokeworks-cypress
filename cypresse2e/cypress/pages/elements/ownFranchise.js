class Franchise {
  topBanner = ".page-title";
  formHeader = ".contact-form-part-inner > h2";
  formSubHeader = ".contact-form-description";
  franchiseInfo = ".card-menu-list > ul > li";
  learnMore = ".content > a";
  videoHeader = ".video-testimonials-inner > h2";
  videoSubHeader = ".section-description";
  video = "#player";
  swipeButtonLeft = ".swiper-button-prev";
  swipeButtonRight = ".swiper-button-next";

  // slideImages = ".alpine-slider";
  // franchiseInfo = ".left-side-content";
  // franchiseFormHeading = ".form > p";
  // franchiseFormDetails = "form > p";
  // formErrorMessage = ".form > div > form > p > label > span > span";
  // formErrorTryAgain = ".form > div > form > p > div";
  // franchiseFormDropdown = ".form > div > form > p > select > option";
  // franchiseExperience = ".form > div > form > p > select > textarea";
  // video = ".video-section > div > div > iframe";
  // images = ".images-section > div > div img";
  // socialMedia = ".franchise-form-footer-section > div > div ul li";
  // privacyPolicy = ".franchise-form-footer-section > div > div a";

  constructor() {}

  visit() {
    cy.visit("franchise-with-pokeworks/");
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
  // getSlideImages() {
  //   return cy.get(this.slideImages);
  // }

  // getFranchiseInfo() {
  //   return cy.get(this.franchiseInfo);
  // }

  // getFranchiseFormHeading() {
  //   return cy.get(this.franchiseFormHeading);
  // }

  // getFranchiseFormDetails() {
  //   return cy.get(this.franchiseFormDetails);
  // }

  // getFormError() {
  //   return cy.get(this.formErrorMessage);
  // }

  // getTryAgainError() {
  //   return cy.get(this.formErrorTryAgain);
  // }

  // getDropdownOptions() {
  //   return cy.get(this.franchiseFormDropdown);
  // }

  // getFranchiseExperience() {
  //   return cy.get(this.franchiseExperience);
  // }

  // getYoutubeVideo() {
  //   return cy.get(this.video);
  // }

  // getPokeWorksImages() {
  //   return cy.get(this.images);
  // }

  // getSocialMedia() {
  //   return cy.get(this.socialMedia);
  // }

  // getPrivacyPolicy() {
  //   return cy.get(this.privacyPolicy);
  // }
}

export default Franchise;
