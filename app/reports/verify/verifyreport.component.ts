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
    this.contract.verifyReport(this.reportId).then(() => {
      this.contract.fetchVerifiers(this.reportId).then((verifiers: Array<string>) => {
        this.reportVerifiers = verifiers;
      })
    });
  }

  isReportValid() {
    this.contract.isReportValid(this.reportId).then(isValid => {
      if (isValid) {
        this.isReportValidText = 'is valid!';
      } else {
        this.isReportValidText = 'The report you are searching for is not yet valid!';
      }
    });
    this.contract.fetchVerifiers(this.reportId).then((verifiers: Array<string>) => {
      this.reportVerifiers = verifiers;
    });
  }
}
