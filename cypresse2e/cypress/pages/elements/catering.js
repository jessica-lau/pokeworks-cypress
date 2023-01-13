class Catering {
  caterHeading = "h1";
  cateringDescription = "h2";
  howMuchHeading = ".build-your-own > h1";
  buildYourPoke = ".build-your-own-component-inner";
  sizeOption = "h4";
  sizeOptionBtn = ".option-cta";
  pokeDishImg = ".row-1";
  buildOwnPokeDescription = ".row-2";

  constructor() {}

  visit() {
    cy.visit("/catering");
  }

  getCaterHeading() {
    return cy.get(this.caterHeading);
  }

  getCateringDescription() {
    return cy.get(this.cateringDescription);
  }

  getHowMuchHeading() {
    return cy.get(this.howMuchHeading);
  }

  getBuildYourPoke() {
    return cy.get(this.buildYourPoke);
  }

  getBuildPokeDescription() {
    return cy.get(this.buildOwnPokeDescription);
  }

  getSizeOption() {
    return cy.get(this.sizeOption);
  }

  getSizeOptionBtn() {
    return cy.get(this.sizeOptionBtn);
  }

  getDishesImage() {
    return cy.get(this.pokeDishImg);
  }
}

export default Catering;
