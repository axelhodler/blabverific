import {Component, OnInit} from "@angular/core";
import {Report} from "../report";
import {ReportsGateway} from "../../boundaries/reportsgateway";

@Component({
  moduleId: module.id,
  templateUrl: 'listreports.component.html'
})
export class ListReportsComponent implements OnInit {
  reports: Report[];

  constructor(private reportsGateway: ReportsGateway) {
  }

  ngOnInit(): void {
    this.reports = this.reportsGateway.reports();
  }
}
