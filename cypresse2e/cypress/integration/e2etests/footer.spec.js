import Footer from "../../pages/elements/footer";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks footer section", () => {
  const footer = new Footer();

  context("User views content and links in footer section", () => {
    beforeEach(() => {
      footer.visit();
    });

    it("Pokeworks logo in footer is visible", () => {
      footer.getLogo().should("be.visible");
    });

    it("Pokeworks description is visible", () => {
      footer.getfooterHeading().should("contain", "GET FRESH UPDATES");
      footer
        .getFooterDescription()
        .should("contain", "Sign up to receive exclusive deals");
    });

    it("User types and submits email in the subscription input", () => {
      footer.getEmailInput().type(emailAndPassword.validEmail);
      footer.getSubmitEmail().click();
    });
  });
});
