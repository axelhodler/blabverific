import {SubmitReportComponent} from './submitreport.component';
import {By}           from '@angular/platform-browser';
import {ComponentFixture} from '@angular/core/testing';

export class SubmitReportPageObject {

  constructor(private contents: ComponentFixture<SubmitReportComponent>) {
  }

  reportContent() {
    return this.contents.debugElement.query(By.css('#report-content')).nativeElement;
  }

  reportCompensation() {
    return this.contents.debugElement.query(By.css('#report-compensation')).nativeElement;
  }

  hashedReport() {
    return this.contents.debugElement.query(By.css('#report-hashed')).nativeElement.textContent;
  }

  insertReportContent(content: string) {
    this.reportContent().value = content;
    this.reportContent().dispatchEvent(new Event('input'));
    this.contents.detectChanges();
  }

  insertReportCompensation(compensation: number) {
    this.reportCompensation().value = compensation;
    this.reportContent().dispatchEvent(new Event('input'));
    this.contents.detectChanges();
  }

  submitReportButton() {
    return this.contents.debugElement.query(By.css('#submit-report')).nativeElement;
  }

  clickSubmitReport() {
    this.contents.debugElement.query(By.css('#submit-report')).nativeElement.click();
  }
}
