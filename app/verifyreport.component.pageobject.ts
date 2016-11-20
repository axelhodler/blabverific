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
}
