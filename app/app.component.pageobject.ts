import {AppComponent} from './app.component';
import {By}           from '@angular/platform-browser';

export class AppComponentPageObject {

  constructor(private contents: ComponentFixture<AppComponent>) {
  }

  reportContent() {
    return this.contents.debugElement.query(By.css('#report-content')).nativeElement;
  }

}
