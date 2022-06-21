class Footer {
  logo = ".footer-logo";
  footerHeading = "h4";
  footerDescription = "p";
  emailInput = 'input[type="email"]';
  submitEmail = ".newsletter-arrow-right";
  footerItemListOne = "#footer-column-1-nav-list > li";
  footerItemListTwo = "#footer-column-2-nav-list > li";
  termAndPolicy = "#footer-fineprint-nav-list > li";
  socialMedia = ".footer-column .social-icons-list li";

  constructor() {}

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getFooterHeading() {
    return cy.get(this.footerHeading);
  }

  getFooterDescription() {
    return cy.get(this.footerDescription);
  }

  getEmailInput() {
    return cy.get(this.emailInput);
  }

  getSubmitEmail() {
    return cy.get(this.submitEmail);
  }

  getFranchise() {
    return cy.get(this.footerItemListOne).eq(1);
  }

  getStory() {
    return cy.get(this.footerItemListOne).eq(2);
  }

  getRewards() {
    return cy.get(this.footerItemListOne).eq(3);
  }

  getLocations() {
    return cy.get(this.footerItemListOne).eq(4);
  }

  getNutrition() {
    return cy.get(this.footerItemListOne).eq(5);
  }

  getPress() {
    return cy.get(this.footerItemListOne).eq(6);
  }

  getFaqs() {
    return cy.get(this.footerItemListOne).eq(7);
  }

  getContact() {
    return cy.get(this.footerItemListOne).eq(8);
  }

  getCatering() {
    return cy.get(this.footerItemListTwo);
  }

  getTermsOfUse() {
    return cy.get(this.termAndPolicy).eq(0);
  }

  getPrivacyPolicy() {
    return cy.get(this.termAndPolicy).eq(1);
  }

  getFacebook() {
    return cy.get(this.socialMedia).eq(0);
  }

  getTwitter() {
    return cy.get(this.socialMedia).eq(1);
  }

  getInstagram() {
    return cy.get(this.socialMedia).eq(2);
  }
}

export default Footer;
