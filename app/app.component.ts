import {Component, Input} from '@angular/core';
import {EthereumGateway} from "./ethereumgateway";

@Component({
  selector: 'my-app',
  template: `
<p id="report-hashed">{{reportHash}}</p>
<input id="report-content" [(ngModel)]="report" (ngModelChange)="updateReportHash()">`
})
export class AppComponent {
  @Input()
  report: string;
  reportHash: string;

  updateReportHash() {
    var ethereumGateway = new EthereumGateway();
    this.reportHash = ethereumGateway.hash(this.report);
  }
}
