/// <reference types="cypress" />

import {NavigationTo} from '../support/page-objects/navigationPage';

describe('Testing invoke command', () => {

    beforeEach(() => {
        cy.visit('/');
        NavigationTo.formLayoutsPage();
    });

    it('First testing invoke command', () => {

        cy.get('[for="exampleInputEmail1"]')
            .should('contain', 'Email address')
            .should('have.class', 'label')
            .and('have.text', 'Email address');

    });

    it('Second testing invoke command', () => {

        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address');
            expect(label).to.have.class('label');
            expect(label).to.have.text('Email address');
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