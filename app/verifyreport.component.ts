import {Component, Input} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Component({
  moduleId: module.id,
  selector: 'verify-report',
  templateUrl: 'verifyreport.component.html',
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
