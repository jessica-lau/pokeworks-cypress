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

    it("Pokeworks logo is visible", () => {
      cy.wait(2000);
      nutrition.getPokeworksLogo().should("be.visible");
    });

    it("Interactive Nutrition Menu heading is visible", () => {
      cy.wait(2000);
      nutrition
        .getMenuHeading()
        .should("contain", "Interactive Nutrition Menu");
    });

    it("Menu search bar is visible and can be populated", () => {
      cy.wait(2000);
      nutrition.getSearchBarMenu().should("be.visible").click().type("salad");
    });

    it("'Lifestyle and Allergen Filter' toggle can be switched on and off", () => {
      cy.wait(2000);
      nutrition.getFilterToggle().dblclick();
    });

    it("User can choose and add an allergen filter from the dropdown", () => {
      cy.wait(2000);
      nutrition.getFilterToggle().click();
      nutrition.getFilterDropdown().click();
      nutrition.getFilterDropdownChoice().eq(3).click();
    });

    it("User can view the statement that menu does not contain allergen", () => {
      cy.wait(2000);
      nutrition.getFilterToggle().click();
      nutrition.getFilterDropdown().click();
      nutrition.getFilterDropdownChoice().eq(5).click();
      nutrition.getAllergenStmt().should("contain", "does NOT");
    });

    it("User can click on menu category on the menu list", () => {
      cy.wait(2000);
      nutrition.getMenuCategory().eq(1).click();
    });

    it("User can select sub menu item under a menu category on the menu list", () => {
      cy.wait(2000);
      nutrition.getSubMenuItem().eq(2).click();
    });
  });
});
