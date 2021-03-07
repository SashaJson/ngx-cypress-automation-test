/// <reference types="cypress" />

import {navigationTo} from '../support/page-objects/navigationPage';

describe('Testing radio button', () => {

    it('First example testing radio button', () => {

        cy.openHomePage();
        navigationTo.formLayoutsPage();

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {

            cy.wrap(radioButtons)
                .first()
                .check({force: true})
                .should('be.checked');

            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true});

            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked');

            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled');

        });

    });

});