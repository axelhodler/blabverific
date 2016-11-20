import {Component, Input} from "@angular/core";
import {Contract} from "./boundaries/contract";

@Component({
  moduleId: module.id,
  selector: 'verify-report',
  templateUrl: 'verifyreport.component.html'
})
export class VerifyReport {

  @Input()
  reportId: string;
  isReportValidText: string;

  constructor(private contract: Contract) {
  }

  verifyReport() {
    this.contract.verifyReport(this.reportId);
  }

  isReportValid() {
    if (this.contract.isReportValid(this.reportId)) {
      this.isReportValidText = 'is valid!';
    } else {
      this.isReportValidText = 'not valid or not found!';
    }
  }
}
