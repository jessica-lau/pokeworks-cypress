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

    it("Menu search bar is visible and can be populated", () => {
      nutrition.getSearchBarMenu().should("be.visible").click().type("salad");
    });

    it("'Lifestyle and Allergen Filter' toggle can be switched on and off", () => {
      nutrition.getFilterToggle().dblclick();
    });

    it("User can choose and add an allergen filter from the dropdown", () => {
      nutrition.getFilterToggle().click();
      nutrition.getFilterDropdown().click();
      nutrition.getFilterDropdownChoice().eq(3).click();
    });

    it("User can view the statement that menu does not contain allergen", () => {
      nutrition.getFilterToggle().click();
      nutrition.getFilterDropdown().click();
      nutrition.getFilterDropdownChoice().eq(5).click();
      nutrition.getAllergenStmt().should("contain", "does NOT");
    });

    it("User can click on menu category on the menu list", () => {
      nutrition.getMenuList().eq(1).click();
    });
  });
});
