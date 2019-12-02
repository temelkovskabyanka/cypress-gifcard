export default class Component {
    get loginButton(){
        return cy.get(".btn.btn-primary.btn-block");
    }
    get giftcardNumberField(){
        return cy.get("#giftcard_number");
    }
    get customerNameField(){
        return cy.get("#choose_customer");
    }
    get inactiveCheckboxField(){
        return cy.get("[for=\"inactive\"] span");
    }
    get saveButton(){
        return cy.get("#submit");
    }
    get tableRow(){
        return cy.get("#sortable_table tr").eq(2);
    }
    get confirmButton(){
        return cy.get("[data-bb-handler=\"confirm\"]");
    }
}