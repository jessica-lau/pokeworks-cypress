import WhyPokeworks from "../../pages/elements/whyPokeworks";

describe("Why Pokeworks page", () => {
  const whyPokeworks = new WhyPokeworks();

  context("User views content on Why Pokeworks page", () => {
    beforeEach(() => {
      whyPokeworks.visit();
    });
  });

  it("First subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(0).should("be.visible").click();
  });

  it("Second subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(1).should("be.visible").click();
  });

  it("Third subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(2).should("be.visible").click();
  });

  it("Fourth subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(3).should("be.visible").click();
  });

  it("Fifth subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(4).should("be.visible").click();
  });

  it("Sixth subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(5).should("be.visible").click();
  });
});
