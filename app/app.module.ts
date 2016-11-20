import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {SubmitReportComponent}  from './submitreport.component';
import {VerifyReport} from "./verifyreport.component";
import {EthereumGateway} from "./boundaries/ethereumgateway";
import {AppComponent} from "./app.component";
import {Config} from "./config";
import {Contract} from "./boundaries/contract";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, SubmitReportComponent, VerifyReport],
  bootstrap: [AppComponent],
  providers: [EthereumGateway, Contract, Config]
})
export class AppModule {
}
