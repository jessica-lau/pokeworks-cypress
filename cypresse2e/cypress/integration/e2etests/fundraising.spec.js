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

    it("Fundraiser description heading is visible", () => {
      fundraising
        .getFundraisingDescrHeading()
        .should("be.visible")
        .and("contain", "Host Your Next Fundraiser");
    });

    it("Fundraiser description is visible", () => {
      fundraising
        .getFundraisingDescr()
        .should("be.visible")
        .and(
          "contain",
          "donate a portion of the net sales to your organization."
        );
    });

    it("How fundraising works heading is visible", () => {
      fundraising
        .getHowItWorksHeading()
        .should("be.visible")
        .and("contain", "How It Works:");
    });
  });
});
