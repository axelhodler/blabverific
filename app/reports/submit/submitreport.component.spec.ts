import {SubmitReportComponent} from './submitreport.component';

import {
  async, ComponentFixture, TestBed, fakeAsync, tick
} from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {SubmitReportPageObject} from "./submitreport.component.pageobject";
import {Contract} from "../../boundaries/contract";
import {ReportsGateway} from "../../boundaries/reportsgateway";

describe('SubmitReportComponent', () => {
  let pageObject: SubmitReportPageObject;
  let comp: SubmitReportComponent;
  let fixture: ComponentFixture<SubmitReportComponent>;
  let reportsGatewaySpy = {
    saveReport() {
    }
  };
  let contractSpy = {
    submitReport() {
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SubmitReportComponent],
      providers: [{provide: Contract, useValue: contractSpy}, {provide: ReportsGateway, useValue: reportsGatewaySpy}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitReportComponent);
    pageObject = new SubmitReportPageObject(fixture);
    comp = fixture.componentInstance;
    contractSpy = TestBed.get(Contract);
    reportsGatewaySpy = TestBed.get(ReportsGateway);
    spyOn(contractSpy, 'submitReport').and.returnValue(Promise.resolve());
    spyOn(reportsGatewaySpy, 'saveReport').and.returnValue(Promise.resolve());
    fixture.detectChanges();
  });

  it('displays the hashed report', () => {
    pageObject.insertReportContent('another report');

    expect(pageObject.hashedReport()).toBe('0x5917c10d9344319535b34bb5b24b1df303f6fdd691c74ea5f0f66cb1f19f07af');
  });

  it('does not display submit button as enabled if nothing is entered', () => {
    expect(pageObject.submitReportButton().getAttribute('disabled')).toBe('');
  });

  it('displays submit button as enabled if a report was entered', () => {
    pageObject.insertReportContent('my report');

    expect(pageObject.submitReportButton().getAttribute('disabled')).toBeNull();
  });

  it('submits the hash of the entered report', () => {
    pageObject.insertReportContent('my report');

    pageObject.clickSubmitReport();

    expect(contractSpy.submitReport).toHaveBeenCalledWith('0xd2a1ba85429ae235e1572871497ae0d0e499c696cb44d33f88c2a26820e4f7cc');
  });

  it('stores the report after submitting to the contract', fakeAsync(() => {
    pageObject.insertReportContent('my report');

    comp.submitReport();
    tick();

    expect(contractSpy.submitReport).toHaveBeenCalledWith('0xd2a1ba85429ae235e1572871497ae0d0e499c696cb44d33f88c2a26820e4f7cc');
    expect(reportsGatewaySpy.saveReport).toHaveBeenCalledWith('my report');
  }));
});
