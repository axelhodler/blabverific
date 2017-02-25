import {
  async, TestBed, ComponentFixture, fakeAsync, tick
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {Contract} from "../../boundaries/contract";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {VerifyReportComponentPageObject} from "./verifyreport.component.pageobject";
import {MaterialModule} from "@angular/material";

describe('VerifyReport', () => {
  let comp: VerifyReport;
  let pageObject: VerifyReportComponentPageObject;
  let fixture: ComponentFixture<VerifyReport>;
  let contractMock = {
    verifyReport() {
    },
    isReportValid() {
      return Promise.resolve();
    },
    fetchVerifierAmount() {
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule.forRoot()],
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
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve());
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();

    expect(contractMock.isReportValid).toHaveBeenCalledWith('reportId');
  });

  it('displays if checked report is valid', fakeAsync(() => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve(true));
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();
    tick(1000);
    fixture.detectChanges();

    expect(pageObject.isReportValidTextContent()).toBe('is valid!');
  }));

  it('displays if checked report is invalid', fakeAsync(() => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve(false));
    pageObject.enterReportId('reportId');

    pageObject.clickFindReport();
    tick(1000);
    fixture.detectChanges();

    expect(pageObject.isReportValidTextContent()).toBe('not valid or not found!');
  }));

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
