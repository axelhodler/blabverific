import { browser, element, by } from 'protractor';

describe('Blabverific E2E Tests', () => {

  let expectedMsg = 'blockLAB Verify';

  it('should display: ' + expectedMsg + ' for the default route', () => {
    browser.get('');

    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
