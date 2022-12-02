import Catering from "../../pages/elements/catering";

describe("Pokeworks Catering page", () => {
  const catering = new Catering();

  context("User views content on Catering page", () => {
    beforeEach(() => {
      catering.visit();
    });

    it("Catering heading is visible", () => {
      catering.cateringHeading().should("be.visible");
    });
  });
});
