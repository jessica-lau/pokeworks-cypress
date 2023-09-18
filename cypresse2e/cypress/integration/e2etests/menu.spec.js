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

    it("Join rewards & earn points should be visible", () => {
      menu
        .getJoinRewards()
        .should("contain", "Join rewards and start earning points!");
    });

    it("User can populate location into address search bar", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
    });

    it("User can select 1 mile from location radius dropdown", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
      menu.getLocationRadius().eq(0).should("contain", "1 mile").click();
    });
  });
});
