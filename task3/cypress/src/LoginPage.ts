import BasePage from "./BasePage";
import HomePage from "./HomePage";

class LoginPage extends BasePage {
  private loginButton: string = ".jet-tabs__label-text";
  private LoginForm: string = ".login";

  private registeredButton: string = ".jet-tabs__label-text";
  private registeredForm: string = ".register";
  private registerText: string = "Register";

  private usernameFieldSelector: string = "#username";
  private passwordFieldSelector: string = "#password";
  private loginButtonSubmitSelector: string = ".woocommerce-form-login__submit";

  private errorMessage: string = ".woocommerce-error";
  private errorMessageText: string =
    "not registered on this site. If you are unsure of your username, try your email address instead.";
  private errorMessageTextEmptyFields: string = "Username is required.";

  private lostPasswordLinkSelector: string =
    'a[href="https://www.onlineshopdemo.co.uk/lost-password/"]';

  clickOnRegisteredButtonOnLoginPage() {
    cy.get(this.registeredButton).first().click();
  }

  RegisteredButton() {
    cy.contains(this.registeredButton, "Registered").should("be.visible");
  }

  verifyRegistrationFormVisible() {
    cy.click(this.RegisteredButton)
      .get(this.registeredForm, this.registerText)
      .should("be.visible");
  }

  verifyRegisterTextVisible() {
    cy.get("h2").contains("Register");
  }

  LogInButtonIsVisible() {
    cy.contains(this.loginButton, "Login").should("be.visible");
  }

  clickOnLoginButtonOnLoginPage() {
    cy.get(this.loginButtonSubmitSelector).click();
  }

  verifyLoginTextVisible() {
    cy.get("h2").contains("Login");
  }

  verifyLoginFormVisible() {
    cy.get(this.LoginForm).should("be.visible");
  }

  verifyErrorMessageWrongLoginPassword() {
    cy.get(this.errorMessage)
      .contains(this.errorMessageText)
      .should("be.visible");
  }

  verifyErrorMessageLoginWithEmptyFields() {
    cy.get(this.errorMessage)
      .contains(this.errorMessageTextEmptyFields)
      .should("be.visible");
  }

  verifyLostPasswordLinkVisible() {
    cy.get(this.lostPasswordLinkSelector).should("be.visible");
  }
}

export default LoginPage;
