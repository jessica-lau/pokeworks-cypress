import Fundraising from "../../pages/elements/fundraising";

describe("Pokeworks Fundraising page", () => {
  const fundraising = new Fundraising();

  context("User views Fundraising page", () => {
    beforeEach(() => {
      fundraising.visit();
    });
  });
});
