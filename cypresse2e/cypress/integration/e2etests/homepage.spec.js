import HomePage from "../../pages/elements/homepage";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("Pokeworks landing page", () => {
  const homepage = new HomePage();

  context("User views content on landing page", () => {
    beforeEach(() => {
      homepage.visit();
    });
  });
});
