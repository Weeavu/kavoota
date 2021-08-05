import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HistoryService } from '../service/history.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styles: [
    `
      .overflow-auto {
        max-width: 300px;
        max-height: 400px;
        height: 400px;
        width: 300px;
        border: solid black 3px;
        padding: 10px;
        margin: auto;
      }

      .center {
        text-align: center;
      }

      button {
        margin: 5px;
      }
    `,
  ],
})
export class HistoryComponent implements OnInit {
  history: any;

  constructor(
    private historyService: HistoryService,
    private dataService: DataService
  ) {}

  disabled: number = this.historyService.points.length;
  ngOnInit() {
    this.history = this.historyService.history;
  }

  undo() {
    this.historyService.undo();
    this.dataService.setData(this.historyService.lastPoint);
  }
}
