import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {SubmitReportComponent}  from './reports/submit/submitreport.component';
import {VerifyReport} from "./verifyreport.component";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {AppComponent} from "./app.component";
import {Config} from "./config";
import {Contract} from "./boundaries/contract";
import {ReportsGateway} from "./boundaries/reportsgateway";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, SubmitReportComponent, VerifyReport],
  bootstrap: [AppComponent],
  providers: [EthereumGateway, Contract, Config, ReportsGateway]
})
export class AppModule {
}
