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

    it("Order Now button is clickable and redirects to order page", () => {
      header.getOrderButton().should("be.visible").click();
      cy.url().should("include", "order");
    });

    it("Menu toggle is visible and clickable", () => {
      header.getMenu().should("be.visible").click();
    });
  });
});
