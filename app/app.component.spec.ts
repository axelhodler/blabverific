import {SubmitReportComponent} from "./submitreport.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {VerifyReport} from "./verifyreport.component";
import {FormsModule} from "@angular/forms";
import {Config} from "./config";
import {EthereumGateway} from "./boundaries/ethereumgateway";

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, SubmitReportComponent, VerifyReport],
      providers: [Config, EthereumGateway]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('contains the other components', () => {
    expect(fixture.nativeElement.getElementsByTagName('verify-report')[0]).toBeDefined();
    expect(fixture.nativeElement.getElementsByTagName('submit-report')[0]).toBeDefined();
  })
});
