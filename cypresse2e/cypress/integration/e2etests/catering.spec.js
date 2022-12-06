import Catering from "../../pages/elements/catering";

describe("Pokeworks Catering page", () => {
  const catering = new Catering();

  context("User views content on Catering page", () => {
    beforeEach(() => {
      catering.visit();
    });

    it("Catering heading is visible", () => {
      catering.cateringHeading().should("be.visible");
    });

    it("Catering description is visible", () => {
      catering
        .cateringDescription()
        .should("be.visible")
        .and(
          "contain",
          "Make it extra with our uber-fresh seafood and hand-cut vegetables"
        );
    });

    it("First Order Catering button is visible and clickable", () => {
      cy.get('a[href="https://catering.pokeworks.com"]')
        .eq(0)
        .should("be.visible")
        .click();
      cy.url().should("include", "https://catering.pokeworks.com/");
    });
  });
});
