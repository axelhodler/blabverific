import {Component, Input} from "@angular/core";
import {Contract} from "./boundaries/contract";

@Component({
  moduleId: module.id,
  selector: 'verify-report',
  templateUrl: 'verifyreport.component.html',
  providers: [Contract]
})
export class VerifyReport {

  @Input()
  reportId: string;

  constructor(private contract: Contract) {
  }

  verifyReport() {
    this.contract.verifyReport(this.reportId);
  }

  isReportValid() {
    this.contract.isReportValid(this.reportId);
  }
}
