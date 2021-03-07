/// <reference types="cypress" />

import {navigationTo} from '../support/page-objects/navigationPage';

describe('Testing web tables', () => {

    before('Open application',() => {
        cy.openHomePage();
        navigationTo.smartTablePage();
    });

    it('First example testing web tables', () => {

        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click();
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25');
            cy.wrap(tableRow).find('.nb-checkmark').click();
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25');
        });

    });

    it('Second example testing web tables', () => {

        cy.get('thead').find('.nb-plus').click();
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Sasha');
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Shulha');
            cy.wrap(tableRow).find('.nb-checkmark').click();
        });
        cy.get('tbody tr').first().find('td').then(tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Sasha');
            cy.wrap(tableColumns).eq(3).should('contain', 'Shulha');
        });

    });

    it('Third example testing web tables', () => {

        const age = [20, 30, 40, 200];

        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age);
            cy.wait(500);
            cy.get('tbody tr').each(tableRow => {
                if (age === 200) {
                    cy.wrap(tableRow).should('contain', 'No data found');
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age);
                }
            });
        });

    });

});