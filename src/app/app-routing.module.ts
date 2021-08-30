import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame/frame.component';
import { DateComponent } from './date/date.component';

const routes: Routes = [
  { path: '', redirectTo: 'frame', pathMatch: 'full' },
  { path: 'frame', component: FrameComponent },
  { path: 'date', component: DateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
