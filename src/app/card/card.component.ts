import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() frame?: any;
  @Input() cardCode?: string;

  constructor() {}

  ngOnInit(): void {}

  copyClicked() {
    console.log('Copied');
    alert(`Command Copied for ${this.cardCode} with ${this.frame.name}`);
  }
}
