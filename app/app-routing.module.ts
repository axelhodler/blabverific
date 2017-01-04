import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListReportsComponent} from "./reports/list/listreports.component";

const routes: Routes = [
  { path: 'reports', component: ListReportsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
