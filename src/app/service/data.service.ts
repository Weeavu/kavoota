import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getData() {
    return DATA;
  }

  setData(item: any) {
    DATA.gas = item.gas;
    DATA.food = item.food;
    DATA.drink = item.drink;
    DATA.entertainment = item.entertainment;
    DATA.time = item.time;
  }
  movementEvent() {
    DATA.gas = DATA.gas - 10;
    DATA.entertainment = DATA.entertainment - 8;
    DATA.drink = DATA.drink - 6;
    DATA.food = DATA.food - 4;
    DATA.time = DATA.time - 4;
  }

  eventChange(change: any) {
    DATA.gas = DATA.gas + change.gas;
    DATA.entertainment = DATA.entertainment + change.entertainment;
    DATA.drink = DATA.drink + change.drink;
    DATA.food = DATA.food + change.food;
    DATA.time = DATA.time + change.time;
    this.event();
    this.checkValue();
  }

  event() {
    DATA.entertainment = DATA.entertainment - 8;
    DATA.drink = DATA.drink - 6;
    DATA.food = DATA.food - 4;
    DATA.time = DATA.time - 4;
  }

  checkValue() {
    DATA.gas = calc(DATA.gas);
    DATA.entertainment = calc(DATA.entertainment);
    DATA.drink = calc(DATA.drink);
    DATA.food = calc(DATA.food);
    DATA.time = calc(DATA.time);
  }
}

const DATA = {
  gas: 100,
  food: 50,
  drink: 50,
  entertainment: 75,
  time: 100,
};

function calc(num: number) {
  if (num < 0) {
    return 0;
  }

  if (num > 100) {
    return 100;
  }

  return num;
}
