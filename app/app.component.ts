import {Component, Input} from '@angular/core';
import {Hashing} from "./hashing";
import {EthereumGateway} from "./ethereumgateway";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [EthereumGateway]
})
export class AppComponent {
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
