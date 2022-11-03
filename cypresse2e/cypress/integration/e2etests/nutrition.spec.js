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

    it("Nutrition description is visible", () => {
      nutrition
        .getNutritionDescription()
        .should(
          "contain",
          "Our poke menu offers customizable, low-calorie poke bowls with a variety of bases and proteins"
        );
    });

    it("Interactive Nutrition Menu heading is visible", () => {
      nutrition
        .getMenuHeading()
        .should("contain", "Interactive Nutrition Menu");
    });
  });
});
