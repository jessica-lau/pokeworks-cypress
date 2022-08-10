import Header from "../../pages/elements/headerNavigation";

describe("Pokeworks header section", () => {
  const header = new Header();

  context("User views content in header section", () => {
    beforeEach(() => {
      header.visit();
    });

    it("Pokeworks logo in header is visible and clickable", () => {
      header.getLogo().should("be.visible").click();
    });

    it("Sign In button is clickable and redirects to sign in page", () => {
      header.getSignInButton().should("be.visible").click();
      cy.url().should("include", "order");
    });

    it("Order Now button is clickable and redirects to order page", () => {
      header.getOrderButton().should("be.visible").click();
      cy.url().should("include", "order");
    });

    it("Menu link in header is clickable and redirects to order page", () => {
      header.getMenu().should("be.visible").click();
      cy.url().should("include", "order");
    });

    it("Locations link in header is clickable and redirects to locations page", () => {
      header.getLocations().should("be.visible").click();
      cy.url().should("include", "/locations");
    });

    it("Nutrition link in header is clickable and redirects to nutrition page", () => {
      header.getNutrition().should("be.visible").click();
      cy.url().should("include", "/nutrition");
    });

    it("Catering link in header is clickable and redirects to catering page", () => {
      header.getCatering().should("be.visible").click();
      cy.url().should("include", "/catering");
    });

    it("Own a Franchise link in header is clickable and redirects to franchise page", () => {
      header.getFranchise().contains("a", "OWN A FRANCHISE").click();
    });
  });
});
