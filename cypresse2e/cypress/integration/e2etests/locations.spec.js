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
  });
});
