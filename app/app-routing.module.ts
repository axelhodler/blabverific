import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListReportsComponent} from "./reports/list/listreports.component";
import {SubmitReportComponent} from "./reports/submit/submitreport.component";

const routes: Routes = [
  { path: 'reports', component: ListReportsComponent},
  { path: 'reports/new', component: SubmitReportComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
