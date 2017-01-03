import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {VerifyReport} from "./verifyreport.component";
import {FormsModule} from "@angular/forms";
import {Config} from "./config";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {Contract} from "./boundaries/contract";
import {By} from "@angular/platform-browser";
import {ReportsGateway} from "./boundaries/reportsgateway";

describe('AppComponent', () =>{
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ethereumGatewaySpy: EthereumGateway;

  ethereumGatewaySpy = <EthereumGateway>{
    connectToContract() {
    }
  };

  beforeEach(async(() => {
    spyOn(ethereumGatewaySpy, 'connectToContract').and.throwError('');
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, SubmitReportComponent, VerifyReport],
      providers: [Config, {provide: EthereumGateway, useValue: ethereumGatewaySpy}, Contract, ReportsGateway]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('tells the user to install MetaMask on fail', () => {
    expect(fixture.debugElement.query(By.css('#error')).nativeElement.textContent).toBe('Please Install MetaMask');
  });
});
