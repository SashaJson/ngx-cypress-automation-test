/// <reference types="cypress" />

import {NavigationTo} from '../support/page-objects/navigationPage';

describe('Testing find web elements', () => {

    it('First example testing find web elements', () => {

        cy.visit('/');
        NavigationTo.formLayoutsPage();

        // cy.get('[data-cy="signInButton"]');

        cy.contains('Sign in');

        cy.contains('[status="warning"]', 'Sign in');

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click();

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]');

    });

});