import {
  async, TestBed, ComponentFixture
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {Contract} from "./boundaries/contract";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {Config} from "./config";
import {VerifyReportComponentPageObject} from "./verifyreport.component.pageobject";

describe('VerifyReport', function () {
  let comp: VerifyReport;
  let pageObject: VerifyReportComponentPageObject;
  let fixture: ComponentFixture<VerifyReport>;
  let contractMock: Contract;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [VerifyReport],
      providers: [Contract, EthereumGateway, Config]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReport);
    pageObject = new VerifyReportComponentPageObject(fixture);
    comp = fixture.componentInstance;
    contractMock = fixture.debugElement.injector.get(Contract);
    spyOn(contractMock, 'verifyReport');
    spyOn(contractMock, 'isReportValid').and.returnValue(true);
    fixture.detectChanges();
  });

  it('verifies a report on clicking the verify report button', () => {
    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(contractMock.verifyReport).toHaveBeenCalledWith(undefined);
  });

  it('can find reports by id', () => {
    var reportIdInput = fixture.debugElement.query(By.css('#report-id')).nativeElement;
    reportIdInput.value = 'reportId';
    reportIdInput.dispatchEvent(new Event('input'));

    pageObject.clickFindReport();

    expect(contractMock.isReportValid).toHaveBeenCalledWith('reportId');
  });

  it('displays validity of the report', () => {
    pageObject.clickFindReport();

    expect(fixture.debugElement.query(By.css('#is-report-valid')).nativeElement.textContent.trim()).toBe('is valid!');
  })
});
