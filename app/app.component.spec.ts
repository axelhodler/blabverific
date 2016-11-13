import {AppComponent} from './app.component';

import {
  async, ComponentFixture, TestBed
} from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {AppComponentPageObject} from "./app.component.pageobject";
import {EthereumGateway} from "./ethereumgateway";

describe('AppComponent', function () {
  let pageObject: AppComponentPageObject;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ethereumGatewaySpy: EthereumGateway;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
      providers: [EthereumGateway]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    pageObject = new AppComponentPageObject(fixture);
    comp = fixture.componentInstance;
    ethereumGatewaySpy = fixture.debugElement.injector.get(EthereumGateway);
    spyOn(ethereumGatewaySpy, 'submitReport');
    fixture.detectChanges();
  });

  it('displays the hashed report', () => {
    pageObject.insertReportContent('another report');

    expect(pageObject.hashedReport()).toBe('0x5917c10d9344319535b34bb5b24b1df303f6fdd691c74ea5f0f66cb1f19f07af');
  });

  it('submits the hash of the entered report', () => {
    pageObject.insertReportContent('my report');

    pageObject.clickSubmitReport();

    expect(ethereumGatewaySpy.submitReport).toHaveBeenCalledWith('0xd2a1ba85429ae235e1572871497ae0d0e499c696cb44d33f88c2a26820e4f7cc');
  })
});
