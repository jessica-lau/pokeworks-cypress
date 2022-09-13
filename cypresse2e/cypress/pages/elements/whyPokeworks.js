class WhyPokeworks {
  subNavigation = ".secondary_nav";
  pokeworksHeading = "h1";
  sectionHeading = "h2";
  sectionDescription = ".section-description";
  sectionButton = ".btn-outlined btn-primary";
  contactFormDescription = ".contact-form-description";
  contactFormField = "p > label > span > input";
  netWorthDropdown = "p > label > span > select";
  experienceRestaurant = "#experience-restaurant";
  experienceFranchise = "#experience-franchise";

  constructor() {}

  visit() {
    cy.visit("/why-pokeworks/");
  }
}

export default WhyPokeworks;
