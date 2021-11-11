import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule } from 'projects/lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
