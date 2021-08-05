import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {
  history: string[] = [];
  points: any[] = [];
  lastPoint = {
    gas: 100,
    food: 50,
    drink: 50,
    entertainment: 75,
    time: 100,
  };

  addHistory(item: string) {
    this.history.push(item);
  }

  undo() {
    this.history.pop();
    this.undoPoints();
  }

  addPoints(item: any) {
    console.log(item);
    this.points.push(item);
  }

  undoPoints() {
    if (this.points.length > 0) {
      var pop = this.points.pop();
      console.log(pop.gas);
      this.lastPoint = {
        gas: pop.gas,
        food: pop.food,
        drink: pop.drink,
        entertainment: pop.entertainment,
        time: pop.time,
      };
      console.log('pop:' + this.lastPoint.gas);
    } else {
      this.lastPoint = {
        gas: 100,
        food: 50,
        drink: 50,
        entertainment: 75,
        time: 100,
      };
    }
  }
}
