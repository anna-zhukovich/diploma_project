import BasePage from "./BasePage";

class HomePage extends BasePage {
  private loginButtonOnHomePage: string = ".jet-auth-links__item-text";
  private productsButtonSelector: string = ".elementor-size-lg";

  clickLogInButton() {
    cy.get(this.loginButtonOnHomePage).click();
  }

  clickProductsButton() {
    cy.get(this.productsButtonSelector).click();
  }
}

export default HomePage;
