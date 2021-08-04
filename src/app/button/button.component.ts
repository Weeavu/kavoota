import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'buttons',
  templateUrl: 'button.component.html',
  styles: [
    `
      .center {
        text-align: center;
      }
      button {
        margin: 1px;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  service: any;
  changeVal: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.service = this.dataService;
  }

  onChange(g: number, f: number, d: number, e: number, t: number) {
    this.changeVal = {
      gas: g,
      food: f,
      drink: d,
      entertainment: e,
      time: t,
    };
    this.service.eventChange(this.changeVal);
  }
}
