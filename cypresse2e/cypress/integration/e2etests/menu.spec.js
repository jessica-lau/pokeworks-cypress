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
      cy.wait(3000);
      menu.getLocationRadius().eq(0).should("contain", "1 mile").click();
    });

    it("User can select 5 miles from location radius dropdown", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
      cy.wait(3000);
      menu.getLocationRadius().eq(1).should("contain", "5 miles").click();
    });

    it("User can select 10 miles from location radius dropdown", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
      cy.wait(3000);
      menu.getLocationRadius().eq(2).should("contain", "10 miles").click();
    });

    it("User can select 15 miles from location radius dropdown", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
      cy.wait(3000);
      menu.getLocationRadius().eq(3).should("contain", "15 miles").click();
    });

    it("User can select 20 miles from location radius dropdown", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
      cy.wait(3000);
      menu.getLocationRadius().eq(4).should("contain", "20 miles").click();
    });

    it("User can select 25 miles from location radius dropdown", () => {
      menu.getInputAddress().should("be.visible").type("Boston");
      menu.getSearchAddress().click();
      cy.wait(3000);
      menu.getLocationRadius().eq(5).should("contain", "25 miles").click();
    });
  });
});
