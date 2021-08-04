import { Injectable } from "@angular/core"

@Injectable()
export class DataService {
    getData(){
        return DATA
    }

    movementEvent(){
        DATA.gas = calc(DATA.gas, -10)
        DATA.entertainment = calc(DATA.entertainment, -8)
        DATA.drink = calc(DATA.drink, -6)
        DATA.food = calc(DATA.food, -4)
        DATA.time = calc(DATA.time, -4)
    }

    eventChange(change:any){
        DATA.gas = calc(DATA.gas, change.gas)
        DATA.entertainment = calc(DATA.entertainment, change.entertainment)
        DATA.drink = calc(DATA.drink, change.drink)
        DATA.food = calc(DATA.food, change.food)
        DATA.time = calc(DATA.time, change.time)
    }

}

const DATA = {
    gas: 100,
    food: 50,
    drink: 50,
    entertainment: 75,
    time: 100
}

function calc (a:number, b:number){
    var total = a + b;
    if(total < 0){
        return 0;
    }

    if(total > 100){
        return 100;
    }

    return total;
}