import {ListReportsComponent} from "./listreports.component";
import {ComponentFixture, async, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

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
  });

  it('displays a list of reports', () => {
    let reportsList = fixture.debugElement.query(By.css('#reports-list')).nativeElement;

    expect(reportsList.tagName.toLowerCase()).toBe('ul');
    expect(reportsList.getElementsByTagName('li').length).toBe(2);
  });
});
