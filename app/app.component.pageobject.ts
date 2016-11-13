import {AppComponent} from './app.component';
import {By}           from '@angular/platform-browser';
import {ComponentFixture} from '@angular/core/testing';

export class AppComponentPageObject {

  constructor(private contents: ComponentFixture<AppComponent>) {
  }

  reportContent() {
    return this.contents.debugElement.query(By.css('#report-content')).nativeElement;
  }

  hashedReport() {
    return this.contents.debugElement.query(By.css('#report-hashed')).nativeElement.textContent;
  }

  insertReportContent(content: string) {
    this.reportContent().value = content;
    this.reportContent().dispatchEvent(new Event('input'));
    this.contents.detectChanges();
  }

  clickSubmitReport() {
    this.contents.debugElement.query(By.css('#submit-report')).nativeElement.click();
  }
}
