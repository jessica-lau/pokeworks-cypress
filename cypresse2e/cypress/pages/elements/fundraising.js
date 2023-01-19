class Fundraising {
  fundraisingHeading = "h1";
  fundraisingDescription = "h3";
  howItWorksHeading = "h4";
  howItWorksDescription = "p";
  constructor() {}

  visit() {
    cy.visit("fundraising/");
  }
}

export default Fundraising;
