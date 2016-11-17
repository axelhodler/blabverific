import {
  async, TestBed, ComponentFixture
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {Contract} from "./contract";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {EthereumGateway} from "./ethereumgateway";
import {Config} from "./config";

describe('VerifyReport', function () {
  let comp: VerifyReport;
  let fixture: ComponentFixture<VerifyReport>;
  let contractSpy: Contract;

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
    comp = fixture.componentInstance;
    contractSpy = fixture.debugElement.injector.get(Contract);
    spyOn(contractSpy, 'verifyReport');
    spyOn(contractSpy, 'isReportValid');
    fixture.detectChanges();
  });

  it('verifies a report on clicking the verify report button', () => {
    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(contractSpy.verifyReport).toHaveBeenCalled();
  });

  it('can find reports by id', () => {
    var reportIdInput = fixture.debugElement.query(By.css('#report-id')).nativeElement;
    reportIdInput.value = 'reportId';
    reportIdInput.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#find-report')).nativeElement.click();
    fixture.detectChanges();

    expect(contractSpy.isReportValid).toHaveBeenCalledWith('reportId');
  });
});
