import {Component, Input} from "@angular/core";
import {Hashing} from "../../boundaries/hashing";
import {Contract} from "../../boundaries/contract";
import {ReportsGateway} from "../../boundaries/reportsgateway";
import {Router} from "@angular/router";
import {Report} from "../report";

@Component({
  moduleId: module.id,
  selector: 'submit-report',
  templateUrl: 'submitreport.component.html'
})
export class SubmitReportComponent {
  @Input()
  report: Report;

  reportHash: string;

  hashing: Hashing;

  constructor(private router: Router, private contract: Contract, private reportsGateway: ReportsGateway) {
    this.hashing = new Hashing();
    this.report = new Report();
  }

  updateReportHash() {
    this.reportHash = this.hashing.sha3(this.report.content);
  }

  submitReport() {
    return this.contract.submitReport(this.reportHash, this.report.compensation).then(() => {
      return this.reportsGateway.saveReport(this.report.content, this.report.compensation).then(() => {
        return this.router.navigate(['reports']);
      });
    });
  }
}
