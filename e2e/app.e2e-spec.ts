import { browser, element, by } from 'protractor';

describe('Blabverific E2E Tests', () => {

  let expectedMsg = 'blockLAB Verify';

  it('displays: ' + expectedMsg + ' for the default route', () => {
    browser.get('');

    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('can enter the reports route', () => {
    browser.get('reports');

    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  })
});
