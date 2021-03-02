/// <reference types="cypress" />

describe('Testing assert property', () => {

    it('First example testing assert property', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('24').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Mar 24, 2021')
        });

    });

});