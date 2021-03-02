/// <reference types="cypress" />

describe('Testing check boxes', () => {

    it('First example testing check boxes', () => {

        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click();

        // cy.get('[type="checkbox"]').check({force: true});
        cy.get('[type="checkbox"]').eq(0).click({force: true});
        cy.get('[type="checkbox"]').eq(1).check({force: true});

    });

});