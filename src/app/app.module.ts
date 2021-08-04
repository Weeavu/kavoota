import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ButtonComponent } from './button/button.component';
import { BarsComponent } from './bar/bar.component';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [AppComponent, ButtonComponent, BarsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatProgressBarModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
