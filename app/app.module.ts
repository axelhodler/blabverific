import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {SubmitReportComponent}  from './submitreport.component';
import {VerifyReport} from "./verifyreport.component";
import {EthereumGateway} from "./ethereumgateway";
import {AppComponent} from "./app.component";
import {Config} from "./config";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, SubmitReportComponent, VerifyReport],
  bootstrap: [AppComponent],
  providers: [EthereumGateway, Config]
})
export class AppModule {
}
