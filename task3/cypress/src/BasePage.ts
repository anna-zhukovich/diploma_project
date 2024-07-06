class BasePage {
  popiupisdisplayed() {
    throw new Error("Method not implemented.");
  }
  clickOnLinkSizeGuide() {
    throw new Error("Method not implemented.");
  }
  selectOptionSize() {
    throw new Error("Method not implemented.");
  }
  selectOptionColor() {
    throw new Error("Method not implemented.");
  }

  buttonIsNotActive() {
    throw new Error("Method not implemented.");
  }
  verifyAndClickFirstProductThumb() {
    throw new Error("Method not implemented.");
  }
  clickProductsButton() {
    throw new Error("Method not implemented.");
  }
  verifyLostPasswordLinkVisible() {
    throw new Error("Method not implemented.");
  }
  verifyErrorMessageLoginWithEmptyFields() {
    throw new Error("Method not implemented.");
  }
  verifyErrorMessageWrongLoginPassword() {
    throw new Error("Method not implemented.");
  }
  errorMessage(arg0: string, errorMessage: any) {
    throw new Error("Method not implemented.");
  }
  errorSelector(errorSelector: any) {
    throw new Error("Method not implemented.");
  }
  verifyRegisterTextVisible() {
    throw new Error("Method not implemented.");
  }
  clickOnRegisteredButtonOnLoginPage() {
    throw new Error("Method not implemented.");
  }
  clickOnLoginButtonOnLoginPage() {
    throw new Error("Method not implemented.");
  }
  verifyLoginTextVisible() {
    throw new Error("Method not implemented.");
  }
  verifyLoginFormVisible() {
    throw new Error("Method not implemented.");
  }
  LogInButtonIsVisible() {
    throw new Error("Method not implemented.");
  }
  clickLogInButton() {
    throw new Error("Method not implemented.");
  }

  url: any;
  constructor() {
    this.url = "https://www.onlineshopdemo.co.uk/";
  }

  visit() {
    cy.visit(this.url);
  }
}

export default BasePage;
