import {Component, Input} from "@angular/core";
import {Contract} from "../../boundaries/contract";

@Component({
  moduleId: module.id,
  selector: 'verify-report',
  templateUrl: 'verifyreport.component.html'
})
export class VerifyReport {

  @Input()
  reportId: string;
  isReportValidText: string;
  reportVerifiers: Array<string>;

  constructor(private contract: Contract) {
  }

  verifyReport() {
    this.contract.verifyReport(this.reportId);
  }

  isReportValid() {
    this.contract.isReportValid(this.reportId).then(isValid => {
      if (isValid) {
        this.isReportValidText = 'is valid!';
      } else {
        this.isReportValidText = 'not valid or not found!';
      }
    });
    this.contract.fetchVerifiers(this.reportId).then((verifiers: Array<string>) => {
      this.reportVerifiers = verifiers;
    });
  }
}
