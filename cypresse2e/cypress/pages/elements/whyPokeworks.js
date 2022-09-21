class WhyPokeworks {
  subNavigation = ".secondary_nav > ul > li";
  pokeworksHeading = "h1";
  sectionHeading = "h2";
  sectionDescription = ".section-description";
  sectionButton = ".btn-outlined btn-primary";
  contactFormDescription = ".contact-form-description";
  contactFormField = "p > label > span > input";
  netWorthDropdown = "p > label > span > select";
  experienceRestaurant = "#experience-restaurant";
  experienceFranchise = "#experience-franchise";
  submitButton = 'input[type="submit"]';

  constructor() {}

  visit() {
    cy.visit("https://pokeworksfranchise.com/why-pokeworks/");
  }

  getsubNavigation() {
    return cy.get(this.subNavigation);
  }

  getPokeworksHeading() {
    return cy.get(this.pokeworksHeading);
  }

  getSectionHeading() {
    return cy.get(this.sectionHeading);
  }

  getSectionDescription() {
    return cy.get(this.sectionDescription);
  }

  getSectionBtn() {
    return cy.get(this.sectionButton);
  }

  getContactFormDescrp() {
    return cy.get(this.contactFormDescription);
  }

  getContactFormField() {
    return cy.get(this.contactFormField);
  }

  getNetWorthDropdown() {
    return cy.get(this.netWorthDropdown);
  }

  getExperienceRestaurant() {
    return cy.get(this.experienceRestaurant);
  }

  getExperienceFranchise() {
    return cy.get(this.experienceFranchise);
  }

  getSubmitBtn() {
    return cy.get(this.submitButton);
  }
}

export default WhyPokeworks;
