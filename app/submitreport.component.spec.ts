import {SubmitReportComponent} from './submitreport.component';

import {
  async, ComponentFixture, TestBed
} from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {SubmitReportPageObject} from "./submitreport.component.pageobject";
import {Contract} from "./boundaries/contract";
import {By} from "@angular/platform-browser";

describe('SubmitReportComponent', function () {
  let pageObject: SubmitReportPageObject;
  let comp: SubmitReportComponent;
  let fixture: ComponentFixture<SubmitReportComponent>;
  let contractSpy = {
    submitReport() {
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SubmitReportComponent],
      providers: [{provide: Contract, useValue: contractSpy}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitReportComponent);
    pageObject = new SubmitReportPageObject(fixture);
    comp = fixture.componentInstance;
    contractSpy = fixture.debugElement.injector.get(Contract);
    spyOn(contractSpy, 'submitReport');
    fixture.detectChanges();
  });

  it('displays the hashed report', () => {
    pageObject.insertReportContent('another report');

    expect(pageObject.hashedReport()).toBe('0x5917c10d9344319535b34bb5b24b1df303f6fdd691c74ea5f0f66cb1f19f07af');
  });

  it('does not display submit button as enabled if nothing is entered', () => {
    expect(fixture.debugElement.query(By.css('#submit-report')).nativeElement.getAttribute('disabled')).toBe('');
  });

  it('displays submit button as enabled if a report was entered', () => {
    pageObject.insertReportContent('my report');

    expect(fixture.debugElement.query(By.css('#submit-report')).nativeElement.getAttribute('disabled')).toBeNull();
  });

  it('submits the hash of the entered report', () => {
    pageObject.insertReportContent('my report');

    pageObject.clickSubmitReport();

    expect(contractSpy.submitReport).toHaveBeenCalledWith('0xd2a1ba85429ae235e1572871497ae0d0e499c696cb44d33f88c2a26820e4f7cc');
  });
});
