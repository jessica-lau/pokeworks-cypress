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

    it("How fundraising works description is visible", () => {
      fundraising
        .getHowItWorksDescrOne()
        .should("be.visible")
        .and(
          "contain",
          "host your fundraiser event at your local Pokeworks location."
        );
      fundraising
        .getHowItWorksDescrTwo()
        .should("be.visible")
        .and(
          "contain",
          "receive confirmation about your event with more details."
        );
      fundraising
        .getHowItWorksDescrThree()
        .should("be.visible")
        .and(
          "contain",
          "receive promotional materials to help spread the word to your organization,"
        );
      fundraising
        .getHowItWorksDescrFour()
        .should("be.visible")
        .and("contain", "Fundraisers will be supported in-store and online.");
    });

    it("Link in fundraising description is visible and clickable", () => {
      cy.get('a[href="https://www.groupraise.com/pokeworks"]').click();
    });
  });
});
