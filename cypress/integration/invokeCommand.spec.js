/// <reference types="cypress" />

describe('Testing invoke command', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    });

    it('First testing invoke command', () => {

        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');

    });

    it('Second testing invoke command', () => {

        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address');
        });

    });

    it('Third testing invoke command', () => {

        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address');
        });

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain', 'checked')
            .then(classValue => {
                expect(classValue).to.contain('checked');
            });

    });

});