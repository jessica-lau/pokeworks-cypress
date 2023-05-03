import Menu from "../../pages/elements/menu";

describe("Pokeworks Menu page", () => {
  const menu = new Menu();

  context("User views menu page", () => {
    beforeEach(() => {
      menu.visit();
    });

    it("Welcome heading is visible", () => {
      menu.getWelcomeHeading().should("contain", "Welcome");
    });

    it("Search & view locations description should be visible", () => {
      cy.get("div")
        .contains("Search or view nearby locations below")
        .should("be.visible");
    });
  });
});
