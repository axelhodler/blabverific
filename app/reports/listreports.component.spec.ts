import {ListReportsComponent} from "./listreports.component";
import {ComponentFixture, async, TestBed} from "@angular/core/testing";

describe('ListReportsComponent', () => {
  let comp: ListReportsComponent;
  let fixture: ComponentFixture<ListReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListReportsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReportsComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is defined', () => {
    expect(comp).toBeDefined();
  })
});
