import BasePage from "./BasePage";
import HomePage from "./HomePage";

class ProductsPage extends BasePage {
  private productThumbsSelector: string =
    "a > .jet-woo-product-thumbs.effect-fade";

  private AddToBusketButton: string = ".single_add_to_cart_button";
  private selectColorDrobdown = "#pa_color";
  private valueColor: string = "heather-grey";

  private selectSizeDrobdown: string = "#pa_size";
  private valueSize: string = "xs";

  private LinkSizeGuide = "Size Guide";
  private popupGuideSize: string = ".jet-popup--show-state";

  public verifyAndClickFirstProductThumb() {
    const productThumbsSelector = this.productThumbsSelector;
    cy.origin(
      "https://onlineshopdemo-co-uk.stackstaging.com",
      { args: { productThumbsSelector } },
      ({ productThumbsSelector }) => {
        cy.get(productThumbsSelector, { timeout: 10000 })
          .first()
          .should("be.visible")
          .click();
      }
    );
  }

  public buttonIsNotActive() {
    cy.get(this.AddToBusketButton, { timeout: 10000 })
      .should("exist")
      .should("have.class", "disabled");
  }

  public selectOptionColor() {
    cy.get(this.selectColorDrobdown).select(this.valueColor);
  }

  public selectOptionSize() {
    cy.get(this.selectSizeDrobdown).select(this.valueSize);
  }
  public clickOnLinkSizeGuide() {
    cy.contains(this.LinkSizeGuide).click();
  }

  public popiupisdisplayed() {
    cy.get(this.popupGuideSize).should("be.visible");
  }
}
export default ProductsPage;
