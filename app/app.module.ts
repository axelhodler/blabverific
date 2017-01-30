import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SubmitReportComponent} from "./reports/submit/submitreport.component";
import {VerifyReport} from "./reports/verify/verifyreport.component";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {AppComponent} from "./app.component";
import {Config} from "./config";
import {ReportsGateway} from "./boundaries/reportsgateway";
import {ListReportsComponent} from "./reports/list/listreports.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {MockContract} from "./testdoubles/mockcontract";
import {Contract} from "./boundaries/contract";
import { MaterialModule } from '@angular/material';
import {Hashing} from "./boundaries/hashing";

@NgModule({
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [AppComponent, SubmitReportComponent, VerifyReport, ListReportsComponent],
  bootstrap: [AppComponent],
  providers: [EthereumGateway, {provide: Contract, useClass: MockContract}, Config, ReportsGateway, Hashing]
})
export class AppModule {
}
