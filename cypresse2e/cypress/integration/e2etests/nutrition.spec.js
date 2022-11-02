import Nutrition from "../../pages/elements/nutrition";

describe("Pokeworks Nutrition page", () => {
  const nutrition = new Nutrition();

  context("User views Nutrition page and interacts with nutrition menu", () => {
    beforeEach(() => {
      nutrition.visit();
    });

    it("Nutrition heading is visible", () => {
      nutrition.getNutritionHeading().should("be.visible");
    });
  });
});
