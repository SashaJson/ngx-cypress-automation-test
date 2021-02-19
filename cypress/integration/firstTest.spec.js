/// <reference types="cypress" />

describe('Our first suit', () => {
   it('first test', () => {

       cy.visit('/');
       cy.contains('Forms').click();
       cy.contains('Form Layouts').click();

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