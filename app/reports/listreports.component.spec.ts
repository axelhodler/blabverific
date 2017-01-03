import {ListReportsComponent} from "./listreports.component";
import {ComponentFixture, async, TestBed} from "@angular/core/testing";
import {ListReportsPageObject} from "./listreports.component.pageobject";
import {ReportsGateway} from "../boundaries/reportsgateway";

describe('ListReportsComponent', () => {
  let comp: ListReportsComponent;
  let fixture: ComponentFixture<ListReportsComponent>;
  let pageObject: ListReportsPageObject;
  let reportsGatewayStub = {
    reports() {
      return [{
        id: 'hashedreport',
        content: 'report contents',
        submitter: 'Sally the Submitter'
      }];
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListReportsComponent],
      providers: [{provide: ReportsGateway, useValue: reportsGatewayStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReportsComponent);
    pageObject = new ListReportsPageObject(fixture);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('displays the reporters name, report contents and its id', () => {
    let report = 'hashedreport report contents Sally the Submitter';
    let reportsList = pageObject.reportsList();

    expect(reportsList.firstElementChild.textContent).toContain(report)
  });

  it('TRIANGULATION - displays the reporters name, report contents and its id', () => {
    let report = 'reporthash report content Sven the Submitter';
    comp.reports = [{
      id: 'reporthash',
      content: 'report content',
      submitter: 'Sven the Submitter'
    }];
    fixture.detectChanges();
    let reportsList = pageObject.reportsList();

    expect(reportsList.firstElementChild.textContent).toContain(report)
  });
});
