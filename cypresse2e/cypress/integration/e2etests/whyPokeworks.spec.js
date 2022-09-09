import WhyPokeworks from "../../pages/elements/whyPokeworks";

describe("Why Pokeworks page", () => {
  const whyPokeworks = new WhyPokeworks();

  context("User views content on Why Pokeworks page", () => {
    beforeEach(() => {
      whyPokeworks.visit();
    });
  });
});
