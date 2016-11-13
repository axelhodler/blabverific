import {Component, Input} from '@angular/core';
import {Hashing} from "./hashing";
import {EthereumGateway} from "./ethereumgateway";

@Component({
  selector: 'my-app',
  template: `
<p id="report-hashed">{{reportHash}}</p>
<input id="report-content" placeholder="Describe what you did" [(ngModel)]="report" (ngModelChange)="updateReportHash()">
<button id="submit-report" (click)="yolo()">click me</button>`,
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

  yolo() {
    this.ethereumGateway.hi();
  }
}
