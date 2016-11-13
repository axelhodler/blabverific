import {Component} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Component({
  moduleId: module.id,
  selector: 'verify-report',
  template: '<button id="verify-report"' +
  '(click)="verifyReport()">Verify Report</button>'
})
export class VerifyReport {

  constructor(private ethereumGateway: EthereumGateway) {
  }

  verifyReport() {
    this.ethereumGateway.verifyReport();
  }
}
