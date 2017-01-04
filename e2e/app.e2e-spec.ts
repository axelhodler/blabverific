import { browser, element, by } from 'protractor';

describe('Blabverific E2E Tests', () => {

  let expectedMsg = 'blockLAB Verify';

  beforeEach(() => {
    browser.get('');
  });

  it('displays: ' + expectedMsg + ' for the default route', () => {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('can enter the reports route via link', () => {
    element(by.id('navbar-to-reports')).click();

    expect(element(by.id('reports-list-heading')).isPresent()).toBeTruthy();
  })
});
