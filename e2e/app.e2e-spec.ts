import { browser, element, by } from 'protractor';

describe('Blabverific E2E Tests', function () {

  let expectedMsg = 'blockLAB Verify';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
