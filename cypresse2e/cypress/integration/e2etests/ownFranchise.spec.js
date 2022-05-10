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

  it("Pokeworks franchise background information is visible", () => {
    franchise
      .getFranchiseInfo()
      .contains(
        "Pokeworks is the nation’s largest and fastest growing poke franchise",
        "We continue to build on our segment leading poke franchise",
        "corporate support"
      );
  });
});
