class WhyPokeworks {
  subNavigation = ".secondary_nav";
  pokeworksHeading = "h1";
  sectionHeading = "h2";
  sectionDescription = ".section-description";
  sectionButton = ".btn-outlined btn-primary";
  constructor() {}

  visit() {
    cy.visit("/why-pokeworks/");
  }
}

export default WhyPokeworks;
