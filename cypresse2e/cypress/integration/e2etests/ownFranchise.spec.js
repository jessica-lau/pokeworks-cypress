import Franchise from "../../pages/elements/ownFranchise";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks Own a Franchise Page", () => {
  const franchise = new Franchise();

  context("User views and applies for franchise on Franchise page", () => {
    beforeEach(() => {
      franchise.visit();
    });

    it("Top banner on Franchise page is visible", () => {
      franchise.getTopBanner().should("be.visible");
    });

    it("Form header is visible", () => {
      franchise
        .getFormHeader()
        .should("be.visible")
        .and("contain", "POKEWORKS FRANCHISING");
    });

    it("Form subheader is visible", () => {
      franchise
        .getFormSubHeader()
        .should("be.visible")
        .and("contain", "franchise owners");
    });

    it("Pokeworks info section one is visible", () => {
      franchise
        .getFranchiseInfo()
        .eq(0)
        .should("contain", "PREMIUM FAST CASUAL");
    });

    it("Pokeworks info section two is visible", () => {
      franchise.getFranchiseInfo().eq(1).should("contain", "MARKET SHARE");
    });

    it("Pokeworks info section three is visible", () => {
      franchise.getFranchiseInfo().eq(2).should("contain", "EXCLUSIVE");
    });

    it("Pokeworks info section four is visible", () => {
      franchise.getFranchiseInfo().eq(3).should("contain", "PREMIUM POKE");
    });

    it("Pokeworks info section one Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(0).should("be.visible").click();
      cy.url().should("include", "why-pokeworks");
    });

    it("Pokeworks info section two Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(1).should("be.visible").click();
      cy.url().should("include", "why-pokeworks");
    });

    it("Pokeworks info section three Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(2).should("be.visible").click();
      cy.url().should("include", "available-territories");
    });

    it("Pokeworks info section four Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(3).should("be.visible").click();
      cy.url().should("include", "about-us");
    });

    it("Video header is visible", () => {
      franchise.getVideoHeader().should("contain", "MEET OUR POKE PEOPLE");
    });

    it("Video subheader is visible", () => {
      franchise
        .getVideoSubHeader()
        .should("contain", "serving their communities");
    });

    it("Video player is visible", () => {
      franchise.getVideo().should("be.visible");
    });

    it("Video right and left swipe buttons are visible and clickable", () => {
      franchise.getSwipeLeft().should("be.visible").click();
      franchise.getSwipeRight().should("be.visible").click();
    });
  });
});
