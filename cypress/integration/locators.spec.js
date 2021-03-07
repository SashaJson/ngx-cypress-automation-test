/// <reference types="cypress" />

import {navigationTo} from '../support/page-objects/navigationPage';

describe('Testing locators', () => {

    it('first example testing locators', () => {

        cy.visit('/');
        navigationTo.formLayoutsPage();

        cy.get('input');

        cy.get('#inputEmail');

        cy.get('.input-full-width');

        cy.get('[placeholder]');

        cy.get('[placeholder="Email"]');

        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        cy.get('input[placeholder="Email"]');

        cy.get('[placeholder="Email"][type="email"]');

        cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

        cy.get('[data-cy="imputEmail1"]');

    });

});