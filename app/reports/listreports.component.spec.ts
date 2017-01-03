import {ListReportsComponent} from "./listreports.component";
import {ComponentFixture, async, TestBed} from "@angular/core/testing";
import {ListReportsPageObject} from "./listreports.component.pageobject";

describe('ListReportsComponent', () => {
  let comp: ListReportsComponent;
  let fixture: ComponentFixture<ListReportsComponent>;
  let pageObject: ListReportsPageObject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListReportsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReportsComponent);
    pageObject = new ListReportsPageObject(fixture);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is defined', () => {
    expect(comp).toBeDefined();
  });

  it('displays a list of reports', () => {
    let reportsList = pageObject.reportsList();

    expect(reportsList.tagName.toLowerCase()).toBe('ul');
    expect(reportsList.getElementsByTagName('li').length).toBe(2);
  });

  it('displays the reporters name, report contents and its id', () => {
    let report = 'hashedreport report contents Sally the Submitter';
    comp.reports = [report];
    let reportsList = pageObject.reportsList();

    expect(reportsList.firstElementChild.textContent).toBe(report)
  });
});
