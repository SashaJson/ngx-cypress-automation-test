import {navigationTo} from '../support/page-objects/navigationPage';
import {onDatepickerPage} from '../support/page-objects/datepickerPage';
import {onFormLayoutsPage} from '../support/page-objects/formLayoutsPage';
import {onSmartTablePage} from '../support/page-objects/smartTablePage';

describe('Testing with Page Objects', () => {

    beforeEach('Open application', () => {
        cy.openHomePage();
    });

    it('Verify navigation actoss the pages', () => {
        navigationTo.formLayoutsPage();
        navigationTo.datepickerPage();
        navigationTo.smartTablePage();
        navigationTo.tooltipPage();
        navigationTo.toasterPage();
    });

    it('Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigationTo.formLayoutsPage();
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Sasha', 'test@test.com');
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password');
        navigationTo.datepickerPage();
        onDatepickerPage.selectCommonDatepickerDateFromToday(1);
        onDatepickerPage.selectDatepickerWithRangerFromToday(7, 14);
        navigationTo.smartTablePage();
        onSmartTablePage.addNewRecordWithFirstAndLastName('Sasha', 'Shulha');
        onSmartTablePage.updateAgeFirstName('Sasha', '23');
        onSmartTablePage.deleteRowByIndex(1);
    });

});