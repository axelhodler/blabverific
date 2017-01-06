import {Component, Input} from "@angular/core";
import {Hashing} from "../../boundaries/hashing";
import {Contract} from "../../boundaries/contract";
import {ReportsGateway} from "../../boundaries/reportsgateway";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'submit-report',
  templateUrl: 'submitreport.component.html'
})
export class SubmitReportComponent {
  @Input()
  report: string;

  reportHash: string;

  hashing: Hashing;

  constructor(private router: Router, private contract: Contract, private reportsGateway: ReportsGateway) {
    this.hashing = new Hashing();
  }

  updateReportHash() {
    this.reportHash = this.hashing.sha3(this.report);
  }

  submitReport() {
    return this.contract.submitReport(this.reportHash).then(() => {
      return this.reportsGateway.saveReport(this.report).then(() => {
        return this.router.navigate(['reports']);
      });
    });
  }
}
