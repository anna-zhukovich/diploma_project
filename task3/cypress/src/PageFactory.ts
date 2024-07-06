import BasePage from "./BasePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";

class PageFactory {
  static getPage(pageName: string): BasePage {
    switch (pageName) {
      case "home":
        return new HomePage();
      case "login":
        return new LoginPage();
      case "products":
        return new ProductsPage();
      default:
        throw new Error(`Page with name "${pageName}" does not exist.`);
    }
  }
}

export default PageFactory;
