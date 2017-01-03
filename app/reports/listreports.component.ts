import {Component} from "@angular/core";
import {Report} from "./report";

@Component({
  moduleId: module.id,
  templateUrl: 'listreports.component.html'
})
export class ListReportsComponent {
  reports: Report[];
}
