import { Component } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { BarsComponent } from './bar/bar.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Kavoota</h1>
    <bars></bars>
    <br />
    <buttons></buttons>
    <div style="text-align: center">
      <img src="assets/truman.png" />
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
