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
    fetchVerifiers() {
      return Promise.resolve();
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule],
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
    spyOn(contractMock, 'verifyReport').and.returnValue(Promise.resolve());
    fixture.detectChanges();
  });

  it('verifies a report on clicking the verify report button', () => {
    pageObject.enterReportId('reportId', () => {});

    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(contractMock.verifyReport).toHaveBeenCalledWith('reportId');
  });

  it('can find reports by id', () => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve());

    pageObject.enterReportId('reportId', () => {});

    expect(contractMock.isReportValid).toHaveBeenCalledWith('reportId');
  });

  it('displays if checked report is valid', fakeAsync(() => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve(true));

    pageObject.enterReportId('reportId', tick);

    expect(pageObject.isReportValidTextContent()).toBe('is valid!');
  }));

  it('displays if checked report is invalid', fakeAsync(() => {
    spyOn(contractMock, 'isReportValid').and.returnValue(Promise.resolve(false));

    pageObject.enterReportId('reportId', tick);

    expect(pageObject.isReportValidTextContent()).toContain('not yet valid');
  }));

  it('does not allow to click verify-report if no id is entered', () => {
    expect(fixture.debugElement.query(By.css('#verify-report')).nativeElement.getAttribute('disabled')).toBe('');
  });

  it('displays the verifiers for a specified report', fakeAsync(() => {
    spyOn(contractMock, 'fetchVerifiers').and.returnValue(Promise.resolve(['firstAddress']));

    pageObject.enterReportId('reportId', tick);

    expect(pageObject.reportsVerifierTextContent()).toContain('firstAddress');
  }));

  it('updates the verifiers after adding a new verification', fakeAsync(() => {
    spyOn(contractMock, 'fetchVerifiers')
      .and.returnValues(Promise.resolve(['firstAddress']), Promise.resolve(['firstAddress', 'secondAddress']));
    pageObject.enterReportId('reportId', tick);

    pageObject.clickVerifyButton(tick);

    expect(pageObject.reportsVerifierTextContent()).toContain('firstAddress');
    expect(pageObject.reportsVerifierTextContent()).toContain('secondAddress');
  }));
});
