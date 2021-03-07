/// <reference types="cypress" />

import {navigationTo} from '../support/page-objects/navigationPage';

describe('Testing check boxes', () => {

    it('First example testing check boxes', () => {

        cy.visit('/');
        navigationTo.toasterPage();

        // cy.get('[type="checkbox"]').check({force: true});
        cy.get('[type="checkbox"]').eq(0).click({force: true});
        cy.get('[type="checkbox"]').eq(1).check({force: true});

    });

});