import {VerifyReport} from "./verifyreport.component";
import {ComponentFixture} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

export class VerifyReportComponentPageObject {
  constructor(private contents: ComponentFixture<VerifyReport>) {
  }

  clickFindReport() {
    this.contents.debugElement.query(By.css('#find-report')).nativeElement.click();
    this.contents.detectChanges();
  }

  isReportValidTextContent() {
    return this.contents.debugElement.query(By.css('#is-report-valid')).nativeElement.textContent.trim();
  }

  reportsVerifierTextContent() {
    return this.contents.debugElement.query(By.css('#report-verifier-amount')).nativeElement.textContent.trim();
  }

  enterReportId(hash: string) {
    var reportIdInput = this.contents.debugElement.query(By.css('#report-id')).nativeElement;
    reportIdInput.value = 'reportId';
    reportIdInput.dispatchEvent(new Event('input'));
    this.contents.detectChanges();
  }
}
