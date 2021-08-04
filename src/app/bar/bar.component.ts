import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
    selector: 'bars',
    templateUrl: 'bar.component.html'
})

export class BarsComponent implements OnInit {
    data:any

    constructor(private dataService: DataService){
        
    }

    ngOnInit(){
        this.data = this.dataService.getData()
    }
}