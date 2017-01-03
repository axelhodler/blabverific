import {ComponentFixture} from "@angular/core/testing";
import {ListReportsComponent} from "./listreports.component";
import {By} from "@angular/platform-browser";

export class ListReportsPageObject {

  constructor(private contents: ComponentFixture<ListReportsComponent>) {
  }

  reportsList() {
    return this.contents.debugElement.query(By.css('#reports-list')).nativeElement;
  }
}
