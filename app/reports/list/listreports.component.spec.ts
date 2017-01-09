import {ListReportsComponent} from "./listreports.component";
import {ComponentFixture, async, TestBed, fakeAsync} from "@angular/core/testing";
import {ListReportsPageObject} from "./listreports.component.pageobject";
import {ReportsGateway} from "../../boundaries/reportsgateway";
import {MockReportsGateway} from "../../testdoubles/mockreportsgateway";

describe('ListReportsComponent', () => {
  let comp: ListReportsComponent;
  let fixture: ComponentFixture<ListReportsComponent>;
  let pageObject: ListReportsPageObject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListReportsComponent],
      providers: [{provide: ReportsGateway, useClass: MockReportsGateway}]
    })
      .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(ListReportsComponent);
    pageObject = new ListReportsPageObject(fixture);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('displays the reporters name, report contents and its id', () => {
    let report = 'hashedreport report contents Sally the Submitter';
    let reportsList = pageObject.reportsList();

    let rows = reportsList.firstElementChild.getElementsByTagName('tr');

    expect(rows[0].textContent).toContain('Sally the Submitter');
    expect(rows[1].textContent).toContain('Sven the Submitter');
  });
});
