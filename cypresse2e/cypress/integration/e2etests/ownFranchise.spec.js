import Franchise from "../../pages/elements/ownFranchise";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks Own a Franchise Page", () => {
  const franchise = new Franchise();

  context("Use views and applies for franchise on Franchise page", () => {
    beforeEach(() => {
      franchise.visit();
    });
  });

  it("Slide images on Franchise page are visible", () => {
    franchise.getSlideImages().should("be.visible");
  });
});
