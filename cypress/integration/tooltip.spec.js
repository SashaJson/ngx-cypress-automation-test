/// <reference types="cypress" />

describe('Testing tooltip', () => {

    it('First example testing tooltip', () => {

        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Tooltip').click();

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click();
        cy.get('nb-tooltip').should('contain', 'This is a tooltip');

    });

});