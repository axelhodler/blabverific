import {VerifyReport} from "./verifyreport.component";
import {ComponentFixture} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

export class VerifyReportComponentPageObject {
  constructor(private contents: ComponentFixture<VerifyReport>) {
  }

  isReportValidTextContent() {
    return this.contents.debugElement.query(By.css('#is-report-valid')).nativeElement.textContent.trim();
  }

  reportsVerifierTextContent() {
    return this.contents.debugElement.query(By.css('#report-verifiers')).nativeElement.textContent.trim();
  }

  enterReportId(hash: string, tick: Function) {
    var reportIdInput = this.contents.debugElement.query(By.css('#report-id'));
    reportIdInput.nativeElement.value = 'reportId';
    reportIdInput.nativeElement.dispatchEvent(new Event('input'));
    reportIdInput.triggerEventHandler('keyup', null);
    tick();
    this.contents.detectChanges();
  }

  clickVerifyButton(tick: Function) {
    this.contents.debugElement.query(By.css('#verify-report')).nativeElement.click()
    tick();
    this.contents.detectChanges();
  }
}
