import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScUpdatedInfoModule } from '../sc-updated-info/sc-updated-info.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    ScUpdatedInfoModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

    constructor() {
    }

    ngDoBootstrap() {
    }
 }
