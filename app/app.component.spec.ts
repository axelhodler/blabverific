import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {FormsModule} from "@angular/forms";
import {Config} from "./config";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {Contract} from "./boundaries/contract";
import {ReportsGateway} from "./boundaries/reportsgateway";
import {RouterModule, RouterOutletMap} from "@angular/router";
import {ListReportsComponent} from "./reports/list/listreports.component";

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ethereumGatewaySpy: EthereumGateway;

  ethereumGatewaySpy = <EthereumGateway>{
    connectToContract() {
    }
  };

  beforeEach(async(() => {
    spyOn(ethereumGatewaySpy, 'connectToContract');
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule],
      declarations: [AppComponent, SubmitReportComponent, VerifyReport, ListReportsComponent],
      providers: [Config, {provide: EthereumGateway, useValue: ethereumGatewaySpy}, Contract, ReportsGateway, RouterOutletMap]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('makes ethereumGateway connect to the contract', () => {
    expect(ethereumGatewaySpy.connectToContract).toHaveBeenCalled();
  });

  it('contains the other components', () => {
    expect(fixture.nativeElement.getElementsByTagName('verify-report')[0]).toBeDefined();
    expect(fixture.nativeElement.getElementsByTagName('submit-report')[0]).toBeDefined();
  })
});
