import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HistoryService } from '../service/history.service';

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

  constructor(
    private dataService: DataService,
    private historyService: HistoryService
  ) {}

  ngOnInit() {
    this.service = this.dataService;
  }

  move(name: string) {
    var last = { ...this.dataService.getData() };
    this.historyService.addPoints(last);
    this.service.movementEvent();
    this.historyService.addHistory(name);
  }

  onChange(g: number, f: number, d: number, e: number, t: number, a?: any) {
    this.changeVal = {
      gas: g,
      food: f,
      drink: d,
      entertainment: e,
      time: t,
    };
    var last = { ...this.dataService.getData() };
    this.historyService.addPoints(last);
    this.service.eventChange(this.changeVal);
    this.historyService.addHistory(a);
  }
}
