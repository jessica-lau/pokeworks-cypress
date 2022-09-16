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
    cy.visit("/why-pokeworks/");
  }

  getsubNavigation() {
    return cy.get(this.subNavigation);
  }

  pokeworksHeading() {
    return cy.get(this.pokeworksHeading);
  }
}

export default WhyPokeworks;
