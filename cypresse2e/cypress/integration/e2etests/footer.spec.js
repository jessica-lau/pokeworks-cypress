import Footer from "../../pages/elements/footer";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks footer section", () => {
  const footer = new Footer();

  context("User views content and links in footer section", () => {
    beforeEach(() => {
      footer.visit();
    });

    it("Pokeworks logo in footer is visible", () => {
      footer.getLogo().should("be.visible");
    });

    it("Pokeworks description is visible", () => {
      footer.getFooterHeading().should("contain", "GET FRESH UPDATES");
      footer
        .getFooterDescription()
        .should("contain", "Sign up to receive exclusive deals");
    });

    it("User types and submits email in the subscription input", () => {
      footer.getEmailInput().type(emailAndPassword.validEmail);
      footer.getSubmitEmail().click();
    });

    it("Terms of Use is visible and clickable", () => {
      footer.getTermsOfUse().should("be.visible").click();
      cy.url().should("include", "/terms-of-use");
    });

    it("Privacy Policy is visible and clickable", () => {
      footer.getPrivacyPolicy().should("be.visible").click();
      cy.url().should("include", "privacy-policy");
    });

    it("Jobs link is visible and clickable", () => {
      footer.getJobs().should("be.visible").click();
      cy.url().should("include", "/jobs");
    });

    it("Own a Franchise link is visible and clickable", () => {
      footer.getFranchise().should("be.visible").click();
      cy.url().should("include", "/franchise-with-pokeworks");
    });

    it("Our Story link is visible and clickable", () => {
      footer.getStory().should("be.visible").click();
      cy.url().should("include", "/our-story");
    });

    it("Press link is visible and clickable", () => {
      cy.getPress().should("be.visible").click();
      cy.url().should("include", "/press");
    });

    it("FAQs link is visible and clickable", () => {
      cy.get('a[href="/faq"]').should("be.visible").click();
      cy.url().should("include", "/faq");
    });

    it("Contact Us link is visible and clickable", () => {
      footer.getContact().should("be.visible").click();
      cy.url().should("include", "/contact-us");
    });

    it("Catering link is visible and clickable", () => {
      footer.getCatering().eq(0).should("be.visible").click();
      cy.url().should("include", "/catering");
    });

    it("EZCater link is visible and clickable", () => {
      footer.getCatering().eq(1).should("be.visible").click();
      cy.url().should("include", "/pvt");
    });

    it("Rewards link is visible and clickable", () => {
      footer.getRewards().should("be.visible").click();
      cy.url().should("include", "/rewards");
    });

    it("Nutrition link is visible and clickable", () => {
      footer.getNutrition().should("be.visible").click();
      cy.url().should("include", "/nutrition");
    });

    it("Locations link is visible and clickable", () => {
      footer.getLocations().should("be.visible").click();
      cy.url().should("include", "/locations");
    });

    it("Facebook social is visible and clickable", () => {
      footer.getFacebook().should("be.visible").click();
    });

    it("Twitter social is visible and clickable", () => {
      footer.getTwitter().should("be.visible").click();
    });

    it("Instagram social is visible and clickable", () => {
      footer.getInstagram().should("be.visible").click();
    });
  });
});
