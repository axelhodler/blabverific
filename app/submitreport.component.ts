import {Component, Input} from '@angular/core';
import {Hashing} from "./hashing";
import {EthereumGateway} from "./ethereumgateway";

@Component({
  moduleId: module.id,
  selector: 'submit-report',
  templateUrl: 'submitreport.component.html',
  providers: [EthereumGateway]
})
export class SubmitReportComponent {
  @Input()
  report: string;

  reportHash: string;

  hashing: Hashing;

  constructor(private ethereumGateway: EthereumGateway) {
    this.hashing = new Hashing();
  }

  updateReportHash() {
    this.reportHash = this.hashing.sha3(this.report);
  }

  submitReport() {
    this.ethereumGateway.submitReport(this.reportHash);
  }
}
