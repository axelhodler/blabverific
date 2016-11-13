import {Component, Input} from '@angular/core';
import {Hashing} from "./hashing";

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

  hashing: Hashing;

  constructor() {
    this.hashing = new Hashing();
  }

  updateReportHash() {
    this.reportHash = this.hashing.sha3(this.report);
  }
}
