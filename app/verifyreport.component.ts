import {Component, Input} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Component({
  moduleId: module.id,
  selector: 'verify-report',
  template: '<button id="verify-report"' +
  '(click)="verifyReport()">Verify Report</button>' +
  '<input id="report-id" [(ngModel)]="reportId">' +
  '<button id="find-report" (click)="findReport()">Find Report</button>',
  providers: [EthereumGateway]
})
export class VerifyReport {

  @Input()
  reportId: string;

  constructor(private ethereumGateway: EthereumGateway) {
  }

  verifyReport() {
    this.ethereumGateway.verifyReport();
  }

  findReport() {
    this.ethereumGateway.findReport(this.reportId);
  }
}
