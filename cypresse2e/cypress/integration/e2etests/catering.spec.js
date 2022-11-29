import Catering from "../../pages/elements/catering";

describe("Pokeworks Catering page", () => {
  const catering = new Catering();

  context("User views content on Catering page", () => {
    beforeEach(() => {
      catering.visit();
    });
  });
});
