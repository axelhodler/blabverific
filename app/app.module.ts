import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {VerifyReport} from "./verifyreport.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent, VerifyReport ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
