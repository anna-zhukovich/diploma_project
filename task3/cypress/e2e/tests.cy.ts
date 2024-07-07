import BasePage from "../src/BasePage";
import HomePage from "../src/HomePage";
import LoginPage from "../src/LoginPage";
import PageFactory from "../src/PageFactory";
import ProductsPage from "../src/ProductsPage";

describe("Online Store UI-Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.onlineshopdemo.co.uk/");
  });

  it("1 - Check that login form is displayed after clicking on Login button", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickLogInButton();
    const loginpage = PageFactory.getPage("login");
    loginpage.verifyLoginTextVisible();
    loginpage.verifyLoginFormVisible();
  });

  it("2 - Check that login form is displayed after clicking on Login button on Login Page", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickLogInButton();
    const loginpage = PageFactory.getPage("login");
    loginpage.clickOnLoginButtonOnLoginPage();
    loginpage.verifyLoginTextVisible();
    loginpage.verifyLoginFormVisible();
  });

  it("3 - Check that registration from is displayed after clicking on Registered button on Login Page", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickLogInButton();
    const loginpage = PageFactory.getPage("login");
    loginpage.clickOnRegisteredButtonOnLoginPage();
    loginpage.verifyRegisterTextVisible();
    loginpage.verifyLoginFormVisible();
  });

  it("4 - Check displaying error message for invalid credentials", () => {
    cy.fixture("creds.json").then((creds: { email: any; password: any }) => {
      const { email, password } = creds;
      const homepage = PageFactory.getPage("home") as HomePage;
      homepage.clickLogInButton();
      const loginpage = PageFactory.getPage("login") as LoginPage;

      loginpage.pageReload();
      loginpage.fillUsernameField(email);
      loginpage.fillPasswordField(password);
      loginpage.clickOnLoginButtonOnLoginPage();

      loginpage.pageReloadTrack();
      loginpage.fillUsernameField(email);
      loginpage.fillPasswordField(password);
      loginpage.clickOnLoginButtonOnLoginPage();
      loginpage.verifyErrorMessageWrongLoginPassword();
    });
  });

  it("5 - Check displaying error message when a user tries to log in with empty fields", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickLogInButton();
    const loginpage = PageFactory.getPage("login");
    loginpage.pageReload();
    loginpage.clickOnLoginButtonOnLoginPage();
    loginpage.pageReloadTrack();
    loginpage.clickOnLoginButtonOnLoginPage();
    loginpage.verifyErrorMessageLoginWithEmptyFields();
  });

  it("6 - Check displaying Lost your password button on Log in Page", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickLogInButton();
    const loginpage = PageFactory.getPage("login");
    loginpage.verifyLostPasswordLinkVisible();
  });

  it("7 - Check button Add to Bucket is not active", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickProductsButton();
    const productspage = PageFactory.getPage("products");
    productspage.verifyAndClickFirstProductThumb();
    productspage.buttonIsNotActive();
  });

  it("8 - Check button Add to Bucket is not active when a user chooses only Color", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickProductsButton();
    const productspage = PageFactory.getPage("products");
    productspage.verifyAndClickFirstProductThumb();
    productspage.selectOptionColor();
    productspage.buttonIsNotActive();
  });

  it("9 - Check button Add to Bucket is not active when a user chooses only Size", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickProductsButton();
    const productspage = PageFactory.getPage("products");
    productspage.verifyAndClickFirstProductThumb();
    productspage.selectOptionSize();
    productspage.buttonIsNotActive();
  });

  it("10 - Check pop-up is dispalyed when a user clicks on Size Guide Link ", () => {
    const homepage = PageFactory.getPage("home");
    homepage.clickProductsButton();
    const productspage = PageFactory.getPage("products");
    productspage.verifyAndClickFirstProductThumb();
    productspage.clickOnLinkSizeGuide();
    productspage.popiupisdisplayed();
  });
});
