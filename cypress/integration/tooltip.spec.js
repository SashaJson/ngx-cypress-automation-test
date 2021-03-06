/// <reference types="cypress" />

import {NavigationTo} from '../support/page-objects/navigationPage';

describe('Testing tooltip', () => {

    it('First example testing tooltip', () => {

        cy.visit('/');
        NavigationTo.tooltipPage();

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click();
        cy.get('nb-tooltip').should('contain', 'This is a tooltip');

    });

});