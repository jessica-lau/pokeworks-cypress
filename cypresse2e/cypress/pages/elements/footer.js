class Footer {
  logo = ".footer-logo";
  footerHeading = "h4";
  footerDescription = "p";
  emailInput = 'input[type="email"]';
  submitEmail = ".newsletter-arrow-right";
  footerItemListOne = "#footer-column-1-nav-list > li";
  footerItemListTwo = "#footer-column-2-nav-list > li";
  termAndPolicy = "#footer-fineprint-nav-list > li";
  socialMedia = "#social-icons-list > li";

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

  getNutrition() {
    return cy.get(this.footerItemListOne).eq(0);
  }

  getLocation() {
    return cy.get(this.footerItemListOne).eq(1);
  }

  getFranchise() {
    return cy.get(this.footerItemListOne).eq(2);
  }

  getJobs() {
    return cy.get(this.footerItemListOne).eq(3);
  }

  getRewards() {
    return cy.get(this.footerItemListOne).eq(4);
  }

  getStory() {
    return cy.get(this.footerItemListTwo).eq(0);
  }

  getCatering() {
    return cy.get(this.footerItemListTwo).eq(1);
  }

  getPress() {
    return cy.get(this.footerItemListTwo).eq(2);
  }

  getFaqs() {
    return cy.get(this.footerItemListTwo).eq(3);
  }

  getContact() {
    return cy.get(this.footerItemListTwo).eq(4);
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
