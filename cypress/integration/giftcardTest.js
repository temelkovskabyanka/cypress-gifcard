import Component from "../component/GiftCards/Component";
import Data from "../component/GiftCards/Data";
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });
describe("Gift Cards Test", () => {
        let giftcardComponent = new Component();
        let giftcardData = new Data();

   it("Changing gift card serial number", () => {
       cy.visit("https://demo.phppointofsale.com/index.php/home");
       giftcardComponent.loginButton.click();
       cy.visit("https://demo.phppointofsale.com/index.php/giftcards");
       cy.visit("https://demo.phppointofsale.com/index.php/giftcards/view/2/2");
       giftcardComponent.giftcardNumberField.clear();
       giftcardComponent.giftcardNumberField.type(giftcardData.giftcardNumberField);
       giftcardComponent.customerNameField.type(giftcardData.customerNameField);
       giftcardComponent.inactiveCheckboxField.click();
       giftcardComponent.saveButton.click();
       giftcardComponent.tableRow.find(".clone_manage_table").click();
      // giftcardComponent.confirmButton.click();

   });
});