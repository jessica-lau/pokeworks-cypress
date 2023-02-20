import Locations from "../../pages/elements/locations";

describe("Pokeworks Locations page", () => {
  const locations = new Locations();

  context("User views content Locations page", () => {
    beforeEach(() => {
      locations.visit();
    });

    it("Locations heading is visible", () => {
      locations.getLocationsHeading().shouold("be.visible");
    });

    it("User can type in location in locations search bar", () => {
      locations.getSearchBar().click().type("Rodeo Drive, Beverly Hills, CA");
      locations.getSearchBtn().click();
    });

    it("User can clear location typed in locations search bar", () => {
      locations.getSearchBar().click().type("Rodeo Drive, Beverly Hills, CA");
      locations.getClearSearchBtn().click();
    });

    it("User can click on States tab and view states heading", () => {
      locations.getStatesTab().click();
      locations.getTabHeading().should("contain", "States");
    });

    it("User can click on Miles tab and view distances heading", () => {
      locations.getMilesTab().click();
      locations.getTabHeading().should("contain", "Distance");
    });

    it("Users can click 'Back to Stores' after clicking States or Miles tab", () => {
      locations.getStatesTab().click();
      locations.getGoBackStores().click();
      locations.getMilesTab().click();
      locations.getGoBackStores().click();
    });

    it("User can select number of miles in the list of options", () => {
      locations.getMilesTab().click();
      locations.getTabList().eq(0).click();
      locations.getGoBackStores().click();
      locations.getMilesTab().should("contain", "80 Miles");
    });

    it("User can select a state in the list of options", () => {
      locations.getStatesTab().click();
      locations.getTabList().eq(3).click();
      locations.getGoBackStores().click();
      locations.getStatesTab().should("contain", "Connecticut");
    });

    it("User can select a state in the list of options", () => {
      locations.getStatesTab().click();
      locations.getTabList().eq(6).click();
      locations.getGoBackStores().click();
      locations.getStatesTab().should("contain", "Idaho");
      locations.getClearState().click();
    });
  });
});
