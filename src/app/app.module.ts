import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ButtonComponent } from './button/button.component';
import { BarsComponent } from './bar/bar.component';
import { DataService } from './service/data.service';
import { HistoryComponent } from './history/history.component';
import { HistoryService } from './service/history.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BarsComponent,
    HistoryComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatProgressBarModule],
  providers: [DataService, HistoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
