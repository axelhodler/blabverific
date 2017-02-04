import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {FormsModule} from "@angular/forms";
import {Config} from "./config";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {Contract} from "./boundaries/contract";
import {By} from "@angular/platform-browser";
import {ReportsGateway} from "./boundaries/reportsgateway";
import {ListReportsComponent} from "./reports/list/listreports.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";

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
      imports: [FormsModule, HttpModule, AppRoutingModule, RouterTestingModule, MaterialModule.forRoot()],
      declarations: [AppComponent, SubmitReportComponent, VerifyReport, ListReportsComponent],
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
    expect(fixture.debugElement.query(By.css('#error')).nativeElement.textContent).toContain('Please Install MetaMask');
  });
});
