import {
  async, TestBed, ComponentFixture
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {EthereumGateway} from "./ethereumgateway";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

describe('VerifyReport', function () {
  let comp: VerifyReport;
  let fixture: ComponentFixture<VerifyReport>;
  let ethereumGatewaySpy: EthereumGateway;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [VerifyReport],
      providers: [EthereumGateway]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReport);
    comp = fixture.componentInstance;
    ethereumGatewaySpy = fixture.debugElement.injector.get(EthereumGateway);
    spyOn(ethereumGatewaySpy, 'verifyReport');
    spyOn(ethereumGatewaySpy, 'findReport');
    fixture.detectChanges();
  });

  it('verifies a report on clicking the verify report button', () => {
    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(ethereumGatewaySpy.verifyReport).toHaveBeenCalled();
  });

  it('can find reports by id', () => {
    var reportIdInput = fixture.debugElement.query(By.css('#report-id')).nativeElement;
    reportIdInput.value = 'reportId';
    reportIdInput.dispatchEvent(new Event('input'));
    fixture.debugElement.query(By.css('#find-report')).nativeElement.click();
    fixture.detectChanges();

    expect(ethereumGatewaySpy.findReport).toHaveBeenCalledWith('reportId');
  });
});
