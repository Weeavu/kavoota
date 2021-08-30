import { Component } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { BarsComponent } from './bar/bar.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kavoota';
  gas = 100;

  gasClick() {
    this.gas -= 10;
    console.log(this.gas);
  }
}
