import Locations from "../../pages/elements/locations";

describe("Pokeworks Locations page", () => {
  const locations = new Locations();

  context("User views content Locations page", () => {
    beforeEach(() => {
      locations.visit();
    });
  });
});
