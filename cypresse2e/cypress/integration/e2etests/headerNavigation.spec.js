import Header from "../../pages/elements/headerNavigation";

describe("Pokeworks header section", () => {
  const header = new Header();

  context("User views content in header section", () => {
    beforeEach(() => {
      header.visit();
    });

    it("Pokeworks logo in header is visible and clickable", () => {
      header.getLogo().should("be.visible").click();
    });
  });
});
