import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data:any = {}
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  configure() {
    this.change.emit();
  }

}
