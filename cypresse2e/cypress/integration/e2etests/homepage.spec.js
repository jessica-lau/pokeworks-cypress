import HomePage from "../../pages/elements/homepage";

describe("Pokeworks landing page", () => {
  const homepage = new HomePage();

  context("User views content on landing page", () => {
    beforeEach(() => {
      homepage.visit();
    });

    it("Top banner slides are visible and previous and next arrows are clickable", () => {
      homepage.getSlideBanner().should("be.visible");
      homepage.getPrevBtn().eq(0).dblclick();
      homepage.getNextBtn().eq(0).dblclick();
    });

    it("Pokeworks join rewards image is visible", () => {
      homepage.getRewards().should("be.visible");
    });

    it("Create an Account button is clickable and redirects to create account page", () => {
      homepage.getCreateAccount().contains("CREATE AN ACCOUNT").click();
      cy.url().should("include", "order");
    });

    it("Sign In link is clickable and redirects to sign in page", () => {
      homepage.getSignIn().contains("SIGN IN").click();
      cy.url().should("include", "order");
    });

    it("Heading in food options section is visible", () => {
      homepage
        .getSectionHeader()
        .eq(0)
        .should("be.visible")
        .and("contain", "Satisfy your craving for a Poke Bowl or Burrito")
        .and("contain", "Keep it 100");
    });

    // it("Food options are visible, clickable, and redirects to order page", () => {
    //   homepage.getFoodGrid().eq(0).should("be.visible").click();
    //   cy.url().should("include", "order");
    // });

    it("Heading in rewards section is visible", () => {
      homepage
        .getSectionHeader()
        .eq(1)
        .should("be.visible")
        .and("contain", "JOIN POKEWORKS REWARDS")
        .and("contain", "Download our Pokeworks Rewards app");
    });
  });
});
