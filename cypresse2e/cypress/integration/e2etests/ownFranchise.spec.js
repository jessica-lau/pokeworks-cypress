import Franchise from "../../pages/elements/ownFranchise";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks Own a Franchise Page", () => {
  const franchise = new Franchise();

  context("User views and applies for franchise on Franchise page", () => {
    beforeEach(() => {
      franchise.visit();
    });

    it("Top banner on Franchise page is visible", () => {
      franchise.getTopBanner().should("be.visible");
    });

    it("Form header is visible", () => {
      franchise
        .getFormHeader()
        .should("be.visible")
        .and("contain", "POKEWORKS FRANCHISING");
    });

    it("Form subheader is visible", () => {
      franchise
        .getFormSubHeader()
        .should("be.visible")
        .and("contain", "franchise owners");
    });

    it("Pokeworks info section one is visible", () => {
      franchise
        .getFranchiseInfo()
        .eq(0)
        .should("contain", "PREMIUM FAST CASUAL");
    });

    it("Pokeworks info section two is visible", () => {
      franchise.getFranchiseInfo().eq(1).should("contain", "MARKET SHARE");
    });

    it("Pokeworks info section three is visible", () => {
      franchise.getFranchiseInfo().eq(2).should("contain", "EXCLUSIVE");
    });

    it("Pokeworks info section four is visible", () => {
      franchise.getFranchiseInfo().eq(3).should("contain", "PREMIUM POKE");
    });

    it("Pokeworks info section one Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(0).should("be.visible").click();
      cy.url().should("include", "why-pokeworks");
    });

    it("Pokeworks info section two Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(1).should("be.visible").click();
      cy.url().should("include", "why-pokeworks");
    });

    it("Pokeworks info section three Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(2).should("be.visible").click();
      cy.url().should("include", "available-territories");
    });

    it("Pokeworks info section four Learn More link is visible and clickable", () => {
      franchise.getLearnMore().eq(3).should("be.visible").click();
      cy.url().should("include", "about-us");
    });

    it("Video header is visible", () => {
      franchise.getVideoHeader().should("contain", "MEET OUR POKE PEOPLE");
    });

    it("Video subheader is visible", () => {
      franchise
        .getVideoSubHeader()
        .should("contain", "serving their communities");
    });

    it("Video player is visible", () => {
      franchise.getVideo().should("be.visible");
    });

    // it("Slide images on Franchise page are visible", () => {
    //   franchise.getSlideImages().should("be.visible");
    // });

    // it("Pokeworks franchise background information is visible", () => {
    //   franchise
    //     .getFranchiseInfo()
    //     .should(
    //       "contain",
    //       "Pokeworks is the nation’s largest and fastest growing poke franchise"
    //     )
    //     .and(
    //       "contain",
    //       "We continue to build on our segment leading poke franchise"
    //     )
    //     .and("contain", "corporate support");
    // });

    // it("Form heading should be visible", () => {
    //   franchise
    //     .getFranchiseFormHeading()
    //     .contains("multi-unit franchise owners");
    // });

    // it("User fills out form with details", () => {
    //   franchise.getFranchiseFormDetails().eq(0).click().type("Jane");
    //   franchise.getFranchiseFormDetails().eq(1).click().type("Doe");
    //   franchise.getFranchiseFormDetails().eq(2).click().type("333-333-3333");
    //   franchise
    //     .getFranchiseFormDetails()
    //     .eq(3)
    //     .click()
    //     .type(emailAndPassword.validEmail);
    //   franchise.getFranchiseFormDetails().eq(4).click().type("NY");
    //   franchise.getFranchiseFormDetails().eq(5).click().type("01000");
    //   franchise.getDropdownOptions().eq(0).click();
    //   franchise.getDropdownOptions().eq(1).click();
    //   franchise.getFranchiseFormDetails().eq(7).click().type("US");
    //   franchise.getDropdownOptions().eq(1).click();
    //   franchise.getDropdownOptions().eq(3).click();
    //   franchise.getDropdownOptions().eq(2).click();
    //   franchise.getDropdownOptions().eq(2).click();
    //   franchise
    //     .getFranchiseExperience()
    //     .click()
    //     .type("Opened local pizza shop in lower Manhattan for 5 years.");
    // });

    // it("Form Submit button is visible and clickable", () => {
    //   cy.get("input").should("have.value", "Submit").click();
    // });

    // it("Video on Franchise page is visible and playable", () => {
    //   franchise.getYoutubeVideo().should("be.visible").dblclick();
    // });

    // it("Images on Franchise page are visible", () => {
    //   franchise.getPokeWorksImages().eq(0).should("be.visible");
    //   franchise.getPokeWorksImages().eq(1).should("be.visible");
    //   franchise.getPokeWorksImages().eq(2).should("be.visible");
    // });

    // it("Social media icons on Franchise page are visible and clickable", () => {
    //   franchise.getSocialMedia().eq(0).should("be.visible").click();
    //   franchise.getSocialMedia().eq(1).should("be.visible").click();
    //   franchise.getSocialMedia().eq(2).should("be.visible").click();
    // });

    // it("Privacy Policy link on the Franchise page is visible and clickable", () => {
    //   franchise.getPrivacyPolicy().should("be.visible").click();
    //   cy.url().should("include", "privacy-policy");
    // });

    // //negative scenarios

    // it("Leaving all fields on form blank and clicking Submit triggers error", () => {
    //   cy.get("input").should("have.value", "Submit").click();
    //   franchise
    //     .getFormError()
    //     .eq(0)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getFormError()
    //     .eq(1)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getFormError()
    //     .eq(3)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getFormError()
    //     .eq(4)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getFormError()
    //     .eq(5)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getFormError()
    //     .eq(7)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getFormError()
    //     .eq(10)
    //     .should("contain", "The field is required.");
    //   franchise
    //     .getTryAgainError()
    //     .should(
    //       "contain",
    //       "One or more fields have an error. Please check and try again."
    //     );
    // });

    // it("Populating email field with invalid email triggers error", () => {
    //   franchise.getFranchiseFormDetails().eq(0).click().type("Jane");
    //   franchise.getFranchiseFormDetails().eq(1).click().type("Doe");
    //   franchise.getFranchiseFormDetails().eq(2).click().type("333-333-3333");
    //   franchise
    //     .getFranchiseFormDetails()
    //     .eq(3)
    //     .click()
    //     .type(emailAndPassword.invalidEmail);
    //   franchise.getFranchiseFormDetails().eq(4).click().type("NY");
    //   franchise.getFranchiseFormDetails().eq(5).click().type("01000");
    //   franchise.getDropdownOptions().eq(0).click().eq(1).click();
    //   franchise.getFranchiseFormDetails().eq(7).click().type("US");
    //   franchise.getDropdownOptions.eq(1).click().eq(3).click();
    //   franchise.getDropdownOptions().eq(2).click().eq(2).click();
    //   franchise
    //     .getFranchiseExperience()
    //     .click()
    //     .type("Opened local pizza shop in lower Manhattan for 5 years.");
    //   cy.get("input").should("have.value", "Submit").click();
    //   franchise
    //     .getFormError()
    //     .eq(3)
    //     .should("contain", "The e-mail address entered is invalid.");
    //   franchise
    //     .getTryAgainError()
    //     .should(
    //       "contain",
    //       "One or more fields have an error. Please check and try again."
    //     );
    // });
  });
});
