class Franchise {
  slideImages = ".alpine-slider";
  franchiseInfo = ".left-side-content";
  franchiseFormHeading = ".form > p";
  franchiseFormDetails = ".form > div > form > p > input";
  formErrorMessage = ".form > div > form > p > label > span > span";
  franchiseFormDropdown = ".form > div > form > p > select > option";
  franchiseExperience = ".form > div > form > p > select > textarea";
  video = ".video-section > div > div > iframe";
  images = ".images-section > div > div img";
  socialMedia = ".franchise-form-footer-section > div > div ul li";
  privacyPolicy = ".franchise-form-footer-section > div > div a";

  constructor() {}

  visit() {
    cy.visit("franchise-with-pokeworks/");
  }

  getSlideImages() {
    return cy.get(this.slideImage);
  }

  getFranchiseInfo() {
    return cy.get(this.franchiseInfo);
  }

  getFranchiseFormHeading() {
    return cy.get(this.franchiseFormHeading);
  }

  getFranchiseFormDetails() {
    return cy.get(this.franchiseFormDetails);
  }

  getFormError() {
    return cy.get(this.formErrorMessage)
  }

  getDropdownOptions() {
    return cy.get(this.franchiseFormDropdown);
  }

  getFranchiseExperience() {
    return cy.get(this.franchiseExperience);
  }

  getYoutubeVideo() {
    return cy.get(this.video);
  }

  getPokeWorksImages() {
    return cy.get(this.images);
  }

  getSocialMedia() {
    return cy.get(this.socialMedia);
  }

  getPrivacyPolicy() {
    return cy.get(this.privacyPolicy);
  }
}

export default Franchise;