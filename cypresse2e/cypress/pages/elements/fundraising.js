class Fundraising {
  fundraisingHeading = "h1";
  fundraisingDescription = "h3";
  howItWorksHeading = "h4";
  howItWorksDescription = "p";
  constructor() {}

  visit() {
    cy.visit("fundraising/");
  }

  getFundraisingHeading() {
    return cy.get(this.fundraisingHeading);
  }

  getFundraisingDescrHeading() {
    return cy.get(this.fundraisingDescription).eq(0);
  }

  getFundraisingDescr() {
    return cy.get(this.fundraisingDescription).eq(1);
  }

  getHowItWorksHeading() {
    return cy.get(this.howItWorksHeading);
  }

  getHowItWorksDescrOne() {
    return cy.get(this.howItWorksDescription).eq(0);
  }

  getHowItWorksDescrTwo() {
    return cy.get(this.howItWorksDescription).eq(1);
  }

  getHowItWorksDescrThree() {
    return cy.get(this.howItWorksDescription).eq(2);
  }

  getHowItWorksDescrFour() {
    return cy.get(this.howItWorksDescription).eq(3);
  }
}

export default Fundraising;
