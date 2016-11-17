import {Component, Input} from '@angular/core';
import {Hashing} from "./hashing";
import {Contract} from "./contract";
import {EthereumGateway} from "./ethereumgateway";
import {Config} from "./config";

@Component({
  moduleId: module.id,
  selector: 'submit-report',
  templateUrl: 'submitreport.component.html',
  providers: [Contract, EthereumGateway, Config]
})
export class SubmitReportComponent {
  @Input()
  report: string;

  reportHash: string;

  hashing: Hashing;

  constructor(private contract: Contract) {
    this.hashing = new Hashing();
  }

  updateReportHash() {
    this.reportHash = this.hashing.sha3(this.report);
  }

  submitReport() {
    this.contract.submitReport(this.reportHash);
  }
}
