import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SubmitReportComponent }  from './submitreport.component';
import {VerifyReport} from "./verifyreport.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ SubmitReportComponent, VerifyReport ],
  bootstrap:    [ SubmitReportComponent ]
})
export class AppModule { }
