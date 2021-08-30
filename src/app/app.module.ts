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
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FrameComponent } from './frame/frame.component';
import { DateComponent } from './date/date.component';
import { CardComponent } from './card/card.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BarsComponent,
    HistoryComponent,
    NavComponent,
    FrameComponent,
    DateComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AppRoutingModule,
    ClipboardModule,
    FormsModule,
  ],
  providers: [DataService, HistoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
