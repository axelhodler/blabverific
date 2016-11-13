import {
  async, TestBed, ComponentFixture
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";
import {EthereumGateway} from "./ethereumgateway";
import {By} from "@angular/platform-browser";

describe('VerifyReport', function () {
  let comp: VerifyReport;
  let fixture: ComponentFixture<VerifyReport>;
  let ethereumGatewaySpy: EthereumGateway;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    fixture.detectChanges();
  });

  it('exists', () => {
    expect(comp).toBeDefined();
  });

  it('verifies a report on clicking the verify report button', () => {
    fixture.debugElement.query(By.css('#verify-report')).nativeElement.click();

    expect(ethereumGatewaySpy.verifyReport).toHaveBeenCalled();
  });
});
