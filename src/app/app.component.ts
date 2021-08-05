import { Component } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { BarsComponent } from './bar/bar.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Kavoota</h1>
    <div class="row">
      <div class="col">
        <bars></bars>
        <br />
        <buttons></buttons>
        <div style="text-align: center">
          <img src="assets/truman.png" />
        </div>
      </div>
      <div class="col">
        <history></history>
      </div>
    </div>
  `,
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
