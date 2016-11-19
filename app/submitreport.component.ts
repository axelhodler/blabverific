import {Component, Input} from "@angular/core";
import {Hashing} from "./boundaries/hashing";
import {Contract} from "./boundaries/contract";
import {EthereumGateway} from "./boundaries/ethereumgateway";

@Component({
  moduleId: module.id,
  selector: 'submit-report',
  templateUrl: 'submitreport.component.html',
  providers: [Contract, EthereumGateway]
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
