/// <reference types="cypress" />

import {navigationTo} from '../support/page-objects/navigationPage';

describe('Testing then and wrap method', () => {

    beforeEach('Open application',() => {
        cy.openHomePage();
        navigationTo.formLayoutsPage();
    });

    it('First testing', () => {

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address');
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

    });

    xit('Selenium style testing', () => {

        const firstForm = cy.contains('nb-card', 'Using the Grid');
        const secondForm = cy.contains('nb-card', 'Basic form');

        firstForm.find('[for="inputEmail1"]').should('contain', 'Email');
        firstForm.find('[for="inputPassword2"]').should('contain', 'Password');
        secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address');

    });

    it('Cypress style testing', () => {

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {

            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
            expect(emailLabelFirst).to.equal('Email');
            expect(passwordLabelFirst).to.equal('Password');

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(passwordLabelFirst).to.equal(passwordSecondText);

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');

            });

        });

    });

});