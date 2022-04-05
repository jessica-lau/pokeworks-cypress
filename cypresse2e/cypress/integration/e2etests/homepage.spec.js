import HomePage from "../../pages/elements/homepage";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks landing page", () => {
  const homepage = new HomePage();

  context("User views content on landing page", () => {
    beforeEach(() => {
      homepage.visit();
    });

    it("Top banner slides are visible and previous and next arrows are clickable", () => {
      homepage.getSlideBanner().should("be.visible");
      homepage.getPrevBtn().eq(0).dblclick();
      homepage.getNextBtn().eq(0).dblclick();
    });
  });
});
