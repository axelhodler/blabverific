import {
  async, TestBed, ComponentFixture
} from '@angular/core/testing';
import {VerifyReport} from "./verifyreport.component";

describe('VerifyReport', function () {
  let comp: VerifyReport;
  let fixture: ComponentFixture<VerifyReport>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyReport]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyReport);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('exists', () => {
    expect(comp).toBeDefined();
  });
});
