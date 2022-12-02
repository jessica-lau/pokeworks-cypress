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

    it("Catering description is visible", () => {
      catering
        .cateringDescription()
        .should("be.visible")
        .and(
          "contain",
          "Make it extra with our uber-fresh seafood and hand-cut vegetables"
        );
    });
  });
});
