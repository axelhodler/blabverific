import { browser, element, by } from 'protractor';

describe('Blabverific E2E Tests', () => {

  let expectedMsg = 'blockLAB Verify';

  beforeEach(() => {
    browser.get('');
  });

  it('should display: ' + expectedMsg, () => {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
