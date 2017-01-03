import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {AppComponent} from "./app.component";
import {Config} from "./config";
import {Contract} from "./boundaries/contract";
import {ReportsGateway} from "./boundaries/reportsgateway";
import {MockReportsGateway} from "./testdoubles/mockreportsgateway";
import {RouterModule} from "@angular/router";
import {ListReportsComponent} from "./reports/list/listreports.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'reports',
        component: ListReportsComponent
      }
    ])
  ],
  declarations: [AppComponent, SubmitReportComponent, VerifyReport, ListReportsComponent],
  bootstrap: [AppComponent],
  providers: [EthereumGateway, Contract, Config, {provide: ReportsGateway, useClass: MockReportsGateway}]
})
export class AppModule {
}
