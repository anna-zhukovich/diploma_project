class BasePage {
  url: any;
  constructor() {
    this.url = "https://www.onlineshopdemo.co.uk/";
  }

  visit() {
    cy.visit(this.url);
  }
}

export default BasePage;
