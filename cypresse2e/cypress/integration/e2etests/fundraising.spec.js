import Fundraising from "../../pages/elements/fundraising";

describe("Pokeworks Fundraising page", () => {
  const fundraising = new Fundraising();

  context("User views Fundraising page", () => {
    beforeEach(() => {
      fundraising.visit();
    });

    it("Fundraising page heading is visible", () => {
      fundraising
        .getFundraisingHeading()
        .should("be.visible")
        .and("contain", "FUNDRAISING WITH POKEWORKS");
    });
  });
});
