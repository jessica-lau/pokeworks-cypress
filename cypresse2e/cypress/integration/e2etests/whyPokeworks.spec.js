import WhyPokeworks from "../../pages/elements/whyPokeworks";

describe("Why Pokeworks page", () => {
  const whyPokeworks = new WhyPokeworks();

  context("User views content on Why Pokeworks page", () => {
    beforeEach(() => {
      whyPokeworks.visit();
    });
  });

  it("First subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(0).should("be.visible").click();
  });

  it("Second subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(1).should("be.visible").click();
  });

  it("Third subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(2).should("be.visible").click();
  });

  it("Fourth subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(3).should("be.visible").click();
  });

  it("Fifth subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(4).should("be.visible").click();
  });

  it("Sixth subnavigation is visible and clickable", () => {
    whyPokeworks.getsubNavigation().eq(5).should("be.visible").click();
  });

  it("'Why Pokeworks' heading is visible", () => {
    whyPokeworks.getPokeworksHeading().should("contain", "WHY POKEWORKS");
  });

  it("Section one heading of Why Pokeworks is visible", () => {
    whyPokeworks.getSectionHeading().eq(0).should("contain", "AUV-TOP");
  });

  it("Section one description of Wny Pokeworks is visible", () => {
    whyPokeworks
      .getSectionDescription()
      .eq(0)
      .should("contain", "Pokeworks is built to scale with system");
  });

  it("Section one 'Let's Take The Next Step' button is visible and clickable", () => {
    whyPokeworks.getSectionBtn().eq(0).should("be.visible").click();
  });

  it("Section two heading of Why Pokeworks is visible", () => {
    whyPokeworks.getSectionHeading().eq(1).should("contain", "COST CONSCIOUS");
  });

  it("Section two description of Wny Pokeworks is visible", () => {
    whyPokeworks
      .getSectionDescription()
      .eq(1)
      .should("contain", "efficiency and operational speed.");
  });

  it("Section two 'Schedule a Call to Learn More' button is visible and clickable", () => {
    whyPokeworks.getSectionBtn().eq(1).should("be.visible").click();
  });

  it("Section three heading of Why Pokeworks is visible", () => {
    whyPokeworks.getSectionHeading().eq(2).should("contain", "OPERATIONAL");
  });

  it("Section three description of Wny Pokeworks is visible", () => {
    whyPokeworks
      .getSectionDescription()
      .eq(2)
      .should(
        "contain",
        "provides you with the brand, industry, operational and opening knowledge needed to maximize your effectiveness."
      );
  });

  it("Section three 'Ready for Next Steps' button is visible and clickable", () => {
    whyPokeworks.getSectionBtn().eq(2).should("be.visible").click();
  });

  it("Section four heading of Why Pokeworks is visible", () => {
    whyPokeworks.getSectionHeading().eq(3).should("contain", "LEADERSHIP");
  });

  it("Section four description of Wny Pokeworks is visible", () => {
    whyPokeworks
      .getSectionDescription()
      .eq(3)
      .should(
        "contain",
        "our operations and marketing teams provide ongoing support to help you succeed."
      );
  });

  it("Section four 'Lets Talk' button is visible and clickable", () => {
    whyPokeworks.getSectionBtn().eq(3).should("be.visible").click();
  });

  it("Section five heading of Why Pokeworks is visible", () => {
    whyPokeworks.getSectionHeading().eq(4).should("contain", "INNOVATION");
  });

  it("Section five description of Wny Pokeworks is visible", () => {
    whyPokeworks
      .getSectionDescription()
      .eq(4)
      .should(
        "contain",
        "We think of poke as a platform for creation with flexibility"
      );
  });

  it("Section five 'Ready for Next Steps' button is visible and clickable", () => {
    whyPokeworks.getSectionBtn().eq(4).should("be.visible").click();
  });
});
