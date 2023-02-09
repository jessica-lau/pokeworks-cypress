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

    it("User can click on States tab and view states", () => {
      locations.getStatesTab().click();
      locations.getTabHeading().should("contain", "States");
    });

    it("User can click on Miles tab and view distances", () => {
      locations.getMilesTab().click();
      locations.getTabHeading().should("contain", "Distance");
    });
  });
});
