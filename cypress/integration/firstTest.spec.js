/// <reference types="cypress" />

describe('Our first suit', () => {

   it('first it', () => {

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

   it('second it', () => {

       cy.visit('/');
       cy.contains('Forms').click();
       cy.contains('Form Layouts').click();

       // cy.get('[data-cy="signInButton"]');

       cy.contains('Sign in');

       cy.contains('[status="warning"]', 'Sign in');

       cy.get('#inputEmail3')
           .parent('form')
           .find('button')
           .should('contain', 'Sign in')
           .parent('form')
           .find('nb-checkbox')
           .click();

       cy.contains('nb-card', 'Horizontal form').find('[type="email"]');

   });

   it('then and wrap method', () => {

       cy.visit('/');
       cy.contains('Forms').click();
       cy.contains('Form Layouts').click();

       // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
       // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
       // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address');
       // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

       // Selenium style

       // const firstForm = cy.contains('nb-card', 'Using the Grid');
       // const secondForm = cy.contains('nb-card', 'Basic form');

       // firstForm.find('[for="inputEmail1"]').should('contain', 'Email');
       // firstForm.find('[for="inputPassword2"]').should('contain', 'Password');
       // secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address');

       // Cypress Style

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {

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