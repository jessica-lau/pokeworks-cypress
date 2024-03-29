import Locations from "../../pages/elements/locations";

describe("Pokeworks Locations page", () => {
  const locations = new Locations();

  context("User views content on Locations page", () => {
    beforeEach(() => {
      locations.visit();
    });

    it("Locations heading is visible", () => {
      locations.getLocationsHeading().should("be.visible");
    });

    it("User can type in location in locations search bar", () => {
      locations
        .getSearchBar()
        .click()
        .type("Rodeo Drive, Beverly Hills, CA {enter}");
      cy.wait(2000);
      locations.getSearchList().eq(0).should("contain", "Addison");
    });

    it("User can clear location typed in locations search bar", () => {
      locations
        .getSearchBar()
        .click()
        .type("Rodeo Drive, Beverly Hills, CA {enter}");
      cy.wait(2000);
      locations.getClearSearchBtn().click({ force: true });
    });

    it("User can click on States tab and view states heading", () => {
      locations.getStatesTab().click();
      locations.getTabHeading().should("contain", "All States");
    });

    it("User can click on Miles tab and view distances heading", () => {
      locations.getMilesTab().click();
      locations.getTabHeading().should("contain", "Distance");
    });

    it("Users can click 'Back to Stores' after clicking States or Miles tab", () => {
      locations.getStatesTab().click();
      locations.getGoBackStores().click({ multiple: true, force: true });
      locations.getMilesTab().click();
      locations.getGoBackStores().click({ multiple: true, force: true });
    });

    it("User can select number of miles in the list of options", () => {
      locations.getMilesTab().click();
      locations.getTabList().eq(3).click({ force: true });
      locations.getGoBackStores().click({ multiple: true, force: true });
      cy.wait(3000);
      locations.getMilesTab().should("contain", "80 Miles");
    });

    it("User can select a state in the list of options", () => {
      locations.getStatesTab().click();
      locations.getTabList().eq(3).click();
      locations.getGoBackStores().click({ multiple: true, force: true });
      locations.getStatesTab().should("contain", "Connecticut");
    });

    it("User can clear state selected from States tab", () => {
      locations.getStatesTab().click();
      locations.getTabList().eq(6).click({ force: true, multiple: true });
      locations.getGoBackStores().click({ force: true, multiple: true });
      locations.getStatesTab().should("contain", "Idaho");
      locations.getClearState().click();
      locations.getStatesTab().should("contain", "States");
    });

    it("User can type in an address where no stores are found", () => {
      locations
        .getSearchBar()
        .click()
        .type("Hong Kong Road, Parish, NY {enter}");
      cy.wait(3000);
      locations.getNoStore().should("contain", "No Store Found");
    });
  });
});
