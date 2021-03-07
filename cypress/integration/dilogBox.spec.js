/// <reference types="cypress" />

import {navigationTo} from '../support/page-objects/navigationPage';

describe('Testing dilog box', () => {

    beforeEach('Open application',() => {

        cy.openHomePage();
        navigationTo.smartTablePage();

    });

    it('First example testing dilog box and this bad practice', () => {

        cy.get('tbody tr').first().find('.nb-trash').click();
        cy.on('window:confirm', confirm => {
            expect(confirm).to.equal('Are you sure want to delete?');
        });

    });

    it('Second example testing dilog box and it is good practice', () => {

        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure want to delete?');
        });

    });

    it('Third example testing dilog box', () => {

        cy.get('tbody tr').first().find('.nb-trash').click();
        cy.on('window:confirm', () => false);

    });

});