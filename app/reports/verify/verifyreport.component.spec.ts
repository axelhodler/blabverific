import {
  async, TestBed, ComponentFixture
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {Contract} from "../../boundaries/contract";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {VerifyReportComponentPageObject} from "./verifyreport.component.pageobject";

describe('VerifyReport', () => {
  let comp: VerifyReport;
  let pageObject: VerifyReportComponentPageObject;
  let fixture: ComponentFixture<VerifyReport>;
  let contractMock = {
    verifyReport() {
    },
    isReportValid() {
    },
    fetchVerifierAmount() {
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [VerifyReport],
      providers: [{provide: Contract, useValue: contractMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReport);
    pageObject = new VerifyReportComponentPageObject(fixture);
    comp = fixture.componentInstance;
    contractMock = TestBed.get(Contract);
    spyOn(contractMock, 'verifyReport');
    fixture.detectChanges();
  });

  it('verifies a report on clicking the verify report button', () => {
    pageObject.enterReportId('reportId');

    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(contractMock.verifyReport).toHaveBeenCalledWith('reportId');
  });

  it('can find reports by id', () => {
    spyOn(contractMock, 'isReportValid');
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();

    expect(contractMock.isReportValid).toHaveBeenCalledWith('reportId');
  });

  it('displays if checked report is valid', () => {
    spyOn(contractMock, 'isReportValid').and.returnValue(true);
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();

    expect(pageObject.isReportValidTextContent()).toBe('is valid!');
  });

  it('displays if checked report is invalid', () => {
    spyOn(contractMock, 'isReportValid').and.returnValue(false);
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();

    expect(pageObject.isReportValidTextContent()).toBe('not valid or not found!');
  });

  it('does not allow to click verify-report or find-report if no id is entered', () => {
    expect(fixture.debugElement.query(By.css('#verify-report')).nativeElement.getAttribute('disabled')).toBe('');
    expect(fixture.debugElement.query(By.css('#find-report')).nativeElement.getAttribute('disabled')).toBe('');
  });

  it('displays the amount of verifiers for a specified report', () => {
    spyOn(contractMock, 'fetchVerifierAmount').and.returnValue(2);
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();

    expect(pageObject.reportsVerifierTextContent()).toBe('2');
  });

  it('displays the amount of verifiers for a specified report', () => {
    spyOn(contractMock, 'fetchVerifierAmount').and.returnValue(3);
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();

    expect(pageObject.reportsVerifierTextContent()).toBe('3');
  });
});
